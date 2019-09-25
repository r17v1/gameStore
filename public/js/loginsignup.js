if ($('#error').text().length) {
	$('#error').text('');
	alert('Username is taken. Please try again!');
}

$('.supbtn').click(function(e) {
	e.preventDefault();
	if ($('.name').val().length < 1) {
		alert('Please enter a name!');
	} else if ($('.email').val().length < 5) {
		alert('Please enter a valid email!');
	} else if ($('.userid').val().length < 1) {
		alert('Please enter username!');
	} else if ($('.dob').val().length < 10) {
		alert('Please enter date of birth!');
	} else if ($('.password').val().length < 8) {
		alert('Password must be at least 8 characters long!');
	} else if ($('.password').val() != $('.confirm').val()) {
		alert('Password and confirm password does not match!');
	} else {
		$('#signup').submit();
	}
});
