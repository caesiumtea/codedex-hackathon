function populateBarChart() {
    let habit = JSON.parse(sessionStorage.getItem("habitView"));
    let habitName = habit.title;
    let h1 = document.querySelector("h1");
    h1.textContent = habitName;
    // let main = document.querySelector("main");
    let chart = document.querySelector("#barchart");


    let tracking = JSON.parse(localStorage.getItem("tracking"));
    let lastWeek;
    // console.log("tracking days: " + tracking.days.length);
    if (tracking.days.length >= 7) {
      lastWeek = tracking.days.slice(-7, tracking.days.length);
    } else {
      lastWeek = tracking.days;
    }

    for (let i = 0; i < lastWeek.length; i++) {
      habitIndex = searchHabit(lastWeek[i], habitName);
      console.log(habitName);
      // if == -1 then this habit title was not found in last week
      if (habitIndex != -1) {
        // instance means whether a certain habit happened on a certain day
        let instance = lastWeek[i].habits[habitIndex];
        let barDiv = document.createElement('div');
        barDiv.classList = "bar-div";

        let date = new Date(lastWeek[i].date);
        let dateSpan = document.createElement('span');
        dateSpan.textContent = date.getMonth() + "/" + date.getDate();
        dateSpan.classList = "chart-date";
        barDiv.appendChild(dateSpan);
        
        chart.appendChild(barDiv);
      }
    }

}

populateBarChart()