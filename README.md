# Shop – Frontend + JSON Server

Application de boutique simple construite en HTML/CSS/JS (modules ES) avec une API mock propulsée par `json-server`. Le but est de pratiquer un flux complet: inscription/connexion, gestion des produits (CRUD), mise en vente publique et vitrine.

> Avertissement — Projet d’apprentissage: ce dépôt est un exercice personnel pour tester des acquis front-end. Il n’est pas destiné à la production (auth non sécurisée, données mock, mots de passe en clair, etc.).

## Fonctionnalités
- Inscription et connexion (stockage de session via `localStorage`)
- Ajout, mise à jour, suppression de produits
- Mise en vente: statut privé → public
- Vitrine publique des produits en statut public
- Tableau de bord utilisateur (liste personnelle des produits)
- UI: Tailwind CSS + DaisyUI (via CDN)

## Stack & Outils
- Frontend: HTML statique, Modules JS (ESM), Axios (CDN)
- Styles: Tailwind CSS (CDN), DaisyUI (CDN)
- Backend (mock): `json-server` sur `http://localhost:3001`

## Objectifs d’apprentissage
- Pratiquer les modules ES (import/export) et l’organisation de code
- Consommer une API REST mock avec Axios (GET/POST/PATCH/DELETE)
- Implémenter un CRUD basique avec gestion d’état léger (localStorage)
- Utiliser Tailwind CSS + DaisyUI pour un design responsive rapide
- Manipuler le DOM, les événements, et des modals côté client
- Comprendre un flux « brouillon → public » via un champ de statut

## Arborescence (extrait)
```
.
├── index.html                     # Page d’accueil
├── frontend/
│   ├── articles.html              # Vitrine publique
│   ├── add-articles.html          # Ajout/édition des produits
│   ├── dashbord.html              # Tableau de bord (nom actuel)
│   ├── login.html                 # Connexion
│   ├── sigin.html                 # Inscription (nom actuel)
│   ├── css/style.css              # Styles additionnels
│   ├── js/
│   │   ├── main.js                # Point d’entrée modules
│   │   └── modules/               # Modules (NavBar, Login, SignUp, ...)
│   └── img/                       # Images
└── backend/
    └── db/database.json           # Données JSON pour json-server
```

## Prérequis
- Node.js (pour utiliser `npx json-server`)
- Un serveur statique (ex: `python3 -m http.server` ou une extension Live Server)
- Navigateur moderne

## Installation & Lancement
1) Cloner le repo
```
git clone <url-du-repo>
cd <dossier-du-repo>
```

2) Lancer l’API mock (json-server)
```
npx json-server --watch backend/db/database.json --port 3001
```
L’API répondra sur `http://localhost:3001`.

3) Servir le frontend (au choix)
- Avec Python:
```
python3 -m http.server 5500
```
Puis ouvrir `http://localhost:5500/index.html`.

> Astuce: n’importe quel serveur statique fait l’affaire (Vite preview, Live Server VSCode, http-server, etc.). Éviter d’ouvrir les fichiers en `file://`.

## Pages & Navigation
- `index.html`: landing
- `frontend/articles.html`: vitrine publique des produits (statut public)
- `frontend/login.html`: connexion
- `frontend/sigin.html`: inscription (orthographe actuelle)
- `frontend/dashbord.html`: tableau de bord utilisateur (orthographe actuelle)

> Recommandé: renommer `sigin.html` → `signup.html` et `dashbord.html` → `dashboard.html` et mettre à jour les liens.

## Flux d’utilisation
1. S’inscrire via la page d’inscription (création d’un utilisateur dans `db`)
2. Se connecter (le profil est stocké dans `localStorage`)
3. Créer des produits (initialement privés)
4. Mettre un produit en vente (passe en statut public)
5. Le produit apparaît dans la vitrine (`articles.html`)

## API (json-server)
- Utilisateurs
  - `GET /users` – liste des utilisateurs
  - `POST /users` – créer un utilisateur `{ email, nameUser, password }`
- Produits
  - `GET /products` – liste des produits
  - `POST /products` – créer un produit (ex: `{ idUser, title, imgurl, description, details, quantity, price, statut }`)
  - `GET /products/:id` – récupérer un produit
  - `PATCH /products/:id` – mettre à jour un produit partiellement
  - `DELETE /products/:id` – supprimer un produit

Les données sont stockées dans `backend/db/database.json`.

## Développement
- Le code frontend importe les modules via `type="module"` dans les pages HTML.
- Axios est chargé via CDN sur chaque page qui consomme l’API.
- Les URL d’API sont codées en dur (`http://localhost:3001`); pour un projet plus grand, centraliser cette constante est recommandé.

## Ce que j’ai appris
- Structurer un projet front en modules ES (`import`/`export`) et point d’entrée unique
- Intégrer Axios via CDN et gérer le cycle des requêtes (succès/erreur)
- Mettre en place `json-server` et raisonner en endpoints REST pour un CRUD
- Gérer un état de session simple avec `localStorage` (sans vraie auth)
- Manipuler le DOM: écouteurs, rendu conditionnel, mise à jour dynamique du HTML
- Créer une UI responsive rapidement avec Tailwind + DaisyUI (composants utilitaires)
- Petites bonnes pratiques: early returns si éléments absents, factoriser les sélecteurs, vider les conteneurs avant rerendu
- Déboguer avec la console navigateur, comprendre les erreurs 404/CORS et chemins relatifs/absolus

## Crédits
- [melvin-phyllis](https://github.com/melvin-phyllis)
- [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)

---

Ce projet a un but pédagogique: tester et améliorer des compétences front-end avec une API mock.
