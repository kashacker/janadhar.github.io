$('document').ready(function() {
	$('.hidden_details').mouseover(function() {
		$('.hidden_lock').css({"opacity":".2"});
	}),
	$('.hidden_details').mouseout(function() {
		$('.hidden_lock').css({"opacity":"1"});
	});
});