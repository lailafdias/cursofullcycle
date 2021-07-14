const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const mysql = require('mysql')

connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Laila Dias')`

connection.query(sql)

let table = '';

connection.query("SELECT * FROM people", function (err, result, fields) {
    if (err) throw err;
    
    result.forEach(element => {
            console.log(element);
            table += `<tr><td>${element.name}</td></tr>`
    });
});

connection.end();


app.get('/', (req,res) => {
    res.send(

        `<h1>Full Cycle Rocks!</h1>`+
        `<table>
            <tr>
                <td><strong>Nome</strong></td>
            </tr>
            ${table}
        </table>`
    )
});


app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})