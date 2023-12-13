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

/* Data types for the site */

class Data{
  constructor(habits=[]){
    this.habitTitles = habits;
    this.currDate = new Date();
  }
}

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