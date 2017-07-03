//首页
$(function(){
    //轮播图
    var swiper = new Swiper('#banner', {
        pagination: '#banner .pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        loop:true
    });
    $('.swiper-button-prev').on('click',function(e){
        e.preventDefault()
        swiper.swipePrev()
    });
    $('.swiper-button-next').on('click',function(e){
        e.preventDefault()
        swiper.swipeNext()
    });

    var atives = new Swiper('#active-img', {
        pagination: '#active-img .pagination',
        paginationClickable: true,
        slidesPerView: 2,
        //autoplay: 2500,
        loop:true
    });
    //关于光头佬
    var index;
    $('.contain-wrap .contain-nav li').on('click',function(){
        index = $(this).index();
        //console.log(index);
        $(this).addClass('active').siblings().removeClass('active');
        $('.contain-wrap .contain-main .contain-list').eq(index).show().siblings().hide();
    })

    //手机端导航
    $('#openNav').on('click',function(){
        $('#nav').toggle(500);
    });
    $('#nav li').on('click',function(){
        $(this).parent('#nav').hide(500);
    });
})
