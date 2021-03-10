let offset = document.getElementById("TimeOffset");
console.log(offset);
setInterval(setTime, 100);
function removeTitle() {
  document.getElementsByClassName("location")[0].innerHTML="";
}
function setTime() {
  let date = new Date();
  let offset = document.getElementById("TimeOffset").value;
  let totalSeconds =
    date.getUTCSeconds() +
    date.getUTCMinutes() * 60 +
    date.getUTCHours() * 3600 +
    offset * 3600;
  console.log(totalSeconds);
  let days = Math.trunc(totalSeconds / 86400);
  let Hours = Math.trunc(totalSeconds / 3600) % 24;
  let Minutes = Math.trunc(totalSeconds / 60) % 60;
  let Seconds = totalSeconds % 60;
  document.getElementById("hour").innerHTML =
    Hours < 10 ? "0" + Hours : Hours == 24 ? "00" : Hours;
  document.getElementById("minute").innerHTML =
    Minutes < 10 ? "0" + Minutes : Minutes;
  document.getElementById("second").innerHTML =
    Seconds < 10 ? "0" + Seconds : Seconds;
  let day = date.getUTCDay() + days;
  day = day < 1 ? 7 : day;
  day = day > 7 ? 1 : day;
  document.getElementById("day").innerHTML = processDate("day",day);
  document.getElementById("date-string").innerHTML = processDate("date",days);
}
function processDate(...args) {
  if (args[0]=="day") {
    switch (args[1] + "") {
      case "1": {
        return "Monday";
      }
      case "2": {
        return "Tuesday";
      }
      case "3": {
        return "Wednesday";
      }
      case "4": {
        return "Thursday";
      }
      case "5": {
        return "Friday";
      }
      case "6": {
        return "Saturday";
      }
      case "7": {
        return "Sunday";
      }
    }
  } else {
    let date = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let dateString = date.getDate()+args[1];
    if (dateString == 1) {
      dateString += "st";
    } else if (dateString == 2) {
      dateString += "nd";
    } else if (dateString == 3) {
      dateString += "rd";
    } else {
      dateString += "th";
    }
    dateString += " " + monthNames[date.getMonth()] + " " + date.getFullYear();
    return dateString;
  }
}
setInterval(setTime, 100);
