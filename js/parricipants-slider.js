const sliderImages = document.querySelector('.participant__box');

const participantPrevButton = document.querySelector('.participants__prev-button');

const participantNextButton = document.querySelector('.participants__next-button');

const participantSlides = sliderImages.querySelectorAll('img');

const interval = 4000;

let participantSlideCount = participantSlides.length;

if (window.screen.width >= 1366) {
    participantSlideCount = participantSlideCount - 2;
}

let paticipantSlideIndex = 0;

let paticipantDirectionIndex = 1;

const paticipantsSlide = () => {
    let imageWidth = sliderImages.clientWidth;
    if (window.screen.width >= 1366) {
        imageWidth = sliderImages.clientWidth / 3 + 7;
    }
    const slideOffset = paticipantSlideIndex * imageWidth;
    sliderImages.style.transform = `translateX(${-slideOffset}px)`;
    if (window.screen.width >= 1366) {
        document.querySelector('.participants__counter').textContent = paticipantSlideIndex + 3;
    } else document.querySelector('.participants__counter').textContent = paticipantSlideIndex + 1;
}

const paticipantChangeDirection = (slideIndex) => {
    if (slideIndex == 0) {
        paticipantDirectionIndex = 1;
    }
    if (slideIndex == participantSlideCount - 1) {
        paticipantDirectionIndex = 0;
    }
}

const paticipantChangeSlide = (slideIndex) => {
    paticipantsSlide();
    paticipantChangeDirection(slideIndex);
}

const paticipantsNextSlide = () => {
    if (paticipantDirectionIndex == 1) {
        paticipantSlideIndex++;
    } else {
        paticipantSlideIndex--
    }
    paticipantChangeSlide(paticipantSlideIndex);
}

window.addEventListener('load', () => {
    paticipantsSlide();
});

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 1366px)').matches) {
        paticipantSlideIndex = 0;
        paticipantChangeSlide(0);
        participantSlideCount = participantSlides.length;
        document.querySelector('.participants__count').textContent = participantSlideCount;
        participantSlideCount = participantSlideCount - 2;
    } else {
        paticipantSlideIndex = 0;
        paticipantChangeSlide(0);
        participantSlideCount = participantSlides.length;
        document.querySelector('.participants__count').textContent = participantSlideCount;
    }
});

document.querySelector('.participants__count').textContent = participantSlides.length;

setInterval(() => { paticipantsNextSlide() }, interval)

participantNextButton.addEventListener('click', () => {
    if (paticipantSlideIndex == participantSlideCount - 1) {
        paticipantSlideIndex = 0;
    } else {
        paticipantSlideIndex++;
    }
    paticipantChangeSlide(paticipantSlideIndex);
});

participantPrevButton.addEventListener('click', () => {
    if (paticipantSlideIndex == 0) {
        paticipantSlideIndex = participantSlideCount - 1;
    } else {
        paticipantSlideIndex--;
    }
    paticipantChangeSlide(paticipantSlideIndex);
});