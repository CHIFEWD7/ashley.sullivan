/* // Create a global variable for the total
var totalPrice = 0

// Create a function you can run when you submit the field Hint: .submit() in jQuery

function submitAmount () {
		var totalPrice = totalPrice += $('#newEntry').val();
		$("#entries").append("<td>&dollar;" + totalPrice+ "</td>");
}
$('newEntry').submit(submitAmount);


// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)
*/


// Solution

// Declare global variable
var total = 0;

$('#entry').submit(enter);

function enter () {
	// Getting the value of the input with an id of #newEntry
	var entry = $('#newEntry').val();

	// Taking the string of text in the input and turning it into a number so that we can work with it and change it in JS
	var entry = parseFloat(entry);

	// Declaring a variable of 'currency' and running the currencyFormat() function

	// Currency should equal $20.00
	currency = currencyFormat(entry);

	// Append a new table row with 'currency' ($20.00) inside of it
	$('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');

	// Adding the raw value that comes from entry to the total
	total += entry;

	$('#total').html(currencyFormat(total));

	// Clears out the entry field after user hits enter
	$('#newEntry').val('');

	// Sometimes you don't need this line
	return false;
}

function currencyFormat (number) {
	var currency = parseFloat(number);

	// Format the user's input to '20.00' if they put in '20'
	currency = currency.toFixed(2);

	currency = '$' + currency;

	// This should return $20.00 if 20 was passed
	return currency;
}