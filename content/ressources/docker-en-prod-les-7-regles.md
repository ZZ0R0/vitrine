---
title: "Docker en production : les 7 règles à respecter"
tags:
  - ressource
  - docker
  - production
  - securite
---

# Docker en production : les 7 règles à respecter

> **En bref** : Docker simplifie le déploiement, mais sans cadre il devient un risque. Ces 7 règles transforment un "ça tourne sur mon poste" en une plateforme de production exploitable et sécurisée.

---

## Le problème

Docker a démocratisé les conteneurs. Mais dans beaucoup de PME et startups, Docker en production ressemble à ça :
- Des `docker run` lancés à la main, sans Compose, sans versionning.
- Des ports exposés directement (`-p 8080:8080`), sans reverse proxy, sans TLS.
- Des mots de passe en dur dans le `docker-compose.yml` ou les Dockerfile.
- Aucune mise à jour planifiée : les images ont 2 ans.
- Pas de monitoring : si un conteneur tombe, personne ne le sait.
- Pas de sauvegarde des volumes : les données applicatives ne sont sauvegardées nulle part.

---

## Les 7 règles

### Règle 1 — Tout en Compose, versionné

Chaque service est décrit dans un fichier `docker-compose.yml`. Ce fichier est versionné (Git). Aucun `docker run` en production.

**Pourquoi** : reproductibilité, traçabilité des changements, rollback possible.

### Règle 2 — Un reverse proxy TLS devant tout

Aucun service n'est exposé directement. Un reverse proxy (Traefik, Caddy, Nginx) gère le TLS, le routage et l'authentification.

**Pourquoi** : chiffrement en transit (TLS), point d'entrée unique, possibilité de couper un service sans toucher aux autres.

### Règle 3 — Les secrets ne sont jamais dans le code

Les mots de passe, tokens et clés API sont dans des fichiers `.env` (permissions 600) ou un gestionnaire de secrets. Jamais dans le Compose, jamais dans le Dockerfile, jamais dans Git.

**Pourquoi** : un dépôt Git fuité = tous vos mots de passe fuités.

### Règle 4 — Les images sont à jour et de source fiable

Seules des images officielles ou vérifiées sont utilisées. Les mises à jour sont planifiées (au moins mensuelles). Les images sont épinglées par version (pas de `latest` en production).

**Pourquoi** : une image obsolète contient des vulnérabilités connues. Une image `latest` peut changer sans prévenir.

### Règle 5 — Les volumes sont sauvegardés

Les données persistantes (bases de données, fichiers utilisateurs) sont dans des volumes Docker. Ces volumes sont sauvegardés (au même titre que les VMs).

**Pourquoi** : un `docker compose down -v` accidentel efface tout. Sans backup, les données sont perdues.

### Règle 6 — Les conteneurs tournent sans privilèges

Aucun conteneur ne tourne en `--privileged`. Les capabilities sont minimales. L'utilisateur root est évité dans les conteneurs quand possible.

**Pourquoi** : un conteneur privilégié peut compromettre l'hôte. Le moindre privilège s'applique aussi aux conteneurs.

### Règle 7 — La supervision est en place

Chaque conteneur est supervisé (état, ressources, logs). Des alertes sont configurées (conteneur arrêté, erreur récurrente, ressources saturées).

**Pourquoi** : sans supervision, un conteneur peut tomber silencieusement pendant des jours.

---

## Mini-checklist

- [ ] Tous mes services sont décrits en `docker-compose.yml` et versionnés.
- [ ] Un reverse proxy TLS est en place (Traefik, Caddy, ou Nginx).
- [ ] Aucun secret n'apparaît dans le code ou les fichiers Compose.
- [ ] Mes images sont de source fiable et à jour (épinglées par version).
- [ ] Les volumes de données sont sauvegardés régulièrement.
- [ ] Aucun conteneur ne tourne en mode `--privileged`.
- [ ] La supervision couvre tous les conteneurs de production.

---

## Pour aller plus loin

- **Offre associée** : [[content/offres/plateforme-proxmox-docker|Bundle C — Plateforme Proxmox & Docker]] — Docker industrialisé, SSO, reverse proxy TLS.
- **Preuve associée** : [[content/preuves/preuve-c2-docker-portainer-ldap-sso|Preuve C2 — Docker industrialisé + SSO]] — Architecture complète déployée sur lab.
- **Méthode** : [[content/methodes/process-6-etapes|Process en 6 étapes]]

---

## Références

- [CIS Docker Benchmark](https://www.cisecurity.org/benchmark/docker)
- [Docker — Security best practices](https://docs.docker.com/develop/security-best-practices/)
- [ANSSI — Guide d'hygiène informatique](https://www.ssi.gouv.fr/guide/guide-dhygiene-informatique/)
