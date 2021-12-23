const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

connection.connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/create-table", (req, res) => {
  connection.query(
    `create table registration (
    ID varchar(20) not null,
    password varchar(20) not null, 
    phone varchar(20) not null, 
    postcode varchar(10), 
    address varchar(50), 
    birthday varchar(10), 
    primary key(ID)
  );`,
    (err, rows, fields) => {
      res.send({ err, rows, fields });
    }
  );
});

// 테이블 전체 데이터 보기
app.get("/api/all", (req, res) => {
  connection.query("SELECT * FROM registration ", (err, rows, fields) => {
    res.send(rows);
  });
});

// 아이디 중복 체크
app.get("/api/check-duplicate", (req, res) => {
  connection.query(
    `SELECT * FROM registration WHERE ID = ${req.query.id};`,
    (err, rows, fields) => {
      if (rows.length === 0) {
        res.send(false);
      } else {
        res.send(true);
      }
    }
  );
});

// 회원가입
app.post("/api/registration", (req, res) => {
  const { id, password, phone, postcode, address, birthday } = req.body;
  let sql = `INSERT INTO registration(ID, password, phone, postcode, address, birthday) VALUES ('${id}', '${password}', '${phone}', '${postcode}', '${address}', '${birthday}');`;

  connection.query(sql, (err, rows, fields) => {
    res.send({ err, rows });
  });
});

// 로그인
app.post("/api/login", (req, res) => {
  const { id, password } = req.body;
  connection.query(
    `SELECT * FROM registration WHERE ID = ${id};`,
    (err, rows, fields) => {
      if (rows.length === 0) {
        res.send(false);
      } else if (rows[0].password === password) {
        res.send(rows[0]);
      } else {
        res.send(false);
      }
    }
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
