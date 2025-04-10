const altura = 1.80
const sexo = F
let pesoIdeal

if (sexo === 'M') { 
    pesoIdeal = (72.7 * altura) - 58;
} else if (sexo === 'F') {
    pesoIdeal = (62.1 * altura) - 44.7;
} else {
    pesoIdeal = ("Sexo inválido. Use 'M' para masculino ou 'F' para feminino.");
}

alert(typeof pesoIdeal === "number" ? `O peso ideal é: ${pesoIdeal.toFixed(2)} kg` : pesoIdeal);