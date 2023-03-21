let inputs = document.querySelectorAll('.input-color')
let label = document.querySelectorAll('.label')
let btn = document.querySelector('#btn')
const form = document.getElementById('form')
// const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

//car um jeito de chamar a função só ao apertar o submit
form.addEventListener('submit', (event) => {
    event.preventDefault()
        
 //Dar um jeito de pegar os valores do input e analizar se são incorretos ou corretos 
    let name = inputs[0].value
    let nameNumber = name.split(' ')
    nameNumber = nameNumber.filter(item => item !== "")

    let content = inputs[3].value
    let contentNumber = content.split(' ')
    contentNumber = contentNumber.filter(item => item !== "")

    const email = inputs[1].value
    console.log(email)
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    const tel = inputs[2].value
    const telRegex = new RegExp(
            "^[0-9]"
    )

    if(nameNumber.length && contentNumber.length < 2){
        
        if(emailRegex.test(email) && telRegex.test(tel)){
            validationFalse() 
        }   
    }else{
        validationTrue()
    }
})

// Ao enviar o formulário, se o campo obrigatório não for preenchido a borda do input deve ficar vermelha e uma mensagem "campo obrigatório" também em vermelho deve aparecer embaixo do campo.
function validationFalse(){
label.forEach(i =>{
    i.innerHTML = 'campo obrigatório'
    colorFalse()
})
}
function colorFalse(){
    inputs.forEach(inputs =>{
    inputs.classList.remove("validation-true")
    inputs.classList.add("validation-false")
})
}

function validationTrue(){
    // Quando um campo estiver preenchido a borda do input deve ficar verde
    label.forEach(i =>{
    i.innerHTML = ""
    colorTrue()
    })
}
function colorTrue(){
    inputs.forEach(inputs =>{
    inputs.classList.remove("validation-false")
    inputs.classList.add("validation-true")
    })
    }



/*
let element = document.createElement("label")
let text = document.createTextNode("campo obrigatório")


element.appendChild(text)
document.body.insertBefore(element, label)
*/