var total =0;
var i = 0;
var lucro = 0;
var lucroTotal = 0;
var string;

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
    console.log(lucro)
    $("#profits").html("R$ " + lucro.toFixed(2))
    }
)    
    getTable()
}

function getTable() {
    $.get("http://127.0.0.1:3000/get-intersec", function(intersec) {
        console.log(intersec)
    })
}

$('#valor').keyup(function() {
    console.log("AA")
})