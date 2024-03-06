document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', () => {
      const panel = button.nextElementSibling;
      button.classList.toggle('active');
      panel.classList.toggle('active');
    });
  });
  