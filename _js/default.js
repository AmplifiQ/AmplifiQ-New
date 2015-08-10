/******************************************************************************
# Checking for mobile
*/
var isMobile = {
    Android: function() {
        "use strict";
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        "use strict";
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        "use strict";
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        "use strict";
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        "use strict";
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        "use strict";
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

/******************************************************************************
# Which Transition event is supported (CSS)?
*/ // Function from David Walsh: http://davidwalsh.name/css-animation-callback
function whichTransitionEvent() {
    "use strict";
    var i,
        el = document.createElement('div'),
        transitions = {
            'transition': 'transitionend',
            'OTransition': 'otransitionend', // oTransitionEnd in very old Opera
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };

    for (i in transitions) {
        if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
            return transitions[i];
        }
    }
}
var transitionEvent = whichTransitionEvent();

/******************************************************************************
# Which Animation event is supported (CSS)?
*/ // Function from David Walsh: http://davidwalsh.name/css-animation-callback
function whichAnimationEvent() {
    "use strict";
    var i,
        el = document.createElement('div'),
        animations = {
            'animation': 'animationend',
            'OAnimation': 'oanimationend', // oAnimationEnd in very old Opera
            'MozAnimation': 'animationend',
            'WebkitAnimation': 'webkitAnimationEnd'
        };

    for (i in animations) {
        if (animations.hasOwnProperty(i) && el.style[i] !== undefined) {
            return animations[i];
        }
    }
}
var animationEvent = whichAnimationEvent();

/******************************************************************************
# What browser / version ?
*/
navigator.browserVersion = (function() {
    'use strict';

    var ua = navigator.userAgent,
        tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'ie' + (' ie' + tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem !== null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) !== null) M.splice(1, 1, tem[1]);
    return M[0].toLowerCase() + (' ' + (M[0] + M[1]).toLowerCase() || '');
})();

/******************************************************************************
# Let's preload some images, shall we?
*/
function preloadImages(imgArr) {
    var img;

    if (!preloadImages.cache) {
        preloadImages.cache = [];
    }
    for (var i = 0; i < imgArr.length; i++) {
        img = new Image();
        img.src = imgArr[i];
        preloadImages.cache.push(img);
    }
}

/******************************************************************************
# Is that value in an array?
*/
function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

/******************************************************************************
# Treating external links - Gri.fo
*/
function externalLinks() {
    "use strict";

    if (!document.querySelector) {
        return;
    }
    var links = document.querySelectorAll('a[rel=external]');
    [].slice.call(links).forEach(function(link) {
        link.target = '_blank';
    });
}

/******************************************************************************
# All set? Let's play!
*/
$(document).ready(function() {
    "use strict";

    setTimeout(function() {
        $('.loading .line-bar').css('width', '100%');
    }, 100);

    $('body').addClass(navigator.browserVersion);

    var imgArr = [
        '_img/bg-clients.jpg',
        '_img/solutions-a-9b59b4.jpg',
        '_img/solutions-b-ee7079.jpg',
        '_img/solutions-c-17bb9c.jpg',
        '_img/solutions-d-3598d9.jpg',
        '_img/bg-grid.png',
        '_img/bg-expansao-iguatemi.png',
        '_img/bt-case-back.png',
        '_img/bt-case-back-white.png',
        '_img/bt-case-open.png',
        '_img/bt-case-open-green.png',
        '_img/bt-case-open-grey.png',
        '_img/bt-case-open-maroon.png',
        '_img/bt-case-open-red.png',
        '_img/bt-case-play-video.png',
        '_img/bt-case-visit-site.png',
        '_img/bt-home-hidereel.png',
        '_img/bt-home-showreel.png',
        '_img/bt-menu.png',
        '_img/bt-menu-dark.png',
        '_img/bt-solutions-close.png',
        '_img/bt-solutions-more.png',
        '_img/logo.png',
        '_img/home-scroll.png',
        '_img/home-services-arrow.png',
        '_img/solutions-icon-bg.png',
        '_img/solutions-icons.png',
        '_img/sprites.png',

        '_img/clients/ornament.svg',
        '_img/clients/banrisul.svg',
        '_img/clients/baril.svg',
        '_img/clients/capsula.svg',
        '_img/clients/converse.svg',
        '_img/clients/elemidia.svg',
        '_img/clients/gerdau.svg',
        '_img/clients/grupometa.svg',
        '_img/clients/iguatemi.svg',
        '_img/clients/infomoney.svg',
        '_img/clients/nike.svg',
        '_img/clients/oz.svg',
        '_img/clients/piccadilly.svg',
        '_img/clients/plaza.svg',
        '_img/clients/rge.svg',
        '_img/clients/senai.svg',
        '_img/clients/skol.svg',
        '_img/clients/unidasul.svg',
        '_img/clients/vesta.svg',
        '_img/clients/xp.svg'
    ];

    if (isMobile.any()) {

        if (isMobile.iOS()) {
            FastClick.attach(document.body);
        }

        var mobile = '' + isMobile.any();
        $('html').addClass(mobile.toLowerCase() + ' is-mobile');

        $('.showreel .video-home-bg').attr('src', '').css('display', 'none');

        imgArr.push(
            '_img/mobile/cases/arena-frozen-1.jpg',
            '_img/mobile/cases/arena-frozen-bg.jpg',
            '_img/mobile/cases/baril-1.jpg',
            '_img/mobile/cases/baril-bg.jpg',
            '_img/mobile/cases/caravana-rge-1.jpg',
            '_img/mobile/cases/caravana-rge-bg.jpg',
            '_img/mobile/cases/converse-1.jpg',
            '_img/mobile/cases/converse-bg.jpg',
            '_img/mobile/cases/expansao-iguatemi-1.jpg',
            '_img/mobile/cases/expansao-iguatemi-bg.jpg',
            '_img/mobile/cases/formiguinhas-do-rissul-1.jpg',
            '_img/mobile/cases/formiguinhas-do-rissul-bg.jpg',
            '_img/mobile/cases/iguatemi-porto-alegre-1.jpg',
            '_img/mobile/cases/iguatemi-porto-alegre-bg.jpg',
            '_img/mobile/cases/monster-high-1.jpg',
            '_img/mobile/cases/monster-high-bg.jpg',
            '_img/mobile/cases/o-pequeno-principe-1.jpg',
            '_img/mobile/cases/o-pequeno-principe-bg.jpg',
            '_img/mobile/cases/senai-em-libras-1.jpg',
            '_img/mobile/cases/senai-em-libras-bg.jpg',
            '_img/mobile/cases/shopping-cidade-jardim-1.jpg',
            '_img/mobile/cases/shopping-cidade-jardim-bg.jpg',
            '_img/mobile/cases/xp-educacao-1.jpg',
            '_img/mobile/cases/xp-educacao-bg.jpg',
            '_img/mobile/cases/arena-frozen-img.png',
            '_img/mobile/cases/baril-img.png',
            '_img/mobile/cases/caravana-rge-img.png',
            '_img/mobile/cases/converse-img.png',
            '_img/mobile/cases/expansao-iguatemi-img.png',
            '_img/mobile/cases/formiguinhas-do-rissul-img.png',
            '_img/mobile/cases/iguatemi-porto-alegre-img.png',
            '_img/mobile/cases/monster-high-img.png',
            '_img/mobile/cases/o-pequeno-principe-img.png',
            '_img/mobile/cases/senai-em-libras-img.png',
            '_img/mobile/cases/shopping-cidade-jardim-img.png',
            '_img/mobile/cases/xp-educacao-img.png',
            '_img/mobile/home-agency-br.png',
            '_img/mobile/home-who-does-br.png',
            '_img/mobile/home-producer-br.png',
            '_img/mobile/home-who-thinks-br.png'
        );

    } else {

        $('.logo-loader').css('background-image', 'url("_img/logo-loader.png")');

        imgArr.push(
            '_img/cases/arena-frozen-1.jpg',
            '_img/cases/arena-frozen-bg.jpg',
            '_img/cases/baril-1.jpg',
            '_img/cases/baril-bg.jpg',
            '_img/cases/caravana-rge-1.jpg',
            '_img/cases/caravana-rge-bg.jpg',
            '_img/cases/converse-1.jpg',
            '_img/cases/converse-bg.jpg',
            '_img/cases/expansao-iguatemi-1.jpg',
            '_img/cases/expansao-iguatemi-bg.jpg',
            '_img/cases/formiguinhas-do-rissul-1.jpg',
            '_img/cases/formiguinhas-do-rissul-bg.jpg',
            '_img/cases/iguatemi-porto-alegre-1.jpg',
            '_img/cases/iguatemi-porto-alegre-bg.jpg',
            '_img/cases/monster-high-1.jpg',
            '_img/cases/monster-high-bg.jpg',
            '_img/cases/o-pequeno-principe-1.jpg',
            '_img/cases/o-pequeno-principe-bg.jpg',
            '_img/cases/senai-em-libras-1.jpg',
            '_img/cases/senai-em-libras-bg.jpg',
            '_img/cases/shopping-cidade-jardim-1.jpg',
            '_img/cases/shopping-cidade-jardim-bg.jpg',
            '_img/cases/xp-educacao-1.jpg',
            '_img/cases/xp-educacao-bg.jpg',
            '_img/cases/arena-frozen-img.png',
            '_img/cases/baril-img.png',
            '_img/cases/caravana-rge-img.png',
            '_img/cases/converse-img.png',
            '_img/cases/expansao-iguatemi-img.png',
            '_img/cases/formiguinhas-do-rissul-img.png',
            '_img/cases/iguatemi-porto-alegre-img.png',
            '_img/cases/monster-high-img.png',
            '_img/cases/o-pequeno-principe-img.png',
            '_img/cases/senai-em-libras-img.png',
            '_img/cases/shopping-cidade-jardim-img.png',
            '_img/cases/xp-educacao-img.png',
            '_img/home-agency-br.png',
            '_img/home-who-does-br.png',
            '_img/home-producer-br.png',
            '_img/home-who-thinks-br.png'
        );

    }

    preloadImages(imgArr);

    // Force first slide on load
    var hash = location.hash.replace('#', '');
    location.hash = '';

    // 'lang' is already set on the index page
    // 'siteSections' is already set on the index page
    var mainContent = $('#main-content'),
        offContent = $('#off-content'),
        cases = $('section.case'),
        fullPages = $('.full-pages'),
        closeButton = $('.close-button'),
        openMenu = $('.open-menu'),
        closeMenu = $('.close-menu'),
        menu = $('#nav .menu'),
        navContainer = $('.nav-container'),
        viewportWidth,
        viewportHeight,
        constWidth,
        constHeight,
        videoBg,
        videoHomeBg,
        videoHomeShowreel,
        videoWidth,
        videoHeight,
        videoRatio,
        caseVideoBg,
        screenRatio,
        mobileBar = $('.mobile-bar');

    videoBg = $('.video-bg');
    videoHomeBg = $('.video-home-bg');
    videoHomeShowreel = $('.video-home-showreel');

    $.handlebars({
        templatePath: '_templates',
        templateExtension: 'template'
    });

    echo.init({
        offset: viewportHeight * 2,
        throttle: 250,
        unload: false,
        callback: function(element, op) {
            $(element).css('opacity', 1);
        }
    });

    externalLinks();

    $(window).on('load', function() {

        viewportWidth = $(window).width();
        viewportHeight = $(window).height();

        constWidth = viewportWidth;
        constHeight = viewportHeight;
        screenRatio = (viewportWidth / viewportHeight);

        videoWidth = videoBg.width();
        videoHeight = videoBg.height();
        videoRatio = (videoWidth / videoHeight);

        if (isMobile.any() && (viewportWidth > viewportHeight)) {
            $('.rotation').show();
        }

        if (viewportWidth <= 768) {
            videoHomeShowreel.attr('src', 'https://player.vimeo.com/video/134987858?api=1&amp;player_id=player-home-showreel&amp;autoplay=0&amp;loop=0&amp;badge=0&amp;byline=0&amp;portrait=0&amp;title=0&amp;playbar=1');
            videoHomeBg.attr('src', '');
        }

        if (!$('html').hasClass('is-mobile')) {
            if (videoRatio >= screenRatio) {
                var vw = videoWidth * (viewportHeight / constHeight);
                videoBg.css({
                    width: vw,
                    height: viewportHeight,
                    left: ((vw - viewportWidth) / 2) * (-1),
                    top: 0
                });
            } else {
                var vh = videoHeight * (viewportWidth / constWidth);
                videoBg.css({
                    width: viewportWidth,
                    height: vh,
                    left: 0,
                    top: ((vh - viewportHeight) / 2) * (-1)
                });
            }
        } else {
            videoBg.each(function() {
                var video = $(this);
                video
                    .css({
                        width: viewportWidth,
                        height: (viewportWidth * video.data('aspectRatio'))
                    });
            });
        }

        offContent.css('height', viewportHeight - 50);
        $('.loading').css('opacity', 0);

    });

    $(document).on(transitionEvent, '.loading', function(e) {
        if ($(e.target).is(this)) {

            $('.loaded').css({
                opacity: 1,
                left: 0
            });

            $('.loading').hide();

            echo.render();

            if (!isMobile.any()) {
                $('*[data-animate="1"]').each(function() {
                    animateButton($(this));
                });

                animateHome();
                playVideoHomeBg();
            }

            $(this).off(transitionEvent);
        }
    });

    $(window).on('resize', function() {

        if ($('body').hasClass('case-opened')) {
            $('section.case').find(videoBg).vimeo('pause');
        }

        viewportWidth = $(window).width();
        viewportHeight = $(window).height();
        screenRatio = (viewportWidth / viewportHeight);

        if (isMobile.any() && viewportWidth <= 768) {
            if (viewportWidth > viewportHeight) {
                $('.rotation').show();
            } else {
                $('.rotation').hide();
            }
        }

        if (!$('html').hasClass('is-mobile') && viewportWidth > 768) {

            if (videoRatio >= screenRatio) {
                var vw = videoWidth * (viewportHeight / constHeight);
                videoBg.css({
                    width: vw,
                    height: viewportHeight,
                    left: ((vw - viewportWidth) / 2) * (-1),
                    top: 0
                });
            } else {
                var vh = videoHeight * (viewportWidth / constWidth);
                videoBg.css({
                    width: viewportWidth,
                    height: vh,
                    left: 0,
                    top: ((vh - viewportHeight) / 2) * (-1)
                });
            }

        } else {

            videoBg.each(function() {
                var video = $(this);
                video
                    .css({
                        width: viewportWidth,
                        height: (viewportWidth * video.data('aspectRatio'))
                    });
            });

        }

        offContent.css('height', viewportHeight - 50);

    });

    function playVideoHomeBg() {
        if (!$('html').hasClass('is-mobile')) {
            if (videoHomeBg.attr('src') !== '') {
                videoHomeBg.vimeo('play');
            }
        }
    }

    function playVideoBg(section) {
        if (!$('html').hasClass('is-mobile')) {
            if (typeof section !== "undefined") {
                section.find('.video-bg').vimeo('play');
            }
        }
    }

    function stopVideoBg() {
        $('.video-bg').each(function() {
            if ($(this).attr('src') !== '') {
                $(this).vimeo('pause');
            }
        });
    }

    var homeTitle = $('.showreel .title');

    function animateHome() {
        homeTitle.addClass('animate-home');
        setTimeout(function() {
            $('.showreel .intro').addClass('active');
        }, 1000);
    }

    var clientsList = $('.list-clients');

    function animateClients() {
        clientsList.addClass('animate-clients');
    }

    function animateButton(el) {
        el.on('mouseenter', function() {
            el.removeClass('mouse-enter mouse-leave').addClass('mouse-enter');
        });

        el.on('mouseleave', function() {
            el.removeClass('mouse-enter').addClass('mouse-leave');
            el.on(animationEvent, function() {
                el.removeClass('mouse-leave');
            });
        });
    }

    var buttonShowreel = $('.button-showreel'),
        buttonHidereel = $('.button-hidereel'),
        homeContent = $('.showreel .wrap');

    buttonShowreel.on('click', function(e) {
        e.preventDefault();
        videoHomeShowreel
            .on('finish', function() {
                console.log('finish (button)');
                hideReel();
            });
        showReel();
    });

    function showReel() {
        mainContent.addClass('playing-showreel');
        $('.logo').css('opacity', 0);
        $('.close-menu, .open-menu').css('top', -9999);
        $('.video-curtain').css('width', 0);
        closeTheMenu();

        buttonHidereel.fadeIn();

        if (!$('html').hasClass('is-mobile')) {
            if (videoHomeBg.attr('src') !== '') {
                videoHomeBg
                    .css('opacity', 0)
                    .vimeo('pause');
            }
        }

        homeContent.css({
            'opacity': 0,
            'top': -9999
        });

        if (!$('html').hasClass('is-mobile')) {
            videoHomeShowreel
                .css('opacity', 1)
                .vimeo('play')
                .on('finish', function() {
                    console.log('finish (function)');
                    hideReel();
                });
        } else {
            videoHomeShowreel
                .css('opacity', 1)
                .on('finish', function() {
                    console.log('finish (function, mobile)');
                    hideReel();
                });
        }
    }

    buttonHidereel.on('click', function(e) {
        e.preventDefault();
        hideReel();
    });

    function hideReel() {
        mainContent.removeClass('playing-showreel');
        $('.logo').css('opacity', 1);
        $('.close-menu, .open-menu').css('top', '');
        $('.video-curtain').css('width', '100%');

        buttonHidereel.fadeOut();

        if (!$('html').hasClass('is-mobile')) {
            if (videoHomeBg.attr('src') !== '') {
                videoHomeBg
                    .css('opacity', 1)
                    .vimeo('play');
            }
        }

        homeContent.css({
            opacity: 1,
            top: ''
        });

        videoHomeShowreel
            .css('opacity', 0)
            .vimeo('pause')
            .vimeo('unload');
    }

    offContent.on('scroll', function() {
        echo.render();
    });

    var solutionsButton = $('.solutions .know-more'),
        solutionsIntro = $('.solutions .wrap .introduction'),
        solutionsList = $('.solutions .list'),
        solutionsItem = $('.solutions .list > li'),
        solutionsContainer = $('.solutions .container .contents');

    function animateBgSolutions() {
        solutionsItem.addClass('animate-solutions');
    }

    function animateSolutions() {
        alert('function animateSolutions nao existe mais!!!!!');
    }

    function deAnimateSolutions(nextIndex) {
        var solutionsWrap = $('.solutions .wrap');

        if (!$('html').hasClass('is-mobile') && viewportWidth > 768) {

            $('body').removeClass('solutions-opened');
            solutionsItem.removeClass('solution-active');
            solutionsList
                .removeClass('animate-solutions-item')
                .find('.social-media')
                .on(transitionEvent, function(e) {
                    if ($(e.target).is(this)) {
                        setTimeout(function() {
                            solutionsIntro.removeClass('move-out');
                            resumeScroll(0);
                            if (typeof nextIndex !== undefined) {
                                $.fn.fullpage.moveTo(nextIndex);
                            }
                        }, 50);
                        $(this).off(transitionEvent);
                    }
                });

        } else {

            $('body').removeClass('solutions-opened');
            mobileBar.css('opacity', 0);
            solutionsWrap
                .on(transitionEvent, function(e) {
                    if ($(e.target).is(this)) {
                        closeButton.show();
                        setTimeout(function() {
                            resumeScroll(0);
                            if (typeof nextIndex !== undefined) {
                                $.fn.fullpage.moveTo(nextIndex);
                            }
                        }, 50);
                        $(this).off(transitionEvent);
                    }
                });

        }
    }

    solutionsButton.on('click', function(e) {
        e.preventDefault();

        pauseScroll();

        var button = $(this),
            html = button.parent().parent().next().html(),
            solutionsWrap = $('.solutions .wrap');

        if (navContainer.hasClass('open')) {
            closeTheMenu();
        }

        solutionsContainer.html(html);
        solutionsIntro.addClass('move-out');

        if (!$('html').hasClass('is-mobile') && viewportWidth > 768) {

            solutionsIntro.on(transitionEvent, function(e) {
                if ($(e.target).is(this)) {

                    button.closest('li').addClass('solution-active');
                    solutionsList
                        .addClass('animate-solutions-item')
                        .find('.social-media')
                        .on(transitionEvent, function(e) {
                            if ($(e.target).is(this)) {
                                $('body').addClass('solutions-opened');
                                $(this).off(transitionEvent);
                            }
                        });

                    $(this).off(transitionEvent);
                }
            });

        } else {

            closeButton.hide();
            $('body').addClass('solutions-opened');

            solutionsWrap
                .on(transitionEvent, function(e) {
                    if ($(e.target).is(this)) {

                        closeButton.show();

                        mobileBar.css('opacity', 1);

                        $(this).off(transitionEvent);
                    }
                });

        }

    });

    closeButton.on('click', function(e) {
        e.preventDefault();

        if ($('body').hasClass('solutions-opened')) {

            deAnimateSolutions();

        } else {


            if (navContainer.hasClass('open')) {
                closeTheMenu(e);
            }

            if (mainContent.hasClass('main-slide')) {
                mainContent.removeClass('main-slide');

                mainContent.on(transitionEvent, function(e) {
                    if ($(e.target).is(this)) {

                        mobileBar.css('opacity', 0);
                        $('body').removeClass('case-opened');

                        if (!$('html').hasClass('is-mobile')) {
                            if (caseVideoBg.length) {
                                caseVideoBg.vimeo('play');
                            }
                        }

                        offContent.html('');
                        resumeScroll(0);

                        $(this).off(transitionEvent);
                    }
                });
            }
        }
    });

    openMenu.on('click', openTheMenu);

    function openTheMenu(event) {

        if (typeof event !== 'undefined') {
            event.preventDefault();
        }

        openMenu.hide();
        closeMenu
            .addClass('active mouse-open')
            .off('mouseenter mouseleave')
            .on(animationEvent, function(e) {
                if ($(e.target).is(this)) {
                    closeMenu.removeClass('mouse-open');
                    openMenu.removeClass('mouse-enter mouse-leave');
                    closeMenu.off(animationEvent);
                    animateButton(closeMenu);
                    $(this).off(animationEvent);
                }
            });

        navContainer.addClass('open');
    }

    closeMenu.on('click', closeTheMenu);

    function closeTheMenu(event) {

        if (typeof event !== 'undefined') {
            event.preventDefault();
        }

        closeMenu
            .removeClass('mouse-enter mouse-leave')
            .addClass('mouse-close')
            .on(animationEvent, function(e) {
                if ($(e.target).is(this)) {
                    closeMenu.removeClass('active mouse-close');
                    openMenu.show();
                    closeMenu.off(animationEvent);
                    $(this).off(animationEvent);
                }
            });

        navContainer.removeClass('open');
    }

    mainContent.on('click', function(e) {
        if (navContainer.hasClass('open') && !mainContent.hasClass('main-slide')) {
            closeTheMenu(e);
        }
    });

    var playerVars;

    cases.each(function() {

        var container = $('#' + $(this).attr('id')),
            caseData = '_data/' + $(this).data('case') + '-' + lang + '.json',
            template = 'case' + '-' + lang;

        var caseContent = $.ajax({
            method: "GET",
            url: caseData,
            dataType: "json"
        });

        caseContent
            .done(function(data) {

                if (data.video_bg !== null) {
                    data.player_id = 'player_' + data.slug;
                    playerVars = "?api=1";
                    playerVars += "&player_id=" + data.player_id;
                    playerVars += "&autoplay=1";
                    playerVars += "&loop=1";
                    playerVars += "&badge=0";
                    playerVars += "&byline=0";
                    playerVars += "&portrait=0";
                    playerVars += "&title=0";
                    playerVars += "&playbar=0";

                    if (!isMobile.any()) {
                        data.bg_video = '<div class="video-curtain"></div><iframe id="' + data.player_id + '" class="video-bg" src="https://player.vimeo.com/video/' + data.video_bg + playerVars + '" width="2048" height="1152" frameborder="0"></iframe>';
                    }
                }

                container.render(template, data);
            })
            .done(function(data) {

                container.on('click', '.open-content', function(e) {

                    e.preventDefault();
                    pauseScroll();
                    mobileBar.css('opacity', 1);
                    caseVideoBg = $(this).closest('.case').find(videoBg);

                    if ($('html').hasClass('is-mobile')) {
                        if (caseVideoBg.length) {
                            caseVideoBg.vimeo('pause');
                        }
                    }

                    var template = $(this).data('template') + '-' + lang;

                    var caseInfo = $.ajax({
                        method: "GET",
                        url: caseData,
                        dataType: "json"
                    });

                    caseInfo
                        .done(function(data) {
                            var img = '',
                                vid = '',
                                images = data.images,
                                videos = data.videos,
                                site = data.site;

                            img += '<img src="_img/cases/' + images[0] + '">';
                            for (var i = 1; i < images.length; i++) {
                                img += '<img class="img-echo" src="_img/spacer.gif" data-echo="_img/cases/' + images[i] + '">';
                            }
                            data.images = img;

                            if (videos !== null) {
                                for (var j = videos.length - 1; j >= 0; j--) {

                                    var player_id = 'player_' + data.slug + '_' + j;

                                    playerVars = "?api=1";
                                    playerVars += "&player_id=" + player_id;
                                    playerVars += "&autoplay=0";
                                    playerVars += "&loop=1";
                                    playerVars += "&badge=0";
                                    playerVars += "&byline=0";
                                    playerVars += "&portrait=0";
                                    playerVars += "&title=0";
                                    playerVars += "&playbar=0";

                                    vid += '<div class="vimeo-container"><div class="vimeo-player" id="' + player_id + '" data-id="' + videos[j] + '"></div></div>';
                                }
                                data.videos = vid;
                            }

                            if (site !== null) {
                                data.site = '<a class="visit" data-animate="1" href="' + site + '" rel="external">Web Site</a>';
                            } else {
                                data.site = '';
                            }

                            offContent.render(template, data);
                            offContent.scrollTop(0);
                            offContent.css('opacity', 1);
                        })
                        .done(function() {
                            $('.open-menu').show();
                            navContainer.removeClass('open');

                            mainContent.addClass('main-slide');
                            $('body').addClass('case-opened');

                            mainContent.on(transitionEvent, function(e) {
                                if ($(e.target).is(this)) {

                                    echo.render();
                                    renderVideos();
                                    externalLinks();

                                    setTimeout(function() {
                                        offContent.css('height', viewportHeight - 50);
                                    }, 500);

                                    $(this).off(transitionEvent);
                                }
                            });
                        })
                        .fail(function(jqXHR, textStatus, errorThrown) {
                            console.log(jqXHR, textStatus, errorThrown);
                        });

                });
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR, textStatus, errorThrown);
            });
    });

    cases
        .promise()
        .done(function() {
            renderFullpages();
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        });

    /**
     * Vimeo Embedding
     * based on http://www.labnol.org/internet/light-youtube-embeds/27941/
     */
    function renderVideos() {
        var videos = $('.vimeo-player');
        videos
            .each(function() {
                var video = $(this);
                getVimeoThumbnail(video.data('id'))
                    .success(function(data) {
                        var thumbnail_src = data.thumbnail_url;
                        video.html('<img class="vimeo-thumb" src="' + thumbnail_src + '"><div class="play-button" data-animate="1"></div>');
                        video
                            .find($('*[data-animate="1"]'))
                            .each(function() {
                                animateButton($(this));
                                $(this).on('click', renderVimeoEmbed);
                            });
                    });
            })
            .promise()
            .done(function() {
                console.log('done');
                $('.off-content')
                    .find($('*[data-animate="1"]'))
                    .each(function() {
                        animateButton($(this));
                    });
            });
    }

    function getVimeoThumbnail(id) {
        return $.ajax({
            type: 'GET',
            url: 'https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/' + id,
            dataType: 'jsonp'
        });
    }

    function renderVimeoEmbed() {
        var container = $(this).closest('.vimeo-container'),
            player_id = container.children('.vimeo-player').attr('id'),
            video_id = container.children('.vimeo-player').data('id'),
            vimeoIframe;

        playerVars = "?api=1";
        playerVars += "&player_id=" + player_id;
        playerVars += "&autoplay=1";
        playerVars += "&loop=0";
        playerVars += "&badge=0";
        playerVars += "&byline=0";
        playerVars += "&portrait=0";
        playerVars += "&title=0";
        playerVars += "&playbar=1";

        vimeoIframe = '<iframe class="video" src="https://player.vimeo.com/video/' + video_id + playerVars + '"></iframe>';
        container.children('.vimeo-player').html(vimeoIframe);
    }

    var pageSwing = 0;

    function renderFullpages() {

        // Figure out and save aspect ratio for each video BG
        videoBg.each(function() {
            $(this).data('aspectRatio', this.height / this.width);
        });

        fullPages.fullpage({

            menu: '#nav .menu',
            lockAnchors: false,
            anchors: siteSections,
            navigation: false,
            navigationPosition: 'none',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',

            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease-in-out',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: false,
            continuousVertical: false,
            normalScrollElements: null,
            scrollOverflow: false,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,

            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            controlArrows: false,
            verticalCentered: false,
            resize: false,
            sectionsColor: 'none',
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsiveWidth: 0,
            responsiveHeight: 0,

            sectionSelector: '.section',
            slideSelector: '.slide',

            onLeave: function(index, nextIndex, direction) {

                if (mainContent.hasClass('main-slide')) {
                    mainContent.removeClass('main-slide');
                    mainContent.on(transitionEvent, function(e) {
                        if ($(e.target).is(this)) {
                            $('body').removeClass('case-opened');

                            offContent.html('');
                            resumeScroll(0);
                            $.fn.fullpage.moveTo(nextIndex);

                            $(this).off(transitionEvent);
                        }
                    });
                    return false;
                }

                if ($('body').hasClass('solutions-opened')) {
                    solutionsItem.find('.solution').css('opacity', 1);
                    solutionsItem.find('.lines').css('opacity', 1);
                    deAnimateSolutions(nextIndex);
                    return false;
                }

                if (mainContent.hasClass('playing-showreel')) {
                    hideReel();
                }

                // keep the CASES menu the same color when navigating on the various cases
                var hash = window.location.hash.substr(1);
                if (isInArray(hash, siteSections) && (hash !== siteSections[0]) && (hash !== siteSections[1]) && (hash !== siteSections[2])) {
                    menu.find('.cases a').css('color', '#ffb540');
                } else {
                    menu.find('.cases a').css('color', '');
                }

                if (navContainer.hasClass('open')) {
                    closeTheMenu();
                }

                //if ($('html').hasClass('is-mobile')) {
                //}

            },
            afterLoad: function(anchorLink, index) {
                echo.render();
                    stopVideoBg();

                if (index == 1 && (!$('html').hasClass('is-mobile'))) {
                    playVideoHomeBg();
                }

                if (index == 2 && (!$('.solutions .list li:first-child').hasClass('animate-solutions'))) {
                    animateBgSolutions();
                }

                if (index == 3 && (!$('.list-clients').hasClass('animate-clients'))) {
                    animateClients();
                }

                if (index == 6 && ($('section.expansao-iguatemi').hasClass('active')) && (!$('html').hasClass('is-mobile'))) {
                    console.log('playing video bg on expansao-iguatemi');
                    var section = $(this);
                    playVideoBg(section);
                }

                // keep the CASES menu the same color when navigating on the various cases
                var hash = window.location.hash.substr(1);
                if (isInArray(hash, siteSections) && (hash !== siteSections[0]) && (hash !== siteSections[1]) && (hash !== siteSections[2])) {
                    menu.find('.cases a').css('color', '#ffb540');
                } else {
                    menu.find('.cases a').css('color', '');
                }

                var caseSection = $('#section-' + anchorLink + '.case');
                pageSwing++;
                caseSection.find('.intro').addClass('expand');
                caseSection.one(transitionEvent, '.intro', function() {
                    if (pageSwing !== 0) {
                        echo.render();
                        caseSection.find('.info').addClass('show-info');
                    }
                    pageSwing = 0;
                });
            },
            afterRender: function() {},
            afterResize: function() {},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
        });
    }

    var pauseTimeout;

    function resumeScroll(ms) {
        if (typeof ms === 'undefined') {
            ms = 1000;
        }
        clearTimeout(pauseTimeout);
        pauseTimeout = setTimeout(function() {
            $.fn.fullpage.setAllowScrolling(true);
            $.fn.fullpage.setKeyboardScrolling(true);
        }, ms);
        console.log('resumeScroll = ' + ms);
    }

    function pauseScroll() {
        clearTimeout(pauseTimeout);
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
        console.log('pauseScroll');
    }

});
