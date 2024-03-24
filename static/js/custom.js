$(document).ready(function(){
    $('.download').click(function(e) {
        e.stopPropagation();
        
        var href = window.location.host + '/bythos.github.io/attachments/' + $(this).text().split(' (PDF)')[0] + '.pdf';
        var link = $('<a href="http://' + href + '" />');
        var file = $(this).text().split(' (PDF)')[0].replace('-', '').split(' ').join('').toLowerCase();
        var download = $(this).find('span');

        link.attr('target', '_blank');
        console.log(href);
        console.log(link);
        console.log(file);
        console.log(download);
    });
});
