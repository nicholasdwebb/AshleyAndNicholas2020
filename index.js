$(function(){
	//general
	var windowHeight = 0;
	setTimeout(function f(){
		if(windowHeight != window.innerHeight){
			windowHeight = window.innerHeight;
			$("#mainWindow").height(windowHeight - $("nav").height() - 16);
			// console.log(windowHeight);
		}
		setTimeout(f,250);
	}, 250);
	swapMainWindow("#aboutUsWrapper");
	$("#aboutUsNavbar").click(function(){
		swapMainWindow("#aboutUsWrapper");
	});
	$("#galleryNavbar").click(function(){
		swapMainWindow("#galleryWrapper");
		setTimeout(startGallery,500);
	});
	$("#animalKingdownNavbar").click(function(){
		swapMainWindow("#ThingsToDoWrapper", "#AnimalKingdom");
	});
	$("#epcotNavbar").click(function(){
		swapMainWindow("#ThingsToDoWrapper", "#Epcot");
	});
	var lastThing;
	function swapMainWindow(str, header){
		if(lastThing != str){
			setTimeout(function(){
				$("#mainWindow").animate({opacity: 0}, 150);
				$("#mainWindow").html($(str).html());
				$(window).scrollTop(0);
				$("#mainWindow").animate({opacity: 1}, 150);
			},150);
		}
		lastThing = str
		if(header != undefined){
			var top = $(header).offset().top;
			top -= 20
			if(top<0){
				top = 0
			}
			$([document.documentElement, document.body]).animate({
	    	    scrollTop: top
		    }, 500);
		}
	}
	$("#mainWindow").mouseenter(function(){
		if(window.innerWidth <= 768 && $("nav").height() >= 50){
			$(".navbar-toggler-icon").click();
		}
	});

	//gallery
	function startGallery(){
		var galIndex = 0;
		$("#mainWindow #gallery img").each(function(i,e){
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
				galIndex = $("#mainWindow #gallery img").length - 1;
			}
			$("#viewer img").attr("src",$("#gallery img:eq("+galIndex+")").attr("src"));
		});
		$("#next").click(function(){
			$("#viewer").show();
			galIndex++;
			if(galIndex >= $("#mainWindow #gallery img").length){
				galIndex = 0;
			}
			$("#viewer img").attr("src",$("#gallery img:eq("+galIndex+")").attr("src"));
		});
	}
});