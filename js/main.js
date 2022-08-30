    // navbar fixed
    let nav = document.querySelector('.nav')
    window.onscroll = e => {
        if (document.documentElement.scrollTop > 100) {
            nav.style.top = '-80px'
        } else {
            nav.style.top = '0px'
        }

        if (document.documentElement.scrollTop > 300) {
            nav.style.position = 'fixed'
            nav.style.top = '0px'
        } else {
            nav.style.position = 'absolute'
        }
    }

    // nav bar inside bars
    let bars = document.querySelector('.bars');
    bars.addEventListener("click", (e) => {
        e.preventDefault()
        document.querySelector('.app_ul').classList.toggle("show_nav");
        document.querySelector('.overlay_nav').classList.toggle("d_blok");
    })

    let overlay_nav = document.querySelector('.overlay_nav');
    overlay_nav.addEventListener("click", (e) => {
        e.preventDefault()
        document.querySelector('.app_ul').classList.remove("show_nav");
        document.querySelector('.overlay_nav').classList.remove("d_blok");
    })
    
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        // Assign active class to nav links while scolling
        $('.page-section').each(function (i) {
            if ($(this).position().top - 90 <= scrollDistance) {
                $('nav li.active').removeClass('active');
                $('nav li').eq(i).addClass('active');
            }
        });
    }).scroll();

var carousel = function () {
    $(".app_carousel").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        nav: true,
        autoplayHoverPause: false,
        items: 1,
        navText: [
            "<span class='ion-md-arrow-back'></span>",
            "<span class='ion-chevron-right'></span>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            66600: {
                items: 1,
            },
            100000: {
                items: 1,
            },
        },
    });
};
    carousel();
    


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });