function calculateRhombus() {
    const rhombusD1 = document.getElementById('rhombus-d1') ;
    const d1 = parseFloat(rhombusD1.value) ;

    const rhombusD2 = document.getElementById('rhombus-d2') ;
    const d2 = parseFloat(rhombusD2.value) ;

    const area = 0.5 * d1 * d2 ; 

    const rhombusArea = document.getElementById('rhombus-area') ;
    rhombusArea.innerText = area ; 
}