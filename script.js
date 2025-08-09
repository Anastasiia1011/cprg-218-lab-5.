window.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const themeToggle = document.getElementById('theme-toggle');
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      themeToggle.checked = true;
    }
  
    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  
   
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const targetUrl = encodeURIComponent('https://zenquotes.io/api/random');
  
    fetch(proxyUrl + targetUrl)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Network response was not ok.');
      })
      .then(data => {
     
        const quotes = JSON.parse(data.contents);
        const quoteData = quotes[0];
        document.getElementById('quote').textContent =
          `"${quoteData.q}" — ${quoteData.a}`;
      })
      .catch((error) => {
        console.error('Error loading quote:', error);
        document.getElementById('quote').textContent = "Don't criticize what you can't understand.";
      });
  });