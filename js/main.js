new WOW().init();

$.scrollIt({
    topOffset: -50
});

$(document).scroll(function () {
    if ($(document).scrollTop() > 300) {
        $('.top').fadeIn();
    } 
    else {
        $('.top').fadeOut();
    }
})

$('.top').click(function () {

    $('body, html').animate({
        scrollTop: 0
    }, 1500);

})
const menuBtn=document.querySelector('.menu-btn');
let menuOpen=false;
menuBtn.addEventListener('click',()=>{
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen=true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen=false;
        
    }
});
$(window).on("load",function(){
    $(".preloader").fadeOut("slow");
});
