/**
 * objective : get base , height of a triangle. calculate the area by using formula and display the value
 * step 1 : get base value 
 * step 2  : converting the input value into number [float]
 */

function calculateTriangle() {

    //triangle base 
   const triangleBase = document.getElementById('triangle-base');
   const base = parseFloat(triangleBase.value)
//    console.log(typeof base );

    //triangle height 
    const triangleHeight = document.getElementById('triangle-height') ;
    const height = parseFloat(triangleHeight.value) ;
    // console.log(height);


    const area = 0.5 * base * height ; 
    // console.log('area of triangle is', area) ;

    //display triangle area 

    const triangleArea = document.getElementById('triangle-area') ;
    triangleArea.innerText = area ; 
}


