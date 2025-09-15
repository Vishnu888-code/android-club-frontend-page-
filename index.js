// Small script for logging and future interactions
console.log("🤖 Android Club page loaded successfully!");

// Example: Smooth scroll fallback if needed
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

