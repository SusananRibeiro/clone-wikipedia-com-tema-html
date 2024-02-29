const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');

themeToggleCheckbox.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});
