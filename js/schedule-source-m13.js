let employeesSchedule;
let scheduleListSource;

fetchUsersScheduleData()
  .then(saveUsersScheduleData)
  .catch((error) => console.log(error));
fetchScheduleData()
  .then(saveScheduleData)
  .catch((error) => console.log(error));

function fetchUsersScheduleData() {
  return fetch(
    "https://script.google.com/macros/s/AKfycbwphUDoicEroan3QWCC2je6fBs8eyY5qhZGeS1LQdg00yuaQ960IdhkzQHjU_e7VsHh/exec",
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  ).then((response) => response.json());
}

function fetchScheduleData() {
  return fetch(
    "https://script.google.com/macros/s/AKfycbzmXXWhl1-ouXjTR94uKJQ0_EvL7Dk9fl2r5w79Uh0pJcU-QqtyQ8VqsSwsT_sBHwg3/exec",
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  ).then((response) => response.json());
}

function saveUsersScheduleData(data) {
  employeesSchedule = data;
}

function saveScheduleData(data) {
  scheduleListSource = data;
}
