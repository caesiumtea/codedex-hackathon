import habitTitles from "data";

function populateHabits() {
  let habitsDiv = document.getElementById("habits");
  for (let i = 0; i < habitTitles.length; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList = "home-habit";
    let newH3 = document.createElement('h3');
    newH3.classList = "home-habit-title";
    newH3.textContent = habitTitles[i].title;
    newDiv.appendChild(newH3);
    habitsDiv.appendChild(newDiv);
  }
}