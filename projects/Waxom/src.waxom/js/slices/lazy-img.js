//Lazy img
document.addEventListener("DOMContentLoaded", function (e) {
    var imgs = Array.prototype.slice.call(document.querySelectorAll('img[realsrc]'));
    var iH = document.documentElement.clientHeight;
    
    document.addEventListener("scroll", (function loadImgs() {
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].getBoundingClientRect().bottom > 0 && imgs[i].getBoundingClientRect().top < (iH+200) ) {
                imgs[i].src = imgs[i].getAttribute("realsrc");
                imgs[i].removeAttribute("realsrc");
                imgs.splice(i, 1);
                --i;
            }
        }
        return loadImgs;
    })());
});