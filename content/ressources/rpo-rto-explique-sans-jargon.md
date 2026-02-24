---
title: "RPO/RTO expliqué sans jargon"
tags:
  - ressource
  - pra
  - rpo
  - rto
  - pme
---

# RPO/RTO expliqué sans jargon

> **En bref** : RPO = combien de données vous acceptez de perdre. RTO = combien de temps vous acceptez d'être à l'arrêt. Ces deux chiffres pilotent toute votre stratégie de sauvegarde et de reprise.

---

## Le problème

Quand on parle de sauvegardes et de plan de reprise, deux questions reviennent toujours :
- "On peut perdre combien de données ?"
- "On sera arrêté combien de temps ?"

Sans réponse claire, impossible de dimensionner les sauvegardes, de choisir les outils, ou de savoir si le plan tient la route.

---

## Pourquoi c'est important

- Un RPO de 24 h signifie que si le sinistre arrive à 17 h, vous perdez tout ce qui a été fait depuis la sauvegarde de la nuit précédente. Pour un service de facturation, ça peut représenter des milliers d'euros.
- Un RTO de 4 h signifie que vos clients, vos employés et vos partenaires n'ont plus accès au service pendant 4 heures. Au-delà, les conséquences commerciales et opérationnelles s'accumulent.

---

## La solution en pratique

### RPO — Recovery Point Objective

**"Combien de données puis-je me permettre de perdre ?"**

| RPO | Signification | Sauvegarde nécessaire |
|-----|--------------|----------------------|
| 24 h | Je perds au maximum 1 journée | Sauvegarde quotidienne (la nuit) |
| 4 h | Je perds au maximum 4 heures | Sauvegarde toutes les 4 heures |
| 1 h | Je perds au maximum 1 heure | Sauvegarde horaire ou réplication |
| 0 | Je ne perds rien | Réplication synchrone (coûteux) |

**Analogie** : le RPO, c'est la fréquence à laquelle vous faites "Ctrl+S". Plus vous sauvegardez souvent, moins vous perdez en cas de crash.

### RTO — Recovery Time Objective

**"Combien de temps puis-je rester à l'arrêt ?"**

| RTO | Signification | Mécanisme nécessaire |
|-----|--------------|---------------------|
| 8 h | Reprise dans la journée | Restauration classique (backup) |
| 1 h | Reprise en 1 heure | Snapshots + procédure rodée |
| 15 min | Reprise quasi immédiate | Haute disponibilité / failover |
| 0 | Aucune interruption | Redondance active-active (coûteux) |

**Analogie** : le RTO, c'est le temps que met le plombier à arriver quand il y a une fuite. Vous pouvez payer un plombier "de garde" (rapide mais cher) ou appeler le lendemain (lent mais économique).

### Comment les définir ?

Pour chaque service critique, posez deux questions :
1. **Si je perds les données des X dernières heures, quel est l'impact métier ?** → C'est votre RPO.
2. **Si le service est indisponible pendant X heures, quel est l'impact métier ?** → C'est votre RTO.

---

## Mini-checklist

- [ ] J'ai listé mes services critiques (email, fichiers, application métier, etc.).
- [ ] Pour chaque service, j'ai défini un RPO réaliste.
- [ ] Pour chaque service, j'ai défini un RTO réaliste.
- [ ] Ma stratégie de sauvegarde est dimensionnée en fonction du RPO (fréquence suffisante).
- [ ] J'ai testé une restauration pour mesurer le RTO réel (pas théorique).
- [ ] Mon RPO et mon RTO sont documentés et connus des décideurs.

---

## Pour aller plus loin

- **Offre associée** : [[offres/socle-si-securise|Bundle A — Socle SI sécurisé]] — Définition RPO/RTO incluse dans le cadrage.
- **Preuve associée** : [[preuves/preuve-a2-pra-pca-minimal|Preuve A2 — PRA/PCA minimal]] — RPO/RTO définis et testés sur lab.
- **Méthode** : [[methodes/restauration-backup-pra|Restauration, backup & PRA/PCA]] — Stratégie complète, scénarios, journaux de test.

---

## Références

- [ANSSI — Guide d'hygiène informatique](https://www.ssi.gouv.fr/guide/guide-dhygiene-informatique/)
- [[ressources/backup-3-2-1-pourquoi-ca-sauve|Article complémentaire — La règle 3-2-1]]
