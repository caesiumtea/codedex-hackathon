function submitForm(){
  console.log("Submitted!")
  let category = document.getElementById("category").value;
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let newHabit = new Habit(category, title, description);
  let tracking = JSON.parse(localStorage.getItem("tracking"));
  tracking.days[tracking.days.length-1].habits.push(newHabit);
  localStorage.setItem("tracking", JSON.stringify(tracking));
  habitTitles.push(newHabit);
  localStorage.setItem("habitTitles", habitTitles)
  
  gotoPage("index.html");
  }