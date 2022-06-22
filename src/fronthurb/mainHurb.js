var total =0;
var i = 0;
var lucro = 0;
var lucroTotal = 0;
var string;
var anticipations
var melhores = []
var size
var anticipationslist
// Pega o status de antecipações
function getAnticipationsNumber() {
    $.get("http://127.0.0.1:3000/anticipations", function(quantidade) {
    anticipationslist = quantidade
    size = anticipationslist.length;
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
        console.log(intersec)
        let i = 0;
        while (i < intersec.length) {
            melhores.push(intersec[i].hotelCnpj)
            i += 1
       }
    $.get("http://127.0.0.1:3000/get-hotels", function (hotels) {

        var top3Nomes = []
        var top3Cnpjs = []        
        console.log(melhores)
        console.log(hotels)
        // contador externo do looping (verifica a iteração)
        let i = 0
        // contador interno do looping (verifica o index)
        let p = 0
        // index do top3Nomes hoteis
        let k = 0

        while (i < melhores.length) {   
            while (p < melhores.length) {
                if (hotels[p].cnpj === melhores[k]) {
                    top3Nomes.push(hotels[p].nome)
                    top3Cnpjs.push(hotels[p].cnpj)
                    k += 1
                }
                p += 1
            }
            p = 0
            i += 1
        }
        console.log(top3Nomes)
        $("#hotel-name1").html(top3Nomes[0])
        $("#hotel-name2").html(top3Nomes[1])
        $("#hotel-name3").html(top3Nomes[2])
        // contador para o looping
        console.log(anticipationslist)
        let top1count = 0
        let top2count = 0
        let top3count = 0
        console.log(anticipationslist)
        console.log(top3Cnpjs)
        let m = 0
        while (m < anticipationslist.length) {
            if (anticipationslist[m].hotelCnpj == top3Cnpjs[0]) {
                top1count += 1
            }
            else if (anticipationslist[m].hotelCnpj == top3Cnpjs[1]) {
                top2count += 1
            }
            else if (anticipationslist[m].hotelCnpj == top3Cnpjs[2]) {
                top3count += 1
            }
            m += 1
        }
        console.log(top1count + " " + top2count + " " + top3count)
        let y = 1
        while (y<3) {
            $(`#hotel-count1`).html(top1count)
            $(`#hotel-count2`).html(top2count)
            $(`#hotel-count3`).html(top3count)
            $(`#hotel-favrule1`).html()
            y += 1
        }
        })
    })
}