//marquee
document.addEventListener("DOMContentLoaded", function () {
  const marquee = document.querySelector(".slider");
  const sliderContent = document.querySelector(".slider-track-rl");

  //   const clone = sliderContent.cloneNode(true);
  marquee.appendChild(sliderContent.cloneNode(true));

  const totalWidth = sliderContent.offsetWidth;

  // Set the width of the marquee container
  gsap.set(marquee, { width: totalWidth * 2 });

  gsap.to(marquee, {
    x: -totalWidth - 20,
    duration: 40,
    ease: "linear",
    repeat: -1,
  });
});

function startScroll(slider, sliderContent) {
  const marquee = document.querySelector(slider);
  const sliderContent = document.querySelector(sliderContent);

  slider.appendChild(sliderContent.cloneNode(true));

  const totalWidth = sliderContent.offsetWidth;

  // Set the width of the marquee container
  gsap.set(slider, { width: totalWidth * 2 });

  gsap.to(slider, {
    x: -totalWidth - 20,
    duration: 40,
    ease: "linear",
    repeat: -1,
  });
}
