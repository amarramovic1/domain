$(document).ready(function(){
  
  function initSlick() {
    
    if ($(window).width() < 768) {
      // inicijalizuje slick ako već nije
      
      if (!$('.row.success-row.g-4').hasClass('slick-initialized')) {
        $('.row.success-row.g-4').slick({
          dots: false, //aktivira tačkice za navigaciju ispod slidera
          arrows: false, //strelice - sledeci/prethodni slajd
          infinite: true, //beskonacno listanje
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // aktivira centriranje prvog slajda
          centerPadding: '9%', // padding kako bi se vidio dio sledece kartice 
          adaptiveHeight: true,
          mobileFirst: true,
          responsive: [
            {
              breakpoint: 767,
              settings: "unslick" // deaktivira slick na širim ekranima od 768px
            }
          ]
        });
      }
    } else {
      // ako slick postoji i širina ekrana je veća od 768px, deaktivira slick
      
      if ($('.row.success-row.g-4').hasClass('slick-initialized')) {
        $('.row.success-row.g-4').slick('unslick');
      }
    }
  }

  // pozivanje funkcije, da bi se odma provjerila sirina i ekrana
  initSlick();
  
  // ponovno pokretanje na promjenu veličine ekrana (da se uvijek provjeri)
  $(window).on('resize', function() {
    initSlick();
  });
  
  // dodatna funkcija za postavljanje pozicije nakon resize
  $(window).on('resize', function() {
    if ($('.row.success-row.g-4').hasClass('slick-initialized')) {
      $('.row.success-row.g-4').slick('setPosition');
    }
  });

  /*--------------------------------------------------------------------------------------------- */

  function newSlick() {
    
    if ($(window).width() < 768) {
      // inicijalizuje slick ako već nije
      
      if (!$('.row.custom-gutters').hasClass('slick-initialized')) {
        $('.row.custom-gutters').slick({
          infinite: true, //beskonacno listanje
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,
          mobileFirst: true,
          responsive: [
            {
              breakpoint: 767,
              settings: "unslick" // deaktivira slick na širim ekranima od 768px
            }
          ]
        });

        //sledeci red
        if (!$('.row.custom-gutters.mt-1').hasClass('slick-initialized')) {
          $('.row.custom-gutters.mt-1').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: true,
            mobileFirst: true,
            responsive: [
              {
                breakpoint: 767,
                settings: "unslick" // deaktivira slick na širim ekranima od 768px
              }
            ]
          });
        }
      }
    } else {
      // ako slick postoji i širina ekrana je veća od 768px, deaktivira slick
      
      if ($('.row.custom-gutters').hasClass('slick-initialized')) {
        $('.row.custom-gutters').slick('unslick');
      }
      
      //sledeci red
      if ($('.row.custom-gutters.mt-1').hasClass('slick-initialized')) {
        $('.row.custom-gutters.mt-1').slick('unslick');
      }
    }
  }

  // pozivanje funkcije, da bi se odma provjerila sirina i ekrana
  newSlick();
  
  $(window).on('resize', function() {
    newSlick();

    if ($('.row.custom-gutters').hasClass('slick-initialized')) {
      $('.row.custom-gutters').slick('setPosition');
    }
    //sledeci red
    if ($('.row.custom-gutters.mt-1').hasClass('slick-initialized')) {
      $('.row.custom-gutters.mt-1').slick('setPosition');
    }
  });

});
