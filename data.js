function gotoPage(address = "index.html", habit){
  sessionStorage.setItem("habitView", JSON.stringify(habit));
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

function markHabit(habitTitle) {
    currDate = new Date();
    let tracking = JSON.parse(localStorage.getItem("tracking"));
    tracking.days[tracking.days.length - 1].habits[searchHabit(tracking.days[tracking.days.length - 1], habitTitle)].done += 1;
    localStorage.setItem("tracking", JSON.stringify(tracking));
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