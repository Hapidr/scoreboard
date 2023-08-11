// const button = document.getElementById("button");
const buttons = document.querySelectorAll("#button");
const reset = document.getElementById("reset");
const team_a = document.getElementById("team-a");
const team_b = document.getElementById("team-b");

const tambah = (object) => {
  object.innerText++;
};

const kurang = (object) => {
  object.innerText--;
};

document.addEventListener("DOMContentLoaded", () => {
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

  reset.addEventListener("click", () => {
    team_a.innerText = 0;
    team_b.innerText = 0;
  });
});
