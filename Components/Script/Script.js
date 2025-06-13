document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Obrigado! Você será avisado quando lançarmos o app.");
});


  const toggleBtn = document.getElementById('toggleTheme');
  const themeIcon = document.getElementById('themeIcon');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light');

    // Muda o ícone entre sol (claro) e lua (escuro)
    if (body.classList.contains('light')) {
      themeIcon.innerHTML = `
        // Ícone de lua
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      `;
    } else {
      themeIcon.innerHTML = `
        // Ícone de sol 
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M18.364 18.364l-1.414-1.414M6.05 6.05L4.636 7.464M12 8a4 4 0 100 8 4 4 0 000-8z" />
      `;
    }
  });

