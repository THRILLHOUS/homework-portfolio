// O: total
// I: Number (Integer)
// Sum the input and display on screen as currency

// reset total to 0
var total = 0;

// User enters their input
$('#entry').submit(enter);

// declare a function that does something after the user presses 'enter'
function enter() {
  // read the user input
  var entry = $('#newEntry').val();
  // // parse the user input string to a number
  entry = parseFloat(entry);
  // entry = parseFloat(entry);
  // // clear the user input
  $('#newEntry').val('#total');
  // // add the user input to the total
  total = entry + total;
  // display the user input
  // $('#entries').append('<tr><td></td><td>' + total + '</td></tr>');
  // $('#total').html(total);
  event.preventDefault();
}


// declare a function that converts user input to currency format
// convert our input to a float
// convert to currency format