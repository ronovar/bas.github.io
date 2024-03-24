$(document).ready(function(){
    $('.download').click(function(e) {
        e.stopPropagation();

        var origin   = window.location.origin;
        var pathname = window.location.pathname;
        
        if (pathname) {
            var url  = pathname.split("/");
            var href = origin.concat("/", url[1]);
        } else {
            var href = origin;
        }

        var link = $('<a href="http://' + href + '" />');
        var file = $(this).attr("file");

        link.attr('target', '_blank');
        console.log(href);
        console.log(file);
    });
});
