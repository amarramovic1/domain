$(document).ready(function(){
  
  function initSlick() {
    
    if ($(window).width() < 768) {
      // inicijalizuje slick ako već nije
      
      if (!$('.row.mt-4.g-4').hasClass('slick-initialized')) {
        $('.row.mt-4.g-4').slick({
          dots: true, //aktivira tačkice za navigaciju ispod slidera
          arrows: true, //strelice - sledeci/prethodni slajd
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
      
      if ($('.row.mt-4.g-4').hasClass('slick-initialized')) {
        $('.row.mt-4.g-4').slick('unslick');
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
    if ($('.row.mt-4.g-4').hasClass('slick-initialized')) {
      $('.row.mt-4.g-4').slick('setPosition');
    }
  });

  /*--------------------------------------------------------------------------------------------- */

  function newSlick() {
    
    if ($(window).width() < 768) {
      // inicijalizuje slick ako već nije
      
      if (!$('.row.mt-3.custom-gutters').hasClass('slick-initialized')) {
        $('.row.mt-3.custom-gutters').slick({
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
      
      if ($('.row.mt-3.custom-gutters').hasClass('slick-initialized')) {
        $('.row.mt-3.custom-gutters').slick('unslick');
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

    if ($('.row.mt-3.custom-gutters').hasClass('slick-initialized')) {
      $('.row.mt-3.custom-gutters').slick('setPosition');
    }
    //sledeci red
    if ($('.row.custom-gutters.mt-1').hasClass('slick-initialized')) {
      $('.row.custom-gutters.mt-1').slick('setPosition');
    }
  });

});
