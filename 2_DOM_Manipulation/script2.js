// Get the button element
let button = document.getElementById("button");

// Add an event listener for the click event
button.addEventListener("click", function() {
  // Get the output paragraph element
  let output = document.getElementById("output");

  // Update the text of the output paragraph
  output.textContent = "You clicked the button!";
});

// Add an event listener for the mouseover event
button.addEventListener("mouseover", function() {
  // Change the background color of the button
  button.style.backgroundColor = "#3e8e41";
});

// Add an event listener for the mouseout event
button.addEventListener("mouseout", function() {
  // Change the background color of the button back to its original color
  button.style.backgroundColor = "#4CAF50";
});

// Add an event listener for the mouseenter event
button.addEventListener("mouseenter", function() {
  // Change the text color of the button
  button.style.color = "#fff";
});

// Add an event listener for the mouseleave event
button.addEventListener("mouseleave", function() {
  // Change the text color of the button back to its original color
  button.style.color = "#fff";
});

// Add an event listener for the keydown event
document.addEventListener("keydown", function(event) {
  // Check if the Enter key was pressed
  if (event.key === "Enter") {
    // Get the output paragraph element
    let output = document.getElementById("output");

    // Update the text of the output paragraph
    output.textContent = "You pressed the Enter key!";
  }
});