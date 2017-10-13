

$('.okyakusama').hover(function(){
    $(this).children('.gestcomment').stop().fadeToggle();
});


$('.fa-bars').on('click',function(){
     $('.top-menu-item').slideToggle();
});


$('.text3').on('ready',function(){
    alert('a');
});


// $(function () {
//     $('.more').prevAll().hide();
//     $('.more').click(function () {
//         if ($(this).prevAll().is(':hidden')) {
//             $(this).prevAll().slideDown();
//             $(this).text('閉じる').addClass('close');
//         } else {
//             $(this).prevAll().slideUp();
//             $(this).text('続きを読む').removeClass('close');
//         }
//     });
// });

// $('.more').on('click',function(){
//      $('.text8').slideToggle();
// });

$(function(){
    $(".readmore").on("click", function() {
        $(this).toggleClass("on-click");
        $(this).parent().find(".hide-text").slideToggle(1000);
        var i = $(this).find("i");
        if (i.hasClass('fa-caret-down')) {
          i.removeClass("fa-caret-down");
          i.addClass("fa-caret-up");
        } else {
          i.removeClass("fa-caret-up");
          i.addClass("fa-caret-down");
        }
    });
});
