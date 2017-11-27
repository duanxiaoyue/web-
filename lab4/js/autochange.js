window.onload=function(){
	var picScroll = document.getElementById('picScroll');
	var picScroll1 = document.getElementById('picScroll1');
	var t=setInterval(changeToLeft,10);
	function changeToLeft(){
		if(picScroll.scrollLeft>=(picScroll1.offsetWidth)){
			picScroll.scrollLeft=0;
		}
		else
		{
			picScroll.scrollLeft+=1;
		}
	}
	
	picScroll.onmouseover=function(){
		clearInterval(t);
	}
	picScroll.onmouseout=function(){
		t=setInterval(changeToLeft,10);
	}
	
}