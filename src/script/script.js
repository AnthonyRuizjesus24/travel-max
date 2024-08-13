document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Verificar el tema preferido del usuario en localStorage
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      themeIcon.textContent = '☀️'; // Icono para el modo claro
    } else {
      themeIcon.textContent = '🌙'; // Icono para el modo oscuro
    }
  
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '☀️'; // Cambiar icono a modo claro
      } else {
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '🌙'; // Cambiar icono a modo oscuro
      }
    });
  });
  