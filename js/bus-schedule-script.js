const busScheduleList = document.querySelector(".schedule-shift-list");
const busLine = document.querySelector(".schedule-title").id;
let sourceHash = localStorage.getItem("language");

const lineID = (lines) => {
  for (line of lines) {
    if (line[0].lineID === document.querySelector(".schedule-title").id) {
      return line;
    }
  }
};

lineID(lineList);

let stationsToFirstShift = [];
let stationsFromFirstShift = [];
let stationsToSecondShift = [];
let stationsFromSecondShift = [];
let stationsToThirdShift = [];
let stationsFromThirdShift = [];

function renderFirstShiftSchedule(source) {
  let countFirstShiftTo = source[0].stationsTo.length;
  let countFirstShiftFrom = source[0].stationsFrom.length;
  for (let i = 0; i < countFirstShiftTo; i++) {
    stationsToFirstShift.push(
      `<li class="schedule-list-item">
            <p class="schedule-time">${source[0].stationsTo[i].station.time}</p>
            <p class="schedule-station">${source[0].stationsTo[i].station.name}</p>
        </li>`
    );
  }
  for (let i = 0; i < countFirstShiftFrom; i++) {
    stationsFromFirstShift.push(
      `<li class="schedule-list-item">
            <p class="schedule-time">${source[0].stationsFrom[i].station.time}</p>
            <p class="schedule-station">${source[0].stationsFrom[i].station.name}</p>
        </li>`
    );
  }
  source[0].scheduleTo = stationsToFirstShift.join(" ");
  source[0].scheduleFrom = stationsFromFirstShift.join(" ");
}
renderFirstShiftSchedule(lineID(lineList));

function renderSecondShiftSchedule(source) {
  if (!source[1]) {
    return;
  }
  let countSecondShiftTo = source[1].stationsTo.length;
  let countSecondShiftFrom = source[1].stationsFrom.length;
  for (let i = 0; i < countSecondShiftTo; i++) {
    stationsToSecondShift.push(
      `<li class="schedule-list-item">
              <p class="schedule-time">${source[1].stationsTo[i].station.time}</p>
              <p class="schedule-station">${source[1].stationsTo[i].station.name}</p>
          </li>`
    );
  }
  for (let i = 0; i < countSecondShiftFrom; i++) {
    stationsFromSecondShift.push(
      `<li class="schedule-list-item">
              <p class="schedule-time">${source[1].stationsFrom[i].station.time}</p>
              <p class="schedule-station">${source[1].stationsFrom[i].station.name}</p>
          </li>`
    );
  }
  source[1].scheduleTo = stationsToSecondShift.join(" ");
  source[1].scheduleFrom = stationsFromSecondShift.join(" ");
}
renderSecondShiftSchedule(lineID(lineList));

function renderThirdShiftSchedule(source) {
  if (!source[2]) {
    return;
  }
  let countThirdShiftTo = source[2].stationsTo.length;
  let countThirdShiftFrom = source[2].stationsFrom.length;
  for (let i = 0; i < countThirdShiftTo; i++) {
    stationsToThirdShift.push(
      `<li class="schedule-list-item">
                <p class="schedule-time">${source[2].stationsTo[i].station.time}</p>
                <p class="schedule-station">${source[2].stationsTo[i].station.name}</p>
            </li>`
    );
  }
  for (let i = 0; i < countThirdShiftFrom; i++) {
    stationsFromThirdShift.push(
      `<li class="schedule-list-item">
                <p class="schedule-time">${source[2].stationsFrom[i].station.time}</p>
                <p class="schedule-station">${source[2].stationsFrom[i].station.name}</p>
            </li>`
    );
  }
  source[2].scheduleTo = stationsToThirdShift.join(" ");
  source[2].scheduleFrom = stationsFromThirdShift.join(" ");
}
renderThirdShiftSchedule(lineID(lineList));

function colorCompanyName() {
  const scheduleStation = document.querySelectorAll(".schedule-station");
  let stationAutodoc;
  for (let i = 0; i < scheduleStation.length; i++) {
    const stationAutodocArr = scheduleStation[i].textContent
      .split(" ")
      .includes("Autodoc");
    if (stationAutodocArr) {
      stationAutodoc = scheduleStation[i];
      stationAutodoc.innerHTML = stationAutodoc.innerHTML.replace(
        "Autodoc",
        "<span>Autodoc</span>"
      );
    }
  }
}

function settingScheduleItemsHeight() {
  const scheduleItemHeight = document.querySelector(
    ".schedule-list-item"
  ).offsetHeight;
  const scheduleItemAll = document.querySelectorAll(".schedule-list-item");

  for (let i = 0; i < scheduleItemAll.length; i++) {
    scheduleItemAll[i].style.height = scheduleItemHeight + "px";
  }
}

function clearUndefinedTime() {
  document.querySelectorAll(".schedule-time").forEach(function (i) {
    if (i.textContent === "undefined") {
      i.remove();
    }
  });
}

function renderSchedule() {
  busScheduleList.innerHTML = scheduleItem;

  settingScheduleItemsHeight();

  clearUndefinedTime();

  colorCompanyName();
  return;
}

function addSchedule(source) {
  return source
    .map(
      (source) =>
        `<li class="schedule-item" data-shift="${source.shiftID}">
      <div class="schedule-shift-item">
        <p>${source.shiftTitle[sourceHash]}</p>
        <svg class="toggle-arrow-icon faq-arrow" width="28" height="28">
          <use href="../images/svg-group.svg#icon-hide-arrow"></use>
        </svg>
      </div>
      <div class="bus-schedule">
        <div class="schedule-direction">
          <p class="schedule-direction-item">${source.direction.to[sourceHash]}</p>
          <p class="schedule-direction-item">${source.direction.from[sourceHash]}</p>
        </div>
        <div class="schedule-list-wrap">
          <ul class="schedule-list-to list">
          ${source.scheduleTo}
          </ul>
          <ul class="schedule-list-from list">
          ${source.scheduleFrom}
          </ul>
        </div>
      </div>
    </li>`
    )
    .join(" ");
}

const scheduleItem = addSchedule(lineID(lineList));

renderSchedule();

const renderedScheduleItem = document.querySelectorAll(".bus-schedule");

busScheduleList.addEventListener("click", openSchedule);

function openSchedule(e) {
  if (e.target.className !== "schedule-shift-item") {
    return;
  }
  e.target.nextElementSibling.classList.toggle("schedule-visible");
  const listsSchedule = [];
  const listcsheduleItems = [];
  for (i of e.target.nextElementSibling.lastElementChild.children) {
    listsSchedule.push(i.children);
  }
  for (el of listsSchedule[0]) {
    listcsheduleItems.push(el);
  }
  for (el of listsSchedule[1]) {
    listcsheduleItems.push(el);
  }
  for (item of listcsheduleItems) {
    item.classList.toggle("el");
  }
  e.target.lastElementChild.classList.toggle("rotate-instruction-arrow");
}
