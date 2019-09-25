/*jshint esversion: 6 */

/*
$('.gameImages').mouseenter(function() {
	$(this).animate({
		opacity: 1
	});
});

$('.gameImages').mouseleave(function() {
	$(this).animate({
		opacity: 0.75
	});
});
*/

$(document).ready(function() {
	if ($('#reviewInp').text() === 'You must be logged in to do this!') {
		$('#reviewInp').prop('disabled', true);
		$('#ratingInp').prop('disabled', true);
		$('#submitReview').prop('disabled', true);
	}
});

$('nav img').mouseenter(function() {
	$('#dropdown').fadeIn(250);
});

$('nav').mouseleave(function() {
	$('#dropdown').fadeOut(250);
});

if ($(window).width() <= 1100) {
	$('#logo a').text('G');
	$('#logo a').css('font-size', '50px');
}

$(window).resize(function() {
	var width = $(window).width();
	//alert(width);
	if (width <= 800) {
		$('#logo a').text('G');
		$('#logo a').css('font-size', '50px');
	} else {
		$('#logo a').html("Gamer's<br>Heaven");
		$('#logo a').css('font-size', '24px');
	}

	if (width >= 1260) {
		$('#desc').css('display', 'inline-block');
		$('#vid').css('display', 'inline-block');
	} else {
		if ($('#toggle').html() === '&gt;') {
			$('#vid').css('display', 'block');
			$('#desc').css('display', 'none');
		} else {
			$('#vid').css('display', 'none');
			$('#desc').css('display', 'block');
		}
	}
});

$('#search_text').keypress(function(e) {
	if (e.which == 13) {
		let val = $('#search_text').val();
		window.location.href = '/search/' + val;
	}
});

$('.gameImages').click(function() {
	//console.log($(this).attr("src"));
	let str = $(this).attr('src').split('/')[1];

	window.location.href = '/game/' + str;
});

$('#ratingInp').keyup(function(e) {
	//	console.log()
	if ($('#ratingInp').val().length != 0) {
		if ($('#ratingInp').val() > 10) $('#ratingInp').val(10);
		if ($('#ratingInp').val() < 1) $('#ratingInp').val(1);
	}
});

$('#ratingInp').click(function(e) {
	if ($('#ratingInp').val().length != 0) {
		if ($('#ratingInp').val() > 10) $('#ratingInp').val(10);
		if ($('#ratingInp').val() < 1) $('#ratingInp').val(1);
	}
});

$('#submitReview').click(function(e) {
	e.preventDefault();
	if ($('#ratingInp').val().length != 0) $('#ReviewForm').submit();
	else alert('You must provide a rating!');
});

$('#toggle').click(function() {
	//alert($('#toggle').html());
	if ($('#toggle').html() === '&gt;') {
		$('#toggle').html('<');
		$('#vid').css('display', 'none');
		$('#desc').css('display', 'block');
	} else {
		$('#toggle').html('>');
		$('#vid').css('display', 'block');
		$('#desc').css('display', 'none');
	}
});
