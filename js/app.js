const images = document.querySelectorAll('.image-container img');
let currentIndex = 0;

setInterval(() => {
  images[currentIndex].style.opacity = '0';
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.opacity = '1';
}, 5000);





// const slider = document.querySelector('.slider');

// setInterval(() => {
//   const firstSlide = slider.firstElementChild;
//   slider.appendChild(firstSlide);
// }, 5000);

// const slider = document.querySelector('.slider');

function startSliderAutoplay() {
  slider.classList.add('autoplay');
}

function stopSliderAutoplay() {
  slider.classList.remove('autoplay');
}

startSliderAutoplay();









