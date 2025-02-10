document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        this.textContent = "Light Mode";
    } else {
        this.textContent = "Dark Mode";
    }
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
});

document.getElementById("delivery-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your order has been placed! We'll deliver it soon.");
});
