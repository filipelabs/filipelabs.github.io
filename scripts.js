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

// Seleciona os elementos
const carousel = document.querySelector('.carousel');
const carouselImgs = carousel.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentImgIndex = 0;

// Inicializa o carrossel com a primeira imagem ativa
carouselImgs[currentImgIndex].classList.add('active');

// Função para mostrar a imagem ativa
function showImage(index) {
  carouselImgs.forEach(img => img.classList.remove('active'));
  carouselImgs[index].classList.add('active');
}

// Event listener para o botão "prev"
prevBtn.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex - 1 + carouselImgs.length) % carouselImgs.length;
  showImage(currentImgIndex);
});

// Event listener para o botão "next"
nextBtn.addEventListener('click', () => => {
  currentImgIndex = (currentImgIndex + 1) % carouselImgs.length;
  showImage(currentImgIndex);
});

// Event listener para a tecla direita
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    nextBtn.click(); // Simula um clique no botão "next"
  }
});

// Lightbox para exibir a imagem em tamanho maior
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const imagesInCarousel = document.querySelectorAll('.carousel-img');

imagesInCarousel.forEach(img => {
    img.addEventListener('click', function() {
        lightbox.style.display = 'flex';
