var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  $('<option/>').val(numbers[i]).html(numbers[i]).appendTo('#items');
}

// var numbers[] = {
//   'NYC',
//   'SF',
//   'LA',
//   'ATX',
//   'SYD'
// };
// $.each(numbers, function(val, text) {
//       $('#items').append(
//         $('<option></option>').val(val).html(text)
//       );