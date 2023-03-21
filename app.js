const menuBtn = document.querySelector("#menu-btn");
const aside = document.querySelector("#aside");
const backDrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".close");

function showMenu(e) {
  e.preventDefault();
  aside.className = "active";
  backDrop.className = "backdrop active";
}

function closeMenu(e) {
  e.preventDefault();
  aside.className = "";
  backDrop.className = "backdrop";
}

menuBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", closeMenu);
