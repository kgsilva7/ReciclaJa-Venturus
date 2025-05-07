const bcrypt = require('bcrypt')

exports.createBcryptPassword = async(password) =>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}


exports.compareBcryptPassword = async(password, passwordToCompare) =>{
    return await bcrypt.compare(password, passwordToCompare)
}

