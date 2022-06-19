var image = document.images[0];

var imgs = [
	"../imgs/user.jpg",
	"../imgs/michigan_logo.png",
	"../imgs/saline_logo.png",
	"../imgs/background.jpg"
]
for (var i = 0; i < document.images.length; i++) {
	console.log(document.images[i]);
	var downloadingImage = new Image();
	downloadingImage.onload = function () {
		image.src = this.src;
	};
	downloadingImage.src = imgs[i];
}