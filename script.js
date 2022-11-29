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

// constante com valor igual ao media query criado para o menu mobile
const mobileWindowSize = 992;

// variável que determina o estado do menu mobile
let isMobileMenuOpen;

// agora quando o menu abre, a variável de controle "isMobileMenuOpen" é setada para true
function openMenu() {
  isMobileMenuOpen = true
  menu.classList.add('flex')
  menu.classList.add('menuSection')
  hamburgerIcone.classList.add("invisivel");
  navMenu.classList.add("flex");
  navMenu.classList.add("active");
}

// agora quando o menu fecha, a variável de controle "isMobileMenuOpen" é setada para false
function closeMenu() {
  isMobileMenuOpen = false
  menu.classList.remove('flex')
  menu.classList.remove('menuSection')
  hamburgerIcone.classList.remove("invisivel");
  navMenu.classList.add("active");
}

hamburger.addEventListener("click", openMenu);
exit.addEventListener('click', closeMenu);

// quando o menu mobile está aberto e a largura da janela é igual ou maior a constante "mobileWindowSize", o menu mobile fecha
addEventListener("resize", () => {
  if(isMobileMenuOpen && window.innerWidth >= mobileWindowSize) {
    closeMenu()
  }
});

/* document.querySelectorAll(".navegacaoLinks").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
); */


