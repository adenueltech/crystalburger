function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("show");
}

// Background Image Slider
const bgImages = [
    { src: "bg1.avif", price: "$8.99" },
    { src: "bg2.jpg", price: "$9.99" },
    { src: "bg3.avif", price: "$10.99" }
];

let currentBg = 0;

function updateBg() {
    document.getElementById("home").style.background = `url('${bgImages[currentBg].src}') center/cover no-repeat`;
    document.getElementById("bg-price").innerText = bgImages[currentBg].price;
}

function prevBg() {
    currentBg = (currentBg === 0) ? bgImages.length - 1 : currentBg - 1;
    updateBg();
}

function nextBg() {
    currentBg = (currentBg === bgImages.length - 1) ? 0 : currentBg + 1;
    updateBg();
}

// hot deals javascirt
const hotDeals = [
    { 
        src: "ap1.jpg", 
        text: "Get a delicious double cheeseburger with crispy fries and a drink at just $9.99! Don't miss out!" 
    },
    { 
        src: "deal2.jpg", 
        text: "Try our spicy BBQ burger with onion rings and a drink for only $10.99! A must-try!" 
    },
    { 
        src: "deal3.jpg", 
        text: "Enjoy our limited-edition cheesy bacon burger with a side of loaded fries for just $11.99!" 
    }
];

let currentDeal = 0;

function updateHotDeal() {
    document.getElementById("deal-img").src = hotDeals[currentDeal].src;
    document.getElementById("deal-text").innerText = hotDeals[currentDeal].text;
}

function prevDeal() {
    currentDeal = (currentDeal === 0) ? hotDeals.length - 1 : currentDeal - 1;
    updateHotDeal();
}

function nextDeal() {
    currentDeal = (currentDeal === hotDeals.length - 1) ? 0 : currentDeal + 1;
    updateHotDeal();
}
 // Ensure everything loads properly
    updateSlider();  // Show first burger image
    updateBg();      // Set first background image
    updateHotDeal(); // Show first hot deal
