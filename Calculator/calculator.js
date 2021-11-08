//Init
const decimalBtn = document.getElementById('decimal')
const clearBtn = document.getElementById('clear')
const screenOut = document.getElementById('result')
const equalsBtn = document.getElementById('equals')
let memory = [];
let temp = '';
let operatorIsEnable = true;
const sign = ['+', '-', '*', '/']

calculator();

//Start 
function calculator(){
    initNumberElement()
    initOperatorElement()

    clearBtn.addEventListener('click', () => {
        clearOutput()
    })
    
    equalsBtn.addEventListener('click', () => {
        resultProcess();
    })
    
    decimalBtn.addEventListener('click', () => {
        if(memoryIsFull()){
            return 
        }
        temp = temp + '.';
        addNumberToStorage(temp)
    })

}

function initNumberElement() {
    let idReference = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let numberElementReference = [];
  
    for (let i = 0; i < idReference.length; i++) {
      const id = idReference[i];
      const element = document.getElementById(id);
      numberElementReference.push(element);
  
      element.addEventListener("click", () => {
        if(memoryIsFull()){
            return 
          }
        temp = temp + String(i);
        addNumberToStorage(temp)
      });
  
    }
  
    return numberElementReference;
  
  }

function initOperatorElement(){
    const idReference = ['add','subtract','multiply', 'divide'];
    let numberOperatorReference = [];

    for (let i = 0; i < idReference.length; i++) {
        let element = document.getElementById(idReference[i])
        numberOperatorReference.push(element)

        element.addEventListener('click', () => {
            if(!operatorIsPresent()) {
                addSignToStorage(sign[i])
            }
        })        
    }
}

//Operation
function moltipy(iElement){
    let calc = Number.parseFloat(memory[iElement-1]) * Number.parseFloat(memory[iElement+1])
    memory.splice(iElement-1, 3, calc.toString())
}

function divisor(iElement){
    let calc = Number.parseFloat(memory[iElement-1]) / Number.parseFloat(memory[iElement+1])
    memory.splice(iElement-1, 3, calc.toString())
}

function subtractor(iElement){
    let calc = Number.parseFloat(memory[iElement-1]) - Number.parseFloat(memory[iElement+1])
    memory.splice(iElement-1, 3, calc.toString())
}

function summum(iElement){
    let calc = 0;
    calc = Number.parseFloat(memory[iElement-1]) + Number.parseFloat(memory[iElement+1])
    memory.splice(iElement-1, 3, calc.toString())
}

//Utils
function resultProcess(){
    if(memory.includes('*')){
        moltipy(memory.indexOf('*'))
    }else if (memory.includes('/')){
        divisor(memory.indexOf('/'))
    }else if (memory.includes('-')){
        subtractor(memory.indexOf('-'))
    }else if(memory.includes('+')){
        summum(memory.indexOf('+'))
    }
    changeVisualOut()
    temp = memory[0];
}

function memoryIsFull(){
    if(memory.join('').length > 11){
        return true}
    else{
        return false}
}

function operatorIsPresent(){
    return sign.includes(memory[1])
}

function disableOperator(){
    operatorIsEnable = false;
}

function enableOperator(){
    operatorIsEnable = true;
}

function changeVisualOut() {
    let outputToVisual = '';
    for (let indexElement = 0; indexElement < memory.length; indexElement++) {
        outputToVisual += ` ${memory[indexElement]}`
        
    }
    screenOut.value = outputToVisual;
    console.log(memory)
}

function addNumberToStorage(numberToAdd){
        if(!sign.includes(memory[memory.length -1]))
            memory.splice(memory.length -1, 1, numberToAdd)
        else
            memory.push(numberToAdd)
        changeVisualOut()
}

function addSignToStorage(signToAdd){
    memory.push(signToAdd)
    temp = '';
    changeVisualOut()
}

function clearOutput(){
    memory = []
    temp = ''
    enableOperator()
    changeVisualOut()
}
