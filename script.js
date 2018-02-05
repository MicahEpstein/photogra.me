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

	$('.tall').click(function(){
		console.log('tall clicked');
		$(this).toggleClass('box');
		$(this).toggleClass('unbox');
	});

	$('.wide').click(function(){
		console.log('wide clicked');
		$(this).toggleClass('box');
		$(this).toggleClass('unbox');

	});

	$('.unbox').click(function(){
		console.log('unbox clicked');
		$('.content').addClass('box');
		$('.content').removeClass('unbox');

	});

});