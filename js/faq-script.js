const faqList = document.querySelector(".faq-list");
const newItem = document.createElement("li");
const newParagraph = document.createElement("p");
const allquestions = [];
function addNew() {
  faqList.appendChild(newItem);
}

// for (key in faqQuestions) {
//   // console.log(key);
//   // console.log(faqQuestions[key]);
//   allquestions.push(key);
// }

// for (item of allquestions) {
//   console.log(item);
//   faqList.innerHTML = item;
// }

function addQuestion(source) {
  return source
    .map(
      (source) => `<li>
            <div class="faq-item">
              <p class="question-text">${source.item.question}</p>
              <svg class="toggle-arrow-icon faq-arrow" width="28" height="28">
                <use href="../images/svg-group.svg#icon-hide-arrow">
                </use>
              </svg>
            </div>
            <p class="faq-answer-item">${source.item.answer}</p>
          </li>`
    )
    .join(` `);
}

const questions = addQuestion(faqQuestions);
faqList.innerHTML = questions;

const faqToggle = document.querySelector(".faq-item");
const faqArrow = document.querySelector(".faq-arrow");
const faqAnswerItem = document.querySelector(".faq-answer-item");

const openFaqItem = (event) => {
  let target = event.target;
  target.nextElementSibling.classList.toggle("answer-show");
  target.lastElementChild.classList.toggle("rotate-instruction-arrow");
};

faqList.addEventListener("click", openFaqItem);
