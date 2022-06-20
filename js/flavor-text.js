function showonlyone(targetId) {
	$('#' + targetId).removeClass('d-none'); // show only the element with id=targetId
	$('#' + targetId).siblings().addClass("d-none"); // hide everything else of the same level as target
}