   	var scrollPos;  
   	var scrollOld = 0;
    var n = document.documentElement.clientHeight;
	var w = document.documentElement.offsetWidth;
    var s = document.getElementsByClassName('bl');
window.onload  = function  () {
    if(w>1000){
        for (var i = s.length - 1; i >= 0; i--) {
            s[i].style.height = n-130+"px";
            s[i].style.width = "100%";
            s[i].style.paddingTop = "130px";
        }
    }    
}
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
