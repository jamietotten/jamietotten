// Theme Toggle Functionality
class ThemeToggle {
  constructor() {
    this.toggle = document.getElementById('theme-toggle');
    this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.init();
  }

  init() {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = this.prefersDarkScheme.matches ? 'dark' : 'light';
    const currentTheme = savedTheme || systemTheme;
    
    // Apply the theme
    this.applyTheme(currentTheme);
    
    // Add event listeners
    this.toggle.addEventListener('click', () => this.toggleTheme());
    this.prefersDarkScheme.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.updateToggleIcon(theme);
  }

  updateToggleIcon(theme) {
    this.toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    this.toggle.setAttribute('aria-label', 
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    this.applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeToggle();
});
