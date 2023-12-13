function submitForm(){
  let category = document.getElementById("category").value;
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let newHabit = new Habit(category, title, description);
  let tracking = JSON.parse(getCookie("tracking"));
  tracking.days[tracking.days.length-1].habits.push(newHabit)
  setCookie("tracking", JSON.stringify(tracking))
  habitTitles.push(newHabit)
  
  gotoPage("index.html");
  }