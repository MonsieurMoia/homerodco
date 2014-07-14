var fs = require("fs");

_3vot.el.innerHTML = fs.readFileSync( __dirname + "/views/layout.html"  );

//Product Model
var Product = require("./models/product")

//Controller for RODCO Products List
var List = require("./controllers/list")
List("products")

//Controller for HILCO Products List
var HilcoList = require("./controllers/hilcoList")
HilcoList("hilcoProducts")


require("./managers")



//Page Scripts
var scrollToPlace = function(offset,miliseconds){
    $('html,body').animate({
      scrollTop: offset
    },miliseconds);
}


var rodcoScroll = function(){
    $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        $('#scroller').css('position', 'fixed');
        $('#scroller').css('top',0)
        $('.productsContainer > .tab-content').css('padding',"3em 0 0");
    }else {
        $('#scroller').css('position', 'relative');
        $('.productsContainer > .tab-content').css('padding', "0");
    }
}
);  
}


var inProductScroll = function(){
    scrollToPlace('51',800);
    $(window).scroll(function () {
            if ($(window).scrollTop() > 50) {
                $('#scroller').css('position', 'fixed');
                $('#scroller').css('top',0)
                $('.productsContainer > .tab-content').css('padding',"3em 0 0");
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
$('.brandNav > li').click(function(){
    
    if($(this).attr('id') === 'tab-rodco'){
        scrollToPlace('0',1200);
        carouselHeight('450');
        rodcoScroll();
    }else{ 
    	// alert("YES")
        var mainTabLi = $ ('.brandNav > li');
        mainTabLi.removeClass('active');
        
        carouselHeight('0');
        inProductScroll();
    }

});

$( function() {
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });


  // bind filter button click
  $('.filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
});


new WOW().init();





