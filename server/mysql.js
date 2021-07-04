import mysql from 'mysql';

const connection = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: 'ubimicro',
  database: 'walkthrough'
})

export default connection;