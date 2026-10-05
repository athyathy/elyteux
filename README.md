# Page Weaver

Bonjour. Construction d'un Outils Ultra Smart qui permet de construire des maquettes des sections d'une page web. L'utilisateur décris de manière global en language naturel la page web qu'il veut créer, ensuite il peut décrire chaque section qu'il veut en détails en langage naturel et en sélectionnant des configurations (animations à ajouter, et autres...), puis l'outils construit le visuel des sections décris par l'utilisateur. L'utilisateur peut dessiner sur les maquettes générés, et il peut ajouter des indications, des marqueurs avec des annotations pour que l'outils regénère la section en prenant en compte toutes les annotations et demande de modifications. Lorsque l'utilisateur à finit de construire les sections qu'il veut, il sélection les sections qu'il souhaite avoir dans la page d'accueil, il  organise la disposition, puis il peut demander à l'outils de construire la simulation réel de la page web qui contient réellement chaque section sélectionné par l'utilisateur. L'outils fournit le code HTML de la page web pour que l'utilisateur puisse recréer la page web réellement sur un site web. L'affichage de l'outils est un tableau avec une navigation infini à l'intérieur avec la possibilité de déplacer les éléments partout à l'intérieur du tableau. L'outils est responsive avec une ergonomie qui respect une logique métier, chaque éléments et positionner, organiser et structuré avec une logique métier pour optimisé le workflow de l'utilisateur de manière la plus optimal. L'utilisateur crée un compte pour accéder à l'outils (sans besoin de confirmations du compte par mail, sans besoin de connexion avec Google). Lovable Cloud est connecté, avec la persistance des données de l'utilisateur en temps réel. (utilise les modèles IA les moins chers pour la génération des maquettes visuels, et utilise GPT 5.6 Luna pour la comprehension et analyse des demande de l'utilisateur. Lovable AI est connecté, avec les Edge Function qui permettent de faire fonctionner les fonctionnalités intelligentes de l'app.  Consigne obligatoire à suivre: Reste sur une implémentation simple, sans ajouter de bibliothèques lourdes, pour optimiser les performances et le coût de génération.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://elyteux.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2115cf7b-8327-4a74-b26d-b29af6941aa1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
