$(document).ready(function () {
    $('.js_btn_menu').on('click touchstart', function (event) {
        event.preventDefault();
        $('#menu-bar').slideToggle();
        $('.js_btn_menu').toggleClass('open');
    });
    $('.btn-message-info-modal').on('click touchstart', function (event) {
        event.preventDefault();
        $('.message-info-modal').removeClass('success error').hide();
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
                'name': $("#form-contact #name").val(),
                'phone': $("#form-contact #phone").val(),
                'mail': $("#form-contact #mail").val(),
                'comment': $("#form-contact #comment").val()
            };
            $('.message-modal').fadeIn('fast');
            setTimeout(function () {
                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: data,
                    success: function () {
                        $('.message-modal').fadeOut('fast', function () {
                            $('.message-info-modal').addClass('success')
                            $('.message-info-modal.success').fadeIn('fast');
                        });
                        resetForm();
                    },
                    error: function () {
                        $('.message-modal').fadeOut('fast', function () {
                            $('.message-info-modal').addClass('error')
                            $('.message-info-modal.error').fadeIn('fast');
                        });
                        resetForm();
                    }
                });
            }, 1500);
        }
    });

    function resetForm() {
        $("#form-contact .form-control").val('');
        $('.message-info-modal').removeClass('success error').hide();
        grecaptcha.reset();
    }
})
