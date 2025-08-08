# Usar imagem oficial Node 18 baseada no Alpine (leve)
FROM node:18-alpine

WORKDIR /app

COPY . /app

# Expõe a porta padrão do NestJS
EXPOSE 3000

# Comando para rodar em modo desenvolvimento com hot reload
CMD ["npm", "run", "start:dev"]