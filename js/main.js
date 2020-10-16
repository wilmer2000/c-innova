$(document).ready(function () {
    $('.js_btn_menu').on('click touchstart', function (event) {
        event.preventDefault();
        $('#menu-bar').slideToggle();
        $('.js_btn_menu').toggleClass('open');
    });
    $('.menu-bar ul li a').on('click touchstart', function (event) {
        event.preventDefault();
        $('#menu-bar').slideUp();
        $('.js_btn_menu').removeClass('open');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`${this.attributes.href.value}`).offset().top
        }, 1000);
    });


    $(window).resize(function () {
        if ($(document).width() > 767) {
            $('#menu-bar').slideDown('fast');
            $('.js_btn_menu').removeClass('open');
        }
    });

    $('#form-contact').submit(function (event) {
        event.preventDefault();
        if (grecaptcha.getResponse() != "") {
            var data = {
                'name': $("#contacto #name").val(),
                'phone': $("#contacto #phone").val(),
                'mail': $("#contacto #mail").val(),
                'comment': $("#contacto #comment").val()
            };
            $('.messgmodal').fadeIn('fast');
            setTimeout(function () {
                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: data,
                    success: function () {
                        $('.messgmodal').fadeOut('fast');
                        $("#contacto .form-control").val('');
                        grecaptcha.reset();
                    }
                });
            }, 1500);
        }
    });
})
