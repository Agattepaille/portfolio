# Utilise Node 18 LTS
FROM node:18-alpine

# Crée un dossier de travail dans le conteneur
WORKDIR /app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du projet
COPY . .

# Commande par défaut (build Astro)
CMD ["npm", "run", "build"]
