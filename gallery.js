var picArray=[['pic1.jpg','pic2.jpg','pic3.jpg'],
['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg'],
['pic1.jpg','pic2.jpg','pic3.jpg']];

var text =["Collection of hair styles I've done on myself or on others.",
"Simple drawings on good ol' MS paint.",
"A record of everything else I do."];

var dir = "Hair";
// 0 -> Hair
// 1 -> Sketches
// 2 -> Misc

var index=1, left=0, right =2;

var navs = $('nav p');
var selected=0;

var clickDisabled =false; //prevents user from screwing things up >:c

	function reset(){
	
	$('.circlecontainer>.mid').attr("src","gallery/"+dir+"/"+picArray[selected][index]);
	$('.circlecontainer>.left').attr("src","gallery/"+dir+"/"+picArray[selected][left]);
	$('.circlecontainer>.right').attr("src","gallery/"+dir+"/"+picArray[selected][right]);
	
}




for(let i =0; i<navs.length; i++){
	navs[i].addEventListener("click",function(){	
		$('.active').removeClass('active');
		$('.circlecontainer').addClass('moveOn');
		$('.description').addClass('moveOn');

		setTimeout(function(){
			reset();
			$('.description').text(text[i]);
				
		},1000);

		let el = $('.circlecontainer');
		el.before(el.clone(true)).remove();

		let el2 = $('.description');
		el2.before(el2.clone(true)).remove();

		navs[i].classList.add('active');
		selected=i;
		left=0;
		index=1;
		right=2;
		dir=navs[i].textContent;


	});
}
$(document).ready(function(){
	$('.closeG').click(function(){
		$('#gallery').fadeOut('slow');
		$('#home').fadeIn('slow');

		
	});
	reset();
	


});



function flip(ind, dir){
	index+=ind;
	if(index< 0)
	index=picArray[selected].length-1;
	if(index>=picArray[selected].length){
		index=0;
	}

	left= index-1;
	right= index+1;

	if(right === picArray[selected].length)
		right=0;

	if(left < 0)
		left= picArray[selected].length-1;

	if(dir==='left'){
		moveLeft();
	}
	else{
		moveRight();
	}
	console.log("value of index" + index);

}
function moveLeft(){

	if(clickDisabled)
		return;
	$('.right').addClass('animate3R');
	$('.mid').addClass('animateR');
	$('.left').addClass('animate2R');
	$('.hiddenL').css({'display':'block', 'opacity':0});
	$('.hiddenL').addClass('animate4R');


	$('.hiddenL').attr("src","gallery/"+dir+"/"+picArray[selected][left]);
	clickDisabled = true;
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
				$('.circlecontainer>.left').attr("src","gallery/"+dir+"/"+picArray[selected][left]);
				$('.circlecontainer>.mid').attr("src","gallery/"+dir+"/"+picArray[selected][index]);
				$('.circlecontainer>.right').attr("src","gallery/"+dir+"/"+picArray[selected][right]);
				$('.right').attr("onClick","flip(1, 'right')");
				$('.left').attr("onClick","flip(-1,'left')");
				clickDisabled = false;
	


	}, 2500);

}

function moveRight(){
	if(clickDisabled)
		return;
	$('.mid').addClass('animate');
	$('.left').addClass('animate3');
	$('.right').addClass('animate2');
	$('.hiddenR').css({'display':'block', 'opacity':0});
	$('.hiddenR').addClass('animate4');
	

	$('.hiddenR').attr("src","gallery/"+dir+"/"+picArray[selected][right]);
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
			$('.circlecontainer>.left').attr("src","gallery/"+dir+"/"+picArray[selected][left]);
			$('.circlecontainer>.mid').attr("src","gallery/"+dir+"/"+picArray[selected][index]);
			$('.circlecontainer>.right').attr("src","gallery/"+dir+"/"+picArray[selected][right]);
			console.log(index);
			$('.right').attr("onClick","flip(1, 'right')");
			$('.left').attr("onClick","flip(-1,'left')");



}, 2500);


}



