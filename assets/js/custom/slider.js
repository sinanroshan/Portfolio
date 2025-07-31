window.addEventListener("DOMContentLoaded", () => {
  initInfiniteSlider("cardSlider2", true);
  initInfiniteSlider("slider-home", true);
});

const initInfiniteSlider = (sliderId, hasNestedTrack = false) => {
  const wrapper = document.getElementById(sliderId);
  if (!wrapper) return;

  const slider = hasNestedTrack ? wrapper.querySelector('.slider-track') : wrapper;

  if (!slider) return;

  const configSource = hasNestedTrack ? wrapper.querySelector('.slider') : wrapper;
  const speedAttr = parseFloat(configSource.getAttribute("speed")) || 30;
  const isRTL = configSource.getAttribute("dir") === "rtl";

  const originalItems = [...slider.children];

  if (slider.querySelector('.clone')) return;

  originalItems.forEach(item => {
    const clone = item.cloneNode(true);
    clone.classList.add('clone');
    slider.appendChild(clone);
  });

  let pos = 0;
  let lastTimestamp = null;

  const animate = (timestamp) => {
    if (!lastTimestamp) lastTimestamp = timestamp;

    const delta = timestamp - lastTimestamp;
    lastTimestamp = timestamp;
    const distance = speedAttr * (delta / 1000);
    pos += isRTL ? -distance : distance;
    const resetThreshold = slider.scrollWidth / 2;
    if (Math.abs(pos) >= resetThreshold) {
      pos = 0;
    }

    slider.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
  };

  slider.style.willChange = "transform";
  slider.style.transition = "none";

  requestAnimationFrame(animate);
};
