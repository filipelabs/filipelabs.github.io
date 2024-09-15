// Pega o botão
const backToTopButton = document.getElementById("back-to-top");

// Quando o usuário rolar para baixo 20px a partir do topo da página, mostra o botão
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Quando o usuário clicar no botão, volta ao topo da página
backToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
});

// Carrossel de imagens
const carousel = document.querySelector('.carousel');
const carouselImgs = carousel.querySelectorAll('.carousel-img');
let currentImgIndex = 0;

// Inicialize o carrossel com a primeira imagem ativa
carouselImgs[currentImgIndex].classList.add('active');

// Adicione um event listener para o botão "prev"
document.querySelector('.prev').addEventListener('click', function() {
  carouselImgs[currentImgIndex].classList.remove('active');
  currentImgIndex = (currentImgIndex - 1 + carouselImgs.length) % carouselImgs.length;
  carouselImgs[currentImgIndex].classList.add('active');
});

// Adicione um event listener para o botão "next"
const nextBtn = document.querySelector('.next');
nextBtn.addEventListener('click', function() {
  carouselImgs[currentImgIndex].classList.remove('active');
  currentImgIndex = (currentImgIndex + 1) % carouselImgs.length;
  carouselImgs[currentImgIndex].classList.add('active');
});

// Adicione um event listener para a tecla direita
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    carouselImgs[currentImgIndex].classList.remove('active');
    currentImgIndex = (currentImgIndex + 1) % carouselImgs.length;
    carouselImgs[currentImgIndex].classList.add('active');
  }
});

// Lightbox para exibir a imagem em tamanho maior
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const imagesInCarousel = document.querySelectorAll('.carousel-img');

imagesInCarousel.forEach(img => {
    img.addEventListener('click', function() {
        lightbox.style.display = 'flex';
