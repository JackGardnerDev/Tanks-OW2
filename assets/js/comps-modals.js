// Get the poke modal
var pokeModal = document.getElementById("poke-modal");

// Get the rush modal
var rushModal = document.getElementById("rush-modal");

// Get the dive modal
var diveModal = document.getElementById("dive-modal");

// Get the button that opens the poke modal
var pokeImg = document.getElementById("poke-icon");

// Get the button that opens the rush modal
var rushImg = document.getElementById("rush-icon");

// Get the button that opens the dive modal
var diveImg = document.getElementById("dive-icon");

// Get the <span> element that closes the modals
var closeSpans = document.getElementsByClassName("close");

// Function to open the modal
function openModal(modal) {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

// Function to close the modal
// function closeModal(modal) {
//   modal.style.display = "none";
//   document.body.style.overflow = "auto"; // Enable scrolling when modal is closed
// }

// Event listener for poke modal button
pokeImg.onclick = function() {
  openModal(pokeModal);
}

// Event listener for rush modal button
rushImg.onclick = function() {
  openModal(rushModal);
}

// Event listener for dive modal button
diveImg.onclick = function() {
  openModal(diveModal);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Event listeners for close buttons
// for (var i = 0; i < closeSpans.length; i++) {
//   closeSpans[i].onclick = function() {
//     closeModal(this.parentNode.parentNode);
//   }
// }

// Event listener to close modals when clicking outside
window.onclick = function(event) {
  if (event.target == pokeModal) {
    closeModal(pokeModal);
  }
  if (event.target == rushModal) {
    closeModal(rushModal);
  }
  if (event.target == diveModal) {
    closeModal(diveModal);
  }
}