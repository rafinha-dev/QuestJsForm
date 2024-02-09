let inputs = document.querySelectorAll('.input-color')
let label = document.querySelectorAll('.label')
let btn = document.querySelector('#btn')
const form = document.getElementById('form')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    inputs.forEach((element, i)=>{
        
        if(element.value == ""){
            element.classList.add('validation-false')
            element.nextElementSibling.textContent = "Campo obrigatório*"
            
        }else{
            element.classList.add('validation-true')
            element.classList.remove('validation-false')
            element.nextElementSibling.textContent = ""
        }
    })
   
})