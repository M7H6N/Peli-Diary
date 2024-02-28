<script>
document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const drawerButton = document.getElementById('nav_dropdown_btn');
    const drawer = document.getElementById('drawer');
    const drawerMask = document.getElementById('drawer-mask');
    const darkModeToggle = document.getElementById('darkModeToggleButton2');
    const body = document.body;

    // Functions
    function toggleDrawer() {
        const isActive = drawer.classList.contains('single-column-drawer-container-active');
        drawer.classList.toggle('single-column-drawer-container-active', !isActive);
        drawerMask.classList.toggle('show', !isActive);
    }

    function applyDarkMode(isDarkMode) {
        body.classList.toggle('dark-mode', isDarkMode);
        if (darkModeToggle) {
            darkModeToggle.innerHTML = isDarkMode ? 'light_mode' : 'dark_mode'; // Update icon based on the mode
        }
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    }

    function toggleDarkMode() {
        const isDarkMode = !body.classList.contains('dark-mode');
        applyDarkMode(isDarkMode);
    }

    // Event Listeners
    if (drawerButton) {
        drawerButton.addEventListener('click', toggleDrawer);
    }
    if (drawerMask) {
        drawerMask.addEventListener('click', toggleDrawer);
    }
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // Initialize Dark Mode
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled' || (savedDarkMode !== 'disabled' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        applyDarkMode(true);
    }

    // Close drawer on navigation
    document.querySelectorAll('#drawer a').forEach(link => {
        link.addEventListener('click', () => drawer.classList.remove('single-column-drawer-container-active'));
    });
});
</script>
