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

// ! == == == ==   toyota carousel with automatic sliding and timeing == == == ==

// import Glide from "@glidejs/glide";

// const optionsLeft = {
//   type: "carousel",
//   startAt: 0,
//   perView: 1,
//   autoplay: 8000,
// };
// const optionsMiddle = {
//   type: "carousel",
//   startAt: 0,
//   perView: 1,
//   autoplay: 8000,
// };
// const optionsRight = {
//   type: "carousel",
//   startAt: 0,
//   perView: 1,
//   autoplay: 8000,
// };
// let glideLeft = new Glide(".glide-left", optionsLeft);
// let glideMiddle = new Glide(".glide-middle", optionsMiddle);
// let glideRight = new Glide(".glide-right", optionsRight);

// glideLeft.mount();
// glideMiddle.mount();
// glideRight.mount();

// let glideSlidesLeft = document.querySelector(".container-left .glide__slides");
// let glideSlidesMiddle = document.querySelector(
//   ".container-middle .glide__slides"
// );
// let glideSlidesRight = document.querySelector(
//   ".container-right .glide__slides"
// );

// glideSlidesRight.addEventListener("click", function () {
//   glideLeft.go(">");
//   glideMiddle.go(">");
//   glideRight.go(">");
// });

// glideSlidesLeft.addEventListener("click", function () {
//   glideLeft.go("<");
//   glideMiddle.go("<");
//   glideRight.go("<");
// });

// let carousels = [glideSlidesLeft, glideSlidesMiddle, glideSlidesRight];

// carousels.forEach(function (carousel) {
//   carousel.addEventListener("mouseenter", function () {
//     glideLeft.pause();
//     glideMiddle.pause();
//     glideRight.pause();

//     setTimeout(() => {
//       glideLeft.go(">");
//       glideMiddle.go(">");
//       glideRight.go(">");
//       glideLeft.play();
//       glideMiddle.play();
//       glideRight.play();
//     }, 8000);
//   });

//   carousel.addEventListener("mouseleave", function () {
//     glideLeft.play();
//     glideMiddle.play();
//     glideRight.play();
//   });
// });

// let svg1 = document.getElementById("animated-svg1");
// let circle1 = document.getElementById("animated-circle1");
// let group1 = document.getElementById("animated-group1");
// let path1 = document.getElementById("animated-path1");

// document
//   .getElementById("animated-path1")
//   .addEventListener("animationend", function (e) {
//     // Check for the ending of the last animation
//     if (e.animationName === "fadeOut") {
//       document.getElementById("svg-container1").innerHTML = `
//           <svg
//               class="button-svg-anim"
//               width="15.994318008422852"
//               height="15.994318008422852"
//               viewBox="0 0 15.994318008422852 15.994318008422852"
//               xmlns="http://www.w3.org/2000/svg"
//           >
//               <circle
//                   class="button-svg-anim-circle"
//                   opacity=".5"
//                   cx="7.997159004211426"
//                   cy="7.997159004211426"
//                   fill="#000000"
//                   r="3.198864"
//                   style="opacity: 0.5"
//               ></circle>
//           </svg>
//       `;
//     }
//   });

// carousel without automatic sliding
const optionsLeft = {
  type: "carousel",
  startAt: 0,
  perView: 1,
};
const optionsMiddle = {
  type: "carousel",
  startAt: 0,
  perView: 1,
};
const optionsRight = {
  type: "carousel",
  startAt: 0,
  perView: 1,
};
let glideLeft = new Glide(".glide-left", optionsLeft);
let glideMiddle = new Glide(".glide-middle", optionsMiddle);
let glideRight = new Glide(".glide-right", optionsRight);

glideLeft.mount();
glideMiddle.mount();
glideRight.mount();

let glideSlidesLeft = document.querySelector(".container-left .glide__slides");
let glideSlidesRight = document.querySelector(
  ".container-right .glide__slides"
);

glideSlidesRight.addEventListener("click", function () {
  glideLeft.go(">");
  glideMiddle.go(">");
  glideRight.go(">");
});

glideSlidesLeft.addEventListener("click", function () {
  glideLeft.go("<");
  glideMiddle.go("<");
  glideRight.go("<");
});

// media query

window.addEventListener("resize", function () {
  const breakpoint = window.matchMedia("(max-width: 720px)");

  if (breakpoint.matches) {
    glideRight.destroy();
  } else {
    glideRight.mount();
  }
});
// final
