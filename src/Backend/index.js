const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const database = new sqlite3.Database('./dbHURB.db') //nova instância para pegar o banco de dados
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const port = 3000;
const hostname = '127.0.0.1';
const DBPATH = 'dbHURB.db';
app.use(express.json())

app.post('/createpartner', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
	sql = "INSERT INTO PARCEIRO (nome, montante) VALUES ('" + req.body.nome + "', '" + req.body.montante + "')";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});

app.get('/users', (req, res) => {
    database.get("SELECT * FROM PARCEIRO", (err, rows) => {
        res.json(rows)
    })
})
app.get('/hoteis', (req, res) => {
    res.send("Hotéis")
})
app.get('/usuario', (req, res) => {
    res.send("Usuários")
})
app.listen(3000, () => {
    console.log('Servidor está ok.')
})
//toda vez que vc pesquisa na url, vc esta fazendo uma requisição
// req= servidor recebendo
// res= servidor respondendo

app.get('/users', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM PARCEIRO ORDER BY nome COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

app.post('/register', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
	sql = "INSERT INTO ANTECIPACAO (montanteEscolhido, regraNegocio, parceiroId) VALUES ('" + req.body.montanteEscolhido + "', '" + req.body.regraNegocio + "', '" + req.body.parceiroId + "')";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});

app.post('/discounted-anticipation', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
	sql = "INSERT INTO ANTECIPACAO (valor_descontado) VALUES ('" + req.body.valor_descontado + "')";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});

app.listen(port, hostname, () => {
    console.log(`BD server running at http://${hostname}:${port}/`);
  });