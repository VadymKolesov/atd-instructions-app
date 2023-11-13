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

const selectLang = document.querySelector(".language-choose");
const allLang = ["pl", "ua", "en", "ru"];

selectLang.addEventListener("change", saveLanguage);

function saveLanguage() {
  localStorage.setItem("language", selectLang.value);
  location.reload();
}

function changeLanguage() {
  location.href =
    window.location.pathname + "#" + localStorage.getItem("language");
  selectLang.value = localStorage.getItem("language") || "pl";
  let hash = selectLang.value;

  for (let key in lngArr) {
    let elemLang = document.querySelector([`[data-lang="${key}"]`]);
    if (elemLang) {
      elemLang.innerHTML = lngArr[key][hash];
    }
  }
}

changeLanguage();

const instructionToggleButton = document.getElementById("instructionToggle");

if (instructionToggleButton) {
  instructionToggleButton.onclick = function () {
    const instructionArrow = document.getElementById("hideArrowInstruction");
    const instructionItem = document.getElementById("dropdownInstruction");
    instructionItem.classList.toggle("instruction-show");
    instructionArrow.classList.toggle("rotate-instruction-arrow");
  };
}

const modalWarehouse = document.querySelector(".modal-backdrop");
const warehouseList = document.querySelector(".warehouse-list");

let choosedWarehouse = localStorage.getItem("warehouse");

if (modalWarehouse) {
  warehouseList.addEventListener("click", saveWarehouse);

  function saveWarehouse({ target }) {
    localStorage.setItem("warehouse", target.textContent.trim());
    location.reload();
  }

  if (!choosedWarehouse) {
    modalWarehouse.style.opacity = "1";
    modalWarehouse.style.visibility = "visible";
    modalWarehouse.style.display = "flex";
  } else {
    warehouseList.removeEventListener("click", saveWarehouse);
  }
}

const upButton = document.querySelector(".up-button");

if (upButton) {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.documentElement.scrollTop > 1500) {
      upButton.style.display = "block";
    } else {
      upButton.style.display = "none";
    }
  }

  upButton.addEventListener("click", toTopScroll);

  function toTopScroll() {
    document.documentElement.scrollTop = 0;
  }
}
