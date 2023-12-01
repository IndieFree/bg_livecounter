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

	$('.backButton').on('click', function(){
		mode = 1;
		hp_1 = 0;
		hp_2 = 0;
		$(".countDiv").html(hp_1);
		$(".countDiv_1").html(hp_1);
		$(".countDiv_2").html(hp_2);
		$('.soloMode').hide();
		$('.pairMode').hide();
		$('.selectedMode').show();
	});

	$('#soloButton_reload').on('click', function(){
		hp_1 = 0;
		$(".countDiv").html(hp_1);
	});
	$('.buttonMinus').on('click', function(){
		hp_1 = (hp_1 - 1);
		$(".countDiv").html(hp_1);
	});
	$('.buttonPlus').on('click', function(){
		hp_1 = (hp_1 + 1);
		$(".countDiv").html(hp_1); 
	});

	$('#pairButton_reload').on('click', function(){
		hp_1 = 0;
		hp_2 = 0;
		$(".countDiv_1").html(hp_1);
		$(".countDiv_2").html(hp_2);
	});

	$('.buttonMinus_1').on('click', function(){
		hp_1 = (hp_1 - 1);
		$(".countDiv_1").html(hp_1);
	});
	$('.buttonPlus_1').on('click', function(){
		hp_1 = (hp_1 + 1);
		$(".countDiv_1").html(hp_1);
	});

};
