var currentVal = sessionStorage.getItem("currentVal");
var logged_cnpj = sessionStorage.getItem("logged_cnpj");
var regra = sessionStorage.getItem("regra");
var valorEscolhido = sessionStorage.getItem("valorEscolhido");
var resultado = sessionStorage.getItem("resultado");
var api = 'http://127.0.0.1:3000'
var users = sessionStorage.getItem("userslist")

let otp = document.querySelector("#otp-input");

for (let pin of otp.children) {
  pin.onkeyup = function (event) {
    if (event.target.value > 0)
      if (pin.nextElementSibling) {
        pin.nextElementSibling.focus();
      }
  };
}

function changePage(){
    window.location='../../Feedback/HTML/Feedback.html'
}

function confirmProcess(){
    var a = 1;
    var entryPass = ''
    while (a<=4) {
        entryPass += (Number($(`#part-code${a}`).val()))
        console.log(entryPass)
        a += 1;
    }
    // if (entryPass == users[logged_cnpj].senha) {
    //     console.log("logou")
    // }
    console.log (users)
    insert()
}
    // Dá o post via ajax e salva a requisição na tabela ANTECIPACAO e chama a função para rodar a tela seguinte
function insert() {
    const Ndate = new Date()
    var dia = Ndate.getDate()
    var mes = Ndate.getMonth()
    var year = Ndate.getFullYear()
    var dataDMA = (`${dia}/` + (Number(mes)+1) + `/${year}`)
    var d
    if (regra == 6) {
        d = 15
    }
    else if (regra == 9) {
        d = 7
    }
    else if (regra == 12) {
        d = 2
    }
    else {
        d = 30
    }
    $.ajax({
        type: 'POST',
        url: api + '/register',
        data: {
            montanteEscolhido:valorEscolhido,
            regraNegocio:d,
            hotelCnpj:logged_cnpj,
            discountedAnticipation:resultado,
            data:dataDMA
        }
    })
    update();
}

function update() {
    let discounted = currentVal-valorEscolhido;
    $.ajax({
        type: 'POST',
        url: api + '/update-amount',
        data: {montante:discounted, cnpj:logged_cnpj},
    })
    currentVal = discounted
    sessionStorage.setItem("currentVal", currentVal);
    changePage()
}