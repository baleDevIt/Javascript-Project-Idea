// const oneBtn = document.getElementById('one')
// const twoBtn = document.getElementById('two')
// const threeBtn = document.getElementById('three')
// const fourBtn = document.getElementById('four')
// const fiveBtn = document.getElementById('five')
// const sixBtn = document.getElementById('six')
// const sevenBtn = document.getElementById('seven')
// const eightBtn = document.getElementById('eight')
// const nineBtn = document.getElementById('nine')
// const zeroBtn = document.getElementById('zero')
// const divideBtn = document.getElementById('divide')
// const multiplyBtn = document.getElementById('multiply')
// const subtractBtn = document.getElementById('subtract')
// const addBtn = document.getElementById('add')
// const equalsBtn = document.getElementById('equals')

const decimalBtn = document.getElementById('decimal')
const clearBtn = document.getElementById('clear')
const screenOut = document.getElementById('result')
const equalsBtn = document.getElementById('equals')
let toCalculating = [];
let temp = '';
const sign = ['+', '-', '*', '/']

clearBtn.addEventListener('click', () => {
    clearOutput()
})

equalsBtn.addEventListener('click', () => {
    resultProcess();
})

function resultProcess(){
    if(toCalculating.includes('*')){
        moltipy(toCalculating.indexOf('*'))
    }else if (toCalculating.includes('/')){
        divisor(toCalculating.indexOf('/'))
    }else if (toCalculating.includes('-')){
        subtractor(toCalculating.indexOf('-'))
    }else if(toCalculating.includes('+')){
        summum(toCalculating.indexOf('+'))
    }
    changeVisualOut()
}

function moltipy(iElement){
    let calc = Number.parseFloat(toCalculating[iElement-1]) * Number.parseFloat(toCalculating[iElement+1])
    toCalculating.splice(iElement-1, 3, calc.toString())
}

function divisor(iElement){
    let calc = Number.parseFloat(toCalculating[iElement-1]) / Number.parseFloat(toCalculating[iElement+1])
    toCalculating.splice(iElement-1, 3, calc.toString())
}

function subtractor(iElement){
    let calc = Number.parseFloat(toCalculating[iElement-1]) - Number.parseFloat(toCalculating[iElement+1])
    toCalculating.splice(iElement-1, 3, calc.toString())
}

function summum(iElement){
    let calc = 0;
    calc = Number.parseFloat(toCalculating[iElement-1]) + Number.parseFloat(toCalculating[iElement+1])
    toCalculating.splice(iElement-1, 3, calc.toString())
}



function initNumberElement() {
    let idReference = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let numberElementReference = [];
  
    for (let i = 0; i < idReference.length; i++) {
      const id = idReference[i];
      const element = document.getElementById(id);
  
      numberElementReference.push(element);
  
      element.addEventListener("click", () => {
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
            addSignToStorage(sign[i])
        })
        
    }
    return numberOperatorReference;
}

function changeVisualOut() {
    let outputToVisual = '';
    for (let indexElement = 0; indexElement < toCalculating.length; indexElement++) {
        outputToVisual += ` ${toCalculating[indexElement]}`
        
    }
    screenOut.value = outputToVisual;
    console.log(toCalculating)
}

function addNumberToStorage(numberToAdd){
        if(!sign.includes(toCalculating[toCalculating.length -1]))
            toCalculating.splice(toCalculating.length -1, 1, numberToAdd)
        else
            toCalculating.push(numberToAdd)
        changeVisualOut()
}

function addSignToStorage(signToAdd){
    toCalculating.push(signToAdd)
    temp = '';
    changeVisualOut()
}

function clearOutput(){
    toCalculating = []
    temp = ''
    changeVisualOut()
}


// Da implementare utilizzo della virgola!
// Implementare logica di priorità di segno sui segni + e -
// Stessa implementazione della problematica su per i segni / e *

initNumberElement()
initOperatorElement()
clearOutput()