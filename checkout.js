// نفس بيانات المنتجات عشان نعرف نقارن الـ ID
let products = [
  { id: 1, name: "hoodie", desc: "this a HBA-hoodie", img: "images/hoodie.png" },
  { id: 2, name: "creatien", desc: "this a LVL-creatien", img: "images/lvl_creatine.jpeg" },
  { id: 3, name: "jacket", desc: "this a HBA-jacket", img: "images/jackets.jpeg" },
  { id: 4, name: "pre-workout", desc: "this a LVL-pre-workout", img: "images/pre_workout.jpeg" },
  { id: 5, name: "pants", desc: "this a HBA-pants", img: "images/pants.jpeg" },
  { id: 6, name: "shirt", desc: "this a HBA-shirt", img: "images/t-shirt.jpeg" }
];

let checkoutContainer = document.createElement("div");
document.body.appendChild(checkoutContainer);

checkoutContainer.style.display = "flex";
checkoutContainer.style.justifyContent = "center";
checkoutContainer.style.padding = "50px";
checkoutContainer.style.flexWrap = "wrap";
checkoutContainer.style.gap = "40px";

// 1. قراءة الـ URL Parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');

// 2. البحث عن المنتج بالـ ID
let product = products.find(p => p.id == productId);

if (product) {
    // 3. عرض المنتج لو موجود
    let productDetails = document.createElement("div");
    productDetails.style.width = "400px";
    productDetails.style.textAlign = "center";
    productDetails.style.backgroundColor = "#333";
    productDetails.style.padding = "30px";
    productDetails.style.borderRadius = "15px";

    let title = document.createElement("h1");
    title.innerText = "Confirm Your Order";
    title.style.margin = "0 0 30px 0";

    let productName = document.createElement("h2");
    productName.innerText = product.name;
    productName.style.textTransform = "capitalize";
    productName.style.fontSize = "28px";

    let img = document.createElement("img");
    img.src = product.img;
    img.style.width = "100%";
    img.style.height = "250px";
    img.style.objectFit = "contain";
    img.style.margin = "20px 0";

    let productDesc = document.createElement("p");
    productDesc.innerText = product.desc;
    productDesc.style.fontSize = "18px";
    productDesc.style.color = "#ccc";

    productDetails.append(title, productName, img, productDesc);
    checkoutContainer.appendChild(productDetails);

    // 4. إنشاء الـ Form للدفع
    let checkoutForm = document.createElement("form");
    checkoutForm.style.width = "400px";
    checkoutForm.style.backgroundColor = "#444";
    checkoutForm.style.padding = "30px";
    checkoutForm.style.borderRadius = "15px";
    checkoutForm.style.display = "flex";
    checkoutForm.style.flexDirection = "column";
    checkoutForm.style.gap = "15px";

    let formTitle = document.createElement("h2");
    formTitle.innerText = "Shipping Details";
    formTitle.style.margin = "0 0 10px 0";

    // دالة مساعدة لعمل الـ Input
    function createInput(placeholder, type = "text") {
        let input = document.createElement("input");
        input.type = type;
        input.placeholder = placeholder;
        input.style.padding = "12px";
        input.style.borderRadius = "5px";
        input.style.border = "none";
        input.style.fontSize = "16px";
        return input;
    }

    let nameInput = createInput("Your Full Name");
    let addressInput = createInput("Shipping Address");
    let cityInput = createInput("City");
    let phoneInput = createInput("Phone Number", "tel");

    // زرار الدفع
    let payBtn = document.createElement("button");
    payBtn.innerText = "Confirm Order & Pay";
    payBtn.type = "submit";
    payBtn.style.marginTop = "20px";
    payBtn.style.padding = "15px";
    payBtn.style.cursor = "pointer";
    payBtn.style.backgroundColor = "#4CAF50";
    payBtn.style.color = "white";
    payBtn.style.border = "none";
    payBtn.style.fontWeight = "bold";
    payBtn.style.fontSize = "18px";
    payBtn.style.borderRadius = "5px";

    // الـ Event بتاع الدفع
    checkoutForm.onsubmit = (e) => {
        e.preventDefault(); // يمنع الصفحة من الـ Refresh
        
        if (nameInput.value && addressInput.value && phoneInput.value) {
            alert("Thank you, " + nameInput.value + "! Your order for " + product.name + " is on its way! 🚀\nWe'll contact you soon.");
            
            // تصفير السلة بعد الدفع
            localStorage.setItem("cartCount", 0);
            
            // الرجوع للصفحة الرئيسية
            window.location.href = "index.html";
        } else {
            alert("Please fill in all shipping details.");
        }
    };

    checkoutForm.append(formTitle, nameInput, addressInput, cityInput, phoneInput, payBtn);
    checkoutContainer.appendChild(checkoutForm);

} else {
    // لو المنتج مش موجود (لو حد كتب ID غلط في الـ URL)
    checkoutContainer.innerHTML = "<h1 style='text-align:center;'>Product Not Found!</h1>";
}