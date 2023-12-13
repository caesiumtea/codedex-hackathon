function setCookie(cName, cValue) {
  document.cookie = cName + "=" + cValue;
}

//Copied below function from w3schools
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function newPage(){
  checkDate()
  go to place
}

/* Data types for the site */

//Global variables
let habitTitles = [];
let currDate = new Date();
let 


class Tracking{
  constructor(days=[]){
    this.days = days;
  }
}

class Day{
  constructor(date, habits=[]){
    this.date = date;
    this.habits = habits;
  }
}

class Habit{
  constructor(type, title="", text="",  done=0){
    this.type = type;
    this.title = title;
    this.text = text;
    this.done = done;
  }
}