console.log('it`s alive');
	/*var menuOpener = document.getEleleByClassName('menu_opener');

	console.log($('.menu_opener'))
	('.menu_opener').click(function){
		$(this).find('.menu_opener').toggleClass('active');
	}
*/

	$('.icon-menu').click(function(){
		 $(this).toggleClass('icon-menu-close');
		 $('.menu').toggleClass('active');
	})
   	$('.button').click(function(){
   		var color = ["#CCCCCC","#333333","#990099"]
   		var rang = color[Math.floor(Math.random() * color.length)];
		 $(this).css("background-color", rang);
   	
	})

var hammertime = new Hammer(document);
	hammertime.on('panright panleft', function(ev) {
	console.log(ev.type);
	if(ev.type == 'panright'){
		$('.icon-menu').addClass('icon-menu-close');
		$('.menu').addClass('active');
	}
	if(ev.type == 'panleft'){
		$('.icon-menu').removeClass('icon-menu-close');
		$('.menu').removeClass('active');
	}
});