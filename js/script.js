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




languageChoose.onclick = function() {
    const dropdownItem = document.getElementById("dropdown");
    const arrowHide = document.getElementById("hideArrow");
    const languageName = document.getElementById("languageName");
    dropdownItem.classList.toggle("show");
    arrowHide.classList.toggle("rotate-hide-icon");


    if (!dropdownItem.classList.contains('show')) {
        arrowHide.classList.remove("rotate-hide-icon");

};
};


// dropdownItem.onclick = function() {
//     if (dropdownItem.classList.contains('show')) {
//         dropdownItem.classList.remove('show');
//     };
// };
    