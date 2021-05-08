$(document).ready(function () {
    "use strict";

    $(".header_content_btn").click(function() {
        $(".dropdown").addClass("active");
        $(".modal_back").addClass("active");
    });

    $(".dropdown_head_close").click(function() {
        $(".dropdown").removeClass("active");
        $(".modal_back").removeClass("active");
    });

    $(".main_top_wave_arrow").click(function() {
        $('html, body').animate({
            scrollTop: $(".expert").offset().top
        }, 2000);
    });

    $(".professional_content_form_quantity_minus").click(function(e) {
        e.preventDefault();
        var defaultValue = $(".professional_content_form_quantity input").val();
        var defaultValueNum = parseInt(defaultValue);
        var finalResultValue = defaultValueNum - 1;
        if(finalResultValue == 0) {
            return false;
        } else {
            $(".professional_content_form_quantity input").val(finalResultValue);
        }
    });


    $(".professional_content_form_quantity_plus").click(function(e) {
        e.preventDefault();
        var defaultValue = $(".professional_content_form_quantity input").val();
        var ResultValueNum = parseInt(defaultValue);
        var finalResultValue = ResultValueNum + 1;
        $(".professional_content_form_quantity input").val(finalResultValue);
    });

    $(".faq_content_main_list_item").click(function() {
        $(this).toggleClass("active");
    });

    $(".cosmetics_content_recommendation_list_item").click(function() {
        $(".popup").removeClass("active");
        $(".modal_back").removeClass("active");
        var id = $(this).attr("id");
        $(".popup").each(function() {
            var dataId = $(this).attr("data-id");
            if(dataId == id) {
                $(".modal_back").addClass("active");
                $(this).addClass("active");
            }
        });
    });

    $(".dropdown_nav li a").click(function(e) {
        var dataId = $(this).attr("data-id");
        if(dataId) {
            e.preventDefault();
            $(".dropdown").removeClass("active");
            $(".modal_back").removeClass("active");
            $('html, body').animate({
                scrollTop: $("#" + dataId).offset().top
            }, 2000);
        }
    });

    $(".footer_content_middle_nav ul li a").click(function(e) {
        var dataId = $(this).attr("data-id");
        if(dataId) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#" + dataId).offset().top
            }, 2000);
        }
    });

    $(".main_content_btn").click(function() {
        $(".modal_back").addClass("active");
        $(".feedback_form").addClass("active");
    });

    $(".professional_content_form_submit").click(function() {
        $(".modal_back").addClass("active");
        $(".feedback_form").addClass("active");
    });

    $(".modal_back").click(function() {
        $(".popup").removeClass("active");
        $(".dropdown").removeClass("active");
        $(".feedback_form").removeClass("active");
        $(this).removeClass("active");
    });
    
    $(".feedback_form_content_name input").focus(function() {
        $(".feedback_form_content_name").addClass("focus");
    });

    $(".feedback_form_content_name input").focusout(function() {
        //$(".feedback_form_content_name").removeClass("focus");
        if($(this).val()) {
            $(".feedback_form_content_name").addClass("focus");
        } else {
            $(".feedback_form_content_name").removeClass("focus");
        }
    });

    $(".feedback_form_content_tel input").focus(function() {
        $(".feedback_form_content_tel").addClass("focus");
    });

    $(".feedback_form_content_tel input").focusout(function() {
        var str = $(this).val();
        if (str.indexOf('_') == -1) {
            $(".feedback_form_content_tel").addClass("focus");
        } else {
            $(".feedback_form_content_tel").removeClass("focus");
        }       
    });

    $(window).scroll(function() {
       var offsetTop = $(window).scrollTop();
       if(offsetTop > 200) {
           $(".back_top").addClass("visible");
       } else {
            $(".back_top").removeClass("visible");
       }
    });

    $(".back_top").click(function() {
        $("html, body").animate({scrollTop: 0}, 2000);
    });

    $("input[type='tel']").mask("+7 (999) 999-99-99");

});