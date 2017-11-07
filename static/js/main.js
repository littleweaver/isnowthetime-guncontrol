var loadingDelay1 = 1500;
var loadingDelay2 = 500;
var results = [
	'Yes',
	'Definitely',
	'Fuck yes',
	'yes!!1!',
	'Signs point to "yes"',

];

function displayLoading1() {
	$('#loadingWrapper').removeClass('hidden');
	$('#loading1').removeClass('hidden');
	setTimeout(function() {
		$('#loading1 .done').removeClass('hidden');
		setTimeout(displayLoading2, loadingDelay2);
	}, loadingDelay1);
}

function displayLoading2() {
	$('#loading2').removeClass('hidden');
	setTimeout(function() {
		$('#loading2 .done').removeClass('hidden');
		setTimeout(displayLoading3, loadingDelay2);
	}, loadingDelay1);
}

function displayLoading3() {
	$('#loading3').removeClass('hidden');
	setTimeout(function() {
		$('#loading3 .done').removeClass('hidden');
		setTimeout(displayResult, loadingDelay2);
	}, loadingDelay1);
}

function displayResult() {
	var result = results[Math.floor(Math.random()*results.length)];
	$('#result').removeClass('hidden');
	$('#resultInner').html(result);
	var now = new Date();
	$('#resultTimestamp').html(now.toString());
}


$(window).on('load', function() {
	displayLoading1()
});