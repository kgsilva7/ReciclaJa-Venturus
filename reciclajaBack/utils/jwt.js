const jwt = require('jsonwebtoken');

const SECRET_KEY = 'seu_segredo_aqui';

exports.generateJwt = (userId) => {
    return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' }); // O token expira em 1h
};

exports.verifyJwt = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Espera no formato 'Bearer token'

    if (!token) {
        return res.status(403).json({ message: 'Token não fornecido' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        req.userId = decoded.userId; 
        next();
    });
};
