// function setCookie(cName, cValue) {
//   document.cookie = cName + "=" + cValue;
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

function gotoPage(address = "index.html", habit){
  // check date
  if(currDate != new Date()){
    currDate = new Date();
    // TODO: change to next day of data
  }
  
  // go to new location
  window.location.assign(address);
}

// returns index of habit with matching name within a given day
// (index within day.habits)
function searchHabit(day, habitTitle) {
  for (let i = 0; i < day.habits.length; i++) {
    if (day.habits[i].title === habitTitle) {
      return i;
    }
  }
  return -1;
}

/* Data types for the site */

//Global variables
let habitTitles = [];
let currDate = new Date();


// List of days stored under key "tracking" in cookies
class Tracking{
  constructor(days=[]){
    this.days = days;
  }
}

// Stores a list of daily habits and the date they pertain to
class Day{
  constructor(date, habits=[]){
    this.date = date;
    this.habits = habits;
  }
}

// Data for a single daily instance of a habit
class Habit{
  constructor(type, title, text="",  done=0){
    this.type = type;
    this.title = title;
    this.text = text;
    this.done = done;
  }
}