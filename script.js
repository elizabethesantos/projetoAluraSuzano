const hamburger = document.querySelector(".hamburger");
const hamburgerIcone = document.querySelector(".hamburgerIcone");
const navMenu = document.querySelector(".menuSection");
const menu = document.querySelector('.menu');
const baseMenu = document.querySelector('.baseMenu')
const exit = document.querySelector('.exit');

hamburger.addEventListener("click", () => {
  menu.classList.add('flex')
  menu.classList.add('menuSection')
  hamburgerIcone.classList.add("invisivel");
  navMenu.classList.add("flex");
  navMenu.classList.add("active");
});

exit.addEventListener('click', () => {
  menu.classList.remove('flex')
  menu.classList.remove('menuSection')
  hamburgerIcone.classList.remove("invisivel");
  navMenu.classList.add("active");
})

/* document.querySelectorAll(".navegacaoLinks").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
); */


