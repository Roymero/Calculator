var initial = [];
var secondary = [];
var initialNumber;
var secondaryNumber;
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


function clearAll(){ //Function clears both screens
    secondary = [];
    initial = [];
    secondaryScreen.textContent = 0;
    initialScreen.textContent = '';
}



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
const addButton = document.getElementById('addButton')
const minisButton = document.getElementById('minusButton')



const initialScreen = document.getElementById('initialScreen')
const secondaryScreen = document.getElementById('secondaryScreen') // Secondary screen is the the second scren

const clearButton = document.getElementById('clearButton')
const deleteButton = document.getElementById('deleteButton')


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