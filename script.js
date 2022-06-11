var initial = [];
var secondary = [];
var initialNumber;
var secondaryNumber;
var result;
var operation;


function addArray(a){

    secondary.push(a);

    secondaryNumber = Number(secondary.join(""));

}

function deleteLast(){

    secondary.pop();
    secondaryNumber = Number(secondary.join(""));
    secondaryScreen.textContent = secondaryNumber;

}


function equalsOperation(){

    if (initialNumber != null){

        if(operation == "+"){
            result = initialNumber + secondaryNumber;
            initialScreen.textContent = initialNumber + " + " + secondaryNumber + " = ";
            secondaryScreen.textContent = result;
        }
        else if(operation == "-"){
            result = initialNumber - secondaryNumber;
            initialScreen.textContent = initialNumber + " - " + secondaryNumber + " = ";
            secondaryScreen.textContent = result;
        }
        else if(operation == "÷"){
            result = initialNumber / secondaryNumber;
            initialScreen.textContent = initialNumber + " ÷ " + secondaryNumber + " = ";
            secondaryScreen.textContent = result;
        }
        else if(operation == "*"){
            result = initialNumber * secondaryNumber;
            initialScreen.textContent = initialNumber + " × " + secondaryNumber + " = ";
            secondaryScreen.textContent = result;
        }




    }

   
    
}

function checkoperation(){
    if (operation == null) {
        initialNumber = secondaryNumber
        secondaryNumber = 0;
        secondary = [];
    }

    if(operation != null && initialNumber != null){

    }
}


function clearAll(){ //Function clears both screens
    secondary = [];
    initial = [];
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

const divideButton = document.getElementById('divideButton')
const multiplyButton = document.getElementById('multiplyButton')
const plusButton = document.getElementById('plusButton')
const minusButton = document.getElementById('minusButton')
const equalsButton = document.getElementById('equalsButton')



const initialScreen = document.getElementById('initialScreen') // Initial screen is first screen from the top
const secondaryScreen = document.getElementById('secondaryScreen') // Secondary screen is the the second screen
                                                                   // From the top
const clearButton = document.getElementById('clearButton')
const deleteButton = document.getElementById('deleteButton')


Button0.addEventListener("click", ()=>{
    addArray(0);
    secondaryScreen.textContent = secondaryNumber;

});

Button1.addEventListener("click", ()=>{
    addArray(1);
    secondaryScreen.textContent = secondaryNumber;

});

Button2.addEventListener("click", ()=>{
    addArray(2);
    secondaryScreen.textContent = secondaryNumber;

});

Button3.addEventListener("click", ()=>{
    addArray(3);
    secondaryScreen.textContent = secondaryNumber;

});

Button4.addEventListener("click", ()=>{
    addArray(4);
    secondaryScreen.textContent = secondaryNumber;

});

Button5.addEventListener("click", ()=>{
    addArray(5);
    secondaryScreen.textContent = secondaryNumber;

});

Button6.addEventListener("click", ()=>{
    addArray(6);
    secondaryScreen.textContent = secondaryNumber;

});

Button7.addEventListener("click", ()=>{
    addArray(7);
    secondaryScreen.textContent = secondaryNumber;

});

Button8.addEventListener("click", ()=>{
    addArray(8);
    secondaryScreen.textContent = secondaryNumber;

});

Button9.addEventListener("click", ()=>{
    addArray(9);
    secondaryScreen.textContent = secondaryNumber;

});



clearButton.addEventListener("click", ()=>{
    clearAll()
})


deleteButton.addEventListener("click",()=>{

    deleteLast();

})


plusButton.addEventListener("click", ()=>{

    checkoperation();
    operation = "+";
    initialScreen.textContent = initialNumber + " +";
    secondaryScreen.textContent = secondaryNumber;


    


});


minusButton.addEventListener("click", ()=>{

    checkoperation();
    operation = "-";
    initialScreen.textContent = initialNumber + " -";
    secondaryScreen.textContent = secondaryNumber;


});


multiplyButton.addEventListener("click", ()=>{

    checkoperation();
    operation = "*";
    initialScreen.textContent = initialNumber + " ×";
    secondaryScreen.textContent = secondaryNumber;


});




divideButton.addEventListener("click", ()=>{

    checkoperation();
    operation = "÷";
    initialScreen.textContent = initialNumber + " ÷";
    secondaryScreen.textContent = secondaryNumber;


});


equalsButton.addEventListener("click", ()=>{

    equalsOperation();


});