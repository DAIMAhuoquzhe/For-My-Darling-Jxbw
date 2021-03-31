	/**  
		scroll to element function
	**/
		function scrollToElement(selector, time, verticalOffset) {
			time = typeof(time) != 'undefined' ? time : 500;
			verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
			element = $(selector);
			offset = element.offset();
			offsetTop = offset.top + verticalOffset;
			$('html, body').animate({
				scrollTop: offsetTop
			}, time);			
		}

		function reloadScrollBars() {
    		document.documentElement.style.overflow = 'auto';  // firefox, chrome
    		document.body.scroll = "yes"; // ie only
		}

		function unloadScrollBars() {
   			document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    		document.body.scroll = "no"; // ie only
		}
		
	/**  
		document ready
	**/		
		$(document).ready(function() {

			$(this).scrollTop(0);

			$('#scroll-to-moon').animate({"margin-bottom":"0px"},600);

				/*unloadScrollBars();**/

				$('#scroll-to-moon').click(function (e) {
					e.preventDefault();
					$('#scroll-to-moon').animate({"margin-bottom":"-150px"},600,function(){
						scrollToElement('#Moon', 6000, -250);
					});
					setTimeout(function() {
						$('#scroll-to-mars').animate({"opacity":"0"},10);
						$('#scroll-to-earth').animate({"opacity":"0"},10);
						$('#scroll-to-moon').animate({"opacity":"0"},10);
					}, 600);
					setTimeout(function() {
						$('#scroll-to-mars').animate({"opacity":"1"},10);
						$('#scroll-to-earth').animate({"opacity":"1"},10);
						$('#scroll-to-moon').animate({"opacity":"1"},10);
						$('#scroll-to-mars').animate({"margin-bottom":"0px"},600);

					}, 6000);
				});

				$('#scroll-to-mars').click(function (e) {
					e.preventDefault();

					$('#scroll-to-mars').animate({"margin-bottom":"-150px"},600,function(){
						scrollToElement('#Mars', 60000, -250);
					});

					setTimeout(function() {
						$('#scroll-to-mars').animate({"opacity":"0"},10);
						$('#scroll-to-earth').animate({"opacity":"0"},10);
						$('#scroll-to-moon').animate({"opacity":"0"},10);
					}, 600);

					setTimeout(function() {
    					$("#Speed-Hint").css('left', function(){ return $(this).offset().left; })
             			.animate({"left":"50px"}, 600);
					}, 10000);
					setTimeout(function() {
    					$("#Speed-Hint").css('left', function(){ return $(this).offset().left; })
             			.animate({"left":"-400px"}, 600);
					}, 20000);


					setTimeout(function() {
    					$("#Time-Hint").css('right', function(){ return $(this).offset().right; })
             			.animate({"right":"50px"}, 600);
					}, 25000);
					setTimeout(function() {
    					// rest of code here
    					$("#Time-Hint").css('right', function(){ return $(this).offset().right; })
             			.animate({"right":"-400px"}, 600);
					}, 35000);

					setTimeout(function() {
    					$("#MannedMission-Hint").css('left', function(){ return $(this).offset().left; })
             			.animate({"left":"50px"}, 600);
					}, 40000);
					setTimeout(function() {
    					// rest of code here
    					$("#MannedMission-Hint").css('left', function(){ return $(this).offset().left; })
             			.animate({"left":"-400px"}, 600);
					}, 50000);


					setTimeout(function() {
						$('#scroll-to-mars').animate({"opacity":"1"},10);
						$('#scroll-to-earth').animate({"opacity":"1"},10);
						$('#scroll-to-moon').animate({"opacity":"1"},10);
    					$('#scroll-to-earth').animate({"margin-bottom":"0px"},600);
    					//reloadScrollBars();
					}, 60000);
				});

				$('#scroll-to-earth').click(function (e) {
					e.preventDefault();
					$('#scroll-to-earth').animate({"margin-bottom":"-150px"},600,function(){
						scrollToElement('#Earth', 25000, -250);
					});
					setTimeout(function() {
						$('#scroll-to-mars').animate({"opacity":"0"},10);
						$('#scroll-to-earth').animate({"opacity":"0"},10);
						$('#scroll-to-moon').animate({"opacity":"0"},10);
					}, 600);
					setTimeout(function() {
						$('#scroll-to-mars').animate({"opacity":"1"},10);
						$('#scroll-to-earth').animate({"opacity":"1"},10);
						$('#scroll-to-moon').animate({"opacity":"1"},10);
    					$('#scroll-to-moon').animate({"margin-bottom":"0px"},600);
    					reloadScrollBars();
					}, 25000);					
				});
				
			
		});