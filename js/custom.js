$('header .content .left .mobile__menu').click(function(){
    $('header .content .right nav').slideToggle();
});



$(document).ready(function(){
    $('.save_advertising_content , .last_visit_content').hide();
    $('section.main div.adverstising_nav .content nav ul .my_advertising').addClass('add_bottom_border');


    $('section.main div.adverstising_nav .content nav ul .save_advertising span').click(function() {
        $('div.adverstising_nav .content nav ul .save_advertising').addClass('add_bottom_border');
        $('div.adverstising_nav .content nav ul .my_advertising').removeClass('add_bottom_border');
        $('div.adverstising_nav .content nav ul .last_visit').removeClass('add_bottom_border');
        $('.my_advertising_content , .last_visit_content').hide();
        $('.save_advertising_content ').show();
    })
    $('section.main div.adverstising_nav .content nav ul .last_visit span').click(function() {
        $('div.adverstising_nav .content nav ul .last_visit').addClass('add_bottom_border');
        $('div.adverstising_nav .content nav ul .my_advertising').removeClass('add_bottom_border');
        $('div.adverstising_nav .content nav ul .save_advertising').removeClass('add_bottom_border');
        $('.my_advertising_content , .save_advertising_content').hide();
        $('.last_visit_content ').show();
    })
    $('section.main div.adverstising_nav .content nav ul .my_advertising span').click(function() {
        $('div.adverstising_nav .content nav ul .my_advertising').addClass('add_bottom_border');
        $('div.adverstising_nav .content nav ul .last_visit').removeClass('add_bottom_border');
        $('div.adverstising_nav .content nav ul .save_advertising').removeClass('add_bottom_border');
        $('.last_visit_content , .save_advertising_content').hide();
        $('.my_advertising_content ').show();
    })


    $('.filter_adverstising').click(function (){
        $('.filter_adverstising_show').toggleClass('hide_show')
    })
    $('section.main div.adverstising_nav .content nav ul .nav_closer').click(function (){
        $('.filter_adverstising_show').toggleClass('hide_show')
    })
})