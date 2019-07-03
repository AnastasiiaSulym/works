$(document).ready(function() {
  var menu = $("#menu");
  var menu2 = $(".burgermenu");
  var submenu = $("#li__item-cat");

  $(menu).mouseover(function() {
    $(".burgermenu").css("display", "block");
  });
  $(menu2).mouseover(function() {
    $(".burgermenu").css("display", "block");
  });
  $(menu).mouseout(function() {
    $(".burgermenu").css("display", "none");
  });
  $(menu2).mouseout(function() {
    $(".burgermenu").css("display", "none");
  });
  $(submenu).mouseover(function() {
    $("#submenu").css("display", "block");
  });

     
    })
