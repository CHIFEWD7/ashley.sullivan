function getCelsius () {
	var fahrenheit = $('#temperature').val();
	fahrenheit = parseFloat(fahrenheit);

	var celsius = (fahrenheit - 32) / 1.8;
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
	celsius = celsius.toFixed(2);
	$("#result").html(fahrenheit + "&deg;F = " + celsius + "&deg;C");

	if (celsius > 26.67) {
	$('body').css('background-color', 'red');
	}
	else if (celsius < 26.67, celsius > 0) {
		$('body').css('background-color', 'orange');
	}
	else {
		$('body').css('background-color', 'blue');
	}
};

function getFahrenheit () {
	var celsius = $('#temperature').val();
	celsius = parseFloat(celsius);

	var fahrenheit = 1.8 * celsius + 32;
	fahrenheit = fahrenheit.toFixed(2);
	$("#result").html(celsius + "&deg;C = " + fahrenheit + "&deg;F");

	if (fahrenheit > 80) {
	$('body').css('background-color', 'red');
	}
	else if (fahrenheit < 80, fahrenheit > 32) {
		$('body').css('background-color', 'orange');
	}
	else {
		$('body').css('background-color', 'blue');
	}
};

$('#fahrenheit_to_celsius').on('click', getCelsius );
$('#celsius_to_fahrenheit').on('click', getFahrenheit );