var currentVal = sessionStorage.getItem("currentVal");
var logged_id = sessionStorage.getItem("logged_id");
var regra = sessionStorage.getItem("regra");
var valorEscolhido = sessionStorage.getItem("valorEscolhido");
var resultado = sessionStorage.getItem("resultado");
var d;

function changePage(){
    window.location = '../../Senha/HTML/Senha.html';
}
function teste() {
  console.log(currentVal + " " + logged_id + " " + regra + " " + valorEscolhido + " " + resultado)
}
function viewAnticipation() {
        if (regra == 12) {
          d = '2'
        }
        else if (regra == 9) {
          d = '7'
        }
        else if (regra == 6) {
          d = '15'
        }
        else if (regra == 0) {
          d = '30'
        }
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        var hora = data.getHours();
        var min = data.getMinutes();
        var seg = data.getSeconds();
        var dianome
        switch (new Date().getDay()) {
            case 0:
              dianome = "Domingo";
              break;
            case 1:
              dianome = "Segunda-feira";
              break;
            case 2:
               dianome = "Terça-feira";
              break;
            case 3:
              dianome = "Quarta-feira";
              break;
            case 4:
              dianome = "Quinta-feira";
              break;
            case 5:
              dianome = "Sexta-feira";
              break;
            case 6:
              dianome = "Sábado";
        }
        $("#datenow").html(`${dia}/${mes}/${ano} - ${dianome}`);
        $("#ds").html(`D+${d} (${regra}%)`);
        $("#choosen-value").html(`R$ ${valorEscolhido}`);
        $("#final-value").html(`R$ ${resultado}`)
}