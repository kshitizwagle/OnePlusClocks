function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  m = checkTime(m);
  s = checkTime(s);

  if (twelvehour == true) {
    if (h > 12) {
      h -= 12;
    }
    if (h == 0) {
      h = 12;
    }
    if (m < 10) {
      m = "" + m;
    }
  }

  if (h < 10) {
    document.getElementById("hour").innerHTML = " " + h;
  } else {
    document.getElementById("hour").innerHTML = h;
  }
  document.getElementById("min").innerHTML = m;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startDate() {
  var d = new Date();
  var days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  document.getElementById("date").innerHTML =
    days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate();
}
