$(document).ready(function(){

    a= {
        'left':500,
        'opacity':0
    };
    b= {
        'left':0,
        'opacity':1
    };
    c={
        'left': -500,
        'opacity':  0
    }

   
    $('.slider li').css(a);
    
    slider();
    function slider()
    {
        first = $('.slider li').first('li');
        current = $('.active');
        next = current.next();
      
        
        if (next.length==1)
            {
                $(current).animate(c, 500, function(){
                $(this).removeClass('active').css(a);
            })
                $(next).animate(b,500).addClass('active');
            }
        else
            {
                $(first).addClass('active').css(b);
                $(current).removeClass('active').css(a);
            }
        
        setTimeout(slider, 3000);
    }
    
  



})