let container = document.createElement("div");
let nav = document.createElement("nav");
let cartCounter = document.createElement("div");
let logo = document.createElement("h1");
let count = 0;

document.body.appendChild(nav);
document.body.appendChild(container);
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";

nav.style.backgroundColor = "#111";
nav.style.color = "white";
nav.style.padding = "20px 40px";
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.position = "sticky";
nav.style.top = "0";
nav.style.zIndex = "1000";

logo.innerText = "HBA & LVL STORE";
logo.style.margin = "0";
logo.style.fontSize = "20px";
nav.appendChild(logo);

cartCounter.innerText = "Cart Items: 0";
cartCounter.style.fontSize = "18px";
cartCounter.style.fontWeight = "bold";
cartCounter.style.backgroundColor = "#333";
cartCounter.style.padding = "5px 15px";
cartCounter.style.borderRadius = "20px";
nav.appendChild(cartCounter);

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.alignItems = "stretch";
container.style.gap = "20px";
container.style.padding = "40px 20px";
container.style.backgroundColor = "#222";
container.style.minHeight = "100vh";

function createCard(name, description, imagePath) {
  let card = document.createElement("div");
  let title = document.createElement("h2");
  let text = document.createElement("p");
  let img = document.createElement("img");
  let btn = document.createElement("button");

  title.innerText = name;
  text.innerText = description;
  img.src = imagePath;
  btn.innerText = "Add to Cart";

  card.style.width = "220px";
  card.style.backgroundColor = "#444";
  card.style.color = "white";
  card.style.padding = "20px";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.justifyContent = "space-between";
  card.style.borderRadius = "12px";
  card.style.textAlign = "center";
  card.style.transition = "transform 0.3s";
  card.onmouseover = () => (card.style.transform = "scale(1.02)");
  card.onmouseout = () => (card.style.transform = "scale(1)");

  img.style.width = "100%";
  img.style.height = "180px";
  img.style.objectFit = "contain";
  img.style.marginBottom = "10px";

  btn.style.marginTop = "15px";
  btn.style.padding = "12px";
  btn.style.cursor = "pointer";
  btn.style.backgroundColor = "#fff";
  btn.style.color = "#000";
  btn.style.border = "none";
  btn.style.fontWeight = "bold";
  btn.style.borderRadius = "5px";
  btn.style.transition = "0.3s";

  btn.onclick = function () {
    count++;
    cartCounter.innerText = "Cart Items: " + count;
    btn.innerText = "Added ✓";
    btn.style.backgroundColor = "#4CAF50";
    btn.style.color = "white";

    alert(name + " has been added to your cart! 🛒");

    setTimeout(() => {
      btn.innerText = "Add to Cart";
      btn.style.backgroundColor = "#fff";
      btn.style.color = "#000";
    }, 1500);
  };

  card.appendChild(title);
  card.appendChild(text);
  card.appendChild(img);
  card.appendChild(btn);
  container.appendChild(card);
}

createCard("hoodie", "this a HBA-hoodie", "./images/hoodie.png");
createCard("creatien", "this a LVL-creatien", "images/creatine.png");
createCard("jacket", "this a HBA-jacket", "images/jacket.png");
createCard("pre-workout", "this a LVL-pre-workout", "images/preworkout.png");
createCard("pants", "this a HBA-pants", "images/pants.png");
createCard("shirt", "this a HBA-shirt", "images/shirt.png");
