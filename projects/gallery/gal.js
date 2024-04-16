const images = [
    '/projects/gallery/images/Skyline-Los-Angeles-California.webp',
    '/projects/gallery/images/gta5.jpg',
    '/projects/gallery/images/LA6.jpg',
    '/projects/gallery/images/LALA.webp',
    '/projects/gallery/images/LALALA.webp',
    '/projects/gallery/images/LA5.webp',
];

let currentIndex = 0

const currentImage = document.getElementById('current-image')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

// ! НАПИСАТЬ ФУНКЦИЮ ЧТО БЫ НЕ ПОВТОРЯЛОСЬ УСЛОВИЕ

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length
    currentImage.src = images[currentIndex]
})

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    currentImage.src = images[currentIndex]
})

window.addEventListener('keydown', function (event) {
    if ( event.code == 'ArrowRight') {
        currentIndex = (currentIndex + 1) % images.length
        currentImage.src = images[currentIndex]
    }
  })

  window.addEventListener('keydown', function (event) {
    if ( event.code == 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length
        currentImage.src = images[currentIndex]
    }
  })

  const intervalId = setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length
    currentImage.src = images[currentIndex]
  }, 2500)

  // DRY 