// const button = document.getElementById("button");
const buttons = document.querySelectorAll("#button");

document.addEventListener("DOMContentLoaded", () => {
  buttons[0].addEventListener("click", (event) => {
    console.log(`kurang kiri berhasil`);
  });
  buttons[1].addEventListener("click", (event) => {
    console.log(`tambah kiri berhasil`);
  });
  buttons[2].addEventListener("click", (event) => {
    console.log(`kurang kanan berhasil`);
  });
  buttons[3].addEventListener("click", (event) => {
    console.log(`tambah kanan berhasil`);
  });
});
