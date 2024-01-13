// const button = document.getElementById("button");
const buttons = document.querySelectorAll("#button");
const reset = document.getElementById("reset");
const team_a = document.getElementById("team-a");
const team_b = document.getElementById("team-b");
/*
##################
# FUNCTION START #
##################
*/
const tambah = (object) => {
  object.innerText++;
  checkButtonVisibility();
};

const kurang = (object) => {
  object.innerText--;
  checkButtonVisibility();
};

const checkButtonVisibility = () => {
  buttons.forEach((button) => {
    if (button === buttons[0] && team_a.innerText === "0") {
      button.style.display = "none";
    } else if (button === buttons[2] && team_b.innerText === "0") {
      button.style.display = "none";
    } else {
      button.style.display = "";
    }
  });
};
/*
################
# FUNCTION END #
################
*/

checkButtonVisibility();

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button === buttons[0] && team_a.innerText != 0) {
      kurang(team_a);
    } else if (button === buttons[1]) {
      tambah(team_a);
    } else if (button === buttons[2] && team_b.innerText != 0) {
      kurang(team_b);
    } else if (button === buttons[3]) {
      tambah(team_b);
    }
  });
});

/*
buttons[0].addEventListener("click", (event) => {
  if (team_a.innerText != 0) {
    kurang(team_a);
  }
});
buttons[1].addEventListener("click", (event) => {
  tambah(team_a);
});
buttons[2].addEventListener("click", (event) => {
  if (team_b.innerText != 0) {
    kurang(team_b);
  }
});
buttons[3].addEventListener("click", (event) => {
  tambah(team_b);
});
*/

reset.addEventListener("click", () => {
  team_a.innerText = 0;
  team_b.innerText = 0;
  buttons[0].style.display = "none";
  buttons[2].style.display = "none";
});
