// Check whether app data already exists in local browser storage,
// and if not found, then initialize data structure
// Referenced from https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
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

// Fetch habit data from local storage and use it to generate the list of habits
// that will make up the main index section
function populateHabits() {
  console.log("populating...");
  let habitsDiv = document.getElementById("habits");

  // Read stored data and find most recent day
  let tracking = JSON.parse(localStorage.getItem("tracking"));
  let latestDay = tracking.days[tracking.days.length - 1];
  
  // Loop through all habits included in most recent day and create
  // the necessary HTML elements
  for (let i = 0; i < latestDay.habits.length; i++) {
    let currentHabit = latestDay.habits[i];

    // Create container div
    let lineDiv = document.createElement('div');
    lineDiv.classList = "home-habit";

    // Create done button
    let doHabitBtn = document.createElement('div');
    doHabitBtn.classList = "do-habit-btn";
    doHabitBtn.textContent = "+";
    doHabitBtn.addEventListener('click', function(){
      markHabit(currentHabit.title)
    });
    lineDiv.appendChild(doHabitBtn);

    // let titleDiv = document.createElement('div');
    // titleDiv.classList = "home-habit-";

    // Create habit title
    let newH3 = document.createElement('h3');
    newH3.classList = "home-habit-title";
    newH3.textContent = currentHabit.title;
    lineDiv.appendChild(newH3);
    
    // Create button to view habit details
    let viewHabitBtn = document.createElement('div');
    viewHabitBtn.classList = "view-habit-btn";
    viewHabitBtn.textContent = "...";

    // Choose where clicking the habit will lead to, depending on if it's
    // a checkbox-type habit or countable habit
    let url;
    if (currentHabit.type === "checklist") {
      url = "viewCheckboxHabit.html";
    } else if (currentHabit.type === "counting") {
      url = "viewCountingHabit.html";
    }
    // sessionStorage.setItem("habitView", JSON.stringify(current))
    viewHabitBtn.addEventListener('click', function(){
      gotoPage(url, currentHabit);
    });
    lineDiv.appendChild(viewHabitBtn);
    
    // lineDiv.appendChild(titleDiv);
    habitsDiv.appendChild(lineDiv);
  }
}

populateHabits()