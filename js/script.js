function toggleTheme() {
    var body = document.body;
    var nav = document.querySelector('nav');
    var container = document.querySelector('.container');
    var footer = document.querySelector('footer');

    // Toggle dark theme
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        nav.classList.remove('dark-theme');
        container.classList.remove('dark-theme');
        footer.classList.remove('light-theme');
    } else {
        body.classList.add('dark-theme');
        nav.classList.add('dark-theme');
        container.classList.add('dark-theme');
        footer.classList.add('light-theme');
    }
}
