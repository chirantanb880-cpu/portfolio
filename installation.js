const installationImage = document.querySelector(".installation-showcase img");

if (installationImage) {
    installationImage.setAttribute("loading", "eager");
}

const installationPlayButtons = document.querySelectorAll(".installation-secondary-play");

installationPlayButtons.forEach((installationPlay) => {
    const installationFeature = installationPlay.closest(".installation-secondary-feature");
    const installationVideo = installationFeature ? installationFeature.querySelector(".installation-secondary-video") : null;

    if (!installationFeature || !installationVideo) return;

    installationPlay.addEventListener("click", () => {
        installationFeature.classList.add("is-playing");

        if (!installationVideo.src.includes("autoplay=1")) {
            installationVideo.src += installationVideo.src.includes("?") ? "&autoplay=1" : "?autoplay=1";
        }
    });
});

