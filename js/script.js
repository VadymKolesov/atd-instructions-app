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
};

function changeLanguage() {
  location.href = window.location.pathname + "#" + localStorage.getItem("language");
  selectLang.value = localStorage.getItem("language") || "pl";
  let hash = selectLang.value;

  for (let key in lngArr) {
    let elemLang = document.querySelector([`[data-lang="${key}"]`]);
    if (elemLang) {
      elemLang.innerHTML = lngArr[key][hash];
      
    };
  };
};

changeLanguage();

const instructionToggleButton = document.getElementById("instructionToggle");

if (instructionToggleButton) {
  instructionToggleButton.onclick = function() {
  const instructionArrow = document.getElementById("hideArrowInstruction");
  const instructionItem = document.getElementById("dropdownInstruction");
    instructionItem.classList.toggle("instruction-show");
    instructionArrow.classList.toggle("rotate-instruction-arrow");
};
};



































// languageChoose.onclick = function() {
//     const dropdownItem = document.getElementById("dropdown");
//     const arrowHide = document.getElementById("hideArrow");
//     const languageName = document.getElementById("languageName");
//     dropdownItem.classList.toggle("show");
//     arrowHide.classList.toggle("rotate-hide-icon");


//     if (!dropdownItem.classList.contains('show')) {
//         arrowHide.classList.remove("rotate-hide-icon");

// };
// };















// instructionToggle.onclick = function() {
//   const dropdownInstruction = document.getElementById("dropdownInstruction");
//   const arrowInstruction = document.getElementById("hideArrowInstruction");
//   const dropdownOpenScroll = document.getElementById("scrollToOpen");
//   const dropdownCloseScroll = document.getElementById("scrollToClose");
//   dropdownInstruction.classList.toggle("instruction-show");
//   arrowInstruction.classList.toggle("rotate-instruction-arrow");
//   dropdownOpenScroll.scrollIntoView({ block: "center", behavior: "smooth" });
//   if (!dropdownInstruction.classList.contains('instruction-show')) {
//     arrowInstruction.classList.remove("rotate-instruction-arrow");
//     dropdownCloseScroll.scrollIntoView({ block: "center", behavior: "smooth" });
// };
// };




// dropdownItem.onclick = function() {
//     if (dropdownItem.classList.contains('show')) {
//         dropdownItem.classList.remove('show');
//     };
// };
    

















// const select = document.querySelector('.languages');
// const languageSelection = document.querySelectorAll(".language-name");
// let languageArray = [];

// function pushLang(){
//   for (let langItem of languageSelection) {
//     languageArray.push(langItem.innerHTML);
//   }
//   console.log(languageArray);
// };

// pushLang();




// const languageItems = document.querySelectorAll(".language-item");

// for (let item of languageItems) {
//   console.log(item.lastElementChild.innerHTML);
// };


// const allLang = ["pl", "ua", "en", "ru"];
// let nameLang = "";
// let nameLangTag = "";

// function changeNameLang() {
//   if (nameLang === "Polski") {
//     nameLangTag = "pl";
//   } else
//   if (nameLang === "Українська") {
//     nameLangTag = "ua";
//   } else
//   if (nameLang === "English") {
//     nameLangTag = "en";
//   }
//   if (nameLang === "Русский") {
//     nameLangTag = "ru";
//   }
// };

// function changeLanguageURL() {

//   for (let item of languageSelection) {
//     item.onclick = function() {
//       nameLang = item.innerHTML;
//       changeNameLang();
//       location.href = window.location.pathname + "#" + nameLangTag;
//       location.reload();
//     }
//   };
// };

// changeLanguageURL();

// function changeLanguage() {
//   let hash = window.location.hash;
//   hash = hash.substring(1);
//   console.log(hash);
//   if (!allLang.includes(hash)) {
//     location.href = window.location.pathname + "#pl";
//     location.reload();
//   };
//   for (let key in lngArr) {
//     document.querySelector(".lng-"+key).innerHTML = lngArr[key][hash];
//   };
// };

// changeLanguage();