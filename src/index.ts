import express, { type Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database';
import userRoutes from './routes/userRoutes';

// Carrega variáveis de ambiente
dotenv.config();

// Conecta ao banco de dados
connectDB();

// Inicializa o Express
const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/usuarios', userRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.send('API de Usuários está funcionando!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
