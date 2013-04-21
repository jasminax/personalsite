$(document).ready(function(){

	// $('.jumbotron h1').hover(function(){
	// 	$(this).animate({paddingBottom: '+=15px'}, 200);
	// }, function(){
	// 	$(this).animate({paddingBottom: '-=15px'}, 200);
	// });

	$('#food > div').hide();

	// $('#food > div:first').show();

	$('#food h5').click(function(){
		$(this).next().animate(
			{'height':'toggle'}, 'slow')
	});

	$('#toggleButton').click(function(){
		$('#simrunn').toggle();

		if($('#simrunn').is(':visible')) {
			$(this).val("Oh");
		} else{
			$(this).val("Wat");
		}
	});

});