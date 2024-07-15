const chatContainer = document.getElementById('chat-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessagesContainer = document.querySelector(".chat-container");

const botMessages = [
  "Can you tell me more about what you're going through?",
  "I'm here for you. Let's talk about what's on your mind.",
  "Your feelings are valid for me. I'm listening.",
  "Can you tell me how you're feeling right now?",
  "when you chat with me, I understand this is a difficult time for you. I'm here to support you however I can.",
  "Don't be afraid, I am always here for you.",
  "I will always be by your side. You have to remember that if you need me, you can always come and chat with me.",
  "Remember, it doesn't matter how slowly you go as long as you don't stop. You can come to me to relax at any time.",
  "I know this is a difficult time for you. You have already worked so hard. It's okay To Take a Break."
];

const sadMessages = ["i feel pain",'i want to die','i feel tired','i feel sad'];


sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    addMessage("user", message);
    messageInput.value = "";

    if (message.toLowerCase() === 'hi') {
      displayBotMessage('Want to share your thoughts?');
    } else {
      setTimeout(() => {
        addMessage("bot", getRandomBotMessage());
      }, 1000); // Simulate a delay for the bot's response
    }

    if (message.toLowerCase() === 'yes') {
      displayBotMessage('Sure, I am right here and you can say whatever you want at any time. You can also tell me how you feel now.');
    } else {
      setTimeout(() => {
        addMessage("bot", getRandomBotMessage());
      }, 1000); // Simulate a delay for the bot's response
    }

      if (sadMessages.some(msg => message.toLowerCase().includes(msg))) {
        displayBotMessage('I am sorry to hear about what you are going through. I feel the hard things you have been going through. Can I hear what you have been through during this time? This must be painful for you.');
    } else {
      setTimeout(() => {
        addMessage("bot", getRandomBotMessage());
      }, 1000); // Simulate a delay for the bot's response
    }
    
  }
}

function addMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);

  const avatarElement = document.createElement("div");
  avatarElement.classList.add("avatar");
  avatarElement.textContent = sender === "user" ? "U" : "B";
  messageElement.appendChild(avatarElement);

  const messageContentElement = document.createElement("div");
  messageContentElement.classList.add("message-content");
  messageContentElement.textContent = message;
  messageElement.appendChild(messageContentElement);

  chatMessagesContainer.appendChild(messageElement);
  chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

function displayBotMessage(message) {
  addMessage("bot", message);
}

function getRandomBotMessage() {
  const index = Math.floor(Math.random() * botMessages.length);
  return botMessages[index];
}
