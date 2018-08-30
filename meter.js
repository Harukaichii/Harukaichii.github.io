// make fadeout class an animation instead of transition. focus more on displaying text than fading
$(document).ready(function(){
	console.log(window.location.href);
	$('.aboutme').click(function(event){
			$('.aboutme h1').fadeOut();
			$('.aboutme').addClass('aboutme-ani');
			setTimeout(function(){
				$('.left-box img').addClass('flip-in');
				$('.left-box img').removeClass('hidden');
			}, 2300);
			setTimeout(function(){
				$('.aboutme h1').css("display", "none");
				$('.info').fadeIn();
				
					
		},2500);

			//stops bubble from being closed if it is clicked on
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}

		});

	$('#home').click(function(){
		if($('.aboutme h1').css('display') === 'none'){
			$('.aboutme h1').fadeIn();
			$('.aboutme').removeClass('aboutme-ani');
			$('.left-box img').removeClass('flip-in');
			$('.left-box img').addClass('hidden');
			$('.info').fadeOut();
			$('.aboutme p').fadeOut();
			$('.aboutme p').css("display", "none");
		}

	});
	

	$(window).resize(function(){
		var bodyheight =$(this).height()-"10vh";
		$('.banner').height(bodyheight);
		$('.bow').height(bodyheight+ "10vh");

	});
	//enlarge circle animation
	// $(".circleleft").click(function(){
		
		
	// });
	$(".projects").click(function(){
		$(this).css("z-index", "10");
		$(this).addClass("circle-ani");
		setTimeout(function(){
			$(".circleleft").css("z-index", "1");
			$(".circleleft").removeClass("circle-ani");
		}, 2100);
		setTimeout(function(){
			$('#home').css("display","none");
			$('#projects').fadeIn('slow');
			
		}, 2000);
	});
	$(".gallery").click(function(){
		$(this).css("z-index", "10");
		$(this).addClass("circle-ani");
		setTimeout(function(){
			$(".circleleft").css("z-index", "1");
			$(".circleleft").removeClass("circle-ani");
		}, 2100);
		setTimeout(function(){
			$('#home').css("display","none");
			$('#gallery').fadeIn('slow');
			
		}, 2000);
	});
});





