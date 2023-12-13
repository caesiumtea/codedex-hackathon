// reference from https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function startTracking() {
  console.log("starting tracking");
  if (!localStorage.getItem("tracking")) {
    console.log("creating storage");
    let tracking = new Tracking;
    let today = new Date();
    let newDay = new Day(today, []);
    tracking.days.push(newDay);
    localStorage.setItem("tracking", JSON.stringify(tracking));
  }
}

function populateHabits() {
  console.log("populating...");
  let habitsDiv = document.getElementById("habits");
  habitsDiv.style.backgroundColor = "white";
  habitsDiv.style.height = "10";
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

startTracking()
populateHabits()