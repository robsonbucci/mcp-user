# Documentação da API de Usuários

Este documento fornece informações detalhadas sobre a API de usuários desenvolvida com Node.js, TypeScript e MongoDB, incluindo instruções para execução local e deploy no Smithery.

## Estrutura do Projeto

O projeto foi estruturado seguindo as melhores práticas para aplicações Node.js com TypeScript:

```
api-usuarios/
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── controllers/
│   │   └── userController.ts
│   ├── models/
│   │   └── User.ts
│   ├── routes/
│   │   └── userRoutes.ts
│   └── index.ts
├── dist/           # Código compilado (gerado pelo TypeScript)
├── node_modules/   # Dependências (gerado pelo npm)
├── .env            # Variáveis de ambiente
├── package.json    # Configuração do projeto
├── tsconfig.json   # Configuração do TypeScript
├── Dockerfile      # Configuração para build do container
└── smithery.yaml   # Configuração para deploy no Smithery
```

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript
- **TypeScript**: Superset tipado de JavaScript
- **Express**: Framework web para Node.js
- **MongoDB**: Banco de dados NoSQL
- **Mongoose**: ODM (Object Data Modeling) para MongoDB

## Modelo de Dados

O modelo de usuário inclui os seguintes campos:

- **nome**: String (obrigatório)
- **genero**: String (obrigatório, valores permitidos: 'masculino', 'feminino', 'outro', 'prefiro não informar')
- **createdAt**: Date (automático)
- **updatedAt**: Date (automático)

## Endpoints da API

A API oferece os seguintes endpoints para operações CRUD:

### Criar Usuário
- **Método**: POST
- **Endpoint**: `/api/usuarios`
- **Corpo da Requisição**:
  ```json
  {
    "nome": "Nome do Usuário",
    "genero": "masculino"
  }
  ```
- **Resposta de Sucesso** (201 Created):
  ```json
  {
    "success": true,
    "data": {
      "_id": "60d21b4667d0d8992e610c85",
      "nome": "Nome do Usuário",
      "genero": "masculino",
      "createdAt": "2025-05-17T00:45:23.421Z",
      "updatedAt": "2025-05-17T00:45:23.421Z"
    }
  }
  ```

### Listar Todos os Usuários
- **Método**: GET
- **Endpoint**: `/api/usuarios`
- **Resposta de Sucesso** (200 OK):
  ```json
  {
    "success": true,
    "count": 2,
    "data": [
      {
        "_id": "60d21b4667d0d8992e610c85",
        "nome": "Nome do Usuário 1",
        "genero": "masculino",
        "createdAt": "2025-05-17T00:45:23.421Z",
        "updatedAt": "2025-05-17T00:45:23.421Z"
      },
      {
        "_id": "60d21b4667d0d8992e610c86",
        "nome": "Nome do Usuário 2",
        "genero": "feminino",
        "createdAt": "2025-05-17T00:46:12.421Z",
        "updatedAt": "2025-05-17T00:46:12.421Z"
      }
    ]
  }
  ```

### Obter Usuário Específico
- **Método**: GET
- **Endpoint**: `/api/usuarios/:id`
- **Resposta de Sucesso** (200 OK):
  ```json
  {
    "success": true,
    "data": {
      "_id": "60d21b4667d0d8992e610c85",
      "nome": "Nome do Usuário",
      "genero": "masculino",
      "createdAt": "2025-05-17T00:45:23.421Z",
      "updatedAt": "2025-05-17T00:45:23.421Z"
    }
  }
  ```

### Atualizar Usuário
- **Método**: PUT
- **Endpoint**: `/api/usuarios/:id`
- **Corpo da Requisição**:
  ```json
  {
    "nome": "Nome Atualizado",
    "genero": "outro"
  }
  ```
- **Resposta de Sucesso** (200 OK):
  ```json
  {
    "success": true,
    "data": {
      "_id": "60d21b4667d0d8992e610c85",
      "nome": "Nome Atualizado",
      "genero": "outro",
      "createdAt": "2025-05-17T00:45:23.421Z",
      "updatedAt": "2025-05-17T00:50:45.123Z"
    }
  }
  ```

### Excluir Usuário
- **Método**: DELETE
- **Endpoint**: `/api/usuarios/:id`
- **Resposta de Sucesso** (200 OK):
  ```json
  {
    "success": true,
    "data": {}
  }
  ```

## Executando Localmente

Para executar a API localmente, siga estes passos:

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd api-usuarios
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/api-usuarios
   ```

4. **Inicie o MongoDB localmente** (ou use MongoDB Atlas)

5. **Compile o TypeScript**:
   ```bash
   npm run build
   ```

6. **Inicie o servidor**:
   ```bash
   npm start
   ```
   
   Ou para desenvolvimento:
   ```bash
   npm run dev
   ```

7. **Acesse a API**:
   A API estará disponível em `http://localhost:5000`

## Deploy no Smithery

Para realizar o deploy desta API no Smithery, consulte o arquivo `deploy-guide.md` que contém instruções detalhadas sobre o processo de deploy.

## Considerações de Segurança

- Esta implementação é básica e não inclui autenticação ou autorização
- Em um ambiente de produção, considere adicionar:
  - Autenticação JWT
  - Validação de entrada mais robusta
  - Rate limiting
  - HTTPS
  - Logs de auditoria

## Próximos Passos

Possíveis melhorias para a API:

1. Adicionar autenticação e autorização
2. Implementar paginação para listagem de usuários
3. Adicionar filtros de busca
4. Expandir o modelo de usuário com mais campos
5. Implementar testes automatizados
6. Adicionar documentação interativa (Swagger/OpenAPI)
