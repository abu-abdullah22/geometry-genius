function calculatePentagon() {
    const pentagonPerimeter = document.getElementById('pentagon-perimeter') ;
    const p = parseFloat(pentagonPerimeter.value) ;

    const pentagonBase = document.getElementById('pentagon-base') ;
    const b = parseFloat(pentagonBase.value) ;

    const area = 0.5 * p * b ; 

    const pentagonArea = document.getElementById('pentagon-area') ;
    pentagonArea.innerText = area ; 
}