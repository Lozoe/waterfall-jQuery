$(window).on('load',function(){
	waterFall();
});

function waterFall() {
	var $boxs=$('#main>div');
	var w=$boxs.eq(0).outerWidth();
	var cols=Math.floor($(window).width()/w);
	$("#main").width(w*cols).css('margin','0 auto');
	var hArr=[];
	$boxs.each(function(index,value){
		var h=$boxs.eq(index).outerHeight();
		if(index<cols){
			hArr.push(h);
		}else {
			minH=Math.min.apply(null,hArr);
			var minHeightIndex=$.inArray(minH,hArr);
			// console.log(value);
			$(value).css({
				'position':'absolute',
				'top':minH+'px',
				'left':minHeightIndex*w+'px'
			});
			hArr[minHeightIndex]+=$boxs.eq(index).outerHeight();
		}
	});
	// console.log(hArr);
}