<!-- # Portfolio — Mikhaïl Watchueng Tchekam

Site vitrine statique (HTML5 / CSS3 / JS vanilla, sans build step) prêt à ouvrir dans VS Code.

## Lancer le site en local

Aucune installation n'est nécessaire. Deux options :

1. **Le plus simple** : double-clique sur `index.html`, il s'ouvre dans ton navigateur.
2. **Recommandé (évite des soucis avec les chemins d'images)** : utilise l'extension VS Code **Live Server**
   → clic droit sur `index.html` → *Open with Live Server*.

## Structure du projet

```
portfolio/
├── index.html              Structure de la page (une seule page, sections ancrées)
├── css/style.css            Tout le design (thème sombre MedTech/R&D)
├── js/
│   ├── projects-data.js     ⭐ Le contenu de tes projets (le seul fichier à éditer souvent)
│   └── script.js            Comportement : filtres, lightbox, scroll reveal, formulaire
├── assets/
│   ├── img/projects/         Dépose ici tes photos, schémas, captures 3D…
│   └── CV_Mikhail_Watchueng_Tchekam.pdf   (à ajouter — voir ci-dessous)
└── README.md
```

## Ajouter tes visuels (photos de projets, schémas, modèles 3D en capture)

1. Copie tes images dans `assets/img/projects/` (formats `.jpg`, `.png`, `.webp`).
2. Ouvre `js/projects-data.js`.
3. Pour chaque projet, remplace les chemins du champ `images` par le nom réel de ton fichier, par ex. :

```js
images: ["assets/img/projects/oct-retina-1.jpg", "assets/img/projects/oct-retina-2.jpg"],
```

Tant qu'une image n'existe pas encore, la carte affiche automatiquement un placeholder texturé
avec le chemin attendu — rien ne casse visuellement.

Tu peux mettre **plusieurs images par projet** : la première sert de vignette, la lightbox permet
de naviguer avec les flèches ‹ › entre toutes les images du même projet (adapte `openLightbox`
dans `js/script.js` si tu veux une galerie complète par projet plutôt qu'une seule image ouverte —
la structure de données est déjà prête pour ça).

## Ajouter une vidéo ou un lien GitHub (privé ou public)

Dans `js/projects-data.js`, chaque projet a un champ `links` :

```js
links: { github: "https://github.com/ton-compte/ton-repo", video: "https://youtu.be/..." },
```

Ces liens apparaissent comme boutons dans la lightbox. Pour un dépôt **privé**, mets simplement
le lien vers la page du repo (GitHub affichera un message d'accès restreint aux visiteurs non
autorisés — c'est volontaire, cela montre que le travail existe sans l'exposer publiquement).

## Ajouter ton CV en téléchargement

Place ton PDF exporté depuis Overleaf dans `assets/` sous le nom
`CV_Mikhail_Watchueng_Tchekam.pdf` (le bouton "Télécharger le CV" du hero pointe déjà vers ce
chemin).

## Personnaliser les couleurs / la police

Tout le système de design est centralisé en haut de `css/style.css`, dans le bloc `:root { ... }`
(section TOKENS). Change `--accent` pour changer la couleur d'accent (actuellement un cyan
"OCT scan"), ou les polices Google Fonts chargées dans `<head>` de `index.html`.

## Déployer le site (gratuit)

Le site est 100% statique : tu peux le déployer gratuitement en quelques clics avec :

- **GitHub Pages** : pousse ce dossier dans un repo GitHub, active Pages dans les Settings.
- **Netlify** ou **Vercel** : glisse-dépose le dossier `portfolio/` sur leur interface.

## Formulaire de contact

Le formulaire n'a pas de backend : il ouvre le client mail de l'utilisateur avec le message
pré-rempli (`mailto:`). Si tu veux un vrai envoi silencieux (sans ouvrir le client mail), branche
un service comme [Formspree](https://formspree.io) ou [Web3Forms](https://web3forms.com) — il
suffit de remplacer l'action du `<form id="contactForm">` dans `index.html` par leur endpoint et
d'adapter le `submit` handler dans `js/script.js`. -->
