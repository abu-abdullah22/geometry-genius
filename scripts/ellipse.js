function calculateEllipse() {
    const ellipseA = document.getElementById('ellipse-a') ;
    const a = parseFloat(ellipseA.value) ;

    const ellipseB = document.getElementById('ellipse-b') ;
    const b = parseFloat(ellipseB.value) ;

    const area = 3.14 * a * b ; 

    const ellipseArea = document.getElementById('ellipse-area') ;
    ellipseArea.innerText = area ; 
}