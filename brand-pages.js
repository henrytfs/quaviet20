const pageHeader = document.querySelector(".site-header");
const pageMenuButton = document.querySelector(".menu-button");
const pageNavLinks = document.querySelectorAll(".nav-links a");

pageMenuButton?.addEventListener("click", () => {
  pageHeader.classList.toggle("menu-open");
});

pageNavLinks.forEach((link) => {
  link.addEventListener("click", () => pageHeader.classList.remove("menu-open"));
});
