function changePage(){
    window.location = '../../Senha/HTML/Senha.html';
}

function viewAnticipation() {
    $.get("http://127.0.0.1:3000/anticipations", function(antecipacao) {
      let valorRegra = Number(antecipacao[0].regraNegocio)
        $("#choosen-value").html("R$ " +( antecipacao[0].montanteEscolhido).toFixed(2));
       $("#final-value").html("R$ " + (antecipacao[0].discountedAnticipation).toFixed(2));
       console.log(valorRegra)
       if (valorRegra== 12) {
        $("#ds").html("D+2");
          console.log("2"); 
       }
        else if (valorRegra== 9) {
            $("#ds").html("D+7");
        }
        else if (valorRegra== 6) {
            $("#ds").html("D+15")
        }
        else if (valorRegra== 0) {
            $("#ds").html("D+30");
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
        $("#datenow").html(dia + "/" + (Number(mes)+1) + "/" + ano + " " + hora + ":" + min + ":" + seg + "<br>" + dianome)
    });
}

function getUsers() {

    $.get("http://127.0.0.1:3000/users", function(usuarios) {
        
    })
}
function getdata() {
$.get("http://127.0.0.1:3000/whois", function(resultado){
    //var objeto = JSON.stringify(resultado);
    //var pa = JSON.parse(resultado[0]);
    $("#nomeTB").html(resultado[0].Nome);
    $("#idadeTB").html(resultado[0].Idade);
    $("#enderecoTB").html(resultado[0].Endereco);
    $("#belezaTB").html(resultado[0].Beleza);
    getUsers();
});
}