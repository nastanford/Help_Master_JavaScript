// Get the heading element
let heading = document.getElementById("heading");

// Change the text of the heading element
heading.textContent = "Hello JavaScript!";

// Get the paragraph element
let paragraph = document.getElementById("paragraph");

// Change the text of the paragraph element
paragraph.textContent = "This is a new paragraph of text.";

// Get the button element
let button = document.getElementById("button");

// Add an event listener to the button element
button.addEventListener("click", function() {
  // Change the text of the heading element when the button is clicked
  heading.textContent = "Button clicked!";
});