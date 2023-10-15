const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        body.classList.add("dark-theme");
    } else {
        body.classList.remove("dark-theme");
    }
});