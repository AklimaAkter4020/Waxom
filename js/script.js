
var navbar = document.getElementById("navbar");
window.addEventListener("scroll",function(){
  // var sticky = this.window.scrollY;
navbar.classList.toggle("sticky",window.scrollY)

})

var mixer = mixitup('.filter-area');


new VenoBox();

// counter up
$('.counter').counterUp({
  delay: 1,
  time: 10000
});




// slick slider

  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow:'<span><i class="fas fa-chevron-right next"></i></span>',
    nextArrow:'<span><i class="fas fa-chevron-left prev"></i></span>',
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

 

