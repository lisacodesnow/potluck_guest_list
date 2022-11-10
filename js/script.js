//assign dishes
const assignButton = document.querySelector(".assign");
// list with guest name and dish
const assignedItems = document.querySelector(".assigned-items");
// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

addGuestButton.addEventListener("click", function () {
  const gues = guestInput.value;
  if (gues !== "") {
    addToList(gues);
  }
  clearInput();
  updateGuestCount();
});

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest; // is this here so it can take the value passed to the function and perform this action?
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length; // I'm trying to read this. When the length property is reading the guests variable then the innertext of the guest conunt variable is going to reflect the number the length property caputred. Right?

  if (guests.length === 8) {
    addGuestButton.classList.add(".hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potLuckItems = [
    "humus",
    "turkey",
    "ham",
    "potatoes",
    "greens",
    "yams",
    "cookies",
    "pie",
    "mac and cheese",
    "stuffing",
    "cornbread",
    "rolls"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potLuckItems.length);
    let randomPotluckItem = potLuckItems[randomPotluckIndex];
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    // what is this saying? The name thats used to add to the list is the same random name?
    assignedItems.append(listItem);
    potLuckItems.splice(randomPotluckIndex, 1);
  }
};

//Add event listener to update potluckitems array

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
