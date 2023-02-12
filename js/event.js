console.log("We are using jquery");
$('document').ready(function() {
	$('.event_div1').click(function() {
		$('.event_div1_inner').css({"display":"block","z-index":"1"});
		$('.event_div2').css({"z-index":"0"});
	}),

	$('.event_div2').click(function() {
		$('.event_div1_inner2').css({"display":"block","z-index":"1"});
	}),

	$('.event_div3').click(function() {
		$('.event_div1_inner3').css({"display":"block","z-index":"1"});
	}),
	$('.event_div4').click(function() {
		$('.event_div1_inner4').css({"display":"block","z-index":"1"});
	}),

	$('.event_div5').click(function() {
		$('.event_div1_inner5').css({"display":"block","z-index":"1"});
	}),

	$('.event_div6').click(function() {
		$('.event_div1_inner6').css({"display":"block","z-index":"1"});
	}),


	$('nav').click(function(){
		$('.event_div1_inner').css({"display":"none"});
		$('.event_div2').css({"z-index":"2"});
	}),
	$('.hide_me').click(function() {
		$('.event_div1_inner').css({"display":"none"});
		$('.event_div2').css({"z-index":"1"});
	}),

	$('nav').click(function(){
		$('.event_div1_inner2').css({"display":"none"});
	}),
	$('.hide_me').click(function() {
		$('.event_div1_inner2').css({"display":"none"});
	}),

	$('nav').click(function(){
		$('.event_div1_inner3').css({"display":"none"});
	}),
	$('nav').click(function(){
		$('.event_div1_inner4').css({"display":"none"});
	}),

	$('nav').click(function(){
		$('.event_div1_inner5').css({"display":"none"});
	}),

	$('nav').click(function(){
		$('.event_div1_inner6').css({"display":"none"});
	}),



	$('.event_div1_inner').click(function(){
		$('.event_div1_inner').css({"display":"none"});
	}),

	$('event_div1').click(function(){
		$('.events_flow').css({"opacity":"0.5"});
	}),


	$('.fa-bars').click(function() {
		$('.event_div1').css("z-index":"0");
		$('.event_div2').css("z-index":"0");
		$('.event_div3').css("z-index":"0");
		$('.event_div4').css("z-index":"0");
		$('.event_div5').css("z-index":"0");
		$('.event_div6').css("z-index":"0");
	}),
	$('.cross').click(function() {
		$('.event_div1').css("z-index":"1");
		$('.event_div2').css("z-index":"1");
		$('.event_div3').css("z-index":"1");
		$('.event_div4').css("z-index":"1");
		$('.event_div5').css("z-index":"1");
		$('.event_div6').css("z-index":"1");
	});
});