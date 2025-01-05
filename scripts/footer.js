document.addEventListener('DOMContentLoaded', () => {
    const footer = `
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-logo">
            <h2>SIGNAL</h2>
          </div>
          <div class="footer-links">
            <ul>
              <li><a href="#aboutSection">About</a></li>
              <li><a href="#games">Games</a></li>
              
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-social">
            <a href="#" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://discord.gg/mnNBXvvd" aria-label="Discord">
              <i class="fab fa-discord"></i>
            </a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Signal Game Studio. All rights reserved.</p>
        </div>
      </footer>
    `;
  
    // Append the footer to the end of the body
    document.body.insertAdjacentHTML('beforeend', footer);
  });
  