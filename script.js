console.log('Hello from external script');

$(document).ready(function(){

var scrollCount = 0;

//nav
	$('.photograme').click(function(){
		console.log('nav clicked');
		$('.name').toggleClass('hidden');
		$('.name').toggleClass('showing');
		$("img").toggleClass('navblur');
		$("img").removeClass('box');
		$('.navTags').toggleClass('hide');

	});

	$('.photograme').click(function(){
		$('.photograme').toggleClass('blurNav');
		$('.me').toggleClass('blurNav');
	});

	$('.me').click(function(){
		$('.photograme').toggleClass('blurNav');
		$('.me').toggleClass('blurNav');
	});



	$('.me').click(function(){
		console.log('nav clicked');
		$('.name').toggleClass('hidden');
		$('.name').toggleClass('showing');
		$("img").toggleClass('navblur');
		$("img").removeClass('box');
		$('.navTags').toggleClass('hide');
	});

//lightbox

	$("img").click(function(){
		console.log('img clicked');
		$(this).toggleClass('box');
		$("img").removeClass('navblur');
		$('.navTags').addClass('hide');
		$('.name').addClass('hidden');
		$('.name').removeClass('showing');
		$('.breaker').toggleClass('big');
		scrollCount = 0;
	});

	$("img").hover(function(){
		$(this).toggleClass('bump');
	});

//navigation

	$(".cali").click(function(){
		$('#caliLocator').ScrollTo()
		$("img").toggleClass('navblur');
		$('.navTags').toggleClass('hide');
		$('.name').addClass('hidden');
		$('.name').removeClass('showing');
		$('.photograme').toggleClass('blurNav');
		$('.me').toggleClass('blurNav');
	});

	$(".tropic").click(function(){
		$('#tropicLocator').ScrollTo()
		$("img").toggleClass('navblur');
		$('.navTags').toggleClass('hide');
		$('.name').addClass('hidden');
		$('.name').removeClass('showing');
		$('.photograme').toggleClass('blurNav');
		$('.me').toggleClass('blurNav');
	});

	$(".nippon").click(function(){
		$('#nipponLocator').ScrollTo()
		$("img").toggleClass('navblur');
		$('.navTags').toggleClass('hide');
		$('.name').addClass('hidden');
		$('.name').removeClass('showing');
		$('.photograme').toggleClass('blurNav');
		$('.me').toggleClass('blurNav');
	});

	$(".lakehouse").click(function(){
		$('#lakehouseLocator').ScrollTo()
		$("img").toggleClass('navblur');
		$('.navTags').toggleClass('hide');
		$('.name').addClass('hidden');
		$('.name').removeClass('showing');
		$('.photograme').toggleClass('blurNav');
		$('.me').toggleClass('blurNav');
	});

//distance

(function() {
    
    var mX, mY, distance,
        $distance = $('#distance span'),
        $element  = $('.me.nav');

    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
    }

    $(document).mousemove(function(e) {  
        mX = e.pageX;
        mY = e.pageY;
        distance = calculateDistance($element, mX, mY);
        

        var d = (distance/150).toString();

        var blurDistance = "blur(" + d + "px)"
        console.log(blurDistance);
        $('.blurNav').css("filter", blurDistance);
    });

})();


//scroll

	// if (scrollCount >= 10){
	// 	console.log('reset scroll');
	// 	scrollCount = 0;
	// }

	// $(window).scroll(function() {
	// 	if (scrollCount >= 75){
	// 	$("img").removeClass('box');
	// 	console.log('reset scroll');
	// 	scrollCount = 0;
	// 	} else{
 //  		scrollCount += 1;
 //  		console.log(scrollCount);
 //  		}
	// });


});