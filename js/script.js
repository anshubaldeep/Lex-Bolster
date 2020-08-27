
        $('body').scrollspy({ target: '#navbar' })
    
    
    

    
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
    

    

    
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
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
    
        