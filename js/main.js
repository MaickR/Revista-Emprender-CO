$(document).ready(function(){
	//Mostrar menu mobil
	$('.ShowMenuMobile').on('click', function(){
		var mobileMenu=$('.NavBarP-Nav');
		var login=$('.Login');
		var body=$('body');
		if(mobileMenu.css('opacity')=="0"){
			mobileMenu.addClass('ShowBox');
			body.addClass('NoScroll');
			$(this).removeClass('fa-bars').addClass('fa-times');
		}else{
			mobileMenu.removeClass('ShowBox');
			if(login.css('opacity')=="1"){
				login.removeClass('ShowBox');
			}
			$(this).removeClass('fa-times').addClass('fa-bars');
			body.removeClass('NoScroll');
		}
	});
	//Mostrar login
	$('.btn-login').on('click', function(e){
		e.preventDefault();
		var login=$('.Login');
		if(login.css('opacity')=="0"){
			login.addClass('ShowBox');
		}else{
			login.removeClass('ShowBox');
		}
	});
});




//TRANCISION DE LAS ANCLAS

// ANCLA DE INICIO 
$(document).ready(function(){
	$('.inicio').click(function(e){       
	  e.preventDefault();   //Para evitar el evento de un enlace normal
	  var ediciones=$(this).attr('href'); //id del ancla
	  $('body,html').stop(true,true).animate({        
		scrollTop: $(ediciones).offset().top -40
	  },1000);
  
	});
  });

  // ANCLA CONTACTENOS
  $(document).ready(function(){
	$('.contact').click(function(e){       
	  e.preventDefault();   //Para evitar el evento de un enlace normal
	  var contactenos_titulo=$(this).attr('href'); //id del ancla
	  $('body,html').stop(true,true).animate({        
		scrollTop: $(contactenos_titulo).offset().top -55
	  },2000);
  
	});
  });


  

  
  /**********************************************************************************************************************************/ 

  $(document).ready(function(){

	$('.site-slider').owlCarousel({
		  loop: true,
		  auto: true,
		  dots: true,
	  mouseDrag: true,
		  autoplay: true,
	  items: 1,
		  nav: false,
	  onTranslated: function() {
		  var $slideHeading = $('.site-slider .owl-item.active .slider-text h3');
		  var $slidePara = $('.site-slider .owl-item.active .slider-text p');
  
		  $slideHeading.addClass('animate-in-fast').on('animationend', function(){
			$slideHeading.removeClass('animate-in-fast').addClass('opacFull');
		  });
  
		  $slidePara.addClass('animate-in-slow').on('animationend', function(){
			$slidePara.removeClass('animate-in-slow').addClass('opacFull');
		  });
		},
	  onChange: function(){
		var $slideHeading = $('.site-slider .owl-item.active .slider-text h3');
		var $slidePara = $('.site-slider .owl-item.active .slider-text p');
  
		$slideHeading.removeClass('opacFull');
		$slidePara.removeClass('opacFull');
  
	  }
		});
	});
  
	