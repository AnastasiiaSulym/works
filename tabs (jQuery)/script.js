$(document).ready(function(){

    

  var tabs = $('#tabs');
     tabs
     .find('div')
     .first()
     .addClass('active1')
     .siblings('div')
     .addClass('active2');

     tabs
     .find('li')
     .first()
     .addClass('active');


    tabs.find('li').click(function(){
    
        $(this).addClass('active').siblings().removeClass('active');
        var activ = $(this).find('a').attr('href');
        $(activ).addClass('active1').removeClass('active2').siblings('div').removeClass('active1').addClass('active2');
     })
     

    
   

    
})