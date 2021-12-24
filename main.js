// variable declarations to interact with the HTML document

const container = document.querySelector('.container');
const cont =document.getElementById('cont');
const color = document.querySelector('.color');
const resetButton = document.querySelector('.button');
const submitButton = document.querySelector('.submit');


// reset grid and form 
resetButton.addEventListener('click', function reset() {
    container.innerHTML = '';
    document.getElementById('row').value = '';
    document.getElementById('col').value = '';
});


/* The makeGrid() function is used to create empty grid cells on the screen 
   based on the user input of height and width.
   And it also checks for the minimum and maximum value of the values 
   inputed.
 */

function makeGrid(){
    let row = document.getElementById('row').value;
        let col = document.getElementById('col').value;
        if (row < 0 && row){
            row = -1 * row;
        }
        if (col < 0){
            col = -1 * col;
        }
        if (col >= 1 && col <= 50 && row >= 1 && row <= 50){
            let size = row * col;
            container.style.setProperty('--size', row)
            for (let i = 0; i < size; i++) {
                const div = document.createElement('div');
                div.classList.add('pixel');
                container.appendChild(div); 
            }
        }
        else{
            alert('Please check the input and ensure it is within range');
        }
}

// The submit button event listener used to handle clicks on the submit button
submitButton.addEventListener('click', e => {
    e.preventDefault();
    if (cont.innerHTML === ''){
        makeGrid();
    }
    else{
        cont.innerHTML = '';
        makeGrid();
    }
});


// the clicks event listener to know which cell has been clicked on to be painted
container.addEventListener('mouseover', e => {
    pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        //mousedown
        pixel.addEventListener('mousedown', e => {
            div = e['path'][0]
            div.style.backgroundColor = color.value;
        })
    });
});