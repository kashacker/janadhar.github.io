console.log("We are using jquery");
$('document').ready(function () {
	$('.fa-bars').click(function() {
		$('.nav_item').css({"display":"block","transition":"1s"});
	}),
	$('.cross').click(function() {
		$('.nav_item').css({"display":"none","transition":"1s"});
	});
	
});

