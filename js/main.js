window.onload = function() {
	let mode = 1;
	let hp_1 = 0;
	let hp_2 = 0;

	$('#mode_1').on('click', function(){
		mode = 1;
		$('.selectedMode').hide();
		$('.soloMode').show();
	});
	$('#mode_2').on('click', function(){
		mode = 2;
		$('.selectedMode').hide();
		$('.pairMode').show();
	});

	$('#solo_minus').on('click', function(){
		hp_1 = (hp_1 - 1);
		$("#solo_counter").html(hp_1); 
	});
	$('#solo_plus').on('click', function(){
		hp_1 = (hp_1 + 1);
		$("#solo_counter").html(hp_1); 
	});

};
