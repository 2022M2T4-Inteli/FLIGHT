var texto_original = "**********";
function openEye(){
    if(document.getElementById("teste").src=="http://127.0.0.1:5501/olho_aberto2.png")
    {
        console.log("passei aqui!");
        document.getElementById("teste").src = "olho_fechado.png";
        texto_original=document.getElementById("teste2").innerText;
        document.getElementById("teste2").innerText = "*******";
    }
    else
    {
        document.getElementById("teste").src = "olho_aberto2.png";
        document.getElementById("teste2").innerText = texto_original;
    }
   
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

function getAmount() {
    let count = 0;
    let match = false;
    $.get("http://127.0.0.1:3000/get-access", function(access) {
    let accessed = (access[0].login_parceiro);
    console.log(accessed + " = login que acessou")
    $.get("http://127.0.0.1:3000/users", function(users) {
        console.log(users);
        // fazer looping para verificar qual users[n].login é igual ao accessed (login do acesso mais recente)
        var i = 0;
        let found = false;
        while (i < users.length && found == false) {
            if (users[i].login == accessed) {
                found = true;
                var logged_id = (users[i].parceiro_id)
                    console.log("deu certo até aqui")
                $.get("http://127.0.0.1:3000/get-partners", function(partners) {
                let j = 0;    
                let match = false;
                console.log(partners);
                while (j < partners.length && match == false) {
                    if (logged_id == partners[j].id) {
                        match = true;
                        console.log(logged_id + " " + partners[j].id + " é o que logou");
                        console.log(partners[j].montante);
                        $("#teste2").append(partners[j].montante)
                    }
                    j += 1;
                }
                })
            }
            i += 1;
        }
    })
    })
    }