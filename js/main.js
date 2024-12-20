$(document).ready(function () {
    $('body').prepend('<div id="hoverdiv"></div>');
    $('#hoverdiv').css({'display': 'none', 'position': 'absolute', 'font-size': '14px', 'background-color': '#fff', 'color': '#404040', 'border': '1px solid #999', 'padding': '7px'});  
});

$('[hovertext]').mousemove(function (e) { 
    var hovertext = $(this).attr('hovertext');
    $('#hoverdiv').text(hovertext).show();
    $('#hoverdiv').css('top', e.clientY + 10).css('left', e.clientX + 10);
}).mouseout(function () { 
    $('#hoverdiv').hide()
});;