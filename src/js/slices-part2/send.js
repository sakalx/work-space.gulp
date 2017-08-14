$(document).ready(function () {
    var aproved = function aproved() {
        alert('I got your message' + '\r\n' + 'Thank You ' + $('#contact__author--name').val());
        nandiHide();
    };
    $("#contact__content").submit(function () {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize(),
            success: function success(data, textStatus, jQxhr) {
                aproved();
            },
            error: function error(jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
                alert(errorThrown);
            }
        });
    });
});