---
title: Pieds Croisés
description: >-
  Application web de gestion pour une salle de CrossFit, développée en équipe pour le titre pro CDA. Elle permet de gérer le planning des cours, les réservations et les listes d’attente, avec une architecture évolutive.
image: "@assets/projects/pieds_croises/landing-page.png"
startDate: 2025-02-01
endDate: 2025-11-14
skills:
  - Springboot
  - Angular
  - TypeScript
  - Tailwind CSS
  - Docker
  - IntelliJ IDEA
sourceLink: https://github.com/MatthieuTricoire/ws-pieds-croises-front
---

## Qu'est-ce que Pieds Croisés ?

Ce projet consiste en le développement d’une application web de gestion dédiée à une salle de CrossFit, conçue pour répondre aux besoins à la fois des gérants et des adhérents.L’application intègre des fonctionnalités de liste d’attente et de gestion des réservations. Développée en équipe dans le cadre du Titre Professionnel de Concepteur Développeur d’Applications, elle repose sur une architecture en couches pensée pour être maintenable, évolutive et adaptée aux besoins métiers spécifiques d’une salle de sport, avec des perspectives d’évolution comme le suivi des performances et un espace communautaire.

## Fonctionnalités

### Gestion des adhérents (Profil Utilisateur)

- **Réservation de cours** : Inscription aux séances disponibles directement depuis le planning
- **Liste d’attente** : Inscription automatique lorsque le cours est complet
- **Annulation de réservation** : Gestion des désinscriptions selon les règles définies
- **Consultation du planning** : Visualisation des séances et des disponibilités en temps réel
- **Gestion du profil** : Modification des informations personnelles, du mot de passe et de la photo

### Administration de la salle (Profil Administrateur)

- **Accès complet à l’application** : Gestion globale de l’ensemble des fonctionnalités
- **Gestion du planning** : Création, modification et suppression des cours
- **Gestion des utilisateurs** : Ajout, modification et suppression des adhérents
- **Statistiques de participation** : Suivi de la fréquentation et de l’activité des cours

## Architecture

### Stack Frontend

Développée avec des technologies modernes pour une interface fluide et intuitive :

- **Angular** : Framework frontend pour la création d’interfaces dynamiques et modulaires
- **TypeScript** : Typage fort pour un code plus robuste et maintenable
- **HTML / CSS** : Structure et styles personnalisés pour une interface claire et responsive
- **Services & Components** : Architecture orientée composants pour une meilleure séparation des responsabilités

### Stack Backend

Basée sur **Java et Spring Boot**, l’API assure :

- Architecture en couches (Controller, Service, Repository)
- API REST pour la gestion des cours, utilisateurs et réservations
- Gestion des règles métier (réservations, listes d’attente, annulations)
- Sécurisation des accès selon les rôles utilisateur
- Persistance des données via une base relationnelle

### Base de données

- **MySQL** : Stockage des utilisateurs, cours, réservations et listes d’attente
- Modélisation relationnelle adaptée aux besoins métiers
- Gestion des contraintes d’intégrité et des relations entre entités

### Expérience Utilisateur

- **Interface responsive** : Utilisable sur desktop, tablette et mobile
- **Navigation intuitive** : Accès rapide au planning et aux fonctionnalités clés
- **Gestion des rôles** : Interfaces adaptées aux profils utilisateur et administrateur
- **Feedback utilisateur** : Messages de confirmation et de validation des actions

## Authentification & Gestion des utilisateurs

- Système complet d’authentification (inscription, connexion, déconnexion)
- Gestion des rôles (adhérent / administrateur)
- Sécurisation des routes et des fonctionnalités sensibles
- Modification du profil utilisateur (informations personnelles, mot de passe, photo)

## Déploiement

### Hébergement

- **VPS Debian 13 (Hostinger)** : Hébergement de l’application sur un serveur privé virtuel offrant un environnement isolé et entièrement administrable (accès root)
- **Sécurisation des accès** : Connexion via SSH avec création d’un utilisateur dédié et limitation des privilèges

### Dockerisation & Orchestration

- **Conteneurisation complète** : Chaque composant de l’application (frontend, backend, base de données) est encapsulé dans des conteneurs Docker via des Dockerfiles dédiés
- **Orchestration avec Dokploy** : Gestion des environnements de test, préproduction et production
- **Portabilité & cohérence** : Environnements homogènes du développement à la production

### Intégration & Déploiement Continus (CI/CD)

- **GitHub Actions** : Pipelines automatisés pour la compilation, les tests et la validation du code
- **Frontend (Angular)** :
  - Déclenchement à chaque _push_ ou _pull request_
  - Installation de Node.js 18 et des dépendances via `npm ci`
  - Exécution des tests unitaires Angular en mode _Chrome Headless_
- **Backend (Spring Boot)** :
  - Tests unitaires exécutés dans un conteneur MySQL avec le profil `test`
  - Environnement Java 21 (Temurin)
  - Build Maven (`./mvnw clean package -DskipTests`) pour générer l’artifact exécutable

### Qualité

- **ESLint & Prettier** : Vérification automatique du style et des conventions de code
- **Husky** : Hooks Git pour formater et contrôler le code avant chaque commit
- **Convention de branches** : Validation du nommage des branches (`feature/`, `fix/`) pour garantir la traçabilité

### Déploiement automatisé

- **Déclenchement automatique** : En cas de succès des pipelines, Dokploy est notifié
- **Déploiement par environnement** : Mise en production automatisée selon la branche ciblée (test, préprod, production)
- **Suivi des déploiements** : Monitoring des statuts via GitHub Actions et Dokploy
