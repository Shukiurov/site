/* ── CURSOR — glowing dot instant, ring slight lag ── */
const c1=document.getElementById('cur'),c2=document.getElementById('cur2');
let rx=0,ry=0,tx=0,ty=0;
document.addEventListener('mousemove',e=>{
  tx=e.clientX;ty=e.clientY;
  c1.style.left=tx+'px';c1.style.top=ty+'px';
});
(function loop(){
  rx+=(tx-rx)*.2;ry+=(ty-ry)*.2;
  c2.style.left=rx+'px';c2.style.top=ry+'px';
  requestAnimationFrame(loop);
})();

/* TRANSLATIONS */
const T={
  en:{
    status:'Open to opportunities',avail:'Available',tagline:'Multi-skilled specialist',
    heroBtn1:'Explore →',heroBtn2:'Contact',
    b1:'About me',b1d:'Who I am, values and languages',
    b2:'Technical',b2d:'Cars, electrics, construction',
    b3:'Analytical',b3d:'Data, research & decisions',
    b4:'Digital / IT',b4d:'Web, tools & automation',
    b5:'Real-world Cases',b5d:'Concrete projects and real-life experiences',
    b6:'Contact',
    back:'Back',openArr:'Open →',contactLbl:'Contact',
    sc_bg:'My journey',sc_bg_d:'Background and how my experience formed',
    sc_val:'Values & approach',sc_val_d:'How I approach work and life',
    sc_lng:'Languages',sc_lng_d:'English, Dutch, Russian',
    sc_int:'Interests',sc_int_d:'What excites me outside work',
    sc_cars:'Car repair',sc_cars_d:'Diagnostics, replacement, servicing',
    sc_elec:'Electrical',sc_elec_d:'Installation, diagnostics, repair',
    sc_const:'Construction',sc_const_d:'Finishing, building, renovation',
    sc_oth:'Other skills',sc_oth_d:'Further technical competencies',
    sc_da:'Data analysis',sc_da_d:'Excel, spreadsheets, visualisation',
    sc_res:'Research',sc_res_d:'Market, competitor and solution research',
    sc_ps:'Problem solving',sc_ps_d:'Structured approach to challenges',
    sc_pln:'Planning',sc_pln_d:'Creating plans and prioritisation',
    sc_web:'Web & dev',sc_web_d:'HTML, CSS, JS, frontend basics',
    sc_tls:'Tools',sc_tls_d:'Figma, Notion, Office, AI tools',
    sc_aut:'Automation',sc_aut_d:'Scripts, Zapier, Make, bots',
    sc_sec:'Security',sc_sec_d:'Basic cybersecurity skills',
    sc_c1:'Case 1',sc_c1_d:'Add your case description',
    sc_c2:'Case 2',sc_c2_d:'Add your case description',
    sc_c3:'Case 3',sc_c3_d:'Add your case description',
    sc_c4:'Case 4',sc_c4_d:'Add your case description',
    tlbl:'Tools & Materials',plbl:'Photos',editBtn:'Edit',
    ic_about_title:'About me', ic_journey_title:'My journey',
    ic_strengths_title:'Strengths', ic_values_title:'Values',
    ic_interests_title:'Interests', ic_languages_title:'Languages',
    ic_journey_sub:'Background', ic_strengths_sub:'Strengths',
    ic_values_sub:'Values', ic_interests_sub:'Interests', ic_languages_sub:'Languages',
    ab_p1:'My name is Ali Shukiurov. I live in Goor, Netherlands.',
    ab_p2:'I have an analytical mindset and broad practical experience in technical, administrative and digital tasks. I quickly get to grips with new systems, find solutions in non-standard situations and independently master the necessary tools.',
    ab_p3:'I have worked on various types of tasks:',
    ab_li1:'administrative work and work with digital systems',
    ab_li2:'technical and repair work',
    ab_li3:'basic work with websites and IT tools',
    ab_li4:'information search and analysis',
    ab_li5:'solving organisational and practical problems',
    ab_p4:'I am currently developing in the office, analytical and IT field, while also open to practical work where responsibility, resourcefulness and problem-solving are valued.',
    jn_p1:'My journey is about continuous learning, self-development and finding solutions across many fields. Over the years I have gained practical experience in both technical tasks and work with digital tools and information.',
    jn_p2:'After moving to the Netherlands I continue to develop, study Dutch, learn local systems and gradually build a career in the office, analytical and IT field.',
    jn_p3:'I am used to independently tackling new tasks, adapting quickly and delivering results.',
    str1:'Analytical thinking', str2:'High independence', str3:'Ability to learn quickly',
    str4:'Attention to detail', str5:'Ability to find effective solutions', str6:'Technical process understanding',
    val1:'Responsibility and reliability', val2:'Continuous development and learning',
    val3:'Honesty and respect', val4:'Attention to detail',
    val5:'Practical approach to problem solving', val6:'Independence',
    val7:'Calm and rational in difficult situations',
    int1:'💻 Technology & IT', int2:'🌐 Web development', int3:'📊 Analytics',
    int4:'🗣️ Language learning', int5:'⚙️ Engineering tasks', int6:'🚗 Cars & repair', int7:'📈 Self-development',
    lng1:'Native', lng2:'Fluent', lng3:'A2, learning', lng4:'Basic working level',
    lname1:'Russian', lname2:'Ukrainian', lname3:'Dutch', lname4:'English',
  },
  nl:{
    status:'Open voor mogelijkheden',avail:'Beschikbaar',tagline:'Veelzijdig specialist',
    heroBtn1:'Bekijken →',heroBtn2:'Contact',
    b1:'Over mij',b1d:'Wie ik ben, waarden en talen',
    b2:'Technisch',b2d:"Auto's, elektra, bouw",
    b3:'Analytisch',b3d:'Data, onderzoek & beslissingen',
    b4:'Digitaal / IT',b4d:'Web, tools & automatisering',
    b5:'Praktijkervaring',b5d:'Concrete projecten en levensechte ervaringen',
    b6:'Contact',
    back:'Terug',openArr:'Openen →',contactLbl:'Contact',
    sc_bg:'Mijn reis',sc_bg_d:'Achtergrond en hoe mijn ervaring ontstond',
    sc_val:'Waarden & aanpak',sc_val_d:'Hoe ik werk en leven benadert',
    sc_lng:'Talen',sc_lng_d:'Engels, Nederlands, Russisch',
    sc_int:'Interesses',sc_int_d:'Wat mij buiten werk fascineert',
    sc_cars:'Autoreparatie',sc_cars_d:'Diagnose, onderdelen, onderhoud',
    sc_elec:'Elektra',sc_elec_d:'Installatie, diagnose, reparatie',
    sc_const:'Bouw',sc_const_d:'Afwerking, bouwen, renovatie',
    sc_oth:'Overige',sc_oth_d:'Andere technische competenties',
    sc_da:'Data-analyse',sc_da_d:'Excel, spreadsheets, visualisatie',
    sc_res:'Onderzoek',sc_res_d:'Markt- en concurrentieonderzoek',
    sc_ps:'Probleemoplossing',sc_ps_d:'Gestructureerde aanpak',
    sc_pln:'Planning',sc_pln_d:'Plannen maken en prioriteiten stellen',
    sc_web:'Web & dev',sc_web_d:'HTML, CSS, JS, frontend basics',
    sc_tls:'Tools',sc_tls_d:'Figma, Notion, Office, AI-tools',
    sc_aut:'Automatisering',sc_aut_d:'Scripts, Zapier, Make, bots',
    sc_sec:'Beveiliging',sc_sec_d:'Basis cybersecurity vaardigheden',
    sc_c1:'Case 1',sc_c1_d:'Voeg je case beschrijving toe',
    sc_c2:'Case 2',sc_c2_d:'Voeg je case beschrijving toe',
    sc_c3:'Case 3',sc_c3_d:'Voeg je case beschrijving toe',
    sc_c4:'Case 4',sc_c4_d:'Voeg je case beschrijving toe',
    tlbl:'Gereedschap & Materialen',plbl:"Foto's",editBtn:'Bewerken',
    ic_about_title:'Over mij', ic_journey_title:'Mijn reis',
    ic_strengths_title:'Sterke punten', ic_values_title:'Waarden',
    ic_interests_title:'Interesses', ic_languages_title:'Talen',
    ic_journey_sub:'Achtergrond', ic_strengths_sub:'Sterke punten',
    ic_values_sub:'Waarden', ic_interests_sub:'Interesses', ic_languages_sub:'Talen',
    ab_p1:'Mijn naam is Ali Shukiurov. Ik woon in Goor, Nederland.',
    ab_p2:'Ik heb een analytische instelling en brede praktische ervaring op het gebied van technische, administratieve en digitale taken. Ik leer snel nieuwe systemen kennen, vind oplossingen in niet-standaard situaties en beheers zelfstandig de benodigde tools.',
    ab_p3:'Ik heb gewerkt aan verschillende soorten taken:',
    ab_li1:'administratief werk en werken met digitale systemen',
    ab_li2:'technische werkzaamheden en reparaties',
    ab_li3:'basiswerk met websites en IT-tools',
    ab_li4:'zoeken en analyseren van informatie',
    ab_li5:'oplossen van organisatorische en praktische problemen',
    ab_p4:'Ik ontwikkel me momenteel in de richting van kantoor-, analytische en IT-sector, maar sta ook open voor praktisch werk waar verantwoordelijkheid, vindingrijkheid en probleemoplossend vermogen worden gewaardeerd.',
    jn_p1:'Mijn weg is verbonden met voortdurend leren, zelfstandige ontwikkeling en het vinden van oplossingen op de meest uiteenlopende gebieden. In de loop der jaren heb ik praktische ervaring opgedaan met technische taken en met digitale tools en informatie.',
    jn_p2:'Na mijn verhuizing naar Nederland blijf ik me ontwikkelen, studeer ik Nederlands, leer ik lokale systemen kennen en bouw ik stap voor stap een carrière op in de kantoor-, analytische en IT-sector.',
    jn_p3:'Ik ben gewend om zelfstandig nieuwe taken aan te pakken, snel te adapteren en werk tot een resultaat te brengen.',
    str1:'Analytisch denken', str2:'Hoge zelfstandigheid', str3:'Vermogen om snel te leren',
    str4:'Aandacht voor detail', str5:'Vermogen om effectieve oplossingen te vinden', str6:'Technisch procesinzicht',
    val1:'Verantwoordelijkheid en betrouwbaarheid', val2:'Continue ontwikkeling en leren',
    val3:'Eerlijkheid en respect', val4:'Aandacht voor detail',
    val5:'Praktische aanpak bij probleemoplossing', val6:'Zelfstandigheid',
    val7:'Rust en rationaliteit in moeilijke situaties',
    int1:'💻 Technologie & IT', int2:'🌐 Webontwikkeling', int3:'📊 Analyse',
    int4:'🗣️ Talen leren', int5:'⚙️ Technische taken', int6:"🚗 Auto's & reparatie", int7:'📈 Zelfontwikkeling',
    lng1:'Moedertaal', lng2:'Vloeiend', lng3:'A2, in leerproces', lng4:'Basiswerkniveau',
    lname1:'Russisch', lname2:'Oekraïens', lname3:'Nederlands', lname4:'Engels',
  },
  ru:{
    status:'Открыт к возможностям',avail:'Доступен',tagline:'Многопрофильный специалист',
    heroBtn1:'Изучить →',heroBtn2:'Контакт',
    b1:'Обо мне',b1d:'Кто я, ценности и языки',
    b2:'Технические',b2d:'Авто, электрика, стройка',
    b3:'Аналитика',b3d:'Данные, исследования и решения',
    b4:'Цифровые / IT',b4d:'Веб, инструменты и автоматизация',
    b5:'Реальный опыт',b5d:'Конкретные проекты и жизненный опыт',
    b6:'Контакты',
    back:'Назад',openArr:'Открыть →',contactLbl:'Связаться',
    sc_bg:'Мой путь',sc_bg_d:'Откуда я, как сложился мой опыт',
    sc_val:'Ценности',sc_val_d:'Как я подхожу к работе и жизни',
    sc_lng:'Языки',sc_lng_d:'Английский, нидерландский, русский',
    sc_int:'Интересы',sc_int_d:'Что меня увлекает вне работы',
    sc_cars:'Авторемонт',sc_cars_d:'Диагностика, замена, обслуживание',
    sc_elec:'Электрика',sc_elec_d:'Монтаж, диагностика, ремонт',
    sc_const:'Строительство',sc_const_d:'Отделка, стройка, ремонт',
    sc_oth:'Другие навыки',sc_oth_d:'Прочие технические компетенции',
    sc_da:'Анализ данных',sc_da_d:'Excel, таблицы, визуализация',
    sc_res:'Исследования',sc_res_d:'Изучение рынка, конкурентов, решений',
    sc_ps:'Решение проблем',sc_ps_d:'Структурированный подход к задачам',
    sc_pln:'Планирование',sc_pln_d:'Составление планов, приоритизация',
    sc_web:'Веб & разработка',sc_web_d:'HTML, CSS, JS, основы фронтенда',
    sc_tls:'Инструменты',sc_tls_d:'Figma, Notion, Office, AI-инструменты',
    sc_aut:'Автоматизация',sc_aut_d:'Скрипты, Zapier, Make, боты',
    sc_sec:'Безопасность',sc_sec_d:'Базовые навыки кибербезопасности',
    sc_c1:'Кейс 1',sc_c1_d:'Добавь описание своего кейса',
    sc_c2:'Кейс 2',sc_c2_d:'Добавь описание своего кейса',
    sc_c3:'Кейс 3',sc_c3_d:'Добавь описание своего кейса',
    sc_c4:'Кейс 4',sc_c4_d:'Добавь описание своего кейса',
    tlbl:'Инструменты / Материалы',plbl:'Фотографии',editBtn:'Редактировать',
    ic_about_title:'Обо мне', ic_journey_title:'Мой путь',
    ic_strengths_title:'Сильные стороны', ic_values_title:'Ценности',
    ic_interests_title:'Интересы', ic_languages_title:'Языки',
    ic_journey_sub:'Background', ic_strengths_sub:'Strengths',
    ic_values_sub:'Values', ic_interests_sub:'Interests', ic_languages_sub:'Languages',
    ab_p1:'Меня зовут Али Шукюров. Я живу в Goor, Нидерланды.',
    ab_p2:'У меня аналитический склад ума и широкий практический опыт в технических, административных и цифровых задачах. Я умею быстро разбираться в новых системах, находить решения в нестандартных ситуациях и самостоятельно осваивать необходимые инструменты.',
    ab_p3:'Работал с различными видами задач:',
    ab_li1:'административная работа и работа с цифровыми системами',
    ab_li2:'технические и ремонтные работы',
    ab_li3:'базовая работа с сайтами и IT-инструментами',
    ab_li4:'поиск и анализ информации',
    ab_li5:'решение организационных и практических вопросов',
    ab_p4:'Сейчас я развиваюсь в направлении офисной, аналитической и IT-сферы, при этом открыт и к практической работе, где ценятся ответственность, сообразительность и умение решать задачи.',
    jn_p1:'Мой путь связан с постоянным обучением, самостоятельным развитием и поиском решений в самых разных сферах. За годы я приобрёл практический опыт как в технических задачах, так и в работе с цифровыми инструментами и информацией.',
    jn_p2:'После переезда в Netherlands я продолжаю развиваться, изучаю нидерландский язык, осваиваю местные системы и постепенно строю карьеру в направлении офисной, аналитической и IT-сферы.',
    jn_p3:'Я привык самостоятельно разбираться в новых задачах, быстро адаптироваться и доводить работу до результата.',
    str1:'Аналитическое мышление', str2:'Высокая самостоятельность', str3:'Способность быстро обучаться',
    str4:'Внимательность к деталям', str5:'Умение находить эффективные решения', str6:'Техническое понимание процессов',
    val1:'Ответственность и надёжность', val2:'Постоянное развитие и обучение',
    val3:'Честность и уважение', val4:'Внимание к деталям',
    val5:'Практический подход к решению задач', val6:'Самостоятельность',
    val7:'Спокойствие и рациональность в сложных ситуациях',
    int1:'💻 Технологии и IT', int2:'🌐 Создание сайтов', int3:'📊 Аналитика',
    int4:'🗣️ Изучение языков', int5:'⚙️ Инженерные задачи', int6:'🚗 Автомобили и ремонт', int7:'📈 Саморазвитие',
    lng1:'Родной', lng2:'Свободно', lng3:'A2, в процессе', lng4:'Базовый рабочий',
    lname1:'Русский', lname2:'Украинский', lname3:'Нидерландский', lname4:'Английский',
  }
};

const DT={
  background:{eye:'01',title:'🌱 My Journey',text:'Tell your story here — where you are from, how your experience developed.\n\nClick Edit to modify.',tools:[],photos:[]},
  values:    {eye:'01',title:'🎯 Values & Approach',text:'Describe your values and approach to work.\n\nClick Edit.',tools:[],photos:[]},
  languages: {eye:'01',title:'🗣️ Languages',text:'🇬🇧 English — advanced\n🇳🇱 Dutch — intermediate\n🇷🇺 Russian — native',tools:[],photos:[]},
  interests: {eye:'01',title:'💡 Interests',text:'Describe what interests you. Click Edit.',tools:[],photos:[]},
  electric:  {eye:'02',title:'⚡ Electrical',text:'Describe your electrical work.',tools:['Multimeter','Drill','Cable','Tape','RCD'],photos:[]},
  construction:{eye:'02',title:'🏗️ Construction',text:'Describe your construction work.',tools:['Perforator','Plaster','Level','Rule','Grinder'],photos:[]},
  other_tech:{eye:'02',title:'🛠️ Other Skills',text:'Describe other technical skills.',tools:[],photos:[]},
  data_analysis:{eye:'03',title:'📈 Data Analysis',text:'Describe how you work with data.',tools:['Excel','Google Sheets','SQL','Power BI'],photos:[]},
  research:  {eye:'03',title:'🔍 Research',text:'Describe your research experience.',tools:[],photos:[]},
  problem_solving:{eye:'03',title:'🧩 Problem Solving',text:'How do you approach complex challenges?',tools:[],photos:[]},
  planning:  {eye:'03',title:'📋 Planning',text:'Describe your planning skills.',tools:['Notion','Trello','Google Calendar'],photos:[]},
  web:       {eye:'04',title:'🌐 Web & Dev',text:'Describe your web experience.',tools:['HTML','CSS','JavaScript','Git'],photos:[]},
  tools:     {eye:'04',title:'🛠️ Tools',text:'Which digital tools do you master?',tools:['Figma','Notion','MS Office','ChatGPT','Canva'],photos:[]},
  automation:{eye:'04',title:'🤖 Automation',text:'Describe automation experience.',tools:['Zapier','Make','Python','Apps Script'],photos:[]},
  security:  {eye:'04',title:'🔐 Security',text:'Describe cybersecurity knowledge.',tools:[],photos:[]},
  case1:{eye:'05',title:'🔧 Case 1',text:'Describe your first case. Click Edit.',tools:[],photos:[]},
  case2:{eye:'05',title:'🚀 Case 2',text:'Describe your second case.',tools:[],photos:[]},
  case3:{eye:'05',title:'💼 Case 3',text:'Describe your third case.',tools:[],photos:[]},
  case4:{eye:'05',title:'🌟 Case 4',text:'Describe your fourth case.',tools:[],photos:[]},
};

const CARS=[
  {key:'timing_belt',ico:'⚙️',en:'Timing Belt',nl:'Distributieriem',ru:'Ремень ГРМ',desc:'Full timing kit replacement',tools:['Puller','Wrenches','Gates belt','Tensioner','Water pump'],text:'Describe timing belt replacement. Click Edit.',photos:[]},
  {key:'brakes',ico:'🛑',en:'Brake System',nl:'Remsysteem',ru:'Тормозная система',desc:'Pads, discs, callipers',tools:['Calliper tool','Brake fluid','Pads','Discs'],text:'Describe your brake work.',photos:[]},
  {key:'suspension',ico:'🔩',en:'Suspension',nl:'Ophanging',ru:'Подвеска',desc:'Struts, arms, bearings',tools:['Strut tool','Press','Hammer','Wrenches'],text:'Describe your suspension work.',photos:[]},
  {key:'oil',ico:'🛢️',en:'Oil & Filter Service',nl:'Olie Wissel',ru:'Замена масла',desc:'Engine oil & filters',tools:['Filter wrench','Oil','Filters'],text:'Describe engine servicing.',photos:[]},
  {key:'diag',ico:'📡',en:'Computer Diagnostics',nl:'Computerdiagnose',ru:'Диагностика',desc:'Error codes & sensors',tools:['OBD2 scanner','ELM327','Launch X431'],text:'Describe diagnostic experience.',photos:[]},
  {key:'car_elec',ico:'⚡',en:'Car Electrics',nl:'Auto Elektra',ru:'Электрика авто',desc:'Wiring, battery, alternator',tools:['Multimeter','Soldering iron','Battery'],text:'Describe car electrical work.',photos:[]},
];

let lang='en',editMode=false,detParent='home';

function setLang(l){
  lang=l;
  document.querySelectorAll('.lb').forEach(b=>b.classList.remove('on'));
  document.querySelector(`.lb[onclick="setLang('${l}')"]`).classList.add('on');
  const t=T[l];
  document.querySelectorAll('[data-t]').forEach(el=>{const k=el.dataset.t;if(t[k]!==undefined)el.textContent=t[k];});
  if(document.getElementById('carsGrid').children.length)buildCarsGrid();
}

function go(name){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  const el=document.getElementById('view-'+name);if(!el)return;
  el.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  closeDrawer();
  requestAnimationFrame(()=>el.querySelectorAll('.fu:not(.in)').forEach(e=>e.classList.add('in')));
  if(name==='cars')buildCarsGrid();
}
function goHome(){go('home')}
function scrollCont(){
  goHome();
  setTimeout(()=>document.getElementById('contCell')?.scrollIntoView({behavior:'smooth',block:'center'}),150);
}

function buildCarsGrid(){
  const g=document.getElementById('carsGrid');g.innerHTML='';
  const t=T[lang];
  CARS.forEach((car,i)=>{
    const title=car[lang]||car.en;
    const d=document.createElement('div');
    d.className='subcard fu';d.style.transitionDelay=(i*.06)+'s';
    d.innerHTML=`<span class="si">${car.ico}</span><h4>${title}</h4><p>${car.desc}</p><span class="so">${t.openArr}</span>`;
    d.onclick=()=>{
      if(!DT[car.key])DT[car.key]={eye:'02 › '+title,title:car.ico+' '+title,text:car.text,tools:car.tools,photos:car.photos};
      DT[car.key].eye='02 › '+title;DT[car.key].title=car.ico+' '+title;
      det(car.key,'cars');
    };
    g.appendChild(d);
  });
  obsAll();
}

function det(key,parent){
  detParent=parent||'home';
  const d=DT[key];if(!d)return;
  document.getElementById('detEye').textContent=d.eye;
  document.getElementById('detTitle').textContent=d.title;
  const tx=document.getElementById('detTxt');tx.textContent=d.text;tx.contentEditable=editMode;
  document.getElementById('detBack').onclick=()=>go(detParent);
  const tb=document.getElementById('detToolsBox'),tc=document.getElementById('detChips');
  if(d.tools&&d.tools.length){tb.style.display='block';tc.innerHTML=d.tools.map(t=>`<span class="chip">${t}</span>`).join('');}
  else tb.style.display='none';
  renderPhotos(key);go('detail');
}

function renderPhotos(key){
  const d=DT[key];const g=document.getElementById('detPhotos');g.innerHTML='';
  d.photos.forEach((src,i)=>{
    const s=document.createElement('div');s.className='ps has';
    const img=document.createElement('img');img.src=src;
    const ph=document.createElement('div');ph.className='ps-ph';
    s.appendChild(img);s.appendChild(ph);
    s.onclick=()=>{d.photos.splice(i,1);renderPhotos(key);};
    g.appendChild(s);
  });
  if(d.photos.length<8){
    const a=document.createElement('div');a.className='ps';
    a.innerHTML='<div class="ps-ph"><span style="font-size:1.4rem">📸</span><span>Add photo</span></div>';
    const inp=document.createElement('input');inp.type='file';inp.accept='image/*';inp.multiple=true;inp.style.display='none';
    inp.onchange=function(){Array.from(this.files).forEach(f=>{const r=new FileReader();r.onload=ev=>{d.photos.push(ev.target.result);renderPhotos(key);};r.readAsDataURL(f);});};
    a.appendChild(inp);a.onclick=()=>inp.click();g.appendChild(a);
  }
}

function toggleDrawer(){document.getElementById('drawer').classList.toggle('open')}
function closeDrawer(){document.getElementById('drawer').classList.remove('open')}

function toggleEdit(){
  editMode=!editMode;
  const fab=document.getElementById('editFab');
  fab.classList.toggle('on',editMode);
  document.getElementById('efIco').textContent=editMode?'✓':'✏';
  fab.querySelector('[data-t="editBtn"]').textContent=editMode?(lang==='ru'?'Готово':lang==='nl'?'Klaar':'Done'):T[lang].editBtn;
  const tx=document.getElementById('detTxt');if(tx)tx.contentEditable=editMode;
}

function obsAll(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});
  },{threshold:.07});
  document.querySelectorAll('.fu:not(.in)').forEach(el=>obs.observe(el));
}
obsAll();
setLang('en');
go('home');
