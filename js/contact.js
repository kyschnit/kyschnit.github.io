(function() {
	emailjs.init("user_S9naJDiA4QnWLZ8GpMkXx");
})();

function successAlert() {
	if($('#alert-failure').hasClass('show')) {
		$('alert-failure').hide();
	}
	$('#alert-success').fadeIn(1000);
	setTimeout(function() { 
		$('#alert-success').fadeOut(1000); 
	}, 5000);
}

function failureAlert() {
	if($('#alert-success').hasClass('show')) {
		$('alert-success').hide();
	}
	$('#alert-failure').fadeIn(1000);
	setTimeout(function() { 
		$('#alert-failure').fadeOut(1000); 
	}, 5000);
}

window.onload = function() {
	document.getElementById('contact-form').addEventListener('submit', function(event) {
		event.preventDefault();
		// generate a five digit number for the contact_number variable
		this.contact_number.value = Math.random() * 100000 | 0;
		// these IDs from the previous steps
		emailjs.sendForm('contact_service', 'contact_form', this)
		.then(function() {
			console.log('SUCCESS!');
			document.getElementById('contact-form').reset();
			successAlert();
			
		}, function(error) {
			console.log('FAILED...', error);
			failureAlert();
		});
	});
}