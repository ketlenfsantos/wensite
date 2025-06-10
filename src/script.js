document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("[data-anime]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("anime");
      } else {
        // Remove se quiser repetir ao voltar
        entry.target.classList.remove("anime");
      }
    });
  }, {
    threshold: 0.2 // quanto do elemento precisa estar visível
  });

  items.forEach(item => observer.observe(item));



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
  setInterval(mostrarTexto, 2000); // troca a cada 3 segundos


 function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector("i");

    // Alterna a visibilidade
    content.classList.toggle("hidden");

    // Gira a seta suavemente
    icon.classList.toggle("rotate-179");
  }
});