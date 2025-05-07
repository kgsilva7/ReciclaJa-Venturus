const express = require('express');
const router = express.Router();
const User = require('../models/tableBd');
const bcrypt = require("bcrypt");
const { createBcryptPassword, compareBcryptPassword } = require('../utils/bcrypt');
const { generateJwt } = require('../utils/jwt');

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registra um novo usuário
 *     description: Cria um novo usuário no sistema com email, nome e senha criptografada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               passwordUser:
 *                 type: string
 *             required:
 *               - nome
 *               - email
 *               - passwordUser
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Email já cadastrado
 *       500:
 *         description: Erro ao registrar usuário
 */
router.post('/register', async (req, res) => {
    const { nome, email, passwordUser } = req.body;
    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email já cadastrado' });
        }

        const password = await createBcryptPassword(passwordUser)
        const newUser = await User.create({ nome, email, password });
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao registrar usuário', error });
    }
});

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login de usuário
 *     description: Autentica o usuário, retorna um token JWT para acesso a rotas protegidas.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               passwordUser:
 *                 type: string
 *             required:
 *               - email
 *               - passwordUser
 *     responses:
 *       200:
 *         description: Login bem-sucedido com o token JWT
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro ao fazer login
 */
router.post('/login', async (req, res) => {
    const { email, passwordUser } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const passwordMatch = await compareBcryptPassword(passwordUser, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const token = generateJwt(user.id);
        return res.status(200).json({ message: 'Login bem-sucedido', user, token });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao fazer login', error });
    }
});

/**
 * @swagger
 * /api/auth/user:
 *   get:
 *     summary: Buscar usuário pelo ID
 *     description: Retorna os detalhes de um usuário específico pelo seu ID.
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao buscar usuário
 */
router.get('/user', async (req, res) => {
    try {
        const user = await User.findAll();
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar usuário', error });
    }
});

module.exports = router;
