//efeito slide section apresentaçao//
let time = 5500,
    imagemVista = 0,
    imagens = document.querySelectorAll("#slider img"),
    max = imagens.length;
function nextImage() {
    imagens[imagemVista].classList.remove("selected")
    imagemVista++
    if (imagemVista >= max) {
        imagemVista = 0;
    }
    imagens[imagemVista].classList.add("selected")
}
function start() {
    setInterval(() => {
        nextImage();
    }, time)
}
window.addEventListener("load", start);


window.sr = ScrollReveal({ reset: true });
sr.reveal('.titulo-apresentaçao', { duration: 4500 });
sr.reveal('.texto-apresentaçao', { duration: 7000 });

