document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    // Alterna a visibilidade do menu ao clicar no botão hamburguer
    menuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden"); // Alterna a classe 'hidden' (ocultar/exibir)
    });
    
    // Fechar o menu se o usuário clicar fora dele
    document.addEventListener("click", function(event) {
        if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
            mobileMenu.classList.add("hidden"); // Esconde o menu
        }
    });
});
