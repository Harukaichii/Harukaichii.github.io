var picArray=['./cat1.jpg','./cat2.jpg','./cat3.jpg','./cat4.jpg', './cat5.jpg'];
var hairlength=3;


var index=1;

function flip(ind, dir){
	index+=ind;
	if(index< 0)
	index=picArray.length-1;
	if(index>=picArray.length){
		index=0;
	}

	let left= index-1;
	let right= index+1;

	if(right === picArray.length)
		right=0;

	if(left < 0)
		left= picArray.length-1;

	if(dir==='left'){
		moveLeft(left, index, right);
	}
	else{
		moveRight(left, index, right);
	}

}
function moveLeft(left, ind, right){
	$('.right').addClass('animate3R');
	$('.mid').addClass('animateR');
	$('.left').addClass('animate2R');
	$('.hiddenL').css({'display':'block', 'opacity':0});
	$('.hiddenL').addClass('animate4R');


	$('.hiddenL').css({"background-image":"url("+picArray[left]+")", 
					"background-size":"70% 70%",
					"background-repeat":"no-repeat",
					"background-position":"center"});

		setTimeout(function(){

				$('.hiddenL').css("display","none");
				$('.hiddenL').removeClass('animate4R');


				$('.left').attr('onClick',"");
				$('.mid').addClass('left');
				$('.left').not('.mid').addClass('right');

				$('.mid.left').removeClass('mid animateR');
				$('.right').not('.left').addClass('mid');
				$('.left.right').removeClass('left animate2R');

				$('.mid.right').removeClass('right animate3R');
				$('.left').css({"background-image":"url("+picArray[left]+")", 
							"background-size":"70% 70%",
							"background-repeat":"no-repeat",
							"background-position":"center"});
				$('.mid').css({"background-image":"url("+picArray[ind]+")", 
									"background-size":"70% 70%",
									"background-repeat":"no-repeat",
									"background-position":"center"});
				$('.right').css({"background-image":"url("+picArray[right]+")", 
									"background-size":"70% 70%",
									"background-repeat":"no-repeat",
									"background-position":"center"});
				$('.right').attr("onClick","flip(1, 'right')");
				$('.left').attr("onClick","flip(-1,'left')");
	


	}, 2500);

}

function moveRight(left, ind, right){
	
	$('.mid').addClass('animate');
	$('.left').addClass('animate3');
	$('.right').addClass('animate2');
	$('.hiddenR').css({'display':'block', 'opacity':0});
	$('.hiddenR').addClass('animate4');
	

	$('.hiddenR').css({"background-image":"url("+picArray[right]+")", 
				"background-size":"70% 70%",
				"background-repeat":"no-repeat",
				"background-position":"center"});
	setTimeout(function(){
			$('.hiddenR').css("display","none");
			$('.hiddenR').removeClass('animate4');


			$('.right').attr('onClick',"");
			$('.mid').addClass('left');
			$('.left').not('.mid').addClass('right');

			$('.mid.left').removeClass('mid animate');
			$('.right').not('.left').addClass('mid');
			$('.left.right').removeClass('left animate3');

			$('.mid.right').removeClass('right animate2');
			$('.left').css({"background-image":"url("+picArray[left]+")", 
						"background-size":"70% 70%",
						"background-repeat":"no-repeat",
						"background-position":"center"});
			$('.mid').css({"background-image":"url("+picArray[ind]+")", 
								"background-size":"70% 70%",
								"background-repeat":"no-repeat",
								"background-position":"center"});
			$('.right').css({"background-image":"url("+picArray[right]+")", 
								"background-size":"70% 70%",
								"background-repeat":"no-repeat",
								"background-position":"center"});
			$('.right').attr("onClick","flip(1, 'right')");
			$('.left').attr("onClick","flip(-1,'left')");



}, 2500);


}
$('#cat1').css({"background-image":"url("+$('#cat1').attr('id')+".jpg)", 
					"background-size":"70% 70%",
					"background-repeat":"no-repeat",
					"background-position":"center"});
$('#cat2').css({"background-image":"url("+$('#cat2').attr('id')+".jpg)", 
					"background-size":"70% 70%",
					"background-repeat":"no-repeat",
					"background-position":"center"});
$('#cat3').css({"background-image":"url("+$('#cat3').attr('id')+".jpg)", 
					"background-size":"70% 70%",
					"background-repeat":"no-repeat",
					"background-position":"center"});




var navs = $('nav p');
var selected="Hair";
for(let i =0; i<navs.length; i++){
	navs[i].addEventListener("click",function(){
		$('.active').removeClass('active');
		navs[i].classList.add('active');
		selected=navs[i].textContent;
		console.log(selected);
	});
}
$(document).ready(function(){
	$('.closeG').click(function(){
		$('#gallery').fadeOut('slow');
		$('#home').fadeIn('slow');

		
	});
	


});