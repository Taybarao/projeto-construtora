window.sr = ScrollReveal({ reset: true });
sr.reveal('.titulo-apresentaçao', { duration: 2500 });
sr.reveal('.texto-apresentaçao', { duration: 3000 });
sr.reveal('.serviços', { duration: 1200 });
sr.reveal('.sr1', { duration: 3000 });
sr.reveal('.sr2', { duration: 6000 });
sr.reveal('.sr3', { duration: 7000 });
sr.reveal('.beneficios', { duration: 2000 });
sr.reveal('.container-botoes-beneficions', { duration: 1200 });
sr.reveal('.contato', { duration: 1800 });



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






