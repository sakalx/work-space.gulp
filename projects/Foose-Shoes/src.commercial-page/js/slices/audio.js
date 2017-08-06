//Audio
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('sc_switch-btn').onmouseover = (function() {
        document.getElementsByTagName('audio')[0].play();
        return false;
    });

    document.getElementById('sc_switch-btn').onmouseout = (function() {
        document.getElementsByTagName('audio')[0].play();
        return false;
    });
});