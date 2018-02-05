console.log('Hello from external script');
$(document).ready(function(){


//nav
	$('.photograme').click(function(){
		console.log('nav clicked');
		$("span").toggleClass('hidden');
		$("span").toggleClass('showing');
	});

	$('.me').click(function(){
		console.log('nav clicked');
		$("span").toggleClass('hidden');
		$("span").toggleClass('showing');
	});

//lightbox

	$("img").click(function(){
		console.log('img clicked');
		$(this).toggleClass('box');
	});


	$('.content').click(function(){
		console.log('toggle nav');
		$(this).toggleClass('navhide');
	});



});