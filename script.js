const images = document.querySelectorAll(".zoom-img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

//**Open */
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        e.stopImmediatePropagation()
        lightboxImg.src = img.src;

        lightbox.classList.add("active");
    });
});

//**Close */
lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.classList.remove("active");
    }
});

const closeBtn = document.getElementById("lightbox-close");
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});



//* Hamburger Menu

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');


hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})