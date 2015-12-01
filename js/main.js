$(document).ready(function() {
	$(".fb-album-container").FacebookAlbumBrowser({
		account: "https://www.facebook.com/media/set/?set=a.597355276965788.1073741828.194161433951843&type=1&l=e57a22d7d1"
	});
});


//owl carousel
if (jQuery().owlCarousel) {
	jQuery(".owl-carousel.owl-items-5").owlCarousel({
		navigation : true,
		navigationText : false,
		pagination : false,
		items: 5
	});
jQuery(".owl-carousel.team").owlCarousel({
		navitaion : true,
		navigationText : false,
		pagination : false,
		items: 4,
});
//partners
jQuery(".partners").owlCarousel({
		navigation : true,
		navigationText : false,
		pagination : false,
		items: 5,
		autoPlay: 5000
});
}
