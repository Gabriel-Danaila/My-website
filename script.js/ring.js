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

// ! == == == ==   adding images on smaller screen size  == == == ==
window.onload = function () {
  let image1 = document.querySelector(".img1");
  let image2 = document.querySelector(".img2");
  let image3 = document.querySelector(".img3");
  let image4 = document.querySelector(".img4");

  function resizeImage() {
    if (window.innerWidth <= 720) {
      image1.src = "../img/ring-img1-small.png";
      image2.src = "../img/ring-img2-small.png";
      image3.src = "../img/ring-img3-small.png";
      image4.src = "../img/ring-img4-small.png";
    } else {
      image1.src = "../img/ring-img1.png";
      image2.src = "../img/ring-img2.png";
      image3.src = "../img/ring-img3.png";
      image4.src = "../img/ring-img4.png";
    }
  }

  window.onresize = resizeImage;
  resizeImage();
};

// ! == == == ==   hover container  == == == ==
