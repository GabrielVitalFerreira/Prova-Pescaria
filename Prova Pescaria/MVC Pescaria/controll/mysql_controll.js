const mysql = require('mysql')
const con = mysql.createConnection({
    'user':'root',
    'database':'pesca',
    'host':'localhost'
})

module.exports = {
    con
}