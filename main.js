// بيانات المنتجات كما هي
let products = [
  { id: 1, name: "hoodie", desc: "this a HBA-hoodie", img: "images/hoodie.png" },
  { id: 2, name: "creatien", desc: "this a LVL-creatien", img: "images/creatine.png" },
  { id: 3, name: "jacket", desc: "this a HBA-jacket", img: "images/jacket.png" },
  { id: 4, name: "pre-workout", desc: "this a LVL-pre-workout", img: "images/preworkout.png" },
  { id: 5, name: "pants", desc: "this a HBA-pants", img: "images/pants.png" },
  { id: 6, name: "shirt", desc: "this a HBA-shirt", img: "images/shirt.png" }
];

let container = document.createElement("div");
let nav = document.createElement("nav");
let searchInput = document.createElement("input");
let cartCounter = document.createElement("div");

// العداد هنجيبه من الـ LocalStorage عشان الـ Checkout يقدر يقراه
let count = localStorage.getItem("cartCount") || 0;

document.body.appendChild(nav);
document.body.appendChild(container);
document.body.style.margin = "0";
document.body.style.backgroundColor = "#222";
document.body.style.fontFamily = "Inter, sans-serif"; // استخدمنا الخطInter اللي ضفناه في الـ HTML

// ستايل الـ Header (Nav)
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.padding = "15px 30px";
nav.style.backgroundColor = "#111";
nav.style.position = "sticky";
nav.style.top = "0";
nav.style.zIndex = "100";

// شريط البحث
searchInput.placeholder = "Search products...";
searchInput.style.padding = "8px 15px";
searchInput.style.borderRadius = "20px";
searchInput.style.border = "none";
searchInput.style.width = "250px";
searchInput.style.fontSize = "16px";
nav.appendChild(searchInput);

// العداد
cartCounter.innerText = "Cart: " + count;
cartCounter.style.color = "white";
cartCounter.style.fontWeight = "bold";
cartCounter.style.fontSize = "18px";
cartCounter.style.backgroundColor = "#333";
cartCounter.style.padding = "5px 15px";
cartCounter.style.borderRadius = "20px";
nav.appendChild(cartCounter);

// حاوية الكروت
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.gap = "20px";
container.style.padding = "40px 20px";

// الـ Function اللي بتعرض الكروت
function displayProducts(filterText = "") {
  container.innerHTML = "";
  let filtered = products.filter(p => p.name.toLowerCase().includes(filterText.toLowerCase()));

  filtered.forEach(p => {
    let card = document.createElement("div");
    card.style.width = "220px";
    card.style.backgroundColor = "#444";
    card.style.padding = "20px";
    card.style.borderRadius = "12px";
    card.style.color = "white";
    card.style.textAlign = "center";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.justifyContent = "space-between";
    card.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
    card.style.transition = "transform 0.3s";
    
    // حركة عند الوقوف على الكارت
    card.onmouseover = () => card.style.transform = "scale(1.03)";
    card.onmouseout = () => card.style.transform = "scale(1)";

    let title = document.createElement("h2");
    title.innerText = p.name;
    title.style.margin = "0 0 10px 0";
    title.style.fontSize = "22px";
    title.style.textTransform = "capitalize";

    let img = document.createElement("img");
    img.src = p.img;
    img.style.width = "100%";
    img.style.height = "180px";
    img.style.objectFit = "contain";
    img.style.marginBottom = "10px";

    // الستايل الأساسي للزرار
    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.style.marginTop = "15px";
    btn.style.cursor = "pointer";
    btn.style.padding = "12px";
    btn.style.fontWeight = "bold";
    btn.style.fontSize = "16px";
    btn.style.backgroundColor = "#fff";
    btn.style.color = "#000";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.transition = "background-color 0.3s";
    
    // حركة عند الوقوف على الزرار
    btn.onmouseover = () => btn.style.backgroundColor = "#eee";
    btn.onmouseout = () => btn.style.backgroundColor = "#fff";

    // الـ Function اللي هتنقلنا لصفحة الـ Checkout
    btn.onclick = () => {
      // 1. تزويد العداد
      count++;
      cartCounter.innerText = "Cart: " + count;
      localStorage.setItem("cartCount", count); // تخزين العداد
      
      // 2. تغيير شكل الزرار
      btn.innerText = "Added ✓";
      btn.style.backgroundColor = "#4CAF50";
      btn.style.color = "white";

      // 3. تأخير بسيط عشان المستخدم يشوف إنه انضاف، وبعدين ينقله
      setTimeout(() => {
        // نبعت الـ ID بتاع المنتج في الـ URL
        window.location.href = "checkout.html?productId=" + p.id;
      }, 1000); // 1 ثانية
    };

    card.append(title, img, btn);
    container.appendChild(card);
  });
}

searchInput.oninput = (e) => displayProducts(e.target.value);

displayProducts();
