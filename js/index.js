$(document).ready(function () {
  const HomeSlider = document.getElementById("slider-home");
  const sliderCard1 = document.getElementById("cardSlider1");
  const sliderCard2 = document.getElementById("cardSlider2");
  const sliderDetail = document.getElementById("slider-detail");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startScroll(entry);
      }
    });
  });

  observer.observe(HomeSlider);
  observer.observe(sliderCard1);
  observer.observe(sliderCard2);
  observer.observe(sliderDetail);
});

function startScroll(sliderItem) {
  if (!sliderItem.target.children[0]) {
    return;
  }
  const sliderContent = sliderItem.target.children[0].firstElementChild;

  sliderItem.target.children[0].appendChild(sliderContent.cloneNode(true));

  const totalWidth = sliderContent.offsetWidth;

  // Set the width of the marquee container
  gsap.set(sliderItem.target.children[0], { width: totalWidth * 1.5 });

  gsap.to(sliderItem.target.children[0], {
    x: -totalWidth - 20,
    duration: 40,
    ease: "linear",
    repeat: -2,
  });
}

function redirectToPortfolio() {
  window.location.href = "/portfolio.html"; // Replace with your desired URL
}
