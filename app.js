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

// scroll

document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener("scroll", () => {
  const direction =
    window.pageYOffset - document.lastScrollPosition > 0 ? "down" : "up";
  const sections = [...document.querySelectorAll("section")];

  if (document.onWayTo === null) {
    const destIndex =
      direction === "up"
        ? document.lastCentered - 1
        : document.lastCentered + 1;
    if (destIndex >= 0 && sections.length) {
      document.onWayTo = destIndex;
      window.scroll(0, sections[destIndex].offsetTop);
    }
  }

  sections.forEach((section, number) => {
    if (window.pageYOffset === section.offsetTop) {
      document.lastCentered = number;
      section.className = "active";
      if (document.onWayTo === number) {
        document.onWayTo = null;
      }
    } else {
      section.className = "";
    }
  });
  document.lastScrollPosition = window.pageYOffset;
});
