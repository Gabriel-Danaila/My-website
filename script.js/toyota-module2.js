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

// ! == == == == accordion   == == == ==

// Initialize variables
let currentImage = null;
let currentImageIndex = 0;
const accordionButtons = document.querySelectorAll(".accordion-button");
const imageContainer = document.getElementById("images");
const images = [
  document.getElementById("image1"),
  document.getElementById("image2"),
  document.getElementById("image3"),
];

// Function to fade in/out image
function fadeImageIn(img) {
  if (currentImage) {
    currentImage.style.opacity = 0; // Fade out
    setTimeout(() => {
      currentImage.classList.add("hidden-image");
      currentImage.style.opacity = 0;
    }, 300);
  }

  img.style.opacity = 0;
  img.classList.remove("hidden-image");

  setTimeout(() => {
    img.style.opacity = 1; // Fade in
  }, 300);

  currentImage = img;
}

// Open the first accordion and show its image
document.querySelector(".accordion-button").classList.add("is-open");
const firstAccordionContent = document.querySelector(".accordion-content");
firstAccordionContent.style.maxHeight =
  firstAccordionContent.scrollHeight + "px";
fadeImageIn(images[0]);
currentImage = images[0];
currentImageIndex = 0;

document.querySelector(".accordion-button .icon").classList.add("rotate-icon");

// Event listener for accordion buttons an for turnning the svg icon

accordionButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    const content = this.parentElement.nextElementSibling;
    const icon = this.querySelector(".icon");

    if (this.classList.contains("is-open")) {
      this.classList.remove("is-open");
      icon.classList.remove("rotate-icon");
      content.style.maxHeight = null;
    } else {
      this.classList.add("is-open");
      icon.classList.add("rotate-icon");
      content.style.maxHeight = content.scrollHeight + "px";
      fadeImageIn(images[index]);
      currentImageIndex = index;
    }
  });
});
