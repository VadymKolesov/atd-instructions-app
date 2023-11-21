function visibleShift() {
  const shiftList = document.querySelector(".shift-list").children;
  for (let item of shiftList) {
    if (item.id == choosedWarehouse || item.id == "hr" || item.id == "agency") {
      item.style.opacity = "1";
      item.style.visibility = "visible";
      item.style.display = "block";
    }
  }
}

visibleShift();
