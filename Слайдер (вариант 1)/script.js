$(document).ready(function(){

    lit1= {
        'left':500,
        'opacity':0
    };
    lit2= {
        'left':0,
        'opacity':1
    };

   


    $('.slider li').css(lit1);
    
    slider();
    function slider()
    {
        first = $('.slider li').first('li');
        current = $('.active');
        next = current.next();
      
        
        if (next.length==1)
            {
                $(current).removeClass('active').css(lit1);
                $(next).addClass('active').css(lit2)
            }
        else
            {
                $(first).addClass('active').css(lit2);
                $(current).removeClass('active').css(lit1);
            }
        
        setTimeout(slider, 2000);
    }
    
  




   

  




})