var currentSection = 1;

$(document).ready(function () {

    $('body').bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            console.log('up');
            if (currentSection > 1) {
                currentSection -= 1;
                console.log(currentSection);
            }
        }
        else {
            console.log('down');
            if (currentSection < 5) {
                currentSection += 1;
                console.log(currentSection);
            }
        }

        displayPage(currentSection);
    });

    $('.scroll_item').click(function (event) {

        displayPage($(this).attr('id'));
    });

    resize();
    displayPage(currentSection);
});

function displayPage(n) {
    $('.scroll_item').removeClass('scroll_item_active');
    $("#" + n).addClass('scroll_item_active');

    $(".page").css("opacity", 0);
    $("#section" + n).css("opacity", 1);
}

function resize() {
    //Do stuff.
}

