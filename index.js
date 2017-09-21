   	var scrollPos;  
   	var scrollOld = 0;
	var n = document.documentElement.clientHeight;
window.onscroll = function () {  
    if (window.pageYOffset) {  
    scrollPos = window.pageYOffset; }  
    else if (document.compatMode && document.compatMode != 'BackCompat')  
    { scrollPos = document.documentElement.scrollTop; }  
    else if (document.body) { scrollPos = document.body.scrollTop; }   
    // return scrollPos;  
    if(scrollOld<scrollPos){
    	document.body.scrollTop = Math.ceil(scrollPos/n)*n
		// window.scrollTo(0,)
    }else{
    	window.scrollTo(0,Math.floor(scrollPos/n)*n)
    }
    scrollOld = scrollPos;
} 
