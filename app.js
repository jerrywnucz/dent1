const navSlide = () => {
  const navBurger = document.querySelector(".nav__burger");
  const navMenu = document.querySelector(".nav__menu");

  navBurger.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--slide");
  });
};

const navBurgerDark = () => {
  const navBurger = document.querySelector(".nav__burger");

  navBurger.addEventListener("click", () => {
    navBurger.classList.toggle("nav__burger--dark");
  });
};
navBurgerDark();
navSlide();
