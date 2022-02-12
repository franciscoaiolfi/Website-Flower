const fields = document.querySelectorAll("[required]"); // Peguei todos os campos com atributo required e coloquei na const fields

console.log(fields); // Dei um console pra testar



function customValidation(event){
    const field  = event.target

//Trocar o texto
field.setCustomValidity("Esse campo é obrigatório!")
}

// **For of** pucha um da lista
for ( let field of fields){                 //Para cada field que estiver in
        field.addEventListener("invalid", customValidation) // Invalid é um evento disponível dentro do campo required           
}





























document.querySelector("form").addEventListener("submit", (event) => {

    //essa linha evita que o formulário fique enviando dados, ótima para enquanto desenvolve o código
event.preventDefault()
}) // Chamei uma function anonima