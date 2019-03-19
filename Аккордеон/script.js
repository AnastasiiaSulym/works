$(document).ready(function(){
    var acc = $('#accordion');
    var head = acc.find('h3');
    var div = acc.find('div');
    div.first().siblings('div').css('display' , 'none');
    head.first().addClass('active').siblings('h3').addClass('hidden');


    acc.find('img').each(function(){ 
   
        var elem = $(this);
      var title = $(elem).attr('title'); 
      
      $(elem).wrap('<div class="pic"></div>');
      $(elem).after('<h5>'+ title +'</h5>');
     
    });

    head.click(function(){

     $(this).addClass('active').removeClass('hidden').siblings('h3').addClass('hidden')
       $(this).next('div').slideDown(500).siblings('div').slideUp(500);
    })
   
})
