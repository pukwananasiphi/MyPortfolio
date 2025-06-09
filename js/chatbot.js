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
    return "Hey there! 😊 I'm Nasiphi’s AI assistant. What would you like to learn about her today?";
  } else if (lowerMsg.includes('skill') || lowerMsg.includes('experience')) {
    return "Nasiphi brings a strong background in AI engineering—she’s skilled in machine learning, deep learning, NLP, and computer vision. On the tech side, she works with Python, JavaScript, SQL and Supabase. She’s also building real-time dashboards with React!";
  } else if (lowerMsg.includes('project') || lowerMsg.includes('work')) {
    return "She’s currently deep into building the CAPACITI Digital Attendance System: QR scanning, Supabase authentication, candidate and admin dashboards, real-time attendance tracking—and even toast notifications and analytics.";
  } else if (lowerMsg.includes('dashboard') || lowerMsg.includes('capaciti')) {
    return "The CAPACITI dashboard is her pride project—candidate dashboards, sign-in flows, profile management, analytics charts and notifications—a full-stack experience using JS, Supabase and Tailwind.";
  } else if (lowerMsg.includes('ai') || lowerMsg.includes('chatbot')) {
    return "Nasiphi is exploring AI with Flask and Python—like this custom chatbot you’re talking to right now! It's styled, interactive, and built with vanilla JS for now.";
  } else if (lowerMsg.includes('education') || lowerMsg.includes('study')) {
    return "She studied Business Management at the College of Cape Town from 2019 to 2021, earning a certificate that blends business insights with her technical skills.";
  } else if (lowerMsg.includes('tutor') || lowerMsg.includes('teach')) {
    return "She served as a tutor at Walter Sisulu University—acting as a bridge between lecturers and students, which helped sharpen her communication and leadership.";
  } else if (lowerMsg.includes('chpc') || lowerMsg.includes('competition')) {
    return "Yes! She participated in the CHPC competition—showing off her coding skills and collaborative mindset on a national stage.";
  } else if (lowerMsg.includes('hobby') || lowerMsg.includes('interest')) {
    return "When she’s not coding, Nasiphi enjoys meditation, hiking, yoga, and personal development—balancing mental wellness with technical growth.";
  } else if (lowerMsg.includes('contact') || lowerMsg.includes('reach') || lowerMsg.includes('hire')) {
    return "You can reach out to Nasiphi through the Contact section of her portfolio, or find her on LinkedIn—she’s always open to connecting!";
  } else {
    return "I'm here to share all about Nasiphi—ask me anything about her skills, projects, education, experiences, hobbies, or how to contact her!";
  }
  }
});