// Seleciona o botão do menu
const botaoMenu = document.querySelector("#btn-menu");

// Seleciona o menu
const menu = document.querySelector(".nav");

// Quando clicar no botão
botaoMenu.addEventListener("click", function () {

    // Mostra ou esconde o menu
    menu.classList.toggle("ativo");

});