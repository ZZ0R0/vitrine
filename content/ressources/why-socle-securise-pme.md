---
title: "Pourquoi un socle SI sécurisé est vital pour une PME"
tags:
  - ressource
  - pme
  - socle
  - securite
---

# Pourquoi un socle SI sécurisé est vital pour une PME

> **En bref** : une PME sans socle technique solide (réseau segmenté, sauvegardes testées, supervision) est un château de cartes. Un incident mineur peut arrêter l'activité pendant des jours. La bonne nouvelle : les fondations se posent en quelques jours, pas en quelques mois.

---

## Le problème

La plupart des PME ont un SI qui "fonctionne". Les serveurs tournent, les emails arrivent, les fichiers sont accessibles. Mais sous la surface :

- **Le réseau est à plat** : tous les postes et serveurs sont sur le même réseau. Un poste infecté peut atteindre directement les serveurs critiques.
- **Les sauvegardes existent "en théorie"** : elles sont configurées, mais personne ne les a jamais testées. Le jour où on en a besoin, elles peuvent être corrompues ou incomplètes.
- **Aucune supervision** : quand un disque se remplit ou qu'un service tombe, personne ne le sait avant qu'un utilisateur appelle.
- **Les comptes admin sont partagés** : tout le monde utilise le même mot de passe, et il n'a pas changé depuis 3 ans.

---

## Pourquoi c'est important

Les chiffres parlent d'eux-mêmes :
- **60 % des PME victimes d'un incident cyber majeur cessent leur activité dans les 18 mois** (source : estimations ANSSI / assureurs cyber).
- **Le coût moyen d'un arrêt d'activité** dépasse rapidement 10 000 € par jour pour une PME de 20-50 personnes (perte de productivité + clients + remédiation).
- **Les ransomwares ciblent en priorité les PME** : elles sont moins protégées, plus susceptibles de payer.

Un socle SI sécurisé ne rend pas invulnérable. Il rend **résilient** : capable de détecter un problème tôt et de reprendre vite.

---

## La solution en pratique

Un "socle SI sécurisé" pour une PME, c'est :

1. **Segmenter le réseau** : séparer les postes des serveurs, l'administration des services, les sauvegardes du reste. Si un poste est compromis, le serveur de fichiers n'est pas accessible directement.

2. **Durcir les accès** : comptes nominatifs (pas de "admin/admin"), mots de passe robustes, MFA sur les accès critiques (VPN, console d'administration).

3. **Sauvegarder ET tester** : la règle 3-2-1 (voir article dédié) + au moins un test de restauration par trimestre. La sauvegarde n'est valide que si elle a été restaurée avec succès.

4. **Superviser le minimum vital** : une alerte quand un disque est plein, quand un service tombe, quand un backup échoue. Pas besoin d'un SOC — juste des alertes ciblées.

5. **Documenter** : schéma réseau à jour, procédures de base, liste des comptes et des accès. Si vous êtes le seul à savoir comment redémarrer le serveur, c'est un risque en soi.

---

## Mini-checklist

- [ ] Mon réseau est segmenté (au moins : postes / serveurs / admin / backup).
- [ ] Chaque administrateur a son propre compte (pas de compte partagé).
- [ ] Le MFA est activé sur les accès d'administration (VPN, console).
- [ ] Mes sauvegardes suivent la règle 3-2-1.
- [ ] J'ai testé une restauration au cours des 3 derniers mois.
- [ ] J'ai une supervision qui m'alerte si un service critique tombe.
- [ ] Mon schéma réseau est à jour et accessible.

---

## Pour aller plus loin

- **Offre associée** : [Bundle A — Socle SI sécurisé](/offres/socle-si-securise) — Remise à niveau complète en 5 à 15 jours.
- **Preuve associée** : [Preuve A1 — Socle SI (lab)](/preuves/preuve-a1-socle-si-lab) — Démonstration complète sur environnement lab.
- **Méthode** : [Process en 6 étapes](/methodes/process-6-etapes) — Comment se déroule une mission.

---

## Références

- [ANSSI — Guide d'hygiène informatique](https://www.ssi.gouv.fr/guide/guide-dhygiene-informatique/)
- [ANSSI — Les mesures de sécurité prioritaires](https://www.ssi.gouv.fr/actualite/les-mesures-de-securite-prioritaires/)
