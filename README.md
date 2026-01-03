# 🚀 wzt_project

> Learning react and nestjs

---

## 🏗️ Architecture Technique

Ce projet utilise une approche **Micro-frontend** pour permettre une scalabilité horizontale et une indépendance des déploiements.

- **Module Federation** : Gestion du partage de code et des dépendances entre applications.
- **RSBuild** : Build tool ultra-rapide basé sur Rust pour optimiser les performances de développement.

---

## 🛠️ Stack Technique

### Front-end
- **Langage :** TypeScript 
- **Framework :** React.js
- **Styling :** Tailwind CSS
- **Bundler :** RSBuild (Rspack stack)

### Back-end
- **Framework :** NestJS (Node.js)
- **Architecture :** Modulaire / Micro-services
- **Base de données :** PostgreSQL

---

## 🚀 Installation & Lancement

### Prérequis
- Node.js (v18+)
- PostgreSQL installé et configuré

### 1. Backend
```bash
cd backend-project
npm install
npm run start:dev
```

### 2. Frontend (Host & Remotes)
```bash
cd frontend-project
npm install
npm run dev
```

### 3. Base de données
run:
```bash
sudo service postgresql start
```

check status:
```bash
sudo service postgresql status
```

stop:
```bash
sudo service postgresql stop
```

### 4. Run with script sh and tmux
- First install tmux

Debian or Ubuntu:
```bash
apt install tmux
```

- Then, run:
```bash
bash starting.sh
```

- See all windows:
```bash
Ctl b
w
```
Navigate in different windows with ⬆️ and ⬇️

- List all sessions running:
```bash
tmux list-sessions
```

- Kill session:
```bash
tmux kill-ses -t [mysession]
```