

const formBtn = document.querySelectorById("btnCep")


const cep = document.querySelectorById("cep")

fetch(`https://viacep.com.br/ws/${cep}/json/`)