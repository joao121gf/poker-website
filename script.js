// Seleciona o botão hambúrguer e a lista de navegação
const hamburger = document.getElementById("hamburger");
const navList = document.querySelector("nav ul");

// Adiciona um evento de clique ao hambúrguer
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("show");
});
