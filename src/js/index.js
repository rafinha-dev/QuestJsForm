let inputs = document.querySelectorAll('.input-color')
let label = document.querySelectorAll('.label')
let btn = document.querySelector('#btn')
const form = document.getElementById('form')

inputs[0].addEventListener('change', () =>{
        let name = inputs[0].value
        let nameNumber = name.split(' ')
        nameNumber = nameNumber.filter(item => item !== "")

        console.log(nameNumber)
        if(nameNumber.length < 2){
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
        }else{
           
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
        }

})

form.addEventListener('submit', (event) => {
    // event.preventDefault()
})
//Dar um jeito de pegar os valores do input e analizar se são incorretos ou corretos 

//car um jeito de chamar a função só ao apertar o submit





/*
let element = document.createElement("label")
let text = document.createTextNode("campo obrigatório")


element.appendChild(text)
document.body.insertBefore(element, label)
*/