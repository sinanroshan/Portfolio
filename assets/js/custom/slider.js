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

  // if ( document.getElementById( "cardSlider1" ) ) {
  //   startCardSlider( document.getElementById( "cardSlider1" ) );
  // }

  if (document.getElementById("cardSlider2")) {
    startCardSlider(document.getElementById("cardSlider2"));
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
function startCardSlider(sliderItem) {
  if (!sliderItem) return;

  const speed = Number(sliderItem.getAttribute('speed')) || 30;
  const dir = sliderItem.getAttribute('dir') || 'rtl';

  // Remove previous clones
  sliderItem.querySelectorAll('.slider-card.clone').forEach(el => el.remove());

  // Get all original cards
  const cards = Array.from(sliderItem.querySelectorAll('.slider-card:not(.clone)'));
  if (cards.length === 0) return;

  // Calculate total width of one set
  let totalWidth = 0;
  cards.forEach(card => {
    totalWidth += card.offsetWidth;
  });

  // Clone cards for seamless loop
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.classList.add('clone');
    sliderItem.appendChild(clone);
  });

  // Remove any previous GSAP animations
  gsap.killTweensOf(sliderItem);

  // Set width for the slider track
  gsap.set(sliderItem, { x: 0, width: totalWidth * 2 });

  // Animate for infinite ribbon loop using modifiers
  gsap.to(sliderItem, {
    x: dir === 'rtl' ? -totalWidth : totalWidth,
    duration: speed,
    ease: 'none',
    repeat: -1,
    modifiers: {
      x: function (x) {
        // Wrap the x value for a seamless loop
        let val = parseFloat(x);
        if (dir === 'rtl') {
          if (val <= -totalWidth) val += totalWidth;
        } else {
          if (val >= totalWidth) val -= totalWidth;
        }
        return `${val}px`;
      }
    }
  });
}
