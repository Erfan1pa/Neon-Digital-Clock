function ClockWork() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var p = "AM";
  if (hour > 12) {
    hour -= 12;
    p = "PM";
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  document.getElementById("Clock").textContent =
    hour + " : " + minute + " : " + second + "  " + p;
  setTimeout(ClockWork, 1000);
}
ClockWork();
