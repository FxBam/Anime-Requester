# Anime-Requester
réalisation une page Web proposant à l’utilisateur de requêter une base de données d’anime 
via un formulaire. Le projet sera décliné en deux versions, la première (V1) permettant des requêtes de base 
et la seconde (V2) incluant des fonctionnalités de recherche plus avancées ainsi que la possibilité de la 
consulter depuis GitHub Pages. 
Version de base (V1) :  
L’utilisateur pourra, grâce à un formulaire, saisir un nom d’anime ou son identifiant ou bien encore un 
classement. La requête retournera, sous forme de cartes, 10 résultats maximum (un seul pour une 
recherche par identifiant ou classement). 
Chaque carte contiendra : 
    • Le titre de l’anime 
    • Une image si cette dernière est disponible 
    • Le synopsis 
    • Les catégories/genres s’il y en a 
    • Le classement de l’anime 
    • Le nombre d’épisodes

Contraintes :
    -La page sera responsive et conforme aux validateurs HTML et CSS du W3C. 
    -Un découpage cohérent du code JavaScript (séparation des responsabilités, par exemple récupération 
    des données depuis l’API, création et affichage des cartes, etc.) sera réalisé et les modules seront 
    idéalement utilisés.
    -Elle devra idéalement satisfaire aux exigences d’accessibilité de la norme WCAG AA 2.0 
    Le projet sera hébergé sur GitHub dans un repository public et comprendra des commits réguliers ainsi 
    qu’une présentation détaillée (README.md).

version ameillorée (V2) :
La page permettra une recherche par genre (liste sous forme de cases à cocher ou d’étiquettes 
sélectionnables ou à minima liste des genres pour permettre leur saisie) : 
    • La page devra être consultable depuis GitHub pages (L’utilisateur devra saisir sa clé API depuis 
    l’interface et cette dernière sera stockée en sessionStorage). 
    • La page proposera un mode clair/sombre dont la valeur sera également stockée en 
    sessionStorage.