
// Menu Open Action
$('.menu').click(function(){
    $('.sidebar').animate({
        marginLeft:0
    });
});

$('.hidemenu').click(function(){
    $('.sidebar').animate({
        marginLeft:-300
    });
});

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//On Click and Go To Url
function go(url){
    location.href = `${url}`;
}

//Full Screen Mode
$('#full').click(function(){
    let current = $('#table_id').closest(".card");
    current.toggleClass('data-table');
    if(current.hasClass("data-table")){
        $('#full_icon').addClass('feather-minimize-2');
        $('#full_icon').removeClass('feather-maximize-2');
    }else{
        $('#full_icon').addClass('feather-maximize-2');
        $('#full_icon').removeClass('feather-minimize-2');
    }
});

//Auto Scroll
let screenHeight = $(window).height();
let currentMenuHeight = $(".nav-menu .active").offset().top;

if(currentMenuHeight > screenHeight*0.8 ){
    $(".sidebar").animate({
        scrollTop:currentMenuHeight-100
    },1000)
}