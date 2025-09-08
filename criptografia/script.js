const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let textoCriptografado = ""
const inputText = document.querySelector("#texto")
const inputNumber = document.querySelector("#numero")
const botao = document.querySelector("button")
const p = document.querySelector("#resultado")
inputText.value = ""
inputNumber.value = ""

botao.addEventListener("click", () => {
    textoCriptografado = ""
    for (let caractere of inputText.value.toUpperCase()) {
        if (alfabeto.includes(caractere)) {
            const deslocamento = ((inputNumber.value % alfabeto.length) + alfabeto.length) % alfabeto.length
            const indiceAtual = alfabeto.indexOf(caractere)
            const novoIndice = (indiceAtual + deslocamento) % alfabeto.length 
            textoCriptografado += alfabeto[novoIndice]
        }
        else {
            textoCriptografado += caractere
        }
    }
    p.textContent = `Texto Criptografado: ${textoCriptografado}`
})