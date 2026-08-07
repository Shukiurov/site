/* ══════════════════════════════════════════
   CONTENT DATA — js/data.js
   
   Edit texts and tool tags for each section here.
   
   TO ADD PHOTOS:
     photos: ['images/photo1.jpg', 'images/photo2.jpg']
   
   Put your images in the /images/ folder.
══════════════════════════════════════════ */

const DT={
  background:{eye:'01',title:'🌱 My Journey',text:'Tell your story here — where you are from, how your experience developed.\n\nClick Edit to modify.',tools:[],photos:[]},
  values:    {eye:'01',title:'🎯 Values & Approach',text:'Describe your values and approach to work.\n\nClick Edit.',tools:[],photos:[]},
  languages: {eye:'01',title:'🗣️ Languages',text:'EN English — advanced\n🇳🇱 Dutch — intermediate\n🇷🇺 Russian — native',tools:[],photos:[]},
  interests: {eye:'01',title:'💡 Interests',text:'Describe what interests you. Click Edit.',tools:[],photos:[]},
  electric:  {eye:'02',title:'⚡ Electrical',text:'Describe your electrical work.',tools:['Multimeter','Drill','Cable','Tape','RCD'],photos:[]},
  construction:{eye:'02',title:'🏗️ Construction',text:'Describe your construction work.',tools:['Perforator','Plaster','Level','Rule','Grinder'],photos:[]},
  other_tech:{eye:'02',title:'🛠️ Other Skills',text:'Describe other technical skills.',tools:[],photos:[]},
  data_analysis:{eye:'03',title:'📈 Data Analysis',text:'Describe how you work with data.',tools:['Excel','Google Sheets','SQL','Power BI'],photos:[]},
  problem_solving:{eye:'03',title:'🧩 Problem Solving',text:'How do you approach complex challenges?',tools:[],photos:[]},
  web: {
    eye:'04', title:'🌐 Web & Dev',
    text: {
           en: 'Portfolio website — this very site you are looking at.\n\nBuilt entirely from scratch: custom bento-grid dashboard layout, multilingual system (EN/NL/RU), animated cards with SVG scenes, custom cursor, photo slider and full multi-page navigation — all in pure HTML, CSS and JavaScript.\n\nDeveloped in collaboration with Claude AI (Anthropic) — using Claude as a coding assistant to design, build and iterate the entire project through natural conversation.\n\nStack: HTML5 · CSS3 · Vanilla JS · Claude AI',
          ru: 'Сайт-портфолио — именно тот сайт, на котором вы сейчас находитесь.\n\nСоздан полностью с нуля: кастомная сетка bento-grid, мультиязычная система (EN/NL/RU), интерактивные карточки, кастомный курсор, слайдер фото и полноценная навигация — всё на чистом HTML, CSS и JavaScript.\n\nРазработан в сотрудничестве с Claude AI (Anthropic) — Claude использовался как ассистент по написанию кода, проектированию и доработке проекта.\n\nСтек: HTML5 · CSS3 · Vanilla JS · Claude AI',
          nl: 'Portfolio website — precies de site waar u nu naar kijkt.\n\nVolledig vanaf nul opgebouwd: aangepaste bento-grid lay-out, meertalig systeem (EN/NL/RU), geanimeerde kaarten, aangepaste cursor, fotoslider en volledige navigatie — alles in schone HTML, CSS en JavaScript.\n\nOntwikkeld in samenwerking met Claude AI (Anthropic) als codeer-assistent om het hele project te ontwerpen, bouwen en verfijnen.\n\nStack: HTML5 · CSS3 · Vanilla JS · Claude AI'
          },  
    tools:['HTML5','CSS3','JavaScript','Git','Claude AI'],
    photos:[]
  },
  automation: {
    eye:'04', title:'🤖 Automation & AI',
    text: {
           en: 'AI-powered Telegram bot ecosystem:\n\n📸 Photo & Video Generation\nGenerating images and video using ComfyUI workflows on Serverless GPU Cloud and VPS / Dedicated GPU instances. Using Stable Diffusion, Flux, AnimateDiff and other models for high-quality media.\n\n🗣️ Language Learning Bot\nTelegram bot for learning Dutch — powered by Gemini AI for daily lessons, vocabulary and conversation practice.\n\n📰 AI News Bot\nAutomated news aggregator connected to Gemini and other AI APIs — summarises and delivers relevant news to Telegram in real time.',
          ru: 'Экосистема Telegram-ботов на базе ИИ:\n\n📸 Генерация фото и видео\nСоздание изображений и видео с помощью ComfyUI на облачных Serverless GPU и выделенных VPS/GPU серверах. Использование Stable Diffusion, Flux, AnimateDiff и других моделей для создания качественного медиаконтента.\n\n🗣️ Бот для изучения языка\nTelegram-бот для изучения нидерландского языка на базе Gemini AI — ежедневные уроки, словарный запас и практика общения.\n\n📰 Новостной ИИ-бот\nАвтоматический агрегатор новостей, подключенный к Gemini и другим ИИ API — анализирует, делает краткую выжимку и доставляет актуальные новости в Telegram в реальном времени.',
          nl: 'Ecosysteem van Telegram-bots aangedreven door AI:\n\n📸 Foto- & Videogeneratie\nGenereren van afbeeldingen en video\'s met behulp van ComfyUI-workflows op Serverless GPU Cloud en VPS / dedicated GPU-instances. Gebruik van Stable Diffusion, Flux, AnimateDiff en andere modellen voor hoogwaardige media.\n\n🗣️ Taal-leerbot\nTelegram-bot voor het leren van Nederlands — aangedreven door Gemini AI voor dagelijkse lessen, woordenschat en gespreksoefeningen.\n\n📰 AI Nieuwsbot\nGeautomatiseerde nieuws-aggregator verbonden met Gemini en andere AI-API\'s — vat relevant nieuws samen en levert dit in realtime af op Telegram.'
          },  
    tools:['ComfyUI','Serverless GPU','VPS / Dedicated GPU','Gemini AI','Telegram Bot API','Python','Stable Diffusion','Flux'],
    photos:[]
  },
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