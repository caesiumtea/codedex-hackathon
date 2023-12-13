import * as data from "data"

function submitForm(){
  console.log("Submitted!")
  let category = document.getElementById("category").value;
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let newHabit = new data.Habit(category, title, description);
  let tracking = JSON.parse(data.getCookie("tracking"));
  tracking.days[tracking.days.length-1].habits.push(newHabit)
  data.setCookie("tracking", JSON.stringify(tracking))
  data.habitTitles.push(newHabit)
  
  data.gotoPage("index.html");
  }