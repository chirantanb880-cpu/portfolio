const illustrationBoxes = Array.from(document.querySelectorAll(".illustration-grid .college-time-box"));
const illustrationLightbox = document.querySelector(".college-time-lightbox");
const illustrationLightboxImage = document.querySelector(".college-time-lightbox-image");
const illustrationClose = document.querySelector(".college-time-lightbox-close");
const illustrationPrevious = document.querySelector(".college-time-lightbox-arrow--prev");
const illustrationNext = document.querySelector(".college-time-lightbox-arrow--next");
let illustrationCurrentIndex = 0;

function showIllustrationImage(index) {
    illustrationCurrentIndex = (index + illustrationBoxes.length) % illustrationBoxes.length;
    illustrationLightboxImage.src = illustrationBoxes[illustrationCurrentIndex].dataset.image;
    illustrationLightbox.hidden = false;
    document.body.classList.add("college-time-lightbox-open");
}

function closeIllustrationLightbox() {
    illustrationLightbox.hidden = true;
    document.body.classList.remove("college-time-lightbox-open");
}

illustrationBoxes.forEach((box, index) => {
    box.style.backgroundImage = `url("${box.dataset.image}")`;
    box.addEventListener("click", () => showIllustrationImage(index));
});

illustrationPrevious.addEventListener("click", () => showIllustrationImage(illustrationCurrentIndex - 1));
illustrationNext.addEventListener("click", () => showIllustrationImage(illustrationCurrentIndex + 1));
illustrationClose.addEventListener("click", closeIllustrationLightbox);

document.addEventListener("keydown", (event) => {
    if (illustrationLightbox.hidden) return;
    if (event.key === "Escape") closeIllustrationLightbox();
    if (event.key === "ArrowLeft") showIllustrationImage(illustrationCurrentIndex - 1);
    if (event.key === "ArrowRight") showIllustrationImage(illustrationCurrentIndex + 1);
});
