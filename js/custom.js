$(window).scroll(function(){
    
    if ($(this).scrollTop()==0){
        $(".main-bar").css("background-color","transparent");
    } else {
        $(".main-bar").css({"background-color":"#333" , "padding":"60px auto"});
    }
})
// $(function(){
  
// })
$(".showe").height($(window).height());
$(".one").height($(".showe").height());
$(".showe img").height($(".one").height());
$(window).on("resize",function(){
    $(".showe").height($(window).height()); 
    $(".one").height($(".showe").height());
    $(".showe img").height($(".one").height())
})
// /adding class active on each element to display for awhile and dissappear in the end
// $(function autoSlider()
//     {
//         $(".showe .active").each(function ()
//         {
//            if (!$(this).is(":last-child")) {
//                $(this).delay("1000").fadeOut("1000",function()
//                {
//                 $(this).removeClass("active").next().addClass("active").fadeIn("1000");
//                 autoSlider();
//                })

//            } else {

//             $(this).fadeIn("1000").delay("1000").fadeOut("1000",function()

//             {
//                 $(this).removeClass("active");
//                 $(".showe  .one").eq(0).addClass("active").fadeIn("1000");
//                 autoSlider(); 
//             })
//            } 
//         })
             
//     });

    $(".showe .one:gt(0)").hide();
    setInterval(function(){
        $(".showe .one:first").fadeOut("slow").next().fadeIn("slow").end().appendTo(".showe")

    },"3000")

    // nav links trigger
    $(function(){
        $(".menu .menu-links a").click(function(e){
            e.preventDefault();
            $(this).addClass("active").parent().siblings().find("a.active").removeClass("active")
            $(".menu-contents").find($(this).data("target")).fadeIn().siblings(".menu-element").css({"display":"none"});
        })
    })
    // css({"display":"block"})
    
// start owl-carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        loop:true,
        autoplay:true,
        dots:true,
        dotsEach:true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    }
        );
  });

//   scroll to top button appearence

    
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 200) {
            $(".to-top").css("display","block") 
        } else {
            $(".to-top").css("display","none")
        }
        // console.log($(window).scrollTop())
    })
    $(window).scroll(function(){
        $(".block").each(function(){
            if ($(window).scrollTop() > $(this).offset().top){
                var blockid= $(this).attr("id");
                $(".navbar1 li a").removeClass("active");
                $(".navbar1 li a[data-scroll=" + blockid + "]").addClass("active")
                // console.log(blockid)
            }
        })
    })

    
// clicking the links to go to its ids
// $(function(){
   
// })
$(".navbar1 li a").click(function(e){
    e.preventDefault();
    // console.log( $($(this).data("scroll")).offset().top);
    $("html,body").animate({scrollTop : $($(this).data("scroll")).offset().top},2000)
    
})
$(function(){
    $(window).resize(function(){
        console.log($(window).width())
    })
})

// clicking button slidr navbaf on and off
$(".swap").click(function(){
    $(".main-bar .navbar1").slideToggle()
})
// scroll to top
$(".to-top").click(function(){
    $("html,body").animate({
        scrollTop : 0
    },"1500")
})