"use strict";
$(window).scroll(function() {
    var ypos = $(window).scrollTop();
    if ((ypos > 600) && ($(window).width() > 1100)) {
        $('#to-top').show(0);
    } else { $('#to-top').hide(0); }
});
