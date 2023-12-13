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
  // if (!localStorage.getItem("habitTitles")) {
  //   localStorage.setItem("habitTitles", "[]");
  // }
}

function populateHabits() {
  console.log("populating...");
  let habitsDiv = document.getElementById("habits");
  // habitsDiv.style.backgroundColor = "white";
  // habitsDiv.style.height = "10px";

  // habitTitles = JSON.parse(localStorage.getItem("habitTitles"));
   let tracking = JSON.parse(localStorage.getItem("tracking"));
   let latestDay = tracking.days[tracking.days.length - 1];
   
  for (let i = 0; i < latestDay.habits.length; i++) {
    console.log(latestDay.habits[i]);
    let current = latestDay.habits[i];
    let newDiv = document.createElement('div');
    newDiv.classList = "home-habit";
    let newH3 = document.createElement('h3');
    newH3.classList = "home-habit-title";
    newH3.textContent = current.title;
    newDiv.appendChild(newH3);

    let url;
    if (current.type === "checklist") {
      url = "viewCheckboxHabit.html";
    } else if (current.type === "counting") {
      url = "viewCountingHabit.html";
    }
    newDiv.addEventListener('click', function(){
      gotoPage(url, current);
    });
    habitsDiv.appendChild(newDiv);
  }
}

populateHabits()