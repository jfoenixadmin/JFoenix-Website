
window.onload= function(){
    $('#intro-text-placeholder').on('mouseenter mouseleave', function(e) {
        var image = e.type === 'mouseenter' ? '103% 103%' : '100% 100%';
        $(this).parent().parent().parent().parent().css('background-size', image);
    });
	
}

window.onscroll = function () {  
	var str = window.location.href;
	var div = str.split('#')[1];

	var scrollTop = $(window).scrollTop(),
	topOffset = $('header').offset().top,
	topDistance = (topOffset - scrollTop);
	
	startOffset = $('#start').offset().top,
	startDistance = (startOffset - scrollTop);
	
	licesnseOffset = $('#licenseLink').offset().top,
	licesnseDistance = (licesnseOffset - scrollTop);
    
	if(!div){
		if(startDistance<= 50 && startDistance>=-50){
			div= "start";
		}
		else if(licesnseDistance<=500){
			div= "licenseLink";
		}
	}
	
	if(div=="start") iterateSteps();
}
	
//var onLicense= false;
//function animateLicense(){
//    if(onLicense == false){
//        onLicense= true;
//        setTimeout( function(){
//            $($("#licenseImg")).animate({ opacity : 0.1 });
//            setTimeout(function() {
//                $($("#licenseImg")).animate({ opacity: 1 });
//                setTimeout(function() { onLicense = false; }, 3000)
//			},500)			
//		},200)
//    }
//}

var looping = false;

function iterateSteps(){
	if(looping == false){
		looping = true;		
		setTimeout(
			function(){
			    var oldWidth1 = $("#openImg").width();
				$("#openImg").animate({ width: '65%' });					
				setTimeout(function(){
				    $("#openImg").animate({ width: oldWidth1 });
				    var oldWidth2 = $("#importImg").width();
				    $("#importImg").animate({ width: '75%' });
				    setTimeout(function(){
				         $("#importImg").animate({ width: oldWidth2 });
				         var oldWidth3 = $("#dragImg").width();
				         $("#dragImg").animate({ width: '66%' });
				         setTimeout(function(){
				            $("#dragImg").animate({ width: oldWidth3 });
				            var oldWidth4 = $("#saveImg").width();
				            $("#saveImg").animate({ width: '56%' });
				            setTimeout(function(){
				                $("#saveImg").animate({ width: oldWidth4 });
				                looping = false;
				            },1000)
				         },1000)				        
				    },1000)
				},1000)
			},500)
	}
}