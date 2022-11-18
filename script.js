const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menuSection");
const menu = document.querySelector('.menu');
const exit = document.querySelector('.exit');

hamburger.addEventListener("click", () => {
  //menu.style.display = 'initial'
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".navegacaoLinks").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);


