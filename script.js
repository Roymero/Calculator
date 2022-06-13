var secondary = [];
var initialNumber;
var secondaryNumber;
var equalsPressed = false;
var result;
var operation;


// Ver 1.0 complete

function addArray(a){

    if (secondary.length < 28) {

        if (secondary[0] == "0" && secondary.includes(".") == false) {
            secondary.shift()
        }

        if (a == ".") {
            if (secondary.includes(".") == false && secondary.length != 0) {
                secondary.push(a);

            }
            else if (secondary.includes(".") == false && secondary.length == 0) {
                secondary.push(0);
                secondary.push(a);
            }
        }
        else {
            secondary.push(a);
        }

        secondaryNumber = secondary.join("");

    }
}

function number2str(){

    secondaryNumber = secondaryNumber.toString();
    initialNumber = initialNumber.toString();
}

function str2numbers(){
    
    if(secondaryNumber.includes(".") == true){
        secondaryNumber = parseFloat(secondaryNumber);

    }
    else if(secondaryNumber.includes(".") == false){
        secondaryNumber = parseInt(secondaryNumber);


    }

    if(initialNumber.includes(".") == true){
        initialNumber = parseFloat(initialNumber);
    }
    else if(initialNumber.includes(".") == false){
        initialNumber = parseInt(initialNumber);

    }
}

function deleteLast(){

    secondary.pop();
    secondaryNumber = secondary.join("");
    secondaryScreen.textContent = secondaryNumber;

    if(secondary.length === 0){
        secondaryScreen.textContent = "0";
    }

}


function equalsOperation(){

    if (initialNumber != null && secondaryNumber != null){

        if (initialNumber.length == 1 && initialNumber[0] == '-') {
            secondary = [];
            initialNumber = "0";
            secondaryNumber = "0";
            operation = null;
            secondaryScreen.textContent = "Not possible"
            result = null;
            return;
            
        }

        str2numbers();

        if(operation == "+"){
            result = initialNumber + secondaryNumber;
            result = result.toString();
            initialScreen.textContent = initialNumber + " + " + secondaryNumber + " = ";   
            secondary = result.toString().split('');
            secondaryScreen.textContent = result;
            
        }
        else if(operation == "-"){
            result = initialNumber - secondaryNumber;
            initialScreen.textContent = initialNumber + " - " + secondaryNumber + " = ";
            secondary = result.toString().split('')
            secondaryScreen.textContent = result;
        }
        else if(operation == "÷"){
            
            result = initialNumber / secondaryNumber;
            initialScreen.textContent = initialNumber + " ÷ " + secondaryNumber + " = ";
            if (secondaryNumber == 0) {
                secondary = [];
                initialNumber = "0";
                secondaryNumber = "0";
                operation = null;
                secondaryScreen.textContent = "Not possible"
                result = null;
                return;

            }
            else{
                secondaryScreen.textContent = result;
                secondary = result.toString().split('')
            }
        }
        else if(operation == "×"){
            result = initialNumber * secondaryNumber;
            initialScreen.textContent = initialNumber + " × " + secondaryNumber + " = ";
            secondary = result.toString().split('')
            secondaryScreen.textContent = result;
        }

        equalsPressed = true;
        number2str();

    }   
    
}

function checkEquals(){                   // function that checks if equals button was pressed and if so next number that is pressed 
                                          // resets
    if(equalsPressed == true){
        clearAll();
        equalsPressed = false;

    }

}

function continueOperation(){             // function that lets the calculator continue the operations
    
    initialNumber = result;
    initialNumber = initialNumber.toString();
    secondaryNumber = null;
    secondary = [];
    equalsPressed = false;
}

function checkoperation(){                // function that checks if the operation variable is null
    if (operation == null) {              // If operation is null second value is transferred to first value and is solidified
        initialNumber = secondaryNumber   // Then secondary value is reset so user can add second value in their operation.
        secondaryNumber = null;
        secondary = [];
    }

    if(operation != null && secondaryNumber != null){
        equalsOperation();
        continueOperation();
        initialScreen.textContent = initialNumber + " " + operation;

       
    }

    if(operation == null && secondaryNumber == undefined && (initialNumber == 0 || initialNumber == null)){
        initialNumber = "0"
        secondaryNumber = null;
        secondary = [];
    }

}


function changeValues(){                    // Function that changes the values on initial and secondary screen                                         
    if(operation != null && secondaryNumber == null){
       
        initialScreen.textContent = initialNumber + " " + operation;
        secondaryScreen.textContent = "0";    
        
    }

}

function deleteCheck(){

    if (equalsPressed == true) {
        
        initialNumber = null;
        equalsPressed = false
        initialScreen.textContent = '';
        operation = null;
        console.log(equalsPressed) 

    }

}


function clearAll(){                     //Function clears both screens
   
    secondary = [];
    initialNumber = null;
    secondaryNumber = 0;
    operation = null;
    secondaryScreen.textContent = 0;
    initialScreen.textContent = '';

}


const Button0 = document.getElementById('Button0');
const Button1 = document.getElementById('Button1');
const Button2 = document.getElementById('Button2');
const Button3 = document.getElementById('Button3');
const Button4 = document.getElementById('Button4');
const Button5 = document.getElementById('Button5');
const Button6 = document.getElementById('Button6');
const Button7 = document.getElementById('Button7');
const Button8 = document.getElementById('Button8');
const Button9 = document.getElementById('Button9');

const decimalButton = document.getElementById('decimalButton')
const divideButton = document.getElementById('divideButton')
const multiplyButton = document.getElementById('multiplyButton')
const plusButton = document.getElementById('plusButton')
const minusButton = document.getElementById('minusButton')
const equalsButton = document.getElementById('equalsButton')



const initialScreen = document.getElementById('initialScreen') // Initial screen is first screen from the top
const secondaryScreen = document.getElementById('secondaryScreen') // Secondary screen is the the second screen
                                                                   // from the top
const clearButton = document.getElementById('clearButton')
const deleteButton = document.getElementById('deleteButton')


Button0.addEventListener("click", ()=>{
    checkEquals();
    addArray("0");
    secondaryScreen.textContent = secondaryNumber;

});

Button1.addEventListener("click", ()=>{
    checkEquals();
    addArray(1);
    secondaryScreen.textContent = secondaryNumber;

});

Button2.addEventListener("click", ()=>{
    checkEquals();
    addArray(2);
    secondaryScreen.textContent = secondaryNumber;

});

Button3.addEventListener("click", ()=>{
    checkEquals();
    addArray(3);
    secondaryScreen.textContent = secondaryNumber;

});

Button4.addEventListener("click", ()=>{
    checkEquals();
    addArray(4);
    secondaryScreen.textContent = secondaryNumber;

});

Button5.addEventListener("click", ()=>{
    checkEquals();
    addArray(5);
    secondaryScreen.textContent = secondaryNumber;

});

Button6.addEventListener("click", ()=>{
    checkEquals();
    addArray(6);
    secondaryScreen.textContent = secondaryNumber;

});

Button7.addEventListener("click", ()=>{
    checkEquals();
    addArray(7);
    secondaryScreen.textContent = secondaryNumber;

});

Button8.addEventListener("click", ()=>{
    checkEquals();
    addArray(8);
    secondaryScreen.textContent = secondaryNumber;

});

Button9.addEventListener("click", ()=>{
    checkEquals();
    addArray(9);
    secondaryScreen.textContent = secondaryNumber;

});


decimalButton.addEventListener("click", ()=>{
    checkEquals();
    addArray(".");
    secondaryScreen.textContent = secondaryNumber;

});

clearButton.addEventListener("click", ()=>{
    clearAll()
})


deleteButton.addEventListener("click",()=>{

    deleteLast();
    deleteCheck();
   
})


plusButton.addEventListener("click", ()=>{

    checkoperation();
    operation = "+";
    changeValues();
});


minusButton.addEventListener("click", ()=>{

    checkoperation();
    operation = "-";
    changeValues();

});


multiplyButton.addEventListener("click", ()=>{

    checkoperation();
    operation = "×";
    changeValues();


});

divideButton.addEventListener("click", ()=>{

    checkoperation();
    operation = "÷";
    changeValues();

});

equalsButton.addEventListener("click", ()=>{
    
    equalsOperation();

});


document.addEventListener('keydown', (event)=>{     //Keyboard inputs
   
    if (event.code == 'Numpad1' || event.key == '1') {
      
        checkEquals();
        addArray(1);
        secondaryScreen.textContent = secondaryNumber;
    }
    else if(event.code == 'Numpad2' || event.key == '2') {
       
        checkEquals();
        addArray(2);
        secondaryScreen.textContent = secondaryNumber;
    }
    else if(event.code == 'Numpad3' || event.key == '3') {
      
        checkEquals();
        addArray(3);
        secondaryScreen.textContent = secondaryNumber;

    }
    else if(event.code == 'Numpad4' || event.key == '4') {
        
        checkEquals();
        addArray(4);
        secondaryScreen.textContent = secondaryNumber;

    }
    else if(event.code == 'Numpad5' || event.key == '5') {
        
        checkEquals();
        addArray(5);
        secondaryScreen.textContent = secondaryNumber;

    }
    else if(event.code == 'Numpad6' || event.key == '6') {
      
        checkEquals();
        addArray(6);
        secondaryScreen.textContent = secondaryNumber;

    }
    else if(event.code == 'Numpad7' || event.key == '7') {
    
        checkEquals();
        addArray(7);
        secondaryScreen.textContent = secondaryNumber;

    }
    else if(event.code == 'Numpad8' || event.key == '8') {
        
        checkEquals();
        addArray(8);
        secondaryScreen.textContent = secondaryNumber;

    }
    else if(event.code == 'Numpad9' || event.key == '9') {
       
        checkEquals();
        addArray(9);
        secondaryScreen.textContent = secondaryNumber;

    }
    else if (event.code == 'Numpad0' || event.key == '0') {
       
        checkEquals();
        addArray("0");
        secondaryScreen.textContent = secondaryNumber;


    }
    else if (event.code == 'NumpadDecimal' || event.key == '.') {
        
        checkEquals();
        addArray(".");
        secondaryScreen.textContent = secondaryNumber;

    }
    else if (event.key == '+') {
        
        checkoperation();
        operation = "+";
        changeValues();

    }
    else if (event.key == '-') {
      
        checkoperation();
        operation = "-";
        changeValues();
    }
    else if (event.key == '*') {
       
        checkoperation();
        operation = "×";
        changeValues();
    }
    else if (event.key == '/') {
        
        checkoperation();
        operation = "÷";
        changeValues();
    }
    else if ( event.key == '=' ) {

        equalsOperation();
    }
    else if(event.key == 'Backspace') {
     
        deleteLast();
        deleteCheck();
    }
    else if(event.key == 'Escape') {
        
        clearAll()

    }
    
})