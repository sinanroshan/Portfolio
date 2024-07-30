$(document).ready(function () {
  const HomeSlider = document.getElementById("slider-home");
  const sliderDetail = document.getElementById("slider-detail");
  const aboutPageSlider = document.getElementById("aboutPageSlider");

  if (HomeSlider) {
    startScroll(HomeSlider);
  }
  if (sliderDetail) {
    startScroll(sliderDetail);
  }
  if (aboutPageSlider) {
    startScroll(aboutPageSlider);
  }

  if ($("#cardSlider1")) {
    $("#cardSlider1").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      smartSpeed: 5000,
      autoplayHoverPause: false,
      dragEndSpeed: 500,
    });
  }
  if ($("#cardSlider2")) {
    $("#cardSlider2").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      smartSpeed: 5000,
      autoplayHoverPause: false,
      dragEndSpeed: 500,
      rtl: true,
    });
  }
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
