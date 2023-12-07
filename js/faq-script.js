const faqList = document.querySelector(".faq-list");
const newItem = document.createElement("li");
const newParagraph = document.createElement("p");
let sourceHash = localStorage.getItem("language");

function addQuestion(source) {
  return source
    .map(
      (source) => `<li>
            <div class="faq-item">
              <p class="question-text">${source.item.question[sourceHash]}</p>
              <svg class="toggle-arrow-icon faq-arrow" width="28" height="28">
                <use href="../images/svg-group.svg#icon-hide-arrow">
                </use>
              </svg>
            </div>
            <p class="faq-answer-item">${source.item.answer[sourceHash]}</p>
          </li>`
    )
    .join(` `);
}

let questions = addQuestion(faqQuestions);
faqList.innerHTML = questions;

const faqToggle = document.querySelector(".faq-item");
const faqArrow = document.querySelector(".faq-arrow");
const faqAnswerItem = document.querySelector(".faq-answer-item");
const faqAnswerItemAll = document.querySelectorAll(".faq-answer-item");

let arr = {};
function hideAnswer(answers) {
  for (item of answers) {
    const keyName = item.textContent;
    const keyValue = window.getComputedStyle(item, null).height;
    arr[keyName] = keyValue;
    item.style.height = 0;
  }
}
hideAnswer(faqAnswerItemAll);

const openFaqItem = (event) => {
  let target = event.target;
  const answerItem = target.nextElementSibling;
  const targetItemKey = target.nextElementSibling.textContent;
  const targetItemHeight = arr[targetItemKey];
  const toggleArrow = target.lastElementChild;

  if (target.tagName === "DIV" && answerItem.style.height === "0px") {
    answerItem.style.height = targetItemHeight;
    answerItem.style.padding = "20px 25px 3px 25px";
    toggleArrow.classList.add("rotate-instruction-arrow");
  } else if (target.tagName === "DIV" && answerItem.style.height !== "0px") {
    answerItem.style.height = "0px";
    answerItem.style.padding = "0 25px";
    toggleArrow.classList.remove("rotate-instruction-arrow");
  }
};

faqList.addEventListener("click", openFaqItem);

const faqSearchInput = document.querySelector(".faq-search");

faqSearchInput.addEventListener("input", filterMarkup);

function filterMarkup(e) {
  const filter = e.target.value.toLowerCase();
  const filteredItems = faqQuestions.filter((t) => {
    if (
      t.item.question[sourceHash].toLowerCase().includes(filter) ||
      t.item.answer[sourceHash].toLowerCase().includes(filter)
    ) {
      return t;
    }
  });
  const filteredQuestion = addQuestion(filteredItems);
  faqList.innerHTML = filteredQuestion;
  hideAnswer(document.querySelectorAll(".faq-answer-item"));
}
