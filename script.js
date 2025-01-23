// let slideIndex = 0;
// showSlides();

// function showSlides() {
    // let i;
    // let slides = document.getElementsByClassName("mySlides");
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    // }
    // slideIndex++;
    // if (slideIndex > slides.length) {slideIndex = 1}
    // slides[slideIndex-1].style.display = "block";
    // setTimeout(showSlides, 2000); // Muda a imagem a cada 2 segundos
// }

let imagens = document.querySelectorAll(".troca-imagem");

imagens.forEach((imagem) => {
    imagem.style.opacity = "1"; // Inicializa a opacidade para todas as imagens
    setInterval(() => {
        if(imagem.style.opacity == "0") {
            imagem.style.opacity = "1";
        } else {
            imagem.style.opacity = "0";
        }
    }, 3000);
});
