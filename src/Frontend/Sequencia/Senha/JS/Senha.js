var currentVal = sessionStorage.getItem("currentVal");
var logged_id = sessionStorage.getItem("logged_id");
var regra = sessionStorage.getItem("regra");
var valorEscolhido = sessionStorage.getItem("valorEscolhido");
var resultado = sessionStorage.getItem("resultado");
var api = 'http://127.0.0.1:3000'

function changePage(){
    window.location='../../Feedback/HTML/Feedback.html'
}

function confirmProcess(){
    console.log(valorEscolhido)
    insert()
}
    // Dá o post via ajax e salva a requisição na tabela ANTECIPACAO e chama a função para rodar a tela seguinte
function insert() {
    $.ajax({
        type: 'POST',
        url: api + '/register',
        data: {
            montanteEscolhido:valorEscolhido,
            regraNegocio:regra,
            parceiroId:logged_id,
            discountedAnticipation:resultado
        }
    })
    update();
}
    
function update() {
    let discounted = currentVal-valorEscolhido;
    $.ajax({
        type: 'POST',
        url: api + '/update-amount',
        data: {montante:discounted, id:logged_id},
    })
    currentVal = discounted
    sessionStorage.setItem("currentVal", currentVal);
    changePage()
}