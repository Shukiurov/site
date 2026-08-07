(function () {
  'use strict';

  const API_URL = 'https://ali-ai-88890969058.europe-west4.run.app/chat';
  let isOpen = false;
  let isProcessing = false;
  let conversationHistory = [];
  let currentLang = 'en';
  let chatBtn, chatContainer, chatMessages, chatInput, chatSendBtn, chatCloseBtn, photoCard;
  const isMobileViewport = () => window.matchMedia('(max-width: 768px)').matches || navigator.maxTouchPoints > 0;

  const chatTranslations = {
    en: {
      btnText: 'Ask about my skills', headerTitle: 'Ask Ali’s AI', status: 'Online',
      welcomeTitle: 'Ask about Ali’s skills', welcomeText: 'I can answer questions about experience, skills and projects.',
      placeholder: 'Type your question…', error: 'Sorry, the assistant is temporarily unavailable. Please try again.',
      suggestions: ['What technical skills do you have?', 'Do you know web development?', 'What languages do you speak?']
    },
    nl: {
      btnText: 'Vraag over mijn vaardigheden', headerTitle: 'Vraag Ali’s AI', status: 'Online',
      welcomeTitle: 'Vraag over Ali’s vaardigheden', welcomeText: 'Ik kan vragen beantwoorden over ervaring, vaardigheden en projecten.',
      placeholder: 'Typ je vraag…', error: 'De assistent is tijdelijk niet beschikbaar. Probeer het opnieuw.',
      suggestions: ['Welke technische vaardigheden heb je?', 'Ken je webontwikkeling?', 'Welke talen spreek je?']
    },
    ru: {
      btnText: 'Спросить о моих навыках', headerTitle: 'Спросите AI Али', status: 'Онлайн',
      welcomeTitle: 'Спросите о навыках Али', welcomeText: 'Я отвечу на вопросы об опыте, навыках и проектах.',
      placeholder: 'Введите ваш вопрос…', error: 'Ассистент временно недоступен. Попробуйте ещё раз.',
      suggestions: ['Какие технические навыки у Али?', 'Знает ли Али веб-разработку?', 'На каких языках говорит Али?']
    }
  };

  function translation() {
    return chatTranslations[currentLang] || chatTranslations.en;
  }

  function init() {
    if (typeof lang !== 'undefined') currentLang = lang;
    photoCard = document.querySelector('.c-photo');
    if (!photoCard) return;
    createChatWidget();
    setupEventListeners();
    updateChatLanguage();
    window.visualViewport?.addEventListener('resize', syncMobileChatViewport);
    window.visualViewport?.addEventListener('scroll', syncMobileChatViewport);
  }

  function createChatWidget() {
    photoCard.insertAdjacentHTML('beforeend', `
      <button class="chat-btn" id="chatBtn" type="button" aria-expanded="false" aria-controls="chatContainer">
        <span class="chat-btn-label">AI Helper</span>
        <span class="chat-btn-icon" aria-hidden="true">✦</span>
        <span class="chat-btn-text"></span>
      </button>
      <section class="chat-container" id="chatContainer" aria-label="AI assistant">
        <header class="chat-header">
          <div class="chat-header-left">
            <div class="chat-header-avatar" aria-hidden="true">✦</div>
            <div class="chat-header-info"><div class="chat-header-title"></div><div class="chat-header-status"></div></div>
          </div>
          <button class="chat-close-btn" id="chatCloseBtn" type="button" aria-label="Close chat">×</button>
        </header>
        <div class="chat-messages" id="chatMessages"></div>
        <div class="chat-input-area"><div class="chat-input-wrapper">
          <textarea class="chat-input" id="chatInput" rows="1"></textarea>
          <div class="chat-send-btn" id="chatSendBtn" role="button" tabindex="-1" aria-label="Send message">➜</div>
        </div></div>
      </section>`);
    chatBtn = document.getElementById('chatBtn');
    chatContainer = document.getElementById('chatContainer');
    chatMessages = document.getElementById('chatMessages');
    chatInput = document.getElementById('chatInput');
    chatSendBtn = document.getElementById('chatSendBtn');
    chatCloseBtn = document.getElementById('chatCloseBtn');
  }

  function setupEventListeners() {
    chatBtn.addEventListener('click', toggleChat);
    chatBtn.addEventListener('pointerenter', () => { if (!isMobileViewport()) openChat(); });
    chatCloseBtn.addEventListener('click', closeChat);
    chatSendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); sendMessage(); }
    });
    chatInput.addEventListener('input', autoResizeTextarea);
    chatMessages.addEventListener('click', (event) => {
      const suggestion = event.target.closest('.chat-suggestion');
      if (!suggestion) return;
      chatInput.value = suggestion.textContent;
      sendMessage();
    });
  }

  function toggleChat() { isOpen ? closeChat() : openChat(); }
  function openChat() {
    if (isMobileViewport()) {
      if (chatContainer.parentElement !== document.body) document.body.append(chatContainer);
      document.body.classList.add('mobile-chat-open');
    }
    isOpen = true;
    chatContainer.classList.add('open');
    photoCard.classList.add('photo-chat-open');
    chatBtn.setAttribute('aria-expanded', 'true');
    window.setTimeout(syncMobileChatViewport, 0);
    window.setTimeout(syncMobileChatViewport, 300);
    setTimeout(() => chatInput.focus(), 250);
  }
  function closeChat() {
    isOpen = false;
    chatContainer.classList.remove('open');
    photoCard.classList.remove('photo-chat-open');
    chatBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('mobile-chat-open');
    chatContainer.style.removeProperty('--chat-viewport-height');
    if (chatContainer.parentElement !== photoCard) photoCard.append(chatContainer);
  }

  async function sendMessage() {
    const text = chatInput.value.trim();
    if (!text || isProcessing) return;
    addMessage(text, 'user');
    conversationHistory.push({ role: 'user', content: text });
    chatInput.value = '';
    autoResizeTextarea();
    isProcessing = true;
    chatSendBtn.classList.add('is-disabled');
    chatSendBtn.setAttribute('aria-disabled', 'true');
    showTypingIndicator();
    try {
      const answer = await callAI_API(text);
      addMessage(answer, 'bot');
      conversationHistory.push({ role: 'assistant', content: answer });
    } catch (error) {
      console.error('AI API error:', error);
      addMessage(translation().error, 'bot');
    } finally {
      removeTypingIndicator();
      isProcessing = false;
      chatSendBtn.classList.remove('is-disabled');
      chatSendBtn.setAttribute('aria-disabled', 'false');
      chatInput.focus();
    }
  }

  async function callAI_API(message) {
    const response = await fetch(API_URL, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history: conversationHistory.slice(-10) })
    });
    if (!response.ok) throw new Error(`API response: ${response.status}`);
    const data = await response.json();
    const answer = data.answer || data.response || data.reply || data.message || data.text || data?.data?.answer;
    if (typeof answer !== 'string') throw new Error('Unexpected AI response format');
    return answer;
  }

  function renderWelcome() {
    const t = translation();
    chatMessages.replaceChildren();
    const welcome = document.createElement('div');
    welcome.className = 'chat-welcome';
    const title = document.createElement('h3'); title.textContent = t.welcomeTitle;
    const description = document.createElement('p'); description.textContent = t.welcomeText;
    const suggestions = document.createElement('div'); suggestions.className = 'chat-suggestions';
    t.suggestions.forEach((text) => { const button = document.createElement('button'); button.className = 'chat-suggestion'; button.type = 'button'; button.textContent = text; suggestions.append(button); });
    welcome.append(title, description, suggestions);
    chatMessages.append(welcome);
  }

  function addMessage(text, role) {
    chatMessages.querySelector('.chat-welcome')?.remove();
    const message = document.createElement('div'); message.className = `chat-msg ${role}`;
    const content = document.createElement('span'); content.className = 'msg-content'; content.textContent = text;
    const time = document.createElement('span'); time.className = 'msg-time'; time.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    message.append(content, time); chatMessages.append(message); scrollToBottom();
  }
  function showTypingIndicator() { const indicator = document.createElement('div'); indicator.className = 'typing-indicator'; indicator.id = 'typingIndicator'; indicator.innerHTML = '<i></i><i></i><i></i>'; chatMessages.append(indicator); scrollToBottom(); }
  function removeTypingIndicator() { document.getElementById('typingIndicator')?.remove(); }
  function scrollToBottom() { requestAnimationFrame(() => { chatMessages.scrollTop = chatMessages.scrollHeight; }); }
  function autoResizeTextarea() { chatInput.style.height = 'auto'; chatInput.style.height = `${Math.min(chatInput.scrollHeight, 92)}px`; }
  function syncMobileChatViewport() {
    if (!isOpen || !isMobileViewport() || chatContainer.parentElement !== document.body) return;
    const viewport = window.visualViewport;
    if (!viewport) return;
    // visualViewport.height ends precisely at the top of the Android/iOS keyboard.
    chatContainer.style.setProperty('--chat-viewport-height', `${Math.round(viewport.height)}px`);
  }

  function updateChatLanguage() {
    const t = translation();
    chatBtn.querySelector('.chat-btn-text').textContent = t.btnText;
    chatContainer.querySelector('.chat-header-title').textContent = t.headerTitle;
    chatContainer.querySelector('.chat-header-status').textContent = t.status;
    chatInput.placeholder = t.placeholder;
    if (!conversationHistory.length) renderWelcome();
  }

  document.addEventListener('languageChanged', (event) => {
    currentLang = event.detail || currentLang;
    if (chatBtn && chatContainer) updateChatLanguage();
  });
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
