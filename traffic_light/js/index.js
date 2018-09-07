//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function() {
  // When the stop button is clicked
  $("#stopButton").click(function() {
    // Other bulbs turn black
    $(".bulb").css("background-color", "black");
    // the stop bulb will turn red
    $("#stopLight").css("background-color", "red");
  });
});

// When the slow button is clicked
$("#slowButton").click(function() {
  // Other bulbs turn black
  $(".bulb").css("background-color", "black");
  // the stop bulb will turn red
  $("#slowLight").css("background-color", "yellow");
});

// When the go button is clicked
$("#goButton").click(function() {
  // Other bulbs turn black
  $(".bulb").css("background-color", "black");
  // the stop bulb will turn red
  $("#goLight").css("background-color", "green");
});