// Este script deve ser carregado DEPOIS dos elementos HTML que ele manipula,
// ou use 'defer' no <script> para garantir que o DOM esteja pronto.

// Função global do acordeão
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("i");

  content.classList.toggle("hidden");
  icon.classList.toggle("rotate-179");
}

document.addEventListener("DOMContentLoaded", () => {
  // Animação com Intersection Observer
  const items = document.querySelectorAll("[data-anime]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("anime");
      } else {
        entry.target.classList.remove("anime");
      }
    });
  }, {
    threshold: 0.2
  });
  items.forEach(item => observer.observe(item));

  // Texto rotativo
  const textos = [
    "Aumente a visibilidade do seu negócio com a internet: Criamos produtos personalizados e com estratégia para você",
    "Transforme a experiência do usuário em vendas: Mostre todos benefícios do seu produto ou serviço",
    "Crie conexão e conquiste seus clientes",
  ];
  let index = 0;
  const carousel = document.getElementById('text-carousel');
  function mostrarTexto() {
    carousel.style.opacity = 0;
    setTimeout(() => {
      carousel.textContent = textos[index];
      carousel.style.opacity = 1;
      index = (index + 1) % textos.length;
    }, 500);
  }
  mostrarTexto();
  setInterval(mostrarTexto, 2000);


  // Splide sliders (funciona com múltiplos)
 new Splide('.slider-principal', {
    type: 'loop',
    perPage: 2,
    focus: 'center',
    gap: '1rem',
    direction: 'rtl',
    autoplay: true,
    interval: 2000,
    pauseOnHover: true,
    arrows: false,
    pagination: true,
    lazyLoad: 'nearby',
    keyboard: 'global',
    speed: 600,
    rewind: true,
    drag: 'free',
    breakpoints: {
      640: { perPage: 1 },
      768: { perPage: 2 },
      1024: { perPage: 4 },
    },
  }).mount();

  // Slider secundário
  new Splide('.slider-secundario', {
    type: 'loop',
    perPage: 1,
    gap: '1rem',
    direction: 'ltr',
     interval: 1500,
    autoplay: true,
    arrows: false,
    pagination: false,
    keyboard: true,
    rewind: true,
      breakpoints: {
      640: { perPage: 1 },
      768: { perPage: 1 },
      1024: { perPage: 2 },
    },
  }).mount();
});

