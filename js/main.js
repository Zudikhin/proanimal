$(document).ready(function () {
    "use strict";

    $(".header_content_btn").click(function() {
        $(this).toggleClass('active');
        // $(".header_drop").toggleClass("active");
        // $("body").toggleClass("drop");
    });

    var ExpertHeightTopWave = $(".expert_top_wave").height();
    var ExpertNegativeTopWave = "-" + ExpertHeightTopWave;
    var ExpertNumNegativeTopWave = parseInt(ExpertNegativeTopWave);
    if($(window).width() < 577) {
        $(".expert_top_wave").css("top", ExpertNumNegativeTopWave);
    } else if($(window).width() >= 768 && $(window).width() < 1024) {
        var intervalExpert = (ExpertHeightTopWave * 75)/100;
        var intervalExpertNegative = "-" + intervalExpert;
        var intervalExpertNegativeNum = parseInt(intervalExpertNegative);
        $(".expert_top_wave").css("top", intervalExpertNegativeNum);
        $(".expert_top_wave").css("height", intervalExpert);
    } else if($(window).width() == 1024) {
        $(".expert_top_wave").css("top", ExpertNumNegativeTopWave);
    } else {
        var intervalExpert = (ExpertHeightTopWave * 75)/100;
        var intervalExpertNegative = "-" + intervalExpert;
        var intervalExpertNegativeNum = parseInt(intervalExpertNegative);
        $(".expert_top_wave").css("top", intervalExpertNegativeNum);
    }
    
    // var ExpertHeightBottomWave = $(".expert_bottom_wave").height();
    // var ExpertNegativeBottomWave = "-" + ExpertHeightBottomWave;
    // var ExpertNumNegativeBottomWave = parseInt(ExpertNegativeBottomWave);
    // $(".expert_bottom_wave").css("bottom", ExpertNumNegativeBottomWave);


    // var CosmeticsHeightTopWave = $(".cosmetics_top_wave").height();
    // var CosmeticsNegativeTopmWave = "-" + CosmeticsHeightTopWave;
    // var CosmeticsNumNegativeTopWave = parseInt(CosmeticsNegativeTopmWave);
    // $(".cosmetics_top_wave").css("top", CosmeticsNumNegativeTopWave);

    // 247 - 100%
    // x - 64%

    
    var CosmeticsHeightBottomWave = $(".cosmetics_bottom_wave").height();
    var CosmeticsNegativeBottomWave = "-" + CosmeticsHeightBottomWave;
    var CosmeticsNumNegativeBottomWave = parseInt(CosmeticsNegativeBottomWave);
    $(".cosmetics_bottom_wave").css("bottom", CosmeticsNumNegativeBottomWave);
    
    // if($(window).width() < 767) {
    //     $(".cosmetics_bottom_wave").css("bottom", CosmeticsNumNegativeBottomWave);
    // } else {
    //     var halfCosmetics = (CosmeticsHeightBottomWave * 50)/100;
    //     var intervalCosmetics = (CosmeticsHeightBottomWave * 35)/100;
    //     //$(".cosmetics_bottom_wave").css("height", halfCosmetics);
    //     var intervalCosmeticsNegative = "-" + intervalCosmetics;
    //     var intervalCosmeticsNegativeeNum = parseInt(intervalCosmeticsNegative);
    //     $(".cosmetics_bottom_wave").css("bottom", intervalCosmeticsNegativeeNum);
    // }

    // var FaqHeightTopWave = $(".faq_wave_top").height();
    // var FaqNegativeTopWave = "-" + FaqHeightTopWave;
    // var FaqNumNegativeTopWave = parseInt(FaqNegativeTopWave);
    // $(".faq_wave_top").css("top", FaqNumNegativeTopWave);

    // var FaqHeightBottomWave = $(".cosmetics_bottom_wave").height();
    // var FaqNegativeBottomWave = "-" + FaqHeightBottomWave;
    // var FaqNumNegativeBottomWave = parseInt(FaqNegativeBottomWave);
    // $(".faq_wave_bottom").css("bottom", FaqNumNegativeBottomWave);

});