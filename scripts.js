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
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-img');
images[0].classList.add('active'); // Adiciona a classe active à primeira imagem
const totalImages = images.length;

document.querySelector('.next').addEventListener('click', function() {
  const currentImage = document.querySelector('.carousel-img.active');
  currentImage.classList.remove('active');
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', function() {
  const currentImage = document.querySelector('.carousel-img.active');
  currentImage.classList.remove('active');
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  images[currentIndex].classList.add('active');
});

// Lightbox para exibir a imagem em tamanho maior
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const imagesInCarousel = document.querySelectorAll('.carousel-img');

imagesInCarousel.forEach(img => {
    img.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
    });
});

document.querySelector('.close').addEventListener('click', function() {
    lightbox.style.display = 'none';
});
