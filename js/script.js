// On page load, retrieve the saved role
window.onload = function() {
    const savedRole = localStorage.getItem('preferredRole');
    if (savedRole) {
        document.getElementById('role').value = savedRole;
    }
};

// Save role whenever it changes
document.getElementById('role').addEventListener('change', function() {
    localStorage.setItem('preferredRole', this.value);
});
