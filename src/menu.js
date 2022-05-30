(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open_btn '),
    closeMenuBtn: document.querySelector('.menu-close_btn '),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
