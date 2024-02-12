function calculateParallelogram() {
   const parallelogramBase = document.getElementById('parallelogram-base') ;
   const base = parseFloat(parallelogramBase.value) ;

   const parallelogramHeight = document.getElementById('parallelogram-height') ;
   const height = parseFloat(parallelogramHeight.value) ;

   const area = base * height ;

   const parallelogramArea = document.getElementById('parallelogram-area') ;

   parallelogramArea.innerText = area ; 


}