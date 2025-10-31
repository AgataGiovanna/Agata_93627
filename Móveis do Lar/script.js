document.addEventListener('DOMContentLoaded', () => {

  const imagens = document.querySelectorAll('.sobre img, .destaques img');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
      }
    });
  }, { threshold: 0.3 });

  imagens.forEach(img => observer.observe(img));


  // Validação do formulário
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = form.querySelector('[name="nome"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const mensagem = form.querySelector('[name="mensagem"]').value.trim();

      if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
      }

      alert('Mensagem enviada com sucesso!');
      form.reset();
    });
  }
});
