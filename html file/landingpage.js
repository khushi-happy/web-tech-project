const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

let autoSlide = setInterval(nextSlide, 3000);

function resetTimer() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 3000);
}

nextBtn.addEventListener("click", function () {
    nextSlide();
    resetTimer();
});

prevBtn.addEventListener("click", function () {
    prevSlide();
    resetTimer();
});

dots.forEach(function(dot, index) {
    dot.addEventListener("click", function() {
        currentSlide = index;
        showSlide(currentSlide);
        resetTimer();
    });
});