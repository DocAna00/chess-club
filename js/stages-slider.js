
const sliderBox = document.querySelector('.slider__box');

const prevButton = document.querySelector('.slider-nav__prev-button');

const nextButton = document.querySelector('.slider-nav__next-button');

const dots = document.querySelectorAll('.nav__dot');

const slides = sliderBox.querySelectorAll('.slider__card');

const slideCount = slides.length - 4;

let slideIndex = 0;

let directionIndex = 1;

let dotIndex = 0;

const slide = () => {
    const imageWidth = sliderBox.clientWidth;
    const slideOffset = slideIndex * imageWidth;
    sliderBox.style.transform = `translateX(${-slideOffset}px)`;
}

const thisSlide = (index) => {
    for (let nav__dot of dots) {
        nav__dot.classList.remove('nav__dot--active')
    }
    dots[index].classList.add('nav__dot--active')
}

const changeDirection = (slideIndex) => {
    if (slideIndex == 0) {
        directionIndex = 1;
    }
    if (slideIndex == slideCount - 1) {
        directionIndex = 0;
    }
}

const changeSlide = (slideIndex) => {
    slide();
    thisSlide(slideIndex);
    changeDirection(slideIndex);
}

const nextSlide = () => {
    if (directionIndex == 1) {
        slideIndex++;
    } else {
        slideIndex--
    }
    changeSlide(slideIndex);
}

window.addEventListener('load', () => {
    slide();
});

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 1366px)').matches) {
        slideIndex = 0;
        changeSlide(0);
    }
});

nextButton.addEventListener('click', () => {
    if (slideIndex == slideCount - 1) {
        slideIndex = slideCount - 1;
        nextButton.classList.add('slider-nav__next-button--disable');
    } else {
        slideIndex++;
        prevButton.classList.remove('slider-nav__prev-button--disable');
    }
    changeSlide(slideIndex);
});

prevButton.addEventListener('click', () => {
    if (slideIndex == 0) {
        slideIndex = 0;
        prevButton.classList.add('slider-nav__prev-button--disable');
    } else {
        slideIndex--;
        nextButton.classList.remove('slider-nav__next-button--disable');
    }
    changeSlide(slideIndex);
});

dots.forEach((slider__dot, index) => {
    slider__dot.addEventListener('click', () => {
        slideIndex = index;
        nextButton.classList.remove('slider-nav__next-button--disable');
        prevButton.classList.remove('slider-nav__prev-button--disable');
        changeSlide(slideIndex);
    })
})