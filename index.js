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

    // Create habit title
    let newDiv = document.createElement('div');
    newDiv.classList = "";
    newDiv.classList = "home-habit";
    let newH3 = document.createElement('h3');
    newH3.classList = "home-habit-title";
    newH3.textContent = currentHabit.title;
    newDiv.appendChild(newH3);

    // Choose where clicking the habit will lead to, depending on if it's
    // a checkbox-type habit or countable habit
    let url;
    if (currentHabit.type === "checklist") {
      url = "viewCheckboxHabit.html";
    } else if (currentHabit.type === "counting") {
      url = "viewCountingHabit.html";
    }
    newDiv.addEventListener('click', function(){
      gotoPage(url, currentHabit);
    });
    
    habitsDiv.appendChild(newDiv);
  }
}

populateHabits()