$('.close').on('click', function() {
	$('.close').addClass('closed');
	$('ul').addClass('closed');
	$('.hamburger').removeClass('closed');
});
$('.hamburger').on('click', function() {
	$('.mobile').css('display', 'block');
	$('.close').removeClass('closed');
	$('ul').removeClass('closed');
	$('.hamburger').addClass('closed');
});