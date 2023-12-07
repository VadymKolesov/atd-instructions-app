const scheduleSection = document.querySelector(".schedule");
const submitBtnID = document.querySelector(".submit-id-btn");
const inputID = document.querySelector(".inputd-id");
const scheduleEmployees = document.querySelector(".schedule-list");
const calendar = document.querySelector(".calendar-id");
const infoCalendarID = document.querySelector(".info-calendar-id");
const lngCal = localStorage.getItem("language");
const titleID = document.querySelector(".id-title");

submitBtnID.addEventListener("click", searchID);

inputID.addEventListener("input", function () {
  if (inputID.value.length > 4) {
    inputID.value = inputID.value.slice(0, 4);
  }
});

function searchID() {
  let shift = "error";
  let group = "error";
  Object.keys(employeesSchedule).forEach((el) => {
    for (gr in employeesSchedule[el]) {
      employeesSchedule[el][gr].forEach((id) => {
        if (id === inputID.value) {
          shift = el;
          group = gr;
        }
      });
    }
  });

  scheduleSection.classList.add("calendar-id-animate");

  if (inputID.value == "") {
    calendar.innerHTML = `<p class="calendar-error" data-lang="calendar-no-value-message"></p>`;
  } else if (shift === "error") {
    calendar.innerHTML = `<p class="calendar-error" data-lang="calendar-error-message"></p>`;
  } else {
    renderCalendar(scheduleListSource);
  }
  calendar.classList.add("calendar-animate");
  titleID.classList.add("id-title-animation");
  changeLanguage();

  function renderCalendar(source) {
    let todayYear = new Date().getFullYear();
    let todayMonth = new Date().getMonth();
    let firstDayOfMonth = new Date(todayYear, todayMonth, 1).getDay();
    let lastDayOfMonth = new Date(todayYear, todayMonth + 1, 0).getDate();
    let lastDayOfLastMonth;
    if (todayMonth == 0) {
      lastDayOfLastMonth = new Date(todayYear - 1, 11, 0).getDate();
    } else {
      lastDayOfLastMonth = new Date(todayYear, todayMonth, 0).getDate();
    }
    let renderInfoID = `<table class="info-calendar-id"><tr class="shift-grou-id">
    <td colspan="2">${group.toUpperCase()}</td>
    <td colspan="5">${shift.charAt(0).toUpperCase() + shift.slice(1)}</td>
  </tr>
  <tr class="days-of-week-id">
    <td data-lang="mon">Mon</td>
    <td data-lang="tue">Tue</td>
    <td data-lang="wed">Wed</td>
    <td data-lang="thur">Thur</td>
    <td data-lang="fri">Fri</td>
    <td data-lang="sat">Sat</td>
    <td data-lang="sun">Sun</td>
  </tr></table>`;
    let renderSchedule = `<table class="schedule-list"><tr>`;
    let day = 1;
    let daysBehind = lastDayOfLastMonth - firstDayOfMonth + 2;
    do {
      let dayOfWeek = new Date(todayYear, todayMonth, day).getDay();
      if (dayOfWeek === 1) {
        renderSchedule;
      } else if (day === 1) {
        renderSchedule = `<table class="schedule-list"><tr>`;
        for (let i = 0; i < firstDayOfMonth - 1; i++) {
          renderSchedule += `<td class="days-behind">${daysBehind}</td>`;
          daysBehind++;
        }
      }
      for (d of source[shift][group]) {
        if (d.date === day.toString()) {
          renderSchedule += "<td>" + day + "<p>" + d.state + "</p>" + "</td>";
        }
      }

      if (dayOfWeek === 0) {
        renderSchedule += "</tr>";
      } else if (day === lastDayOfMonth) {
        let days = 1;
        for (dayOfWeek; dayOfWeek < 7; dayOfWeek++) {
          renderSchedule += "<td>" + days + "</td>";
          days++;
        }
      }

      day++;
    } while (day <= lastDayOfMonth);

    calendar.innerHTML = renderInfoID;
    calendar.innerHTML += renderSchedule + "</table>";
    let allDays = document.querySelectorAll(".schedule-list tr td");

    for (off of allDays) {
      if (off.lastChild.textContent == "Wolne") {
        off.classList.add("day-off");
        off.lastChild.setAttribute("data-lang", "doff");
        off.lastChild.textContent = lngArr.doff[lngCal];
      }
    }
  }
}
