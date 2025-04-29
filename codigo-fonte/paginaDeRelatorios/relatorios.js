// Script para controlar o menu mobile
document.querySelector('.mobile-menu-toggle').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('active');
    this.classList.toggle('active');
});
