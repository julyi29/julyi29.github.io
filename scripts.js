// Function to update the copyright year dynamically
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;
  }
  
  // Call the function to update the year on page load
  updateCopyrightYear();

  const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
});