document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("darkToggle");

    // Load saved mode
    const savedMode = localStorage.getItem("mode");

    if (savedMode === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }

    // Switch mode
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        toggleBtn.textContent = isDark ? "☀️" : "🌙";

        // Save preference
        localStorage.setItem("mode", isDark ? "dark" : "light");
    });
});
