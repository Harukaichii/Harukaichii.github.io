// make fadeout class an animation instead of transition. focus more on displaying text than fading
$(document).ready(function(){
	var clickDisableCon =false;

	$('.aboutme').click(function(event){
			$('.aboutme h1').fadeOut();
			$('.aboutme').addClass('aboutme-ani');
			setTimeout(function(){

				let top1 = ($('.aboutme').position().top );

				 top1-= $('.left-box img').height();
				console.log($('.left-box img').css("top", top1 ));
				$('.left-box img').addClass('flip-in');
				$('.left-box img').removeClass('hidden');
						console.log($('.aboutme').offset())
			}, 1300);
			setTimeout(function(){
				$('.aboutme h1').css("display", "none");
				$('.info').fadeIn();

				
					
		},1500);

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

		if($('.contactme h1').css('display') === 'none'){
			$('.contactme').addClass("contactme-ani");
			$('.contactme div').fadeOut('slow');
			$('.contactme div').addClass('hidden');
			setTimeout(function(){
				$('.contactme').removeClass('footerafter');
				$(".contactme").removeClass("contactme-ani");
				$('.contactme h1').fadeIn();
				clickDisableCon=false;


		}, 999);

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

	$(".contactme").click(function(event){
		if(!clickDisableCon){
			$('.contactme h1').fadeOut();
			$(this).addClass("contactme-ani");


			setTimeout(function(){
				$('.contactme').addClass('footerafter');
				$(".contactme").removeClass("contactme-ani");
				$('.contactme div').fadeIn();
				$('.contactme div').css({"display":"flex", "justify-content":"space-around","align-items":"center", "padding-top":"1%", "transform":"scale(0.5)"});
				$('.contactme div').removeClass('hidden');
				$('.contactme h1').css("display","none");


			}, 1100);

		}
	

		clickDisableCon =true;
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}

	});
});





