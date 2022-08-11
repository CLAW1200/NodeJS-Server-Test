const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
});

//Connect
db.connect((err) => {
    if (err){
        throw err;
    }
    console.log('MySql Connected...');
});


const app = express();

//Create db
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE nodemysql";
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("database created...");
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);
