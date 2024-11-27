function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    menu.classList.toggle("open");  // Toggle the menu visibility
    icon.classList.toggle("open");  // Toggle the icon animation
}

document.addEventListener('DOMContentLoaded', () => {
    const arrows = document.querySelectorAll('.arrow'); // Select all arrows
    
    arrows.forEach((arrow) => {
      arrow.addEventListener('click', () => {
        const nextSection = arrow.closest('section').nextElementSibling; // Find the next section
        if (nextSection) {
          nextSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });
  