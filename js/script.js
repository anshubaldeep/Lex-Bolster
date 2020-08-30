
        $('body').scrollspy({ target: '#navbar' })
    
    AOS.init();
    

    
    $(function () {
        $('[data-toggle="popover"]').popover({
        html: true
        })
        $(document).on("click", ".popover .close" , function(){
            $(this).parents(".popover").popover('hide');
        })
        $('.popover-dismiss').popover({
         trigger: 'focus'
        })
    })
    
   
    
   
    $(function(){ 
                var navMain = $(".navbar-collapse");
                navMain.on("click", "a,button", null, function () {
                navMain.collapse('hide');
            });
        });
    

        $('.insights-caraousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:2000
        })

    
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay:true,
            autoplaySpeed:3000,
            responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                
                }
            ,
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                
                }
            }
        
        ]
    });
    
      
    
        $(document).ready(function() {
            AOS.init({
                disable:'phone',
                once:true,
                offset: 200,
                duration: 1400,
            });
        // Navigation color change 
        $(window).scroll(function() {
        var nav_img = $('.navbar-brand img');
        if ($(this).scrollTop() > 400) {
           
            $('.navbar .navbar-brand img').attr('src',"img/logo-small.png");
            $('.navbar .navbar-brand img').attr('style','width:40px !important; height:40px !important');
        } 
        if ($(this).scrollTop() < 400) { 
            $('.navbar .navbar-brand img').attr('src',"img/logo.png");
            $('.navbar .navbar-brand img').attr('style','width:150px !important; height:80px !important');
        }
        });
    });
    
        