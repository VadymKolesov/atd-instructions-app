(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
    };
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();

  function languageChoose() {
    document.getElementById("chooseLanguage").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.language-btn')) {

    var dropdowns = document.getElementsByClassName("languages");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function rotateArrow() {
document.getElementById("rotate").classList.toggle("rotate-hide-icon");
}
window.onclick = function(event) {
  if (!event.target.matches('.language-btn')) {

    var rotate = document.getElementsByClassName("hide-arrow-icon");
    var i;
    for (i = 0; i < rotate.length; i++) {
      var rotateItem = rotate[i];
      if (rotateItem.classList.contains('rotate-hide-icon')) {
        rotateItem.classList.remove('rotate-hide-icon');
      }
    }
  }
};

