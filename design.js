
const color = document.getElementById("colorPicker");
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const canvas = document.getElementById('pixelCanvas');
const size = document.getElementById('sizePicker');


size.addEventListener('submit',function(event){
    event.preventDefault();
    makeGrid(height,width);
})


function makeGrid(height, width) {
    canvas.innerHTML = "";
    for (var r =0; r< height.value; r++){
        var row = document.createElement('tr');
        canvas.append(row);
        for(var c = 0; c<width.value; c++){
            var column = document.createElement('td');
            row.appendChild(column);
            column.addEventListener('click', function(event){
                event.target.style.backgroundColor= color.value;
            })
        }
    }


}
