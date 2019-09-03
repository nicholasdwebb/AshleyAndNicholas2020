$(function(){
	var galIndex = 0;
	$("#gallery img").each(function(i,e){
		// console.log(i,e);
		$(e).click(function(){
			$("#viewer").css("display","flex");
			$("#viewer img").attr("src",$(e).attr("src"));
			galIndex = i;
		});
	});
	$("#viewer-background, #viewer img").click(function(){
		$("#viewer").hide();
	});
	$("#prev").click(function(){
		$("#viewer").show();
		galIndex--;
		if(galIndex < 0){
			galIndex = $("#gallery img").length - 1;
		}
		$("#viewer img").attr("src",$("#gallery img:eq("+galIndex+")").attr("src"));
	});
	$("#next").click(function(){
		$("#viewer").show();
		galIndex++;
		if(galIndex >= $("#gallery img").length){
			galIndex = 0;
		}
		$("#viewer img").attr("src",$("#gallery img:eq("+galIndex+")").attr("src"));
	});
});