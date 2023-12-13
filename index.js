import habitTitles from "data";

function populateHabits() {
  let habitsDiv = document.getElementById("habits");
  for (let i = 0; i < habitTitles.length; i++) {
    let newDiv = document.createElement('div');
    newDiv.textContent = habitTitles[i].title;
  }
}