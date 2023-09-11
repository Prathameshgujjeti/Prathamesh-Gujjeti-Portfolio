// Function to handle the 'Tab' key press
const handleFirstTab = (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')
    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }
}

// Function to handle the first mouse click
const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')
  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

// Add an event listener for 'keydown' to trigger the initial 'Tab' key press handling
window.addEventListener('keydown', handleFirstTab)

// Select the back-to-top button and initialize a variable to track its rendering state
const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

// Function to alter the styles of the back-to-top button
let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

// Add a scroll event listener to show/hide the back-to-top button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});
