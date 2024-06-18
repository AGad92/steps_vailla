const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

// DOM selection
const stepsContainer = document.querySelector(".steps");
const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");
const msg = document.querySelector(".message");
const btnPre = document.querySelector(".previous");
const btnNxt = document.querySelector(".next");
const btnClose = document.querySelector(".close");

// State
let step = 1;

// Updating the DOM
function updateUI() {
  msg.textContent = `Step ${step} : ${messages[step - 1]}`;

  if (step >= 1) {
    item1.classList.add("active");
  } else {
    item1.classList.remove("active");
  }
  if (step >= 2) {
    item2.classList.add("active");
  } else {
    item2.classList.remove("active");
  }
  if (step == 3) {
    item3.classList.add("active");
  } else {
    item3.classList.remove("active");
  }
}

// Initial UI
updateUI();

// EventListeners
btnPre.addEventListener("click", function (e) {
  e.preventDefault();
  if (step > 1) step = step - 1;

  updateUI();
});

btnNxt.addEventListener("click", function (e) {
  e.preventDefault();
  if (step < 3) step = step + 1;
  updateUI();
});

btnClose.addEventListener("click", function () {
  stepsContainer.classList.toggle("hidden");
});
