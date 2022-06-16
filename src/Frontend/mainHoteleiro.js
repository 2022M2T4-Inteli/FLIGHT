function openEye(){
    }
function openMenu() {
    window.location = 'Sequencia/MenuHoteleiro/HTML/menu.html'
}

function menu(){    
    window.location = 'file:///C:/Users/Inteli/Desktop/DESENVOLVIMENTO%20WEB/NOVAS%20TELAS%20-%20DAYLLAN/Apresenta%C3%A7%C3%A3o/2.%20HOTEL.HENRI%20-%20Menu.Hoteleiro/HTML/tela%20de%20cadastro.html'
}

function antecipe_seus_ganhos(){
    window.location= 'Sequencia/Fatura/HTML/SolicitacaoHurb.html'
}

function antecipacao_automatica(){
    window.location= 'Sequencia/Agendamento/HTML/Agendamento.html'
}

function extrato(){
    window.location=''
}
function configuracoes(){
    window.location = ''
}

function saiba_mais(){
    window.location= 'file:///C:/Users/Inteli/Desktop/DESENVOLVIMENTO%20WEB/NOVAS%20TELAS%20-%20DAYLLAN/Apresenta%C3%A7%C3%A3o/2.%20HOTEL.HENRI%20-%20Menu.Hoteleiro/HTML/tela%20de%20cadastro.html'
}
var id_logged
function getAmount() {
    $.get("http://127.0.0.1:3000/get-access", function(access) {
        let login_logged = access[0].login_parceiro;
        $.get("http://127.0.0.1:3000/get-logged-partner", function(users) {
            let i = 0;
            users.some(function(){
                if (users[i].login == login_logged) {
                    id_logged = users[i].parceiro_id;
                    console.log(id_logged);
                }
                i += 1;
            })
            $.get("http://127.0.0.1:3000/get-partners", function(parceiro) {
                let i = 0;
                let match = false;
                while (i < parceiro.length && match == false) {
                    if (id_logged == parceiro[i].id) {
                        console.log("ACHEI");
                        match = false;
                        console.log(parceiro[i].id);
                        console.log(parceiro[i].nome);
                        console.log(parceiro[i].montante);
                        $("#teste2").append(parceiro[i].montante)
                    }
                    i += 1;
                }
            })
        })})

    }