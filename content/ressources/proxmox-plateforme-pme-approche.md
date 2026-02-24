---
title: "Proxmox : l'approche plateforme pour PME"
tags:
  - ressource
  - proxmox
  - virtualisation
  - pme
---

# Proxmox : l'approche plateforme pour PME

> **En bref** : Proxmox VE permet aux PME d'héberger leurs services sur une plateforme de virtualisation professionnelle, open source, sans coût de licence. Mais la technologie seule ne suffit pas : c'est l'exploitation (réseau, backups, supervision, documentation) qui fait la différence.

---

## Le problème

Beaucoup de PME font un choix technologique (VMware, Hyper-V, Proxmox) sans penser à l'exploitation :

- **Tout sur le même réseau** : administration, production et sauvegardes partagent le même bridge.
- **Pas de snapshots planifiés** : quand on fait une mise à jour, on croise les doigts.
- **Sauvegardes "manuelles"** : quand quelqu'un y pense, sur le même stockage que la production.
- **Aucune supervision** : une VM tombe, personne ne le sait avant le lendemain.
- **Zéro documentation** : seul l'administrateur qui a installé la plateforme sait comment elle fonctionne.

---

## Pourquoi c'est important

- **Disponibilité** : vos applications métier tournent sur cette plateforme. Si elle tombe, tout s'arrête.
- **Sécurité** : sans segmentation, un compromis d'une VM peut atteindre la console d'administration.
- **Reprise** : sans backup testé, une erreur d'administration ou une panne disque peut être catastrophique.
- **Réversibilité** : si personne ne comprend l'architecture, tout changement devient risqué.

---

## La solution en pratique

L'approche "plateforme" consiste à traiter Proxmox comme une infrastructure critique, avec les mêmes standards qu'en entreprise :

1. **Segmenter les réseaux** : un réseau pour l'administration (console Proxmox), un pour la production (VMs), un pour les sauvegardes (PBS). Ils ne se mélangent pas.

2. **Planifier les snapshots** : avant chaque modification, un snapshot. En continu, des snapshots quotidiens avec rétention automatique.

3. **Sauvegarder avec PBS** : Proxmox Backup Server, sur un réseau dédié. Rétention 7 jours / 4 semaines / 3 mois. Et surtout : **tester les restaurations**.

4. **Superviser** : Prometheus + Grafana ou Zabbix pour surveiller CPU, RAM, disque, disponibilité des VMs. Des alertes pour les événements critiques.

5. **Documenter** : schéma d'architecture, inventaire des VMs, runbooks d'exploitation (ajout de VM, mise à jour, rollback). Un nouveau prestataire doit pouvoir reprendre la main en 1 heure.

---

## Mini-checklist

- [ ] Mon réseau Proxmox est segmenté (admin ≠ prod ≠ backup).
- [ ] Les snapshots sont planifiés (au moins quotidiens).
- [ ] PBS est configuré avec une rétention claire.
- [ ] J'ai testé une restauration depuis PBS au cours des 3 derniers mois.
- [ ] La supervision est en place (alertes sur VM arrêtée, disque plein, backup échoué).
- [ ] Mon architecture est documentée (schéma + inventaire).
- [ ] J'ai des runbooks pour les opérations courantes (ajout VM, mise à jour, rollback).

---

## Pour aller plus loin

- **Offre associée** : [[content/offres/plateforme-proxmox-docker|Bundle C — Plateforme Proxmox & Docker]] — Déploiement et industrialisation complets.
- **Preuve associée** : [[content/preuves/preuve-c1-proxmox-plateforme-stable|Preuve C1 — Proxmox plateforme stable]] — Segmentation, snapshots, backups, supervision sur lab.
- **Méthode** : [[content/methodes/restauration-backup-pra|Restauration, backup & PRA/PCA]]

---

## Références

- [Proxmox VE — Documentation officielle](https://pve.proxmox.com/wiki/Main_Page)
- [ANSSI — Guide d'hygiène informatique](https://www.ssi.gouv.fr/guide/guide-dhygiene-informatique/)
