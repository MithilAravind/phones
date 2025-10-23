const button = document.getElementById("niamco");
const display = document.getElementById("count");
let count = 0;

button.addEventListener("click", () => {
  count++;
  display.textContent = count;
});
