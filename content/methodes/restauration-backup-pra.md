---
title: "Restauration, backup & PRA/PCA"
tags:
  - methode
  - backup
  - pra
  - pca
  - restauration
---

# Restauration, backup & PRA/PCA

**Méthode complète : de la définition RPO/RTO aux exercices de restauration documentés.**

---

## Principes fondamentaux

### RPO — Recovery Point Objective
Quantité maximale de données qu'on accepte de perdre (exprimée en temps).
- RPO = 24 h → on accepte de perdre au maximum 1 journée de données.
- RPO = 1 h → sauvegardes au minimum toutes les heures.

### RTO — Recovery Time Objective
Durée maximale acceptable pour restaurer un service après un incident.
- RTO = 4 h → le service doit être opérationnel en moins de 4 heures.
- RTO = 30 min → procédures de failover / restore rapides obligatoires.

### PRA — Plan de Reprise d'Activité
Ensemble des procédures permettant de reprendre l'activité après un sinistre majeur.

### PCA — Plan de Continuité d'Activité
Ensemble des mesures permettant de maintenir l'activité pendant un incident (résilience).

---

## Stratégie 3-2-1

La règle de sauvegarde éprouvée :

| Règle | Description |
|-------|-------------|
| **3** copies | Les données existent en 3 exemplaires minimum (production + 2 sauvegardes). |
| **2** supports | Les sauvegardes sont sur au moins 2 supports différents (disque + NAS, disque + bande, disque + cloud). |
| **1** copie hors site | Au moins 1 copie est stockée hors du site principal (datacenter distant, cloud chiffré, coffre physique). |

---

## Matrice RPO/RTO type (PME)

| Service | RPO | RTO | Stratégie |
|---------|-----|-----|-----------|
| AD / DNS / DHCP | 4 h | 1 h | Backup VM + snapshot quotidien |
| Serveur de fichiers | 1 h | 2 h | Backup incrémental + snapshot |
| Application métier | 4 h | 4 h | Backup VM + export base de données |
| Messagerie | 4 h | 2 h | Backup VM ou cloud natif |
| Supervision / logs | 24 h | 8 h | Backup config + données reconstruibles |

*Ces valeurs sont des exemples. Chaque client définit ses RPO/RTO selon ses contraintes métier.*

---

## Tests de restauration

### Pourquoi tester ?

> Une sauvegarde qui n'a jamais été testée n'est pas une sauvegarde.

### Fréquence recommandée

| Type de test | Fréquence |
|--------------|-----------|
| Test unitaire (1 fichier / 1 VM) | Mensuel |
| Test de service complet (VM + données + applicatif) | Trimestriel |
| Exercice PRA complet (reprise intégrale sur environnement isolé) | Annuel |

### Journal de test

Chaque test de restauration produit un journal contenant :

```markdown
## Journal de test de restauration

| Champ | Valeur |
|-------|--------|
| Date | YYYY-MM-DD |
| Service restauré | [nom du service] |
| Type de sauvegarde | Snapshot / Incrémental / Complet |
| Support source | PBS / NAS / Cloud |
| Durée de restauration | XX min |
| Résultat | ✅ Succès / ❌ Échec |
| Écarts constatés | [description] |
| Actions correctives | [description] |
| Responsable du test | [initiales] |
```

---

## Scénarios types

### Scénario 1 — Panne stockage
- **Impact** : perte de VMs sur le stockage défaillant.
- **Réponse** : restauration depuis PBS / NAS sur stockage sain.
- **KPI** : RTO mesuré par test.

### Scénario 2 — Erreur d'administration
- **Impact** : suppression accidentelle d'une VM ou d'une GPO.
- **Réponse** : restauration depuis snapshot ou backup récent.
- **KPI** : RPO (âge du dernier snapshot).

### Scénario 3 — Ransomware (niveau conceptuel)
- **Impact** : chiffrement des données accessibles.
- **Réponse** : isolation du réseau, restauration depuis backup hors ligne / hors site.
- **Pré-requis** : backup non accessible depuis le réseau compromis (air gap logique ou physique).
- **KPI** : RTO + vérification intégrité des backups.

*Note : ce scénario est traité au niveau conceptuel. Aucun détail d'exploitation ou de technique offensive n'est publié.*

---

## Références

- [Preuve A2 — PRA/PCA minimal](/preuves/preuve-a2-pra-pca-minimal)
- [Process en 6 étapes](/methodes/process-6-etapes)
- [ANSSI — Guide d'hygiène informatique](https://www.ssi.gouv.fr/guide/guide-dhygiene-informatique/) (mesures relatives aux sauvegardes)
- [Article vulgarisé — La règle 3-2-1](/ressources/backup-3-2-1-pourquoi-ca-sauve)
- [Article vulgarisé — RPO/RTO expliqué](/ressources/rpo-rto-explique-sans-jargon)
