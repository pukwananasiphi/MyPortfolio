// chatbot.js
document.addEventListener('DOMContentLoaded', function() {
  // Chatbot toggle functionality
  const chatIcon = document.getElementById('chatIcon');
  const chatbotContainer = document.getElementById('chatbotContainer');
  const closeChatbot = document.querySelector('.close-chatbot');
  
  if (chatIcon && chatbotContainer) {
    chatIcon.addEventListener('click', () => {
      chatbotContainer.classList.add('active');
    });
    
    closeChatbot.addEventListener('click', () => {
      chatbotContainer.classList.remove('active');
    });
  }


  document.addEventListener('DOMContentLoaded', function() {
  const chatIcon = document.getElementById('chatIcon');
  const chatbotContainer = document.getElementById('chatbotContainer');
  const closeChatbot = document.querySelector('.close-chatbot');
  const body = document.body;

  chatIcon.addEventListener('click', () => {
    chatbotContainer.classList.add('active');
    body.classList.add('chat-open');
  });

  closeChatbot.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
    body.classList.remove('chat-open');
  });

  // Rest of your existing chatbot functionality...
});
  // Message handling
  const chatbotMessages = document.getElementById('chatbotMessages');
  const chatbotInput = document.getElementById('chatbotInput');
  const sendMessageBtn = document.getElementById('sendMessage');

  function sendMessage() {
    const message = chatbotInput?.value.trim();
    if (message && chatbotMessages) {
      // Add user message
      const userMessage = document.createElement('div');
      userMessage.classList.add('chatbot-message', 'user-message');
      userMessage.textContent = message;
      chatbotMessages.appendChild(userMessage);
      
      // Clear input
      chatbotInput.value = '';
      
      // Scroll to bottom
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      
      // Bot response
      setTimeout(() => {
        const botResponse = getBotResponse(message);
        const botMessage = document.createElement('div');
        botMessage.classList.add('chatbot-message', 'bot-message');
        botMessage.textContent = botResponse;
        chatbotMessages.appendChild(botMessage);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }, 500);
    }
  }

  if (sendMessageBtn && chatbotInput) {
    sendMessageBtn.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  }

  function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('hi') || lowerMsg.includes('hello')) {
      return "Hello! How can I help you learn more about Nasiphi?";
    } else if (lowerMsg.includes('skill') || lowerMsg.includes('experience')) {
      return "Nasiphi has skills in AI engineering, machine learning, and business management. She completed a Certificate in Business Management from College of Cape Town (2019-2021).";
    } else if (lowerMsg.includes('project') || lowerMsg.includes('work')) {
      return "Nasiphi has worked on various AI projects. Check the Projects section for details!";
    } else if (lowerMsg.includes('contact') || lowerMsg.includes('reach')) {
      return "You can contact Nasiphi through the Contact section of her portfolio.";
    } else if (lowerMsg.includes('education') || lowerMsg.includes('study')) {
      return "Nasiphi completed a Certificate in Business Management at College of Cape Town from 2019 to 2021.";
    } else if (lowerMsg.includes('certificate')) {
      return "Nasiphi earned a Certificate in Business Management from College of Cape Town (2019-2021).";
    } else {
      return "I'm Nasiphi's AI assistant. Ask about her skills, education, projects, or how to contact her.";
    }
  }
});