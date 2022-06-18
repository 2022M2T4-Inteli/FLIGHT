var api = 'http://127.0.0.1:3000'
var regra = 0;
var valorEscolhido;
var dia;
// Muda a tela para a página seguinte (Demonstrativo)
function changeScreen() {
    window.location = "../../Demonstrativo/HTML/Solicitacao-Demonstrativo.html"
}
// Salva as variáveis para dar o post em seguida (rodando a função insert())

function confirm(){
    valorEscolhido = Number(document.getElementById("valorEscolhido").value);
    sessionStorage.setItem("valorEscolhido", valorEscolhido);
    console.log(valorEscolhido)
    dia = Number($('input[name="d"]:checked').val());
    if (dia == 2) {
        regra = 12;
        sessionStorage.setItem("regra", regra);  

    }
    else if (dia == 7) {
        regra = 9;
        sessionStorage.setItem("regra", regra);  

    }
    else if (dia == 15) {
        regra = 6;
        sessionStorage.setItem("regra", regra);  

    }
    else if (dia == 30) {
        regra = 0;
        sessionStorage.setItem("regra", regra);  

    }
    resultado = valorEscolhido-regra/100*valorEscolhido;
    sessionStorage.setItem("resultado", resultado);  
    console.log(resultado)
    console.log(dia + " dia" + "<br>" + regra + " regra");
    console.log(regra)
    changeScreen()
}
// Atualiza em tempo real os valores descontados
function keyUp() { 
    let d15 = 6/100;
    let d7 = 9/100;
    let d2 = 12/100
        $('#valorEscolhido').keyup(function() {
            let currentValue = String(document.getElementById("valorEscolhido").value);
            $("#label30").html("30 Dias - sem abatimento, valor final de R$" + String(currentValue));
            $("#label15").html("15 Dias - descontados 6%, valor final de R$" + String((currentValue - currentValue*d15).toFixed(2)));
            $("#label7").html("7 Dias - descontados 9%, valor final de R$" + String(currentValue - currentValue*d7.toFixed(2)));
            $("#label2").html("2 Dias - descontados 12%, valor final de R$" + String(currentValue - currentValue*d2.toFixed(2)));
        });
    }


