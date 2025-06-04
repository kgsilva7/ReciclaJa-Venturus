# ♻️ ReciclaJá - Plataforma Inteligente de Reciclagem

Este projeto é uma API Back-end para um sistema de autenticação de usuários que faz parte do projeto **ReciclaJá**, uma solução tecnológica para conectar geradores de resíduos recicláveis a coletores especializados, ajudando a aumentar as taxas de reciclagem no Brasil.
O sistema oferece cadastro, login e autenticação por token JWT, e integra com um banco de dados MySQL para armazenar os usuários.
---
## 🌟 Funcionalidades
- Cadastro de usuário com nome, email e senha criptografada
- Login com autenticação segura e geração de token JWT
- Proteção de rotas usando middleware JWT
- Integração com banco de dados usando Sequelize ORM
- Frontend simples em HTML/CSS com Tailwind para teste das funcionalidades
- Documentação de API pronta para Swagger
---
## 💻 Tecnologias Utilizadas
- **Node.js** → Runtime JavaScript no backend
- **Express.js** → Framework web para criar a API e gerenciar rotas
- **Sequelize** → ORM para interagir com MySQL de forma simples e segura
- **MySQL** → Banco de dados relacional para armazenar usuários
- **bcrypt** → Hash seguro de senhas
- **jsonwebtoken (JWT)** → Autenticação baseada em token
- **dotenv** → Carrega variáveis de ambiente do arquivo `.env`
- **Tailwind CSS** → Estilização rápida e responsiva no frontend
- **FontAwesome** → Ícones na interface
---
## 📁 Estrutura dos Arquivos
| Arquivo           | Função                                                                                      |
|-------------------|---------------------------------------------------------------------------------------------|
| `.env`           | Guarda variáveis sensíveis, como `DATABASE_URL` e `JWT_SECRET`                              |
| `index.html`     | Interface frontend com informações do projeto e formulários de exemplo                      |
| `index.js`       | Servidor principal Express, inicializa o app e configura middlewares e rotas                 |
| `auth.js`        | Define rotas de autenticação (`/register`, `/login`) com validação de senha e geração JWT    |
| `bcrypt.js`      | Funções para gerar e verificar hash das senhas                                              |
| `jwt.js`         | Funções para gerar e validar tokens JWT                                                     |
| `connection.js`  | Configuração da conexão Sequelize com MySQL                                                 |
| `tableBd.js`     | Modelo Sequelize que define a tabela `Tabela` para armazenar usuários (nome, email, senha)  |
| `package.json`   | Lista as dependências e scripts do projeto                                                  |
| `package-lock.json` | Guarda versões exatas das dependências para garantir instalações consistentes           |

---
## ⚙️ O que cada tecnologia faz
- **Express** → Gerencia as rotas, middlewares e respostas HTTP.
- **Sequelize** → Define os modelos de banco de dados e executa consultas SQL de forma simplificada.
- **bcrypt** → Faz hash das senhas ao salvar no banco e compara hashes no login.
- **JWT** → Cria tokens no login para autenticação nas rotas protegidas.
- **dotenv** → Carrega variáveis de ambiente para manter seguras informações sensíveis (como senhas e segredos).
- **Tailwind CSS** → Proporciona estilização rápida e responsiva no HTML.
- **FontAwesome** → Adiciona ícones bonitos e funcionais à interface.
---
## 🚀 Como rodar o projeto
1. **Clone o repositório**
    ```bash
    git clone https://github.com/seu-usuario/reciclaja-backend.git
    cd reciclaja-backend
    ```
2. **Instale as dependências**
    ```bash
    npm install
    ```
3. **Configure o arquivo `.env`**
    ```
    DATABASE_URL=mysql://root:root@localhost:3306/reciclaja
    JWT_SECRET=segredo123
    ```
4. **Rode as migrations (se necessário)**
    ```bash
    npx sequelize-cli db:migrate
    ```
5. **Inicie o servidor**
    ```bash
    npm run dev
    ```
---
## 📢 Endpoints principais
- `POST /api/auth/register` → Cadastra novo usuário
- `POST /api/auth/login` → Faz login e retorna token JWT
- `GET /api/auth/user` → Retorna lista de usuários (rota protegida)
---
## 📃 Licença
Este projeto está licenciado sob a licença MIT.
---
## ✨ Demonstração
Acesse a interface web no `index.html` e teste a API localmente em `http://localhost:3000`.
