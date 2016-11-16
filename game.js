var color = colors[Math.floor(Math.random()*colors.length)];
var color_div = $('#color-box')[0];

$(color_div).css('background-color', color.hex);

$('#en-name').html(color.en_name);
$('#ru-name').html(color.ru_name);

// Show answers
$('#btn-answer').click(function() {
    $('#answers').show();
    $(this).html('Ещё раз? =)').click(function() {
        location.reload();
    });
});
