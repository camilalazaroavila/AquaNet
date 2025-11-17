
let currentSlide = 0;
const slidesEl = document.getElementById('slides');

function moveSlide(dir) {
  const total = slidesEl.children.length;
  currentSlide = (currentSlide + dir + total) % total;
  slidesEl.style.transform = `translateX(-${currentSlide * 100}%)`;
}

