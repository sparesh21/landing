$(document).ready(function () {
    // var winHeight = $(window).outerHeight();
    // var winwidth = $(window).outerWidth();
    // var headeHeight = $('.header').outerHeight();
    // if (winwidth > 960) {
    //     $('.welcome-area').css('height', winHeight - headeHeight);


    // }
    // if (winwidth < 960) {
    //     console.log('click');
    //     $('#open-form').on('click', function () {
    //         $('.welcome-area').hide();
    //         $('.registration-panel').addClass('open');
    //     });
    // }

    // $('#open-form').on('click', function () {
    //     $('.registration-panel').addClass('open');
    // });
    // $('#cancel-btn').on('click', function () {
    //     $('.registration-panel').removeClass('open');
    // });
    // $('.submit-btn').on('click', function () {
    //     $('.form-container').hide();
    //     $('.thankyou-contianer').fadeIn();
    // });
    // $('#back-btn').on('click', function () {
    //     $('.thankyou-contianer').fadeOut();
    //     setTimeout(() => {
    //         $('.registration-panel').removeClass('open');
    //         $('.welcome-area').fadeIn();
    //     }, 300);
    //     setTimeout(() => {
    //         $('.form-container').show();
    //     }, 1000);

    // });
    $(".choose-file").on("change", ".file-upload-field", function () {
        $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
    });
})
$(window).on('load', function () {
    $('.loader-container').fadeOut();
})