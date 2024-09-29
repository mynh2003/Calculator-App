const calculateScreen = document.querySelector('.calculate')
const resultScreen = document.querySelector('.result')

// Varuable to store the calculation value
let calculateValue = ''

// Array of valid operators
const operator = ['%', '/', '*', '-', '+']

// Function called when a number is pressed
function tapNum(numValue){
    // Prevent a decimal point from being added
    // When the calculation string is empty
    if(calculateValue == '' && numValue == '.'){
        return;
    }

    // Prevebt consecutive decimal points from
    // being added
    if(calculateValue.at(-1) == '.' && numValue == '.'){
        return;
    }

    // Add the number the calculation screen
    addCalculateScreen(numValue)
}
// Function called when am operator is pressed
function tapOperator(operatorValue){
    // Do not allow an operator if the calulation
    // is emty
    if(calculateValue == '') return;

    // Prevent consecutive operator from being
    if(operator.some(operator => calculateValue.at(-1) ==  operator)){
        return;
    }

    // if there is a previous result and it's not an error
    // Use the result as the starting value
    // for the next calculation
    if(resultScreen.textContent != '' && resultScreen.textContent != 'Error'){
        calculateValue = resultScreen.textContent
        resultScreen.textContent = ''
    }

    addCalculateScreen(operatorValue)
}

// Function called when the equals (=) button
// is pressed
function tapResult(){
    try{
        resultScreen.textContent = eval(calculateValue)
    }catch(e){
        resultScreen.textContent ='Error'
    }
    
}

// Function called when the clear (C) button is
function tapClear(){
    // Clear the calculation and result screen
    calculateValue = ''

    // Reset the calculation and result screen
    calculateScreen.textContent = calculateValue
    resultScreen.textContent = ''
}

// Function called when the delete (DEL) button
function tapDel(){
    // Remove the last charater
    calculateValue = calculateValue.slice(0, -1)

    // Clear the result screen
    resultScreen.textContent = ''

    // Update the calculation screen
    calculateScreen.textContent = calculateValue
}

// Function to add a value to the calculation screen
function addCalculateScreen(value){
    // Append the value to the calculation string
    calculateValue += value
    //Update the calculation screen display
    calculateScreen.textContent = calculateValue
}