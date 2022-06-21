var total =0;
var i = 0;
var lucro = 0;
var lucroTotal = 0;
var string;
var anticipations
var melhores = []
// Pega o status de antecipações
function getAnticipationsNumber() {
    $.get("http://127.0.0.1:3000/anticipations", function(quantidade) {
    var size = quantidade.length;
    if (size == 0) {
        string = "Nenhuma antecipação";
        $("#anticipations-amount").html(string);    
    }
    else if (size == 1) {
        $("#anticipations-amount").html(size);
    }
    else if (size > 1) {
        $("#anticipations-amount").html(size);
    }
    
    quantidade.map(item => {
        total += parseFloat(item.montanteEscolhido);
        lucroTotal += parseFloat(item.discountedAnticipation);

        $("#total-value").html("R$ " + total)

    })
    lucro += (total - lucroTotal)
    $("#profits").html("R$ " + lucro.toFixed(2))
    }
)    
    getTable()
}

function getTable() {
    $.get("http://127.0.0.1:3000/get-intersec", function(intersec) {
        let i = 0;
        while (i < intersec.length) {
            melhores.push(intersec[i].hotelCnpj)
            i += 1
       }
       console.log(melhores)
    $.get("http://127.0.0.1:3000/anticipations", function (anticipacions) {
        let p = 0;
        while (p<anticipacions.length) {
            
            p += 1
        }
    })
})
}
//         while (p<3) {
//             $.get("http://127.0.0.1:3000/get-anticipations-where", function (teste) {
//                 data: {
//                     hotelCnpj:a
//                 }
//             })
//             }
//             p += 1;
//     })
// }
