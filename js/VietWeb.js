/** Cho slider tự thay đổi mỗi 5s */
var index = 1;
changeImage = function(){
    var imgs = ["images/slider1.jpg","images/slider2.jpg","images/slider3.jpg"];
    document.getElementById('img').src = imgs[index];
    index++; 
    if(index==3){
        index = 0;
    }
}
setInterval(changeImage,5000)

