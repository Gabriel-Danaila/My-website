// ! == == == ==   hamburger menu  == == == ==

document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("open");
  document.querySelector(".navbar-list").classList.toggle("open");
});

window.addEventListener("resize", function () {
  // get the current window width
  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // check if the window width is larger than your mobile breakpoint (in this case, 800px)
  if (width > 800) {
    // if it is, remove the 'open' class from the hamburger and the navbar list
    let hamburger = document.querySelector(".hamburger");
    let navbarList = document.querySelector(".navbar-list");

    hamburger.classList.remove("open");
    navbarList.classList.remove("open");
  }
});
// to remove open class when link is triger
document.querySelectorAll(".navbar-list a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".hamburger").classList.remove("open");
    document.querySelector(".navbar-list").classList.remove("open");
  });
});

// ! == == == ==   toyota carousel  == == == ==

const optionsLeft = {
  type: "carousel",
  startAt: 0,
  perView: 1,
  // peek: { before: 0, after: 300 },
};
const optionsMiddle = {
  type: "carousel",
  startAt: 0,
  perView: 1,
  // peek: { before: 0, after: 300 },
};
const optionsRight = {
  type: "carousel",
  startAt: 0,
  perView: 1,
  // peek: { before: 0, after: 300 },
};
let glideLeft = new Glide(".glide-left", optionsLeft);
let glideMiddle = new Glide(".glide-middle", optionsMiddle);
let glideRight = new Glide(".glide-right", optionsRight);

glideLeft.mount();
glideMiddle.mount();
glideRight.mount();

document
  .querySelector(".glide__arrow--left")
  .addEventListener("click", function () {
    glideLeft.go("<");
    glideMiddle.go("<");
    glideRight.go("<");
  });

document
  .querySelector(".glide__arrow--right")
  .addEventListener("click", function () {
    glideLeft.go(">");
    glideMiddle.go(">");
    glideRight.go(">");
  });
