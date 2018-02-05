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
		$(this).toggleClass('box');
		$(this).toggleClass('unbox');
	});

	$('.wide').click(function(){
		$(this).toggleClass('box');
		$(this).toggleClass('unbox');

	});

	$('.unbox.tall').click(function(){
		console.log('unbox tall clicked');
		$('.content').addClass('box');
		$('.content').removeClass('unbox');

	});

	$('.box.tall').click(function(){
		console.log('unbox tall clicked');
		$('.content').addClass('box');
		$('.content').removeClass('unbox');

	});

	$('.unbox.wide').click(function(){
		console.log('unbox wide clicked');
		$('.content').removeClass('unbox');
		$('.content').addClass('box');	

	});

	

});