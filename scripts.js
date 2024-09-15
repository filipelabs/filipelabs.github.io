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
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

let currentImgIndex = 0;

// Função para mostrar a imagem ativa com transição
function showImage(index) {
  // Esconde todas as imagens antes de mostrar a ativa
  carouselImgs.forEach(img => img.style.display = 'none');

  // Mostra apenas a imagem ativa
  carouselImgs[index].style.display = 'block';
}

// Event listeners para os botões
prevBtn.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex - 1 + carouselImgs.length) % carouselImgs.length;
  showImage(currentImgIndex);
});

nextBtn.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex + 1) % carouselImgs.length;
  showImage(currentImgIndex);
});

// Event listener para abrir o lightbox
carouselImgs.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

// Event listener para fechar o lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
