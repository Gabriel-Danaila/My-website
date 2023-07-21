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

// ! == == == ==   paralax  == == == ==

window.addEventListener("scroll", function () {
  if (window.innerWidth > 720) {
    const scrollPosition = window.pageYOffset;

    document.querySelectorAll(".parallax").forEach(function (el, index) {
      var speed = 0.1 + 0.1 * index;

      // For the first element (index = 0)
      if (index === 0) {
        el.style.transform = `translateY(${scrollPosition * speed}px)`;
      }
      // For the second element (index = 1)
      else if (index === 1) {
        el.style.transform = `translateY(${-scrollPosition * speed}px)`;
      }
    });
  }
});

// ! == == == ==   grid cards animation   == == == ==

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Adjust this value to when you want the animation to start. 0.5 means when 50% of the item is visible
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // If the element is in the viewport
      entry.target.classList.add("animate-card"); // Add the animation class

      // You can unobserve the entry after animation has been applied so it doesn't get re-applied
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Start observing each project card

document.querySelectorAll(".project-card").forEach((projectCard, index) => {
  projectCard.style.animationDelay = `${index * 100}ms`;
  observer.observe(projectCard);
});
