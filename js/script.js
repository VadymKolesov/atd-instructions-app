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

const checkLang = (el) => el === localStorage.getItem("language");

if (!allLang.some(checkLang)) {
  localStorage.setItem("language", "pl");
}

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
    window.scrollBy(0, 1000);
    if (!document.querySelector(".rotate-instruction-arrow")) {
      document.documentElement.scrollTop = 0;
    }
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
    if (document.documentElement.scrollTop > 1000) {
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

if (document.querySelector(".lng-clue")) {
  const lngClue = document.querySelector(".lng-clue");
  const lngClueContent = document.querySelector(".lng-clue-content");

  function showLngClue() {
    lngClue.classList.add("lng-clue-show");
    setTimeout(() => {
      lngClueContent.classList.add("lng-clue-content-show");
    }, 300);
  }

  function hideLngClue() {
    lngClueContent.classList.remove("lng-clue-content-show");

    setTimeout(() => {
      lngClue.classList.remove("lng-clue-show");
    }, 200);
    setTimeout(() => {
      lngClue.remove();
    }, 600);
  }

  setTimeout(() => {
    showLngClue();
    setTimeout(() => {
      hideLngClue();
    }, 10000);
  }, 500);
}

if (document.querySelector(".reg-clue")) {
  const regClue = document.querySelector(".reg-clue");

  function showRegClue() {
    regClue.classList.add("reg-clue-show");
  }

  showRegClue();
}

if (document.querySelector(".quest-input")) {
  const input = document.querySelector(".quest-input");
  const placeholderLng = localStorage.getItem("language");
  input.placeholder = lngArr.qfp[placeholderLng];
  const button = document.querySelector(".quest-button");
  const closeQuestionFormBtn = document.querySelector(".close-quest-button");
  const qForm = document.querySelector(".question-form");
  const openQuestionFormBtn = document.querySelector(".open-form-btn");
  const questionForm = document.querySelector(".backdrop-modal");
  const doneMessage = `<div class="quest-done-message">
  <p class="done-text"></p>
  <svg class="done-icon" width="60" height="60">
    <use href="./images/svg-group.svg#icon-done"></use>
  </svg>
</div>`;

  openQuestionFormBtn.addEventListener("click", openQuestionForm);

  function openQuestionForm(e) {
    questionForm.classList.remove("form-hidden");
    document.body.classList.add("no-scroll");
    openQuestionFormBtn.style.animation =
      "openFormBtnActive 300ms ease forwards";
    qForm.style.animation = "questOpenFormAnimation 500ms ease forwards";
  }

  questionForm.addEventListener("click", clsQuestionForm);

  function clsQuestionForm(e) {
    if (e.target === questionForm || e.target === closeQuestionFormBtn) {
      setTimeout(() => {
        questionForm.classList.add("form-hidden");
        document.body.classList.remove("no-scroll");
        input.value = "";
        input.style.border = "transparent";
      }, 350);

      openQuestionFormBtn.style.animation = "openFormBtn 5s ease infinite";
      qForm.style.animation = "questCloseFormAnimation 400ms ease forwards";
    }
  }
  button.addEventListener("click", sendPostRequest);
  function sendPostRequest() {
    const message = input.value;
    const url =
      "https://script.google.com/macros/s/AKfycbxEyClRPf_GA-8EWv7obFy51IQCC6ifePMDX2ZhvTUsbCdF25SxxGYOZxEtlSkyYQ_D/exec";

    const data = { question: message };

    const options = {
      redirect: "follow",
      method: "POST",
      "Access-Control-Allow-Origin": "*",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    };
    if (!input.value) {
      console.log("Wpisz");
      input.style.border = "1px solid red";
    } else {
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(() => {
          console.log("POST request send!");
        })
        .catch((error) => {
          console.error("Error to fetch POST request:", error);
        });
      qForm.style.animation = "questCloseFormAnimation 400ms ease forwards";
      setTimeout(() => {
        questionForm.classList.add("form-hidden");
        document.body.classList.remove("no-scroll");
        input.value = "";
        input.style.border = "transparent";
      }, 350);
      openQuestionFormBtn.insertAdjacentHTML("afterend", doneMessage);

      setTimeout(() => {
        document.querySelector(".done-text").textContent =
          lngArr.qdm[placeholderLng];
      }, 200);
      setTimeout(() => {
        document.querySelector(".done-text").textContent = "";
        document.querySelector(".quest-done-message").remove();
        openQuestionFormBtn.style.animation = "openFormBtn 5s ease infinite";
      }, 2650);
    }
  }
}

if (
  !localStorage.getItem("entryPath") &&
  window.location.pathname.includes("index.html")
) {
  localStorage.setItem("entryPath", window.location.pathname);
}

if (window.location.pathname !== "/index.html") {
  const backdropTimer = document.createElement("div");
  const timerItem = document.createElement("div");
  const timerMessage = document.createElement("p");
  const timer = document.createElement("p");
  const timerButton = document.createElement("button");
  let metalink = document.createElement("meta");

  backdropTimer.classList.add("backdrop-modal");
  timerItem.classList.add("timer-item");
  timer.classList.add("timer");
  timerButton.classList.add("timer-btn");

  timerMessage.textContent =
    lngArr["timer-msg"][localStorage.getItem("language")];
  timer.textContent = 10;
  timerButton.textContent =
    lngArr["timer-btn"][localStorage.getItem("language")];
  timerButton.setAttribute("type", "submit");

  function showActivityMessage() {
    document.querySelector("body").appendChild(backdropTimer);
    backdropTimer.appendChild(timerItem);
    timerItem.appendChild(timerMessage);
    timerItem.appendChild(timer);
    timerItem.appendChild(timerButton);

    timerButton.addEventListener("click", hideActivityMessage);
  }

  function hideActivityMessage() {
    backdropTimer.remove();
  }

  let activeTimeout = 180000;
  let lastActive = new Date().getTime();
  let userIsActive = false;

  window.addEventListener("load", setIsActive);
  window.addEventListener("scroll", setIsActive);
  window.addEventListener("keypress", setIsActive);
  window.addEventListener("click", setIsActive);

  let chekActivity;
  let timerClocking;
  let timeOutRemoveActivity;
  let entryPath = localStorage.getItem("entryPath");

  function checkUserActivity() {
    if (new Date().getTime() - lastActive > activeTimeout) {
      removeIsActive();
      showActivityMessage();
      clearInterval(chekActivity);
      timerClocking = setInterval(() => {
        timer.textContent -= 1;
        if (timer.textContent < 0) {
          clearInterval(timerClocking);
          timer.textContent = 10;
        }
      }, 1000);

      timeOutRemoveActivity = setTimeout(() => {
        userIsActive = false;
        location.href = window.location.href.replace(
          window.location.pathname,
          entryPath
        );
      }, 10000);
    }
  }

  function removeIsActive() {
    if (userIsActive) {
      userIsActive = false;
    }
  }

  function setIsActive() {
    lastActive = new Date().getTime();
    if (!userIsActive) {
      clearInterval(timerClocking);
      clearTimeout(timeOutRemoveActivity);
      timer.textContent = 10;
      userIsActive = true;
      chekActivity = setInterval(checkUserActivity, 1000);
      hideActivityMessage();
    }
  }
}
