/* App logic: navigation, lang switching, animations */

let lang = 'en', editMode = false, detParent = 'home', currentDetKey = null;

// Вспомогательная функция: достает текст на текущем языке (lang), либо возвращает строку как есть
function getL(val) {
  if (!val) return '';
  if (typeof val === 'object' && !Array.isArray(val)) {
    return val[lang] || val.en || '';
  }
  return val;
}

function setLang(l) {
  lang = l;
  document.querySelectorAll('.lb').forEach(b => b.classList.remove('on'));
  const activeBtn = document.querySelector(`.lb[onclick="setLang('${l}')"]`);
  if (activeBtn) activeBtn.classList.add('on');

  const t = T[l];
  if (t) {
    document.querySelectorAll('[data-t]').forEach(el => {
      const k = el.dataset.t;
      if (t[k] !== undefined) el.textContent = t[k];
    });
  }

  if (document.getElementById('carsGrid')?.children.length) buildCarsGrid();

  // Если открыто детальное окно — мгновенно перерисовываем его на новом языке
  if (currentDetKey && document.getElementById('view-detail')?.classList.contains('active')) {
    det(currentDetKey, detParent);
  }

  // Notify chat widget of language change
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: l }));
}

function go(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById('view-' + name); if (!el) return;
  el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeDrawer();
  requestAnimationFrame(() => el.querySelectorAll('.fu:not(.in)').forEach(e => e.classList.add('in')));
  if (name === 'cars') buildCarsGrid();
}

function goHome() { 
  currentDetKey = null; 
  go('home'); 
}

function scrollCont() {
  goHome();
  setTimeout(() => document.getElementById('contCell')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
}

function buildCarsGrid() {
  const g = document.getElementById('carsGrid'); if (!g) return;
  g.innerHTML = '';
  const t = T[lang];
  CARS.forEach((car, i) => {
    const title = car[lang] || car.en;
    const d = document.createElement('div');
    d.className = 'subcard fu'; d.style.transitionDelay = (i * .06) + 's';
    d.innerHTML = `<span class="si">${car.ico}</span><h4>${title}</h4><p>${car.desc}</p><span class="so">${t.openArr}</span>`;
    d.onclick = () => {
      if (!DT[car.key]) DT[car.key] = { eye: '02 › ' + title, title: car.ico + ' ' + title, text: car.text, tools: car.tools, photos: car.photos };
      DT[car.key].eye = '02 › ' + title; 
      DT[car.key].title = car.ico + ' ' + title;
      det(car.key, 'cars');
    };
    g.appendChild(d);
  });
  obsAll();
}

function det(key, parent) {
  if (parent) detParent = parent;
  currentDetKey = key; // Запоминаем текущую открытую карточку
  
  const d = DT[key]; if (!d) return;

  document.getElementById('detEye').textContent = getL(d.eye);
  document.getElementById('detTitle').textContent = getL(d.title);

  // Берём текст с учетом текущего языка
  const tx = document.getElementById('detTxt');
  tx.textContent = getL(d.text);
  tx.contentEditable = editMode;

  document.getElementById('detBack').onclick = () => {
    currentDetKey = null;
    go(detParent);
  };

  const tb = document.getElementById('detToolsBox'), tc = document.getElementById('detChips');
  if (d.tools && d.tools.length) {
    tb.style.display = 'block';
    tc.innerHTML = d.tools.map(t => `<span class="chip">${t}</span>`).join('');
  } else {
    tb.style.display = 'none';
  }

  renderPhotos(key);
  go('detail');
}

function renderPhotos(key) {
  const d = DT[key]; if (!d) return;
  const g = document.getElementById('detPhotos'); g.innerHTML = '';

  d.photos.forEach((src) => {
    const s = document.createElement('div'); s.className = 'ps has';
    const img = document.createElement('img'); img.src = src;
    const ph = document.createElement('div'); ph.className = 'ps-ph';
    s.appendChild(img); s.appendChild(ph);
    g.appendChild(s);
  });

  if (d.photos.length === 0) {
    for (let i = 0; i < 3; i++) {
      const s = document.createElement('div'); s.className = 'ps';
      s.innerHTML = `
        <div class="ps-placeholder">
          <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:56px;opacity:.35">
            <rect x="1" y="1" width="78" height="58" rx="6" stroke="rgba(200,130,10,.4)" stroke-width="1.5"/>
            <circle cx="26" cy="22" r="8" fill="rgba(200,130,10,.18)"/>
            <path d="M8 52 Q8 36 26 36 Q40 30 52 36 Q62 40 72 52" fill="rgba(200,130,10,.12)"/>
            <path d="M48 28 L58 18 L72 32" stroke="rgba(200,130,10,.3)" stroke-width="1.5" stroke-linejoin="round"/>
            <circle cx="58" cy="16" r="5" fill="rgba(200,130,10,.2)"/>
          </svg>
          <span class="ps-ph-lbl">photo_${i + 1}.jpg</span>
          <span class="ps-ph-hint">replace src in code</span>
        </div>`;
      g.appendChild(s);
    }
  }
}

function toggleDrawer() { document.getElementById('drawer').classList.toggle('open'); }
function closeDrawer() { document.getElementById('drawer').classList.remove('open'); }

function toggleEdit() {
  editMode = !editMode;
  const fab = document.getElementById('editFab');
  fab.classList.toggle('on', editMode);
  document.getElementById('efIco').textContent = editMode ? '✓' : '✏';
  fab.querySelector('[data-t="editBtn"]').textContent = editMode ? (lang === 'ru' ? 'Готово' : lang === 'nl' ? 'Klaar' : 'Done') : T[lang].editBtn;
  const tx = document.getElementById('detTxt'); if (tx) tx.contentEditable = editMode;
}

function obsAll() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: .07 });
  document.querySelectorAll('.fu:not(.in)').forEach(el => obs.observe(el));
}

obsAll();
setLang('en');
go('home');