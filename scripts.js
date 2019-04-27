for(let i = 0; i < 256; i++) {
    var etch = document.createElement('div');
    etch.className = "etch";
    etch.setAttribute('style', 'height: 25px; width: 25px;');  
    document.getElementById('etch').appendChild(etch);
    etch.addEventListener("mouseover", hov);
    
}

function hov() {
    this.classList.add('hover');
}

function reset(){
    let cell = document.querySelector(".container");
    while(cell.firstChild){
        cell.removeChild(cell.firstChild);
    }

    let size = prompt("Size?");

    sizeWidthHeight = 400 / size;

    for(let i = 0; i < size*size; i++) {
        var etch = document.createElement('div');
        etch.className = "etch";
        etch.setAttribute(`style`, `height: ${sizeWidthHeight}px; width: ${sizeWidthHeight}px;flex-grow:100%;`);  
        document.getElementById('etch').appendChild(etch);
        etch.addEventListener("mouseover", hov);
        
    }

}

const clear = document.querySelector('.clear')

clear.addEventListener('click', reset);

