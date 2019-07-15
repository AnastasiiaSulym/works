$(document).ready(function() {
    
 
    var btn = $('#s__5-btn');
    btn.click(function(){
        var div = document.createElement('div');
        div.classList.add('new__comment');
        $('.s__4-content').append(div)
        var text = $("input")[0];
        var val = text.value;
        $(div).text(val);
        
    })

    $('input').on('keydown', function(e) {
        if (e.ctrlKey && e.keyCode == 13) {
            var div = document.createElement('div');
            div.classList.add('new__comment');
            $('.s__4-content').append(div)
            var text = $("input")[0];
            var val = text.value;
            $(div).text(val);
        }
      });
})