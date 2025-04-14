// document ready
$(document).ready(function(){ 

    // هنگام بارگذاری صفحه، موقعیت اسکرول را بازیابی کنیم  
    if (sessionStorage.getItem('scrollPosition')) {  
        $(window).scrollTop(sessionStorage.getItem('scrollPosition'));  
    }  

    // هنگام اسکرول، موقعیت اسکرول را ذخیره کنیم  
    $(window).on('scroll', function() {  
        sessionStorage.setItem('scrollPosition', $(window).scrollTop());  
    });  
    
    
    //m1
   
    $('.right').click(function () {
        var m1width = $('.m1-slides').width();
        $('.m1-slides').animate( { scrollLeft: '+=' + m1width }, m1width , function(){
            if(($('.m1-slides').scrollLeft()) == 0){
                $('.right').css("display" , "none"); 
                $('.btn-m1-slid').addClass('btn-m1-left');
                $('.btn-m1-slid').removeClass('btn-m1-right');           
                $('.left').css("display" , "block");
            }    
            if(($('.m1-slides').scrollLeft()) < 0){
                $('.btn-m1-slid').addClass('btn-m1-left');
                $('.left').css("display" , "block");
            }    
        });
    });
    
    $('.left').click(function () {
        var m1width = $('.m1-slides').width();
        $('.m1-slides').animate( { scrollLeft: '-=' + m1width }, m1width , function(){
            if( ($(window).width() > 1300) && ($('.m1-slides').scrollLeft()) < -60){
                $('.btn-m1-slid').addClass('btn-m1-right');
                $('.right').css("display" , "block");
                $('.left').css("display" , "none"); 
                $('.btn-m1-slid').removeClass('btn-m1-left');          
            }    
            if(($(window).width() < 576) && ($(window).width() > 330) && (($('.m1-slides').scrollLeft()) < -583)){
                $('.left').css("display" , "none"); 
                $('.btn-m1-slid').addClass('btn-m1-right');
                $('.btn-m1-slid').removeClass('btn-m1-left');           
                $('.right').css("display" , "block");
            }    
              
            if(($(window).width() < 767) && ($(window).width() > 576) && (($('.m1-slides').scrollLeft()) < -603)){
                $('.left').css("display" , "none"); 
                $('.btn-m1-slid').addClass('btn-m1-right');
                $('.btn-m1-slid').removeClass('btn-m1-left');           
                $('.right').css("display" , "block");
            }  
            
            if(($(window).width() < 992) && ($(window).width() > 767) && (($('.m1-slides').scrollLeft()) < -400)){
                $('.left').css("display" , "none"); 
                $('.btn-m1-slid').addClass('btn-m1-right');
                $('.btn-m1-slid').removeClass('btn-m1-left');           
                $('.right').css("display" , "block");
            }  
            
            if(($(window).width() < 1200) && ($(window).width() > 992) && (($('.m1-slides').scrollLeft()) < -193)){
                $('.left').css("display" , "none"); 
                $('.btn-m1-slid').addClass('btn-m1-right');
                $('.btn-m1-slid').removeClass('btn-m1-left');           
                $('.right').css("display" , "block");
            }  
            
            if(($(window).width() <= 1300 ) && ($(window).width() >= 1200) && (($('.m1-slides').scrollLeft()) < -73)){
                $('.left').css("display" , "none"); 
                $('.btn-m1-slid').addClass('btn-m1-right');
                $('.btn-m1-slid').removeClass('btn-m1-left');           
                $('.right').css("display" , "block");
            }  
        });
    });

    // function toggleButtons() {  
    //     const scrollLeft = $('.m1-slides').scrollLeft();  
    //     const windowWidth = $(window).width();  
    //     const m1width = $('.m1-slides').width();  
    //     // برای تعیین عرض صفحه
    //     const windosize = [  
    //         { max: 576, min: 430, limit: -843 },  
    //         { max: 767, min: 576, limit: -603 },  
    //         { max: 992, min: 767, limit: -400 },  
    //         { max: 1200, min: 992, limit: -193 },  
    //         { max: 1300, min: 1200, limit: -73 },
    //         { max: 1400, min: 1300, limit: -40 },

    //     ];  
    //     console.log($('.m1-slides').scrollLeft()) 

    //     let hideLeft = false;  
    //     let showRight = false;  

    //     windosize.forEach(({ max, min, limit }) => { 
    //         if (windowWidth < max && windowWidth > min && scrollLeft < limit) {  
    //             hideLeft = true;  
    //             showRight = true;  // نمایش دکمه سمت راست
    //         }  
    //     });  
        
    //     $('.left').css("display", hideLeft ? "none" : "block");  
    //     $('.right').css("display", showRight ? "block" : "none");  
    //     $('.btn-m1-slid').toggleClass('btn-m1-left', !hideLeft);  
    //     $('.btn-m1-slid').toggleClass('btn-m1-right', showRight);
  
    // }  

    // $('.right').click(function () {  
    //     const m1width = $('.m1-slides').width();  
    //     $('.m1-slides').animate({ scrollLeft: '+=' + m1width }, m1width, function () {  
    //         if ($('.m1-slides').scrollLeft() <= 0) {  
    //             $(this).stop().animate({ scrollLeft: 0 }, 400); // جلوگیری از اسکرول منفی  
    //         }  
    //         toggleButtons();  
    //     });  
    // });  

    // $('.left').click(function () {  
    //     const m1width = $('.m1-slides').width();  
    //     $('.m1-slides').animate({ scrollLeft: '-=' + m1width }, m1width, function () { 
    //         if ($('.m1-slides').scrollLeft() < -40) {  
    //             toggleButtons();  
    //         }  
    //     });  
    // });  





    //m3

    // function toggleButtons3() {  
    //     const scrollLeft3 = $('.m3-slides').scrollLeft();  
    //     const windowWidth3 = $(window).width();  
    //     const m3width = $('.m3-slides').width();  
    //     // برای تعیین عرض صفحه
    //     const windosize3 = [  
    //         { max: 576, limit: -863 },  
    //         { max: 767, limit: -603 },  
    //         { max: 992, limit: -400 },  
    //         { max: 1200, limit: -193 },  
    //         { max: 1300, limit: -73 },
    //         { max: 1400, limit: -40 },

    //     ];  

    //     let hideLeftm3 = false;  
    //     let showRightm3 = false;  

    //     windosize3.forEach(({ max, limit }) => {  
    //         if (windowWidth3 < max && scrollLeft3 < limit) {  
    //             hideLeftm3 = true;  
    //             showRightm3 = true;  // نمایش دکمه سمت راست
    //         }  
    //     });  
        
    //     $('.m3-left').css("display", hideLeftm3 ? "none" : "block");  
    //     $('.m3-right').css("display", showRightm3 ? "block" : "none");  
    //     $('.btn-m3-slid').toggleClass('btn-m3-left', !hideLeftm3);  
    //     $('.btn-m3-slid').toggleClass('btn-m3-right', showRightm3);
    //     console.log($('.m3-slides').scrollLeft()) 
  
    // }  

    // $('.m3-right').click(function () {  
    //     const m3width = $('.m3-slides').width();  
    //     $('.m3-slides').animate({ scrollLeft: '+=' + m3width }, m3width, function () {  
    //         if ($('.m3-slides').scrollLeft() <= 0) {  
    //             $(this).stop().animate({ scrollLeft: 0 }, 400); // جلوگیری از اسکرول منفی  
    //         }  
    //         toggleButtons3();  
    //     });  
    // });  

    // $('.m3-left').click(function () {  
    //     const m3width = $('.m3-slides').width();  
    //     $('.m3-slides').animate({ scrollLeft: '-=' + m3width }, m3width, function () { 
    //         console.log($('.m3-slides').scrollLeft()) 
    //         if ($('.m3-slides').scrollLeft() < -40) {  
    //             toggleButtons3();  
    //         }  
    //     });  
    // });  

    // //  با تغییر اندازه پنجره وضعیت دکمه‌ها را به‌روزرسانی می کند  
    // $(window).resize(toggleButtons);  




    //m3
    $('.m3-right').click(function () {
        var m3width = $('.m3-slides').width();
        $('.m3-slides').animate( { scrollLeft: '+=' + m3width }, m3width , function(){
            if(($('.m3-slides').scrollLeft()) === 0){
                $('.m3-right').css("display" , "none"); 
                $('.btn-m3-slid').addClass('btn-m3-left');
                $('.btn-m3-slid').removeClass('btn-m3-right');           
                $('.m3-left').css("display" , "block");
            } 
            if(($('.m3-slides').scrollLeft()) > -4080){
                $('.btn-m3-slid').addClass('btn-m3-left');
                $('.m3-left').css("display" , "block");
            }   
        });
        // console.log($('.m3-slides').scrollLeft());  
    });
    
    // $('.m3-left').click(function () {
    //     var m3width = $('.m3-slides').width();
    //     $('.m3-slides').animate( { scrollLeft: '-=' + m3width}, m3width , function(){
    //         console.log($('.m3-slides').scrollLeft());  

    //         if(($('.m3-slides').scrollLeft()) <= -281){
    //             console.log($('.m3-slides').scrollLeft());  
    //             $('.btn-m3-slid').addClass('btn-m3-right');
    //             $('.m3-right').css("display" , "block");
    //         }    
    //         if(($('.m3-slides').scrollLeft()) === -4080){
    //             $('.m3-left').css("display" , "none"); 
    //             $('.btn-m3-slid').removeClass('btn-m3-left');           
    //         }    
            
    //     });
    // });
    $('.m3-left').click(function () {
        var m3width = $('.m3-slides').width();
        $('.m3-slides').animate( { scrollLeft: '-=' + m3width }, m3width , function(){
            if( ($(window).width() > 1300) && ($('.m3-slides').scrollLeft()) < -4000){
                $('.btn-m3-slid').addClass('btn-m3-right');
                $('.m3-right').css("display" , "block");
                $('.m3-left').css("display" , "none"); 
                $('.btn-m3-slid').removeClass('btn-m3-left');  
            }    
            if(($(window).width() < 430) && ($(window).width() > 330) && (($('.m3-slides').scrollLeft()) < -4140)){
                $('.m3-left').css("display" , "none"); 
                $('.btn-m3-slid').addClass('btn-m3-right');
                $('.btn-m3-slid').removeClass('btn-m3-left');           
                $('.m3-right').css("display" , "block");
                console.log($('.m3-slides').scrollLeft())        

            }    
            
            if(($(window).width() < 576) && ($(window).width() > 430) && (($('.m3-slides').scrollLeft()) < -3540)){
                $('.m3-left').css("display" , "none"); 
                $('.btn-m3-slid').addClass('btn-m3-right');
                $('.btn-m3-slid').removeClass('btn-m3-left');           
                $('.m3-right').css("display" , "block");

            }    
              
            if(($(window).width() < 767) && ($(window).width() > 576) && (($('.m3-slides').scrollLeft()) < -4603)){
                $('.m3-left').css("display" , "none"); 
                $('.btn-m3-slid').addClass('btn-m3-right');
                $('.btn-m3-slid').removeClass('btn-m3-left');           
                $('.m3-right').css("display" , "block");

            }  
            
            if(($(window).width() < 992) && ($(window).width() > 767) && (($('.m3-slides').scrollLeft()) < -4400)){
                $('.m3-left').css("display" , "none"); 
                $('.btn-m3-slid').addClass('btn-m3-right');
                $('.btn-m3-slid').removeClass('btn-m3-left');           
                $('.m3-right').css("display" , "block");
            }  
            
            if(($(window).width() < 1200) && ($(window).width() > 992) && (($('.m3-slides').scrollLeft()) < -4100)){
                $('.m3-left').css("display" , "none"); 
                $('.btn-m3-slid').addClass('btn-m3-right');
                $('.btn-m3-slid').removeClass('btn-m3-left');           
                $('.m3-right').css("display" , "block");
                console.log($('.m3-slides').scrollLeft())        
            }  
            
            if(($(window).width() <= 1300 ) && ($(window).width() >= 1200) && (($('.m3-slides').scrollLeft()) < -73)){
                $('.m3-left').css("display" , "none"); 
                $('.btn-m3-slid').addClass('btn-m3-right');
                $('.btn-m3-slid').removeClass('btn-m3-left');           
                $('.m3-right').css("display" , "block");
            }  
        });
    });

        
    //m4
    $('.m4-right').click(function () {
        var m4width = $('.m4-slides').width();
        $('.m4-slides').animate( { scrollLeft: '+=' + m4width }, m4width , function(){
            if(($('.m4-slides').scrollLeft()) === 0){
                $('.m4-right').css("display" , "none"); 
                $('.btn-m4-slid').addClass('btn-m4-left');
                $('.btn-m4-slid').removeClass('btn-m4-right');           
                $('.m4-left').css("display" , "block");
            } 
            if(($('.m4-slides').scrollLeft()) > -1299){
                $('.btn-m4-slid').addClass('btn-m4-left');
                $('.m4-left').css("display" , "block");
            }   
        });
        console.log($('.m4-slides').scrollLeft());  
    });

    // $('.m4-left').click(function () {
    //     var m4width = $('.m4-slides').width();
    //     $('.m4-slides').animate( { scrollLeft: '-=' + m4width }, m4width , function(){
    //         console.log($('.m4-slides').scrollLeft());  

    //         if(($('.m4-slides').scrollLeft()) <= -281){
    //             console.log($('.m4-slides').scrollLeft());  
    //             $('.btn-m4-slid').addClass('btn-m4-right');
    //             $('.m4-right').css("display" , "block");
    //         }    
    //         if(($('.m4-slides').scrollLeft()) === -1299){
    //             $('.m4-left').css("display" , "none"); 
    //             $('.btn-m4-slid').removeClass('btn-m4-left');           
    //         }    
            
    //     });
    // });
    $('.m4-left').click(function () {
        var m4width = $('.m4-slides').width();
        $('.m4-slides').animate( { scrollLeft: '-=' + m4width }, m4width , function(){
            console.log($('.m4-slides').scrollLeft())        

            if( ($(window).width() > 1300) && ($('.m4-slides').scrollLeft()) < -1200){
                $('.btn-m4-slid').addClass('btn-m4-right');
                $('.m4-right').css("display" , "block");
                $('.m4-left').css("display" , "none"); 
                $('.btn-m4-slid').removeClass('btn-m4-left');  
            }    
            if(($(window).width() < 430) && ($(window).width() > 330) && (($('.m4-slides').scrollLeft()) < -1480)){
                $('.m4-left').css("display" , "none"); 
                $('.btn-m4-slid').addClass('btn-m4-right');
                $('.btn-m4-slid').removeClass('btn-m4-left');           
                $('.m4-right').css("display" , "block");
            }    
            
            if(($(window).width() < 576) && ($(window).width() > 430) && (($('.m4-slides').scrollLeft()) < -2100)){
                $('.m4-left').css("display" , "none"); 
                $('.btn-m4-slid').addClass('btn-m4-right');
                $('.btn-m4-slid').removeClass('btn-m4-left');           
                $('.m4-right').css("display" , "block");

            }    
              
            if(($(window).width() < 767) && ($(window).width() > 576) && (($('.m4-slides').scrollLeft()) < -1860)){
                $('.m4-left').css("display" , "none"); 
                $('.btn-m4-slid').addClass('btn-m4-right');
                $('.btn-m4-slid').removeClass('btn-m4-left');           
                $('.m4-right').css("display" , "block");

            }  
            
            if(($(window).width() < 992) && ($(window).width() > 767) && (($('.m4-slides').scrollLeft()) < -1600)){
                $('.m4-left').css("display" , "none"); 
                $('.btn-m4-slid').addClass('btn-m4-right');
                $('.btn-m4-slid').removeClass('btn-m4-left');           
                $('.m4-right').css("display" , "block");
            }  
            
            if(($(window).width() < 1200) && ($(window).width() > 992) && (($('.m4-slides').scrollLeft()) < -1300)){
                $('.m4-left').css("display" , "none"); 
                $('.btn-m4-slid').addClass('btn-m4-right');
                $('.btn-m4-slid').removeClass('btn-m4-left');           
                $('.m4-right').css("display" , "block");
                console.log($('.m4-slides').scrollLeft())        
            }  
            
            if(($(window).width() <= 1300 ) && ($(window).width() >= 1200) && (($('.m4-slides').scrollLeft()) < -73)){
                $('.m4-left').css("display" , "none"); 
                $('.btn-m4-slid').addClass('btn-m4-right');
                $('.btn-m4-slid').removeClass('btn-m4-left');           
                $('.m4-right').css("display" , "block");
            }  
        });
    });

    //m6 accordion menu item

    function toggleAccordion(activeClass , activeBtn) {  
        $('.courses-accordion, .singin-accordion, .poplic-accordion').css("display", "none");  
        $('.cat-m6-2, .cat-m6-3 , .cat-m6-1').css("color", "#757575");  
        $(`.${activeClass}`).css("display", "block"); // فعال  
        $(`.${activeBtn}`).css("color", "#fff"); // فعال  
        $('.cat-item-animat').toggleClass('show').css("right", "441px");  
    }      
    $('.cat-m6-1').click(function() {
        toggleAccordion('poplic-accordion' , 'cat-m6-1');  
    });  
    
    $('.cat-m6-2').click(function() {  
        toggleAccordion('courses-accordion' , 'cat-m6-2');  
    });  
    
    $('.cat-m6-3').click(function() {  
        toggleAccordion('singin-accordion' , 'cat-m6-3');  
    });  

    // close button in collapse for mobail 

    $('.btn-cl-menu').click(function() {
        $('.mycollapse').removeClass('show')
    })


    
});