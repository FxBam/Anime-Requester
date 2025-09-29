# Anime-Requester

Réalisation d'une page Web proposant à l’utilisateur de requêter une base de données d’anime via un formulaire.  
Le projet sera décliné en deux versions :

- **Version 1 (V1)** : Requêtes de base  
- **Version 2 (V2)** : Fonctionnalités avancées et hébergement sur GitHub Pages

---

## Version de base (V1)

L’utilisateur pourra, grâce à un formulaire :

- Saisir un **nom d’anime**
- Saisir un **identifiant**
- Saisir un **classement**

La requête retournera, sous forme de **cartes**, un maximum de **10 résultats** (ou **1 seul** pour une recherche par identifiant ou classement).

Chaque carte affichera les informations suivantes :

- Le **titre** de l’anime  
- Une **image** (si disponible)  
- Le **synopsis**  
- Les **catégories/genres** (s’il y en a)  
- Le **classement** de l’anime  
- Le **nombre d’épisodes**

### Contraintes techniques

- La page devra être **responsive** et conforme aux validateurs **HTML** et **CSS** du W3C.
- Le code **JavaScript** devra être découpé de manière cohérente (ex. : récupération des données, création et affichage des cartes, etc.).
- Utilisation **idéale** de **modules JavaScript**.
- Respect des normes d’**accessibilité WCAG AA 2.0**.
- Le projet devra être hébergé sur **GitHub** dans un **repository public**, avec :
  - Des **commits réguliers**
  - Une **présentation détaillée** via le fichier `README.md`

---

## Version améliorée (V2)

Fonctionnalités supplémentaires :

- **Recherche par genre** via :
  - Liste de **cases à cocher**
  - **Étiquettes sélectionnables**
  - Ou, au minimum, une **liste des genres** à saisir

- **Consultation depuis GitHub Pages** :
  - L’utilisateur devra saisir sa **clé API** via l’interface
  - La clé sera stockée dans le **`sessionStorage`**

- **Mode clair/sombre** :
  - L’utilisateur pourra choisir un thème
  - La préférence sera stockée dans le **`sessionStorage`**
