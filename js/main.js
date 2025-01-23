$(document).ready(function () {

    $('body').append('<div id="hoverdiv"></div>');
    $('#hoverdiv').css({'display':'none', 'position':'absolute', 'font-size': '14px', 'background-color': '#fff', 'color': '#404040', 'border': '1px solid #999', 'padding': '7px' });

    $(document).on('mousemove', '[hovertext]', function(e){
        var text = $(this).attr('hovertext');

        $('#hoverdiv').text(text).show();
        $('#hoverdiv').css({'top': e.clientY + 10, 'left': e.clientX + 10});
    });

    $(document).on('mouseout', '[hovertext]', function(e){
        $('#hoverdiv').hide();
    });

});