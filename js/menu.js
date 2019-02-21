function menu() {
    var menuInner = $(".js-menu-inner"),
    menuBtn = $("#btnMenu"),
    menuInnerBackgroundItem = $(".js-menu-inner-background").find("i"),
    menuItem = $(".js-menu-items-list").find("li"),
    menuItemsShape = $(".js-menu-items-shape"),
    menuClose = $(".js-btn-close"),
    timeline = new TimelineMax({
        paused: true
    }),
    topOffset = 8;
    
    timeline.to(
        menuInner,
        1,
        {
            autoAlpha: 1,
            ease: Power4.easeOut
        },
        "start"
    )
    .fromTo(
        menuInnerBackgroundItem,
        0.25,
        {
            x: "-100%",
            autoAlpha: 0
        },
        {
            x: "0%",
            autoAlpha: 1,
            ease: Power1.easeOut
        },
        "start"
    )
    .staggerFromTo(
        menuItem,
        0.4,
        {
            x: -30,
            autoAlpha: 0
        },
        {
            x: 0,
            autoAlpha: 1,
            delay: 0.35,
            ease: Back.easeOut.config(1)
        },
        0.15,
        "start"
    )
    .fromTo(
        menuItemsShape,
        0.25,
        {
            scale: 0.7,
            autoAlpha: 0
        },
        {
            scale: 1,
            autoAlpha: 1,
            delay: 0.95,
            ease: Back.easeOut.config(1.7)
        },
        "start"
    )
    .fromTo(
        menuClose,
        0.2,
        {
            x: -10,
            autoAlpha: 0
        },
        {
            x: 0,
            autoAlpha: 1,
            delay: 1,
            ease: Power1.easeOut
        },
        "start"
    );
    
    menuBtn.on("click", function() {
        timeline.play();
    });
    menuClose.on("click", function() {
        timeline.timeScale(1.25);
        timeline.reverse();
    });
}

menu();

//**************** MOBILE - OPEN FILTER MENU *****************//
function mobileFilterMenu() { 
    var showFilterMenu = document.getElementById("showFilterMenu");
    var hideFilterMenu = document.getElementsByClassName("filter-btn--close")[0];
    
    if(showFilterMenu) {
        showFilterMenu.onclick = function() { 
            var filterContainer = document.getElementById("filter-container");
            filterContainer.classList.add('active');
        }
    }

    if(hideFilterMenu) {
        hideFilterMenu.onclick = function() { 
            var filterContainer = document.getElementById("filter-container");
            filterContainer.classList.remove('active');
        }
    }
}