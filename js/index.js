$(document).ready(function () {
  const HomeSlider = document.getElementById("slider-home");
  //const sliderCard1 = document.getElementById("cardSlider1");
  //const sliderCard2 = document.getElementById("cardSlider2");
  const sliderDetail = document.getElementById("slider-detail");

  startScroll(HomeSlider);
  startScroll(sliderDetail);

  $("#cardSlider1").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 5000,
    autoplayHoverPause: true,
    dragEndSpeed: 500,
  });
  $("#cardSlider2").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 5000,
    autoplayHoverPause: true,
    dragEndSpeed: 500,
    rtl: true,
  });
});

function startScroll(sliderItem) {
  if (!sliderItem.children[0]) {
    return;
  }
  const sliderContent = sliderItem.children[0].firstElementChild;
  var speed = sliderItem.children[0].attributes["speed"].value;
  var dir = sliderItem.children[0].attributes["dir"].value;

  sliderItem.children[0].appendChild(sliderContent.cloneNode(true));

  const totalWidth = sliderContent.offsetWidth;

  // Set the width of the marquee container
  gsap.set(sliderItem.children[0], { width: totalWidth * 1.5 });

  gsap.to(sliderItem.children[0], {
    x: dir == "ltr" ? -totalWidth - 20 : totalWidth - 20,
    duration: speed,
    ease: "linear",
    repeat: 2,
  });
}

function redirectToPortfolio() {
  window.location.href = "/portfolio.html"; // Replace with your desired URL
}
