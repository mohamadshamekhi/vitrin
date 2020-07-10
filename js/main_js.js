$(document).ready(function () {
    $("#active_category").click(function () {
       $("#show_category").toggleClass("show_category");
    }) 

    $("#active_category_menu").click( function () {
        $("#show_category_menu").slideToggle("slow");
        $("#chng_title_color").toggleClass("active_title_menu");
        $("#active_rotate_arrow").toggleClass("arrow_rotate")
    })



   
});


