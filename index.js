$(function(){
	var windowHeight = 0;
	setTimeout(function f(){
		if(windowHeight != window.innerHeight){
			windowHeight = window.innerHeight;
			$("#mainWindow").height(windowHeight - $("nav").height() - 16);
			// console.log(windowHeight);
		}
		setTimeout(f,250);
	}, 250);
	$("#aboutUsNavbar").click(function(){
		swapIframe("aboutus.html");
	});
	$("#galleryNavbar").click(function(){
		swapIframe("gallery.html");
	});
	function swapIframe(str){
		$("#mainWindow").animate({opacity: 0}, 150);
		setTimeout(function(){
			$("#mainWindow").attr("src", str);
			$("#mainWindow").animate({opacity: 1}, 150);
		},150);
	}
	$("#mainWindow").mouseenter(function(){
		if(window.innerWidth <= 768 && $("nav").height() >= 50){
			$(".navbar-toggler-icon").click();
		}
	});
});