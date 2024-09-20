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
  carouselImgs.forEach(img => img.style.display = 'none');
  carouselImgs[index].style.display = 'block';
  carouselImgs[index].classList.add('active'); // Add active class
  carouselImgs[index].classList.remove('inactive'); // Remove inactive class
}

// Exibir a primeira imagem por padrão ao carregar a página
window.onload = function() {
  showImage(0); // Exibe a imagem com índice 0 (a primeira)
};

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

const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.querySelector('.dark-mode-icon');
const lightModeIcon = document.querySelector('.light-mode-icon');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
    darkModeIcon.style.display = 'none';
    lightModeIcon.style.display = 'block';
  } else {
    body.classList.remove('dark-mode');
    darkModeIcon.style.display = 'block';
    lightModeIcon.style.display = 'none';
  }
});

// Event listener para fechar o lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    let startY;
    let description = card.querySelector('.project-description');

    card.addEventListener('touchstart', (event) => {
        startY = event.touches[0].clientY;
    });

    card.addEventListener('touchmove', (event) => {
        const currentY = event.touches[0].clientY;
        const difference = currentY - startY;

        if (difference > 50) { // Ajuste o valor 50 conforme necessário
            description.style.opacity = 1;
        } else {
            description.style.opacity = 0;
        }
    });
});

// Seleciona o botão e o menu
const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');

// Alterna a classe 'open' ao clicar no botão
menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('open');
});
