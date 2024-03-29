(function () {
	emailjs.init("user_S9naJDiA4QnWLZ8GpMkXx");
})();

window.onload = function () {
	document
		.getElementById("contact-form")
		.addEventListener("submit", function (event) {
			event.preventDefault();
			// generate a five digit number for the contact_number variable
			this.contact_number.value = (Math.random() * 100000) | 0;
			// these IDs from the previous steps
			emailjs.sendForm("contact_service", "contact_form", this).then(
				function () {
					console.log("SUCCESS!");
					document.getElementById("contact-form").reset();
					$("#modal-success").modal("show");
				},
				function (error) {
					console.log("FAILED...", error);
					$("#modal-failure").modal("show");
				}
			);
		});
};