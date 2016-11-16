
for (var i = 0; i < colors.length; i++) {
    var color = colors[i];
    var row = `
        <tr>
            <td style="background-color: ${color.hex}; height:50px; width:400px;">

            </td>
            <td class='color-name'>
                ${color.ru_name}
            </td>
        </tr>`;    

    $('#colors-table').append(row);
}