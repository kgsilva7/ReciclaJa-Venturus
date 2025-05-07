const db = require("./connection.js")

const User = db.sequelize.define('Reciclaja',{
    nome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    },
    password:{
        type: db.Sequelize.STRING
    }
})

//User.sync({force:true})

module.exports = User