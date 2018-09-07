// Changes <p> tags to have the text display white
$(document).ready(function() {
  $("p").css("color", "white");
  // Changes size of all the boxes

  // Your JavaScript code goes after this line
  $(".boxes").css("width, height", "400px");
  // Makes the purple box bigger than the rest

  // Your JavaScript code goes after this line
  $("#purple-box").css({
    "width": "800px",
    "height": "800px"
  });
  // Prevents the link from triggering its default "jump" behavior

  // Your JavaScript code goes after this line
  $("a").click(function(event) {
    event.preventdefault();
  })
  // When the blue box is clicked, makes the purple one disappear

  // Your JavaScript code goes after this line
  $("#blue-box").click(function() {
    $("#purple-box").fadeOut("slow", function() {

    });
  });
  // When the red box is clicked, makes the purple appear again
  $("#red-box").click(function() {
    $("purple-box").fadeIn("fast",
      function() {

      });
  });
});
// Your JavaScript code goes after this line