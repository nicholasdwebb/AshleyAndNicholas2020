$(function(){
	function loadImages(col, i){
		$("#gal-col-"+col).append('<img id="gal-img-'+i+'" src="Pics/Gallery/'+i+'.jpg" onerror="$(this).remove();" />'
			+'<img id="gal-img-'+i+'" src="Pics/Gallery/'+i+'.png" onerror="$(this).remove();" />'
			+'<img id="gal-img-'+i+'" src="Pics/Gallery/'+i+'.PNG" onerror="$(this).remove();" />')
			.ready(setTimeout(function(){
				if($('#gal-img-'+i).length != 0){
					// console.log(i);
					i++
					col++
					if(col == 4){
						col = 1;
					}
					loadImages(col, i);
				}
			},25));
	}
	loadImages(1,1);
})