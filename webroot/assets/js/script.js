$(document).ready(function () {
    var owl_carousel = $(".owl-carousel");
    owl_carousel.owlCarousel({
        rtl:true,
        navigation: true,
        navigationText: ["قبل", "بعد"],
        items: 4,
        itemsTablet: [768, 2]
    });
    owl_carousel.on("next.owl.carousel", function(event){
        alert("on next.owl.carousel");
    });

    var owl = $(".brand-carousel");
    owl.owlCarousel(
        {
            navigation: false,
            pagination: false,
            items: 8,
            itemsTablet: [768, 4],
            itemsMobile: [400, 2]
        });
    $("#nextBrand").click(function () {
        owl.trigger('owl.next');
    })
    $("#prevBrand").click(function () {
        owl.trigger('owl.prev');
    })
    $("#SimilarProductSlider").owlCarousel({navigation: true});
    var pshowcase = $("#productShowCase");
    pshowcase.owlCarousel({
        autoPlay: 4000,
        stopOnHover: true,
        navigation: false,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true
    });
    $("#ps-next").click(function () {
        pshowcase.trigger('owl.next');
    })
    $("#ps-prev").click(function () {
        pshowcase.trigger('owl.prev');
    })
    var imageShowCase = $("#imageShowCase");
    imageShowCase.owlCarousel({
        autoPlay: 4000,
        stopOnHover: true,
        navigation: false,
        pagination: false,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true
    });
    $("#ps-next").click(function () {
        imageShowCase.trigger('owl.next');
    })
    $("#ps-prev").click(function () {
        imageShowCase.trigger('owl.prev');
    })
    $(function () {
        $('.categoryProduct > .item').responsiveEqualHeightGrid()
    });
    $(function () {
        $('.thumbnail.equalheight').responsiveEqualHeightGrid();
    });
    $(function () {
        $('.featuredImgLook2 .inner').responsiveEqualHeightGrid();
    });
    $(function () {
        $('.featuredImageLook3 .inner').responsiveEqualHeightGrid();
    });
    $(".modal-product-thumb a").click(function () {
        var largeImage = $(this).find("img").attr('data-large');
        $(".product-largeimg").attr('src', largeImage);
        $(".zoomImg").attr('src', largeImage);
    });
    $('.collapseWill').on('click', function (e) {
        $(this).toggleClass("pressed");
        e.preventDefault();
    });
    $('.search-box .getFullSearch').on('click', function (e) {
        $('.search-full').addClass("active");
        e.preventDefault();
    });
    $('.search-close').on('click', function (e) {
        $('.search-full').removeClass("active");
        e.preventDefault();
    });
    $(".dropdown-tree-a").click(function () {
        $(this).parent('.dropdown-tree').toggleClass("open-tree active");
    });
    $('.add-fav').click(function (e) {
        e.preventDefault();
        $(this).addClass("active");
        $(this).attr('data-original-title', 'Added to Wishlist');
    });
    $('body').on('click', ".change-view .list-view, .change-view-flat .list-view", function (e) {
        e.preventDefault();
        $('.item').addClass("list-view");
        $('.add-fav').attr("data-placement", $(this).attr("left"));
        $('.categoryProduct > .item').detectGridColumns();
    });
    $('body').on('click', ".change-view .grid-view, .change-view-flat .grid-view", function (e) {
        e.preventDefault();
        $('.item').removeClass("list-view");
        $('.categoryProduct > .item').detectGridColumns();
        setTimeout(function () {
            $('.categoryProduct > .item').responsiveEqualHeightGrid();
        }, 500);
    });
    $(".swatches li").click(function () {
        $(".swatches li.selected").removeClass("selected");
        $(this).addClass('selected');
    });
    $(".modal-product-thumb a").click(function () {
        $(".modal-product-thumb a.selected").removeClass("selected");
        $(this).addClass('selected');
    });
    if (/IEMobile/i.test(navigator.userAgent)) {
        $('.navbar-brand').addClass('windowsphone');
    }
    var isMobile = function () {
        return /(iphone|ipod|ipad|android|blackberry|windows ce|palm|symbian)/i.test(navigator.userAgent);
    };
    if (isMobile()) {
        $('.introContent').addClass('ismobile');
    } else {
        $(function () {
            var tshopScroll = 0;
            $(window).scroll(function (event) {
                var ts = $(this).scrollTop();
                if (ts > tshopScroll) {
                    $('.navbar').addClass('stuck');
                } else {
                    $('.navbar').removeClass('stuck');
                }
                if (ts < 600) {
                    $('.navbar').removeClass('stuck');
                }
                tshopScroll = ts;
            });
        });
    }
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        $('.parallax-section').addClass('isios');
        $('.navbar-header').addClass('isios');
        $('.blog-intro').addClass('isios');
    }
    if (/Android|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.parallax-section').addClass('isandroid');
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.parallax-section').addClass('ismobile');
        $('.parallaximg').addClass('ismobile');
    } else {
        $(window).bind('scroll', function (e) {
            parallaxScroll();
        });
        function parallaxScroll() {
            var scrolledY = $(window).scrollTop();
            var sc = ((scrolledY * 0.3)) + 'px';
            $('.parallaximg').css('marginTop', '' + ((scrolledY * 0.3)) + 'px');
        }

        if ($(window).width() < 768) {
        } else {
            $('.parallax-image-aboutus').parallax("50%", 0, 0.2, true);
            $('.parallaxbg').parallax("50%", 0, 0.2, true);
        }
    }
    $(".scroll-pane").mCustomScrollbar({
        advanced: {updateOnContentResize: true},
        scrollButtons: {enable: false},
        mouseWheelPixels: "200",
        theme: "dark-2"
    });
    $(".smoothscroll").mCustomScrollbar({
        advanced: {updateOnContentResize: true},
        scrollButtons: {enable: false},
        mouseWheelPixels: "100",
        theme: "dark-2"
    });
    window.onload = (function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 86) {
                $('.parallax-image-aboutus .animated').removeClass('fadeInDown');
                $('.parallax-image-aboutus .animated').addClass('fadeOutUp');
            } else {
                $('.parallax-image-aboutus .animated').addClass('fadeInDown');
                $('.parallax-image-aboutus .animated').removeClass('fadeOutUp');
            }
            if ($(window).scrollTop() > 250) {
            } else {
            }
        })
    })
    if ($(window).width() < 989) {
        $('.collapseWill').trigger('click');
    } else {
    }
    $(".tbtn").click(function () {
        $(".themeControll").toggleClass("active");
    });
    $(function () {
        $("input[type='radio'], input[type='checkbox']").ionCheckRadio();
    });
    $("select").minimalect();
    $("input[name='quanitySniper']").TouchSpin({buttondown_class: "btn btn-link", buttonup_class: "btn btn-link"});
    $('.tooltipHere').tooltip('hide')
    var options = [];
    $(".dropdown-menu div, .dropdown-menu input[type='radio'], .dropdown-menu input[type='checkbox'], .dropdown-menu input[type='button']").on('click', function (event) {
        var $target = $(event.currentTarget), val = $target.attr('data-value'), $inp = $target.find('input'), idx;
        if ((idx = options.indexOf(val)) > -1) {
            options.splice(idx, 1);
            setTimeout(function () {
                $inp.prop('checked', false)
            }, 0);
        } else {
            options.push(val);
            setTimeout(function () {
                $inp.prop('checked', true)
            }, 0);
        }
        $(event.target).blur();
        //return false;
    });
    $('.dropdown-menu').find('input').click(function (e) {
        e.stopPropagation();
    });
    $(".scrollto").click(function (event) {
        event.preventDefault();
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        $('html,body').animate({scrollTop: dest - 51}, 1000, 'swing');
    });
});
function productAddToCartForm(productId, factureItemKey, formData){
    var data = typeof formData !== 'undefined' ? formData : [];
    $.ajax({
        url: webroot + "shop/products/add_to_cart/" + productId + "/" + factureItemKey,
        data: data,
        type: 'post',
        success: function(response){
            response = JSON.parse(response);
            if (response.status == 'success') {
                window.location.reload();
            } else {

            }
        }
    });
}
/**
 *
 * @param productId
 * @param reloadPage default is true ( reloading page )
 * @param force default is false ( not delete all at once )
 */
function productRemoveFromCart(factureItemKey, reloadPage, force, callback){
    reloadPage = typeof reloadPage !== 'undefined' ? reloadPage  : true;
    force = typeof force !== 'undefined' ? (force ? 1 : 0) : 0;
    $.ajax({
        url: webroot + "shop/products/remove_from_cart/" + factureItemKey + '/' + force,
        success: function(response){
            response = JSON.parse(response);
            if((response.status == 'success') && !reloadPage){
                if(typeof callback === 'function'){
                    callback(response);
                }
            }else if(reloadPage) {
                window.location.reload();
            } else {
                //error
            }
        }
    });
}