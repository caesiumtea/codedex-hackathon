function populateChecklist() {
    let habit = JSON.parse(sessionStorage.getItem("habitView"));
    let habitName = habit.title;
    let h1 = document.querySelector("h1");
    h1.textContent = habitName;
    // let main = document.querySelector("main");
    let garden = document.querySelector("#garden");


    let tracking = JSON.parse(localStorage.getItem("tracking"));
    let lastWeek;
    console.log("tracking days: " + tracking.days.length);
    if (tracking.days.length >= 7) {
      lastWeek = tracking.days.slice(-8, -1);
    } else {
      lastWeek = tracking.days.slice(-(tracking.days.length + 1), -1);
    }

    for (let i = 0; i < lastWeek.length; i++) {
      habitIndex = searchHabit(lastWeek[i], habitName);
      // if == -1 then this habit title was not found in last week
      if (habitIndex != -1) {
        // instance means whether a certain habit happened on a certain day
        let instance = lastWeek[i].habits[habitIndex];
        let flowerDiv = document.createElement('div');
        flowerDiv.classList = "flower-div";
        if (instance.done != 0) {
          let bloom = document.createElement('div');
          bloom.classList = "bloom";
          flowerDiv.appendChild(bloom);
        } else {
          let seed = document.createElement('div');
          seed.classList = "seed";
          flowerDiv.appendChild(seed);
        }
        let flowerPot = document.createElement('div');
        flowerPot.classList = "flowerpot";
        flowerDiv.appendChild(flowerPot);

        date = new Date(lastWeek[i].date);
        dateSpan = document.createElement('span');
        dateSpan.textContent = date.getMonth() + "/" + date.getDate();
        dateSpan.classList = "flower-date";
        flowerDiv.appendChild(dateSpan);
        
        garden.appendChild(flowerDiv);
      }
    }

}

populateChecklist()