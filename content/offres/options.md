---
title: "Options à la carte"
tags:
  - offre
  - options
---

# Options à la carte

Ces options complètent les [[content/offres|bundles principaux]] et peuvent être souscrites séparément (TJM ou forfait selon le périmètre).

---

## Vuln management & patch cadence

**Objectif** : identifier les vulnérabilités, prioriser les correctifs, maintenir un rythme de patching maîtrisé.

**Inclus** :
- Scan de vulnérabilités régulier (outils open source, pas de pentest intrusif).
- Matrice de priorisation (criticité × exposition × exploitabilité).
- SLA internes : délais de correction par niveau de criticité.
- Backlog de patching suivi et documenté.
- Preuve de patch appliqué (journal).

**Références** : [[content/preuves/preuve-t2-vuln-management-patch-cadence|Preuve T2 — Vuln management & patch cadence]]

---

## Observabilité / SIEM-lite

**Objectif** : collecter les logs pertinents, créer des dashboards utiles, alerter sur les anomalies.

**Inclus** :
- Pipeline de collecte (syslog, journald, événements Windows).
- Dashboards (Grafana ou équivalent) : santé système, authentifications, erreurs.
- Règles d'alerte (seuils, anomalies, échecs d'authentification répétés).
- Runbook d'investigation : que faire quand une alerte se déclenche.
- Principe de minimisation (CNIL) : on ne collecte que ce qui est utile et justifié.

**Références** : [[content/preuves/preuve-t1-observabilite-siem-lite|Preuve T1 — Observabilité & SIEM-lite]]

---

## PRA/PCA + tests réguliers

**Objectif** : garantir la reprise d'activité en cas de sinistre, avec des tests documentés.

**Inclus** :
- Définition RPO/RTO par service critique.
- Stratégie de sauvegarde 3-2-1 (documentée et implémentée).
- Exercice de restauration planifié (au moins 1 par trimestre).
- Journal de test : durée, résultat, écarts, actions correctives.
- Documentation PRA/PCA (procédures de reprise pas-à-pas).

**Références** : [[content/methodes/restauration-backup-pra|Méthode PRA/PCA]] · [[content/preuves/preuve-a2-pra-pca-minimal|Preuve A2 — PRA/PCA minimal]]

---

## Formation interne

**Objectif** : rendre vos équipes autonomes sur les sujets traités.

**Formats possibles** :
- **Atelier pratique** (½ journée) : prise en main d'un outil, procédure d'exploitation.
- **Formation structurée** (1 à 2 jours) : administration AD sécurisée, exploitation Proxmox/Docker, bonnes pratiques sécurité.
- **Transfert de compétences** (inclus dans chaque bundle) : documentation + session de restitution.

**Thèmes fréquents** :
- Administration AD sécurisée (comptes, GPO, LAPS).
- Exploitation Proxmox (snapshots, backups, supervision).
- Docker en production (Compose, mises à jour, secrets).
- Bonnes pratiques sécurité (mots de passe, MFA, phishing).
- Journalisation et réponse aux alertes.

---

## Revue d'architecture / revue de configuration

**Objectif** : obtenir un regard extérieur sur une architecture ou une configuration existante.

**Inclus** :
- Analyse documentaire (schémas, configs décrites — pas de configs copiées-collées publiées).
- Identification des écarts par rapport aux bonnes pratiques (ANSSI, CIS Benchmarks).
- Rapport de recommandations priorisé.
- Session de restitution.

**Important** : les configurations analysées restent confidentielles. Seules les recommandations génériques sont documentées.

---

## Astreinte (si applicable)

**Objectif** : garantir une réactivité en cas d'incident critique, dans un cadre strict.

**Cadrage** :
- Périmètre défini : uniquement les services couverts par un bundle ou une option.
- Plages horaires définies contractuellement.
- Procédure d'escalade documentée.
- SLA de réponse (pas de résolution garantie — engagement de prise en charge).
- Facturation : forfait mensuel + interventions au réel.

**Limites** :
- Pas d'astreinte 24/7 en solo — plages réalistes uniquement.
- Pas de remplacement d'un NOC ou SOC.

---

## Tarification

Chaque option est chiffrée après cadrage du périmètre.
Formats possibles : **TJM** (taux journalier moyen) ou **forfait** selon la prestation.

> **[[content/à-propos/contact|Prendre contact pour un devis →]]**
