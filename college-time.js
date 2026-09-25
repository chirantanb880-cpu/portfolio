const collegeTimeImageNames = [
    "A_001.jpg", "A_002.jpg", "A_003.jpg", "A_004.jpg", "A_005.jpg", "A_006.jpg", "A_007.jpg", "A_008.jpg", "A_009.jpg", "A_010.jpg",
    "A_011.jpg", "A_012.jpg", "A_013.jpg", "A_014.jpg", "A_015.jpg", "A_0016.jpg", "A_017.jpg", "A_018.jpg", "A_019.jpg", "A_020.jpg",
    "A_021.jpg", "A_022.jpg", "A_023.jpg", "A_024.jpg", "A_025.jpg", "A_026.jpg", "A_027.jpg", "A_028.jpg", "A_029.jpg", "A_030.jpg",
    "A_031.jpg", "A_032.jpg", "A_034.jpg", "A_035.jpg", "A_036.jpg", "A_037.jpg",
    "B_001.jpg", "B_002.jpg", "B_003.jpg", "B_004.jpg", "B_005.jpg", "B_006.jpg", "B_007.jpg", "B_008.jpg", "B_009.jpg", "B_010.jpg",
    "B_011.jpg", "B_012.jpg", "B_013.jpg", "B_014.jpg", "B_015.jpg", "B_016.jpg", "B_017.jpg", "B_018.jpg", "B_019.jpg", "B_020.jpg",
    "C_001.jpg", "C_002.jpg", "C_003.png", "C_004.png", "C_005.png", "C_006.png", "C_007.png", "C_008.png", "C_009.png", "C_010.png",
    "C_011.png", "C_012.png", "C_013.png", "C_014.png", "C_015.png", "C_016.png", "C_017.png", "C_018.png", "C_019.png", "C_020.png", "C_21.png",
    "C_022.png", "C_023.png", "C_024.png", "C_025.png", "C_026.png", "C_027.png", "C_028.png", "C_029.png", "C_030.png", "C_031.jpg",
    "C_032.jpg", "C_033.jpg", "C_034.jpg", "C_035.jpg", "C_036.jpg", "C_037.png", "C_038.jpg", "C_039.png", "C_040.png", "C_041.png",
    "C_042.JPG", "C_043.JPG", "C_044.JPG", "C_045.jpg", "C_046.jpg", "C_047.jpg", "C_048.jpg", "C_050.jpg", "C_051.jpg", "C_052.jpg",
    "C_053.jpg", "C_054.1.jpg", "C_054.jpg", "C_055.jpg", "C_056.jpg", "C_057.jpg", "C_058.jpg", "C_059.jpg", "C_060.jpg", "C_061.jpg",
    "C_062.jpg", "C_063.jpg",
    "D_001.jpg", "D_002.jpg", "D_003.jpg", "D_004.jpg", "D_005.jpg", "D_006.jpg", "D_007.jpg", "D_008.jpg", "D_009.jpg", "D_010.jpg",
    "D_011.jpg", "D_012.jpg", "D_013.jpg", "D_014.jpg", "D_015.jpg", "D_016.jpg"
];
const collegeTimeGallery = document.querySelector(".college-time-gallery");
const collegeTimeImagePath = (name) => `My all works/${name}`;
const collegeTimeExcludedImages = new Set(["A_033.jpg"]);
const collegeTimeDisplayOrder = ["D", "C", "B", "A"];
const collegeTimeOrderedImageNames = collegeTimeDisplayOrder.flatMap((prefix) =>
    collegeTimeImageNames.filter((name) => name.startsWith(`${prefix}_`))
);

collegeTimeOrderedImageNames.filter((name) => !collegeTimeExcludedImages.has(name)).forEach((name, index) => {
    const box = document.createElement("button");
    box.className = "college-time-box";
    box.type = "button";
    box.dataset.image = collegeTimeImagePath(name);
    box.style.backgroundImage = `url("${box.dataset.image}")`;
    box.setAttribute("aria-label", `Open College Time image ${index + 1}: ${name}`);
    collegeTimeGallery.appendChild(box);
});

const collegeTimeBoxes = Array.from(document.querySelectorAll(".college-time-box"));
const collegeTimeLightbox = document.querySelector(".college-time-lightbox");
const collegeTimeLightboxImage = document.querySelector(".college-time-lightbox-image");
const collegeTimeClose = document.querySelector(".college-time-lightbox-close");
const collegeTimePrevious = document.querySelector(".college-time-lightbox-arrow--prev");
const collegeTimeNext = document.querySelector(".college-time-lightbox-arrow--next");
let collegeTimeCurrentIndex = 0;

function showCollegeTimeImage(index) {
    collegeTimeCurrentIndex = (index + collegeTimeBoxes.length) % collegeTimeBoxes.length;
    collegeTimeLightboxImage.src = collegeTimeBoxes[collegeTimeCurrentIndex].dataset.image;
    collegeTimeLightbox.hidden = false;
    document.body.classList.add("college-time-lightbox-open");
}

function closeCollegeTimeLightbox() {
    collegeTimeLightbox.hidden = true;
    document.body.classList.remove("college-time-lightbox-open");
}

collegeTimeBoxes.forEach((box, index) => {
    box.addEventListener("click", () => showCollegeTimeImage(index));
});

collegeTimePrevious.addEventListener("click", () => showCollegeTimeImage(collegeTimeCurrentIndex - 1));
collegeTimeNext.addEventListener("click", () => showCollegeTimeImage(collegeTimeCurrentIndex + 1));
collegeTimeClose.addEventListener("click", closeCollegeTimeLightbox);

document.addEventListener("keydown", (event) => {
    if (collegeTimeLightbox.hidden) return;
    if (event.key === "Escape") closeCollegeTimeLightbox();
    if (event.key === "ArrowLeft") showCollegeTimeImage(collegeTimeCurrentIndex - 1);
    if (event.key === "ArrowRight") showCollegeTimeImage(collegeTimeCurrentIndex + 1);
});
