
// ----------------------- //
// Responsive Page plugin  //
// ----------------------- //
//
// HTML - <div class="fb-resp"></div>

$(function() {
    function pagePluginCode(w) {
		return '<div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="' + width + '" data-height="300" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>';
		// Page plugin code
		// !data-width change -> ' + width + '
    }

    // add Pageplugin Element
    var facebookWrap = $('.fb-resp');
    var fbBeforeWidth = '';
    var fbWidth = facebookWrap.width();
    var fbTimer = false;

    $(window).on('load resize', function() {
        if (fbTimer !== false) {
            clearTimeout(fbTimer);
        }
        fbTimer = setTimeout(function() {
            fbWidth = facebookWrap.width();

			//mobile
            if(fbWidth != fbBeforeWidth) {
                facebookWrap.html(pagePluginCode(fbWidth));
                window.FB.XFBML.parse();
                fbBeforeWidth = fbWidth;
            }
        }, 200);
    });
});
