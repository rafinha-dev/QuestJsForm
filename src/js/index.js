let inputs = document.querySelectorAll('.input-color')
let label = document.querySelectorAll('.label')

//Dar um jeito de pegar os valores do input e analizar se são incorretos ou corretos 

//car um jeito de chamar a função só ao apertar o submit


// Ao enviar o formulário, se o campo obrigatório não for preenchido a borda do input deve ficar vermelha e uma mensagem "campo obrigatório" também em vermelho deve aparecer embaixo do campo.
label.forEach((i) =>{
    i.innerHTML = 'campo obrigatório'
    colorFalse()
})

function colorFalse(){
    inputs.forEach((inputs) =>{
        inputs.classList.remove("validation-true")
        inputs.classList.add("validation-false")
    })
}

// Quando um campo estiver preenchido a borda do input deve ficar verde
label.forEach((i) =>{
    i.innerHTML = ""
    colorTrue()
})

function colorTrue(){
    inputs.forEach((inputs) =>{
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