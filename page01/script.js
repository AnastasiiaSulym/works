$(document).ready(function() {
  var ul = $(".left__list").find("li");
  var ul2 = $(".right__list").find("li:nth-child(1)");
  var ul3 = $(".right__list")
    .find("li:nth-child(1)")
    .next();
  ul.mouseover(function() {
    $(this).css("border-bottom", "1px solid #267df4");
  });
  ul.mouseout(function() {
    $(this).css("border-bottom", "0px");
  });

  ul2.mouseover(function() {
    $(this).css("border-bottom", "1px solid #267df4");
  });
  ul2.mouseout(function() {
    $(this).css("border-bottom", "0px");
  });

  ul3.mouseover(function() {
    $(this).css("border-bottom", "1px solid #267df4");
  });
  ul3.mouseout(function() {
    $(this).css("border-bottom", "0px");
  });
  $(".section__2-block1").css("display", "none");
  $(".section__2-block2").css("display", "none");
  $(".section__3-photo").css("display", "none");

  
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
          $(".header__btn-2").animate(
            {
              fontSize: "20px"
            },
            1000
          );
        }
        if ($(this).scrollTop() > 450) {
          $(".section__2-block1").show(2000);
          $(".section__2-block2")
            .delay(1500)
            .show(2000);
        }
        if ($(this).scrollTop() > 900) {
          $(".section__3-photo").slideDown(5000);
        }

      });

  

  
      
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
          $(".header__btn-2").animate(
            {
              fontSize: "20px"
            },
            1000
          );
        }
        if ($(this).scrollTop() > 450) {
          $(".section__2-block1").show(2000);
          $(".section__2-block2")
            .delay(1500)
            .show(2000);
        }
        if ($(this).scrollTop() > 900) {
          $(".section__3-photo").slideDown(5000);
        }
      });
  

  $('body').on({
    'touchmove': function(e) { 
        $(".header__btn-2").animate(
            {
              fontSize: "20px"
            },
            1000
          );
          $(".section__2-block1").show(2000);
          $(".section__2-block2")
            .delay(1500)
            .show(2000);
            $(".section__3-photo").show(1000);
        }
    })
        

    

  
 
  active = { 
    'background-color': '#fff',
    'border': '3px solid #fff',
    'color': '#26272D',
    'font-weight': 900,
    'height': '60px'
  };
  notactive={
    'background-color': 'transparent',
    'border': '0.5px solid #707070',
    'color':'#707070',
    'height': '50px'
  }
  var a =  $('.individual');
  var b = $('.company');
  var c = $('.first__offer');
  a.click(function(){
    $(this).css(active).siblings('button').css(notactive);
    
})
b.click(function(){
    $(this).css(active).siblings('button').css(notactive);
})

  a = {
    left: 500,
    opacity: 0
  };
  b = {
    left: 0,
    opacity: 1
  };
  c = {
    left: -500,
    opacity: 0
  };

  $(".slider li").css(a);

  slider();
  function slider() {
    first = $(".slider li").first("li");
    current = $(".active");
    next = current.next();

    if (next.length == 1) {
      $(current).animate(c, 500, function() {
        $(this)
          .removeClass("active")
          .css(a);
      });
      $(next)
        .animate(b, 500)
        .addClass("active");
    } else {
      $(first)
        .addClass("active")
        .css(b);
      $(current)
        .removeClass("active")
        .css(a);
    }

    setTimeout(slider, 4000);

   
  }

});
