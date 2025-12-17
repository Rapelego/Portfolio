document.addEventListener("DOMContentLoaded", () => {
  const darkToggle = document.getElementById("darkToggle");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  /* -------------------------------
     DARK MODE (WITH MEMORY)
  -------------------------------- */
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    darkToggle.innerHTML = "☀️";
  }

  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkToggle.innerHTML = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      darkToggle.innerHTML = "🌙";
      localStorage.setItem("theme", "light");
    }
  });

  /* -------------------------------
     MOBILE MENU
  -------------------------------- */
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});
