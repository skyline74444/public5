//Slieder for h1 content
$('.slider').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true
});
//toggle-nav
$(document).ready(function(){
    $('#nav-toggle').click(function(){
        $('#nav-toggle').toggleClass('active');
    });
});