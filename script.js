document.addEventListener("DOMContentLoaded", function() {
    // Function to change the color of the header
    function changeColor(event) {
      event.preventDefault(); // Prevent form submission
      var color = document.getElementById('colorInput').value;
      document.getElementById('header').style.color = color;
    }

     // Add event listener to the form
  document.getElementById('colorForm').addEventListener('submit', changeColor);
});