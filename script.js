function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("show");
}
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-load first slide
// showSlide(currentSlide);
// let currentSlide = 0;
// const slides = document.querySelectorAll(".slide");
const priceDisplay = document.getElementById("price");

// Prices for each burger
const prices = [5.99, 6.49, 7.99];

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });

    // Update price
    priceDisplay.textContent = prices[index].toFixed(2);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-load first slide
showSlide(currentSlide);
