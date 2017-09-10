//div.animate({ top: '-=100px' }, 600, 'easeInCubic', function () { … })
window.onload= function(){
	setTimeout(
			function(){
			
				$("#team1").animate({ top: '-=100px' }, 200, 'easeInCubic');
				$("#team1").animate({ opacity: 1 });
				$("#team2").animate({ top: '-=100px' }, 200, 'easeInCubic');
				$("#team2").animate({ opacity: 1 });
				$("#team3").animate({ top: '-=100px' }, 200, 'easeInCubic');
				$("#team3").animate({ opacity: 1 });
				$("#team4").animate({ top: '-=100px' }, 200, 'easeInCubic');
				$("#team4").animate({ opacity: 1 });
				$("#team5").animate({ top: '-=100px' }, 200, 'easeInCubic');
				$("#team5").animate({ opacity: 1 });
			}
		,200)
}