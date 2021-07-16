(function() {
	emailjs.init("user_S9naJDiA4QnWLZ8GpMkXx");
})();

function successAlert() {
	$('#alert-success').fadeIn(1000);
	if($('#alert-failure').hasClass('in')) {
		$('alert-failure').hide();
	}
	setTimeout(function() { 
		$('#alert-success').fadeOut(1000); 
	}, 5000);
}

function failureAlert() {
	$('#alert-failure').fadeIn(1000);
	setTimeout(function() { 
		if($('#alert-success').hasClass('in')) {
			$('alert-success').hide();
		}
		$('#alert-failure').fadeOut(1000); 
	}, 5000);
}

function checkAlertState(){
	
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