$(document).ready(function() {
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

    setTimeout(slider, 3000);
  }

  $(".slider2 li").css(a);
  slider2();
  function slider2() {
    first = $(".slider2 li").first("li");
    current = $(".active2");
    next = current.next();

    if (next.length == 1) {
      $(current).animate(c, 500, function() {
        $(this)
          .removeClass("active2")
          .css(a);
      });
      $(next)
        .animate(b, 500)
        .addClass("active2");
    } else {
      $(first)
        .addClass("active2")
        .css(b);
      $(current)
        .removeClass("active2")
        .css(a);
    }

    setTimeout(slider2, 4000);
  }

  var right = $(".nav__text-2");
  var f = $("#first");
  var s = $("#second");
  var t = $("#third");
  var li = $(".nav__numbers li")
    .first()
    .css("color", "#B98B36")
    .css("border", "1px solid #B98B36")
    .css("border-radius", "50px");
  var li2 = li.next();
  var li3 = li2.next();

  right.click(function() {
    if (f.hasClass("active-img")) {
      f.removeClass("active-img").addClass("notactive-img");
      s.removeClass("notactive-img").addClass("active-img");
      li2
        .css("color", "#B98B36")
        .css("border", "1px solid #B98B36")
        .css("border-radius", "50px");
      li.css("color", "#575C5F").css("border", "none");
    } else if (s.hasClass("active-img")) {
      s.removeClass("active-img").addClass("notactive-img");
      t.removeClass("notactive-img").addClass("active-img");
      li2.css("color", "#575C5F").css("border", "none");
      li3
        .css("color", "#B98B36")
        .css("border", "1px solid #B98B36")
        .css("border-radius", "50px");
    }
  });

});
