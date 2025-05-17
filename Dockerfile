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
