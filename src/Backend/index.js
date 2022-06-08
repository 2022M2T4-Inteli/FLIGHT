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


app.post('/createbooking', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
	sql = "INSERT INTO RESERVA (cpf, login, senha, nome) VALUES ('" + req.body.cpf + "', '" + req.body.login + "', '" + req.body.senha + "', '" + req.body.nome + "')";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});

// Adicionar um parceiro com seu nome e montante total(que vai ser calculado automaticamente e não manualmente, e atualizado em tempo real)
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