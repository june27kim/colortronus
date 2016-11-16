
for (var i = 0; i < colors.length; i++) {
    var color = colors[i];
    var row = `
        <div class="row">
            <div class='col-md-6' style="background-color: ${color.hex}; height:50px;">

            </div>
            <div class='col-md-6 color-name'>
                ${color.ru_name}
            </div>
        </div>`;    

    $('#colors-table').append(row);
}