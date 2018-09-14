/*
Inputs: 4; user will click one of these buttons
Output: a number

declare a variable to keep track of the score
var score = 0

use a button click to change value of a score

set0 function
	function changes the score to 0
	score = 0;
	display the score
	$('#result').html(score)

add5 function
function addFive () {
	function adds 5 to the score
	score = score + 5
	display the score

}


add10 function
	function adds 10 to the score
	display the score

sub1 function
	function subtracts 1 from the score
	display the score

*/

var score = 0;
$("#zero").click(setZero);
$("#add5").click(addFive);
$("#add10").click(addTen);
$("#sub1").click(subOne);

function setZero() {
  score = 0;
  $("#result").html(score)
}

function addFive() {
  score = score + 5;
  $("#result").html(score)
}

function addTen() {
  score = score + 10;
  $("#result").html(score)
}

function subOne() {
  score = score - 1;
  $("#result").html(score)
}