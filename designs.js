
// Select color input

let color = document.getElementById('color_picker');
let canvas = document.getElementById('pixel_canvas');
let picker = document.getElementById('size_picker');

// Select size input

let height = document.getElementById('input_height').value;
let width = document.getElementById('input_width').value;
makeGrid(height, width);

// Controls the submit by the user and creates grid

picker.addEventListener('click', (event) => {
    console.log("User interaction!");
    height = document.getElementById('input_height').value;
    width = document.getElementById('input_width').value;
    canvas.firstElementChild.remove();
    makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
    for (let y = 0; y <= height; y++) {
        let row = canvas.insertRow(y);
        for (let x = 0; x <= width; x++) {
            let cell = row.insertCell(x);
            cell.addEventListener('click', (event) => {
                console.log(event);
                cell.style.backgroundColor = color.value;
            });
        }
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
