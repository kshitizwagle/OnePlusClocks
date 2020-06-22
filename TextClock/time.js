function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = h % 12;
  h = h ? h : 12;
  m = checkTime(m);
  s = checkTime(s);
  var hours = [
    "Twelve",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve"
  ];
  document.getElementById("hour").innerHTML = hours[h];
  var minutes = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
    "Twenty",
    "Twenty-one",
    "Twenty-two",
    "Twenty-three",
    "Twenty-four",
    "Twenty-five",
    "Twenty-six",
    "Twenty-seven",
    "Twenty-eight",
    "Twenty-nine",
    "Thirty",
    "Thirty-one",
    "Thirty-two",
    "Thirty-three",
    "Thirty-four",
    "Thirty-five",
    "Thirty-six",
    "Thirty-seven",
    "Thirty-eight",
    "Thirty-nine",
    "Forty",
    "Forty-one",
    "Forty-two",
    "Forty-three",
    "Forty-four",
    "Forty-five",
    "Forty-six",
    "Forty-seven",
    "Forty-eight",
    "Forty-nine",
    "Fifty",
    "Fifty-one",
    "Fifty-two",
    "Fifty-three",
    "Fifty-four",
    "Fifty-five",
    "Fifty-six",
    "Fifty-seven",
    "Fifty-eight",
    "Fifty-nine",
  ];
  document.getElementById("min").innerHTML = minutes[m];
  if (m === "01") {
    document.getElementById("min").innerHTML = "One";
  } else if (m === "02") {
    document.getElementById("min").innerHTML = "Two";
  } else if (m === "03") {
    document.getElementById("min").innerHTML = "Three";
  } else if (m === "04") {
    document.getElementById("min").innerHTML = "Four";
  } else if (m === "05") {
    document.getElementById("min").innerHTML = "Five";
  } else if (m === "06") {
    document.getElementById("min").innerHTML = "Six";
  } else if (m === "07") {
    document.getElementById("min").innerHTML = "Seven";
  } else if (m === "08") {
    document.getElementById("min").innerHTML = "Eight";
  } else if (m === "09") {
    document.getElementById("min").innerHTML = "Nine";
  }
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
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

