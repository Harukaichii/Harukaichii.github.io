<!--
   var imgObj = null;
   var animate ;
   var w = window.innerWidth;
   var h = window.innerHeight;

   function init(){
      imgObj = document.getElementById('myImage');
      imgObj.style.position= 'relative';
      imgObj.style.left = '0px';
      imgObj.style.top = '0px';
      moveRight();
   }

   function moveRight(){

     if(parseInt(imgObj.style.left) < w-parseInt(imgObj.style.left)/4 && parseInt(imgObj.style.top) < h)
     {

       imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
       imgObj.style.top = parseInt(imgObj.style.top) + 5 + 'px';
     }
     else {
       imgObj.style.left =  0 + 'px';
       imgObj.style.top =  Math.random()*h + 'px';
     }

      animate = setTimeout(moveRight,20); // call moveRight in 20msec
   }

   window.onload =init;
//-->
