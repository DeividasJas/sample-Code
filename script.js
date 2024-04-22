// VISI GALIMI PASSWORD CHARAKTERS---------------------------------
const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ';', ':', '"', '\'', '<', '>', ',', '.', '?', '/'];

// -------------------------------------------------------
// VISI ISTRAUKTI DOM ELEMENTAI-----------------------------------

let generated_password = document.getElementById("generated_code").innerHTML

let sumbit_button = document.getElementById("button")


let password_length = document.getElementById("range")
let include_upper = document.getElementById("uppercase")
let include_lower = document.getElementById("lowercase")
let include_numbers = document.getElementById("numbers")
let include_symbols = document.getElementById("symbols")

let uppercase_letters_length = uppercaseLetters.length
let lowercase_letters_length = lowercaseLetters.length
let numbers_length = numbers.length
let symbols_length = symbols.length



let randomLetterIndex = () => {
    return Math.floor(Math.random()*uppercase_letters_length)
}

let randomUpperCase = () => {
    for(let i=0; i<uppercase_letters_length; i++){
        return uppercaseLetters[randomLetterIndex()]
    }
}
let randomLowerCase = () => {
    for(let i=0; i<uppercase_letters_length; i++){
        return lowercaseLetters[randomLetterIndex()]
    }
}

let randomNumber = () => {
    for(let i=0; i<numbers_length; i++){
        return numbers[Math.floor(Math.random()*numbers_length)]
    }
}

let randomSymbols = () => {
    for(let i=0; i< symbols_length;i++){
        return symbols[Math.floor(Math.random()* symbols_length)]
    }
}

let randomCharactersArray = [randomUpperCase, randomLowerCase, randomNumber, randomSymbols]



const randomNum = () =>{
    return Math.floor(Math.random()*4)
}
console.log(randomNum())

const createPassword = (password_length) => {
    let password = "";
    for(let i=0; i<password_length;i++){
       
        
        if(randomNum() === 0){
            password += randomUpperCase()
            console.log(password)
            
        } else if( randomNum() === 1){
            password +=randomLowerCase()
            console.log(password)
            
        } else if (randomNum() === 2){
            password +=randomNumber()
            console.log(password)
            
        } else if (randomNum() === 3){
            password += randomSymbols()
            console.log(password)
        
        } else {
            console.log("problema")
        }
    }

    console.log(password)
    console.log(password.length)
}

createPassword(10)
// console.log(Math.floor(Math.random()* numbers_length))

sumbit_button.addEventListener('click', (event)=>{
    event.preventDefault()
    // console.log(password_length.value)
    // console.log(include_upper.checked)
    // console.log(include_lower.checked)
    // console.log(include_numbers.checked)
    // console.log(include_symbols.checked)


})

