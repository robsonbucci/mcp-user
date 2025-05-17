import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';

// Inicializa o Express
const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint MCP para o Smithery
app.get('/mcp', (req: Request, res: Response) => {
  // Extrair configuração do parâmetro de consulta se existir
  if (req.query.config) {
    try {
      const configStr = Buffer.from(req.query.config as string, 'base64').toString();
      const config = JSON.parse(configStr);
      
      // Definir a variável de ambiente MONGODB_URI
      if (config.mongodbUri) {
        process.env.MONGODB_URI = config.mongodbUri;
      }
    } catch (error) {
      console.error('Erro ao processar configuração:', error);
    }
  }
  
  // Responder ao Smithery que o servidor está pronto
  res.status(200).json({ status: 'ready' });
});

// Implementar outros métodos necessários para o protocolo HTTP streamable
app.post('/mcp', (req: Request, res: Response) => {
  // Implementação para chamadas de ferramentas
  res.status(200).json({ result: 'success' });
});

app.delete('/mcp', (req: Request, res: Response) => {
  // Implementação para encerramento de sessão
  res.status(200).json({ status: 'session closed' });
});

// Rotas da API
app.use('/api/usuarios', userRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.send('API de Usuários está funcionando!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
