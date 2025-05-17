# Guia de Deploy no Smithery

Este documento explica como realizar o deploy da API de usuários no Smithery.

## Pré-requisitos

Antes de iniciar o processo de deploy, certifique-se de que:

1. Você possui uma conta no Smithery
2. Você tem acesso ao repositório do projeto no GitHub (ou outro serviço de hospedagem de código)
3. O projeto está funcionando corretamente em ambiente local

## Arquivos de Configuração

Para o deploy no Smithery, dois arquivos são essenciais:

### Dockerfile

O Dockerfile define como construir a imagem do container para sua aplicação:

```dockerfile
FROM node:20-alpine

WORKDIR /app

# Copiar arquivos de configuração
COPY package*.json ./
COPY tsconfig.json ./

# Instalar dependências
RUN npm install

# Copiar código fonte
COPY . .

# Compilar TypeScript para JavaScript
RUN npm run build

# Expor a porta que a aplicação usa
EXPOSE 5000

# Comando para iniciar a aplicação
CMD ["node", "dist/index.js"]
```

### smithery.yaml

O arquivo smithery.yaml especifica como iniciar e executar o servidor:

```yaml
version: 1
start:
  command: ["node", "dist/index.js"]
  port: 5000
```

## Processo de Deploy

1. **Adicionar seu servidor ao Smithery**:
   - Acesse o Smithery (https://smithery.ai)
   - Faça login na sua conta
   - Clique em "Add Server" no menu superior
   - Siga as instruções para adicionar seu servidor (ou reivindicar se já estiver listado)

2. **Iniciar o Deploy**:
   - Navegue até a página do seu servidor no Smithery
   - Acesse a aba "Deployments" (apenas proprietários autenticados podem ver esta aba)
   - Clique em "Deploy"

3. **Configuração Automática**:
   - O Smithery tentará gerar automaticamente um pull-request com os arquivos Dockerfile e smithery.yaml
   - Se a configuração automática falhar, você precisará adicionar manualmente esses arquivos ao seu repositório

4. **Monitoramento do Deploy**:
   - Acompanhe o progresso do deploy na interface do Smithery
   - Verifique os logs para identificar possíveis erros

## Considerações Importantes

- O Smithery hospeda servidores em um ambiente serverless
- Conexões a servidores com estado expirarão após 2 minutos de inatividade
- Projete seu servidor considerando armazenamento efêmero
- Dados persistentes devem ser armazenados em um banco de dados externo (como MongoDB Atlas)

## Verificação Pós-Deploy

Após o deploy, verifique se:

1. A API está acessível através da URL fornecida pelo Smithery
2. Todas as operações CRUD estão funcionando corretamente
3. A conexão com o MongoDB está estabelecida

## Solução de Problemas

Se encontrar problemas durante o deploy:

1. Verifique os logs de build e execução no Smithery
2. Confirme se os arquivos Dockerfile e smithery.yaml estão corretos
3. Verifique se as variáveis de ambiente necessárias estão configuradas
4. Consulte a documentação do Smithery para orientações específicas
