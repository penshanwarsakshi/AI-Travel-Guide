const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerText = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function botReply(input) {
  const text = input.toLowerCase();

  if (text.includes("goa")) {
    return "Top places in Goa: Baga Beach, Calangute, Anjuna, Dudhsagar Falls, Old Goa churches.";
  }

  if (text.includes("budget")) {
    return "Travel budget tip: Book early, use public transport, and choose local food.";
  }

  if (text.includes("packing")) {
    return "Packing checklist: Clothes, ID, charger, medicines, sunscreen, power bank.";
  }

  if (text.includes("hill station")) {
    return "Popular hill stations: Manali, Shimla, Ooty, Munnar, Darjeeling.";
  }

  if (text.includes("beach")) {
    return "Best beach destinations: Goa, Andaman, Maldives, Bali, Phuket.";
  }

  if (text.includes("international")) {
    return "Popular international trips: Dubai, Singapore, Thailand, Paris, Switzerland.";
  }

  return "Ask me about destinations, budget tips, packing list, or best time to travel 🌍";
}

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    addMessage(botReply(text), "bot");
  }, 500);
}

userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});
