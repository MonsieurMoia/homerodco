function init(){

	var script = document.createElement('script');
	script.src = 'https://spreadsheets.google.com/feeds/list/1Of34ZaS1gGCzpQgHoQL8s6Y-IICceVa2HSwz3yFrkYo/od6/public/values?alt=json-in-script&callback=hooray';
	document.body.appendChild(script);

	window.hooray = function(json) {
		var products = []
		for (var i = json.feed.entry.length - 1; i >= 0; i--) {
			var product = json.feed.entry[i]
			products.push( { 
				nombre: product["gsx$nombre"]["$t"],
				marca: product["gsx$marca"]["$t"],
				categoria: product["gsx$categoria"]["$t"],
				descripcion: product["gsx$descripcion"]["$t"],
				detalles: product["gsx$detalles"]["$t"],
				presentaciones: product["gsx$presentaciones"]["$t"],
				foto: product["gsx$foto"]["$t"]
			})
		};
		Product.refresh(products);
	}
	//Page Scripts
	var scrollToPlace = function(offset,miliseconds){
	    $('html,body').animate({
	      scrollTop: offset
	    },miliseconds);
	}
	
	
	var rodcoScroll = function(){
	    $(window).scroll(function () {
	    if ($(window).scrollTop() > 500) {
	        $('#scroller').css({'position':'fixed','top':'0'});
	        $('.productsContainer > .tab-content').css('padding',"3.5em 0 0");
	    }else {
	        $('#scroller').css('position', 'relative');
	        $('.productsContainer > .tab-content').css('padding', "0");
	    }
	}
	);  
	}
	
	
	var inProductScroll = function(){
	    scrollToPlace('51',500);
	    $(window).scroll(function () {
	            if ($(window).scrollTop() > 50) {
	                $('#scroller').css({'position':'fixed','top':'0'});
	                $('.productsContainer > .tab-content').css('padding',"3.5em 0 0");
	            }else {
	                $('#scroller').css('position', 'relative');
	                $('.productsContainer > .tab-content').css('padding', "0");
	            }
	
	            if ($(window).scrollTop() > 50 ){
	                $('.sidebarMenu').css({'position':'fixed','top':'60','width':'auto','padding':'0 .5em 1em'});
	            }else{
	                $('.sidebarMenu').css({'position':'relative','top':'0','width':'25%','padding':'0 1em 1em'});
	            }
	        }
	        );  
	}
	
	var carouselHeight = function(heightString){
	    $('.carousel-inner').css('height',heightString);
	}
	
	rodcoScroll();
	$('.brandNav > li , .filters > li').click(function(){
	    
	    if($(this).attr('id') === 'tab-rodco'){
	        scrollToPlace('0',500);
	        carouselHeight('450');
	        rodcoScroll();
	    }else if($(this).attr('class') === 'button'){
	    	scrollToPlace('51',500);
	    }else{ 
	        var mainTabLi = $ ('.brandNav > li');
	        mainTabLi.removeClass('active');
	        carouselHeight('0');
	        inProductScroll();
	    }
	
	});
	
	new WOW().init();

}

module.exports = init();