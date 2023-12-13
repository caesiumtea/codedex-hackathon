function submitForm(){
  let category = document.getElementById("category").value;
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let habit = new Habit(category, title, description);
  let tracking = getCookie("tracking");
  tracking.days[tracking.days.length-1];
  habits.push(habit)
  
  gotoPage("index.html");
  }