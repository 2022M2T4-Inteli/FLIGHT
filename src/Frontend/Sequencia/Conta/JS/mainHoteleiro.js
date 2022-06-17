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
    window.location = '../../MenuHoteleiro/HTML/menu.html'
}

function menu(){
    window.location = 'file:///C:/Users/Inteli/Desktop/DESENVOLVIMENTO%20WEB/NOVAS%20TELAS%20-%20DAYLLAN/Apresenta%C3%A7%C3%A3o/2.%20HOTEL.HENRI%20-%20Menu.Hoteleiro/HTML/tela%20de%20cadastro.html'
}

function antecipe_seus_ganhos(){
    window.location= 'SolicitacaoHurb.html'
}

function antecipacao_automatica(){
    window.location= 'file:///C:/Users/Inteli/Desktop/DESENVOLVIMENTO%20WEB/NOVAS%20TELAS%20-%20DAYLLAN/Apresenta%C3%A7%C3%A3o/9.%20HOTEL.DAYLLAN%20-%20Agendamento%20de%20Antecipa%C3%A7%C3%A3o/HTML/Agendamento%20de%20Antecipa%C3%A7%C3%A3o.html'
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