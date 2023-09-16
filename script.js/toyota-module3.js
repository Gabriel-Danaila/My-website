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

// to autohide header on mobile screen size
let lastScrollTop = 0; // Store the last scroll position

window.addEventListener(
  "scroll",
  function () {
    if (window.innerWidth <= 768) {
      let currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // Downward scroll - Hide header
        document.querySelector(".header").style.transform = "translateY(-100%)";
      } else {
        // Upward scroll - Show header
        document.querySelector(".header").style.transform = "translateY(0)";
      }

      lastScrollTop = currentScrollTop;
    } else {
      // Reset the header for larger screens
      document.querySelector(".header").style.transform = "translateY(0)";
    }
  },
  false
);
// ! == == == ==   toyota carousel with automatic sliding and timeing == == == ==
// use wrapped the entire code to ensure the DOM is fully loaded before the script runs
window.addEventListener("DOMContentLoaded", () => {
  const leftSlides = document.getElementById("slideLeft");
  const middleContent = document.getElementById("slideMiddle");
  const rightSlides = document.getElementById("slideRight");

  let leftIndex = 0;
  let middleIndex = 0;
  let rightIndex = 0;

  function updateSlides(direction) {
    const leftImages = leftSlides.querySelectorAll("li");
    const middleContents = middleContent.querySelectorAll("li");
    const rightImages = rightSlides.querySelectorAll("li");

    const slideClass = direction === "ArrowLeft" ? "slide-right" : "slide-left";

    leftImages.forEach((img, index) => {
      img.classList.remove("slide-left", "slide-right");
      if (index === leftIndex) {
        img.style.display = "block";
        img.classList.add(slideClass);
      } else {
        img.style.display = "none";
      }
    });

    middleContents.forEach((content, index) => {
      content.classList.remove("slide-left", "slide-right");
      if (index === middleIndex) {
        content.style.display = "block";
        content.classList.add(slideClass);
      } else {
        content.style.display = "none";
      }
    });

    rightImages.forEach((img, index) => {
      img.classList.remove("slide-left", "slide-right");
      if (index === rightIndex) {
        img.style.display = "block";
        img.classList.add(slideClass);
      } else {
        img.style.display = "none";
      }
    });
  }

  // Navigation function
  function handleNavigation(direction) {
    const leftImages = leftSlides.querySelectorAll("li");
    const middleContents = middleContent.querySelectorAll("li");
    const rightImages = rightSlides.querySelectorAll("li");

    if (direction === "ArrowLeft") {
      leftIndex = (leftIndex - 1 + leftImages.length) % leftImages.length;
      middleIndex =
        (middleIndex - 1 + middleContents.length) % middleContents.length;
      rightIndex = (rightIndex - 1 + rightImages.length) % rightImages.length;
    } else if (direction === "ArrowRight") {
      leftIndex = (leftIndex + 1) % leftImages.length;
      middleIndex = (middleIndex + 1) % middleContents.length;
      rightIndex = (rightIndex + 1) % rightImages.length;
    }

    updateSlides(direction);
  }

  // Flag to check if mouse clicks should be enabled
  let enableMouseClick = true;

  // Event listener for keyboard arrows
  document.addEventListener("keydown", function (event) {
    handleNavigation(event.code);
  });

  // Event listener for mouse click on left container
  document
    .getElementById("container-left")
    .addEventListener("click", function () {
      if (enableMouseClick) {
        handleNavigation("ArrowLeft");
      }
    });

  // Event listener for mouse click on right container
  document
    .getElementById("container-right")
    .addEventListener("click", function () {
      if (enableMouseClick) {
        handleNavigation("ArrowRight");
      }
    });

  // Event listener for left-arrow button click
  document.getElementById("prevBtn").addEventListener("click", function () {
    handleNavigation("ArrowLeft");
  });

  // Event listener for right-arrow button click
  document.getElementById("nextBtn").addEventListener("click", function () {
    handleNavigation("ArrowRight");
  });

  // Function to update the cursor style based on window size
  function updateCursor() {
    const leftContainer = document.getElementById("container-left");
    const rightContainer = document.getElementById("container-right");

    if (window.innerWidth <= 768) {
      // Adjust 768 to whatever breakpoint you need
      enableMouseClick = false;
      leftContainer.style.cursor = "default";
      rightContainer.style.cursor = "default";
    } else {
      // If screen size is larger, use the custom SVG cursor
      const cursorSvgLeft =
        'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><circle cx="25" cy="25" r="25" fill="%23F5F5F5"/><path d="M29.3465 16.8964L22.4419 25.0002L29.3465 33.1039" stroke="%23282830" stroke-width="1.5"/></svg>\'), auto';
      const cursorSvgRight =
        'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><circle cx="25" cy="25" r="25" transform="rotate(-180 25 25)" fill="%23F5F5F5"/><path d="M22.4419 16.8964L29.3465 25.0002L22.4419 33.1039" stroke="%23282830" stroke-width="1.5"/></svg>\'), auto';

      leftContainer.style.cursor = cursorSvgLeft;
      rightContainer.style.cursor = cursorSvgRight;
    }
  }

  // Initial call to set the first image
  updateSlides();

  // Initial call to set cursor
  updateCursor();

  // Event listener for window resize
  window.addEventListener("resize", updateCursor);
});
