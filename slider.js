var index = 1;
var banner = function () {
    var imgs = ["./image/anphuocbanner1.jpg", "./image/anphuocbanner2.jpg", "./image/anphuocbanner3.jpg", "./image/anphuocbanner4.jpg", "./image/anphuocbanner5.jpg"]
    document.getElementById('slider-img').src = imgs[index];
    index++;
    if (index == 5) {
        index = 0;
    }


}
setInterval(banner, 2500);