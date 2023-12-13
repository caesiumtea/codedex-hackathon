function populateChecklist() {
    let habit = JSON.parse(sessionStorage.getItem("habitView"));
    let h1 = document.querySelector("h1");
    h1.textContent = habit.title;
    // let main = document.querySelector("main");
    let garden = document.querySelector("#garden");


    let tracking = JSON.parse(localStorage.getItem("tracking"));
    let lastWeek;
    console.log("tracking days: " + tracking.days.length);
    if (tracking.days.length >= 7) {
      lastWeek = tracking.days.slice(-7, -1);
    } else {
      lastWeek = tracking.days.slice(-(tracking.days.length), -1);
    }
    for (let i = 0; i < lastWeek.length; i++) {
      let flowerDiv = document.createElement('div');
      flowerDiv.classList = "flower-div";
      garden.appendChild(flowerDiv);
    }

}

populateView()