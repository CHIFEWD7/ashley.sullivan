// Declare global variable
var total = 0;

// https://api.jquery.com/submit/
// Bind the 'submit' event to the #entry button on the page
$('#entry').submit(enter);

// Create a 'enter' function that will be run above when .submit() is called
function enter() {
  // Getting the value of the input with an id of #newEntry
  var entry = $('#newEntry').val();
  
  // Taking the string of text in the input and turning it into a number so that we can work with it and change it in JS
  entry = parseFloat(entry);

  // Declaring a variable of 'currency' and running the currencyFormat() function. Notice 'entry' is being passed into this function.
  // Currency should equal '$20.00' if '20' is entered after the function is run
  var currency = currencyFormat(entry);

  // Append a new table row with 'currency' (which is our newly formatted string $20.00) inside of it
  $('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');

  // Take the value of the 'entry' variable INSIDE OF THIS FUNCTION and add it to the global variable 'total'
  total += entry;

  // To test to see what 'total' is at this point, you can use a console.log()
  // console.log(total);
  
  // Replace the HTML that is inside of the container with the ID of #total, with a formatted total by using our currencyFormat() function
  $('#total').html(currencyFormat(total));
  
  // Clear out the value that is inside of the input box
  $('#newEntry').val('');

  return false;
}

function currencyFormat(number) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
  var currency = parseFloat(number);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
  // Format the user's input to '20.00' if they put in '20'
  currency = currency.toFixed(2);

  // Now that we have the user's number with '.00', add a $ to the beginning of the string, so that its formatted correctly when it comes out the other end
  currency = '$' + currency;
  
  // This should return $20.00 if 20 was passed
  return currency;
}