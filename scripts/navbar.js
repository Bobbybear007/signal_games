// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Create navbar structure
    const navbar = `
      <nav class="navbar">
        <div class="navbar-brand"></div>
        <ul class="navbar-links">
          <li><a href="#aboutSection">ABOUT</a></li>
          
          <li><a href="#games">GAMES</a></li>
          <li><a href="https://discord.gg/mnNBXvvd">DISCORD</a></li>
          
        </ul>
        <button class="navbar-toggle">☰</button>
      </nav>
    `;
  
    // Inject navbar into the container
    document.getElementById('navbar-container').innerHTML = navbar;
  
    // Add toggle functionality
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
  
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  });
  

  //
  //<li><a href="#contact">CONTACT</a></li>