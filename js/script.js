 // scroll to top function 
  $(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
      $('.scrollToTop').fadeIn(1500);
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  

 // nav animation function 
  $(window).scroll(function(){
    if ($(this).scrollTop() > 250) {
      $('nav').css({
      	"z-index": "5",
      	"width": "100%", 
      	"padding-top": "9px",
      	"padding-bottom": "9px", 
      	"box-shadow": "0px 12px 10px -10px rgba(0,0,0,0.4)", 
      	"position": "fixed", 
      	"background": "rgb(255, 255, 255)"
      	});
      $(".landingp").css({
      	"-webkit-filter": "blur(5px)",
	    "-moz-filter": "blur(5px)",
	    "-o-filter": "blur(5px",
	    "-ms-filter": "blur(5px)",
	    "filter": "blur(5px)"
      });
      $("nav ul li a").css({
      	"color": "#717f86"
      });
      $("nav ul").css({
      	"padding": "0px",
      	"padding-top": "23px"
      });
    } else {
      $('nav').css({
      	"z-index": "2",
      	"width": "auto", 
      	"padding-top": "50px",
      	"box-shadow": "none", 
      	"position": "static", 
      	"background": "transparent"
      	});
      $(".landingp").css({
      	"-webkit-filter": "blur(0px)",
	    "-moz-filter": "blur(0px)",
	    "-o-filter": "blur(0px",
	    "-ms-filter": "blur(0px)",
	    "filter": "blur(0px)"
      });
      $("nav ul li a").css({
      	"color": "#DFF0D8"
      });
      $("nav ul").css({
      	"padding": "20px 0px"
      });
    }
  });
  
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });


// slider
$(function(){

    $("#sContainer").slick({
  arrows: false,
  infinite: true,
  pauseOnHover: true,
});
  

});

// particles
particlesJS("particles-js", {"particles":{"number":{"value":43,"density":{"enable":true,"value_area":789.1476416322727}},"color":{"value":"#16a085"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":false,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":160.3412060865523,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":250,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

  
