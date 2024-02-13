// function calculateParallelogram() {
//    const parallelogramBase = document.getElementById('parallelogram-base') ;
//    const base = parseFloat(parallelogramBase.value) ;

//    const parallelogramHeight = document.getElementById('parallelogram-height') ;
//    const height = parseFloat(parallelogramHeight.value) ;

//    const area = base * height ;

//    const parallelogramArea = document.getElementById('parallelogram-area') ;

//    parallelogramArea.innerText = area ; 


// }


function calculateParallelogram() {
    const base = getInput('parallelogram-base') ;
    // console.log(base) 

    const height = getInput('parallelogram-height') ;

    const area = base * height ;

    setInnertext('parallelogram-area',area);
}

function getInput(inputFieldID) {
    const inputField = document.getElementById(inputFieldID) ;
    const inputValue = parseFloat(inputField.value) ;
    return inputValue ;
}

function setInnertext(elementID, area) {
    const element = document.getElementById(elementID) ;
    element.innerText = area ; 
}