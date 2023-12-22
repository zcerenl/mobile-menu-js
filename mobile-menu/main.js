// variables
const menuIcon = document.querySelector("#menu-icon");
const linkContainer = document.querySelector(".link-container");

// mobile-menu-listener
menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
  if (menuIcon.classList.contains("fa-bars")) {
    linkContainer.classList.add("active");
  } else {
    linkContainer.classList.remove("active");
  }
});
