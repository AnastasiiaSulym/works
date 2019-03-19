// отобрать маленькие картинки

// берем адрес одной маленькой картинки 
var a = document.querySelectorAll('.images img');

   for(var i = 0; i<a.length; i++){
    a[i].addEventListener('click' , newImg );
    
   }

   function newImg(){
       // получаем ссылку одной маленькой картинки
    var url = this.getAttribute('src');
    //выбираем большую картинку
    var img = document.querySelector('.containerImg');
    // менять у большой картинки срц и урл
    img.setAttribute('src' , url);
    img.classList.add('myborder');

    // для каждой маленькой картинки удаляем класс ектив если он есть
    for(var i = 0; i<a.length; i++){
        a[i].classList.remove('active');
        a[i].classList.remove('myborder');
        
    }
    // добавляем класс ектив каждой маленькой картинке
    this.classList.add('active');
    this.classList.add('myborder');
   
   



}