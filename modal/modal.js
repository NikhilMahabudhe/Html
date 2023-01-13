var openModalButton = document.getElementById("open-modal-button");
var modal = document.getElementById("modal");
var closeModalButton = document.getElementById("close-modal-button");

// Open the modal when the "Open Modal" button is clicked
openModalButton.addEventListener("click", function() {
  modal.style.display = "block";
});

// Close the modal when the "Close" button is clicked
closeModalButton.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close the modal when the user clicks outside the modal content
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
