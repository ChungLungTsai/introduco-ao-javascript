var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
function increment(){
    currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber;
    // .innerHTML used when put number from HTML 
} 
function decrement(){
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
    // .innerHTML used when put number from HTML 
} 