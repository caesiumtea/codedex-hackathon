function submitForm(){
  let category = document.getElementById("category").value;
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let habit = new Habit(category, title, description);
  getCookie("tracking")
  
  window.location.assign("index.html");
  }