const container = document.querySelector('.container');
const color = document.querySelector('.color');
const resetButton = document.querySelector('.button');
const submitButton = document.querySelector('.submit');


// reset grid and form 
resetButton.addEventListener('click', function reset() {
    container.innerHTML = '';
    document.getElementById('row').value = '';
    document.getElementById('col').value = '';
});

// create grid
submitButton.addEventListener('click', e => {
    e.preventDefault();
        let row = document.getElementById('row').value;
        let col = document.getElementById('col').value;
        if (row < 0){
            row = -1 * row;
        }
        if (col < 0){
            col = -1 * col;
        }
        let size = row * col;
        container.style.setProperty('--size', row)
        for (let i = 0; i < size; i++) {
            const div = document.createElement('div');
            div.classList.add('pixel');
            container.appendChild(div); 
        }
});

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