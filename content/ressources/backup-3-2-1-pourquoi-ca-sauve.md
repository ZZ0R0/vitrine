---
title: "La règle 3-2-1 des sauvegardes : pourquoi ça sauve"
tags:
  - ressource
  - sauvegarde
  - 3-2-1
  - pme
---

# La règle 3-2-1 des sauvegardes : pourquoi ça sauve

> **En bref** : 3 copies, 2 supports, 1 hors site. Cette règle simple protège contre la plupart des scénarios de perte de données (panne, erreur, ransomware). Et elle ne coûte presque rien à mettre en place.

---

## Le problème

"On a des sauvegardes." C'est la phrase la plus dangereuse en IT.

Pourquoi ? Parce que dans beaucoup de PME :
- La sauvegarde est sur le même disque que les données → une panne disque détruit les deux.
- La sauvegarde est sur le même réseau → un ransomware chiffre tout, y compris les backups.
- La sauvegarde n'a **jamais été testée** → le jour J, le fichier est corrompu ou incomplet.
- Il n'y a **qu'une seule copie** → un seul point de défaillance.

---

## Pourquoi c'est important

- Un **disque dur a une durée de vie limitée** : les pannes arrivent, c'est statistique.
- Une **erreur humaine** (suppression accidentelle) est le scénario le plus fréquent.
- Un **ransomware** chiffre tout ce qu'il peut atteindre sur le réseau, y compris un NAS non isolé.
- Sans sauvegarde valide, la **reprise d'activité** peut prendre des semaines — ou ne jamais être possible.

---

## La solution : 3-2-1

La règle est simple et éprouvée :

| Chiffre | Signification | Exemple concret |
|---------|--------------|-----------------|
| **3** | 3 copies de vos données | Production + backup local + backup distant |
| **2** | Sur 2 supports différents | Disque serveur + NAS (ou bande) |
| **1** | Dont 1 hors site | NAS distant, cloud chiffré, coffre physique |

### Pourquoi 3 et pas 2 ?

Avec 2 copies, si l'une est corrompue et que vous ne le savez pas, vous n'avez plus rien. Avec 3 copies sur 2 supports dont 1 hors site, il faudrait une coïncidence extraordinaire pour tout perdre en même temps.

### Le hors site est crucial

Si vos 3 copies sont dans la même salle serveur, un incendie ou un dégât des eaux les détruit toutes. La copie hors site protège contre les catastrophes physiques.

---

## Mini-checklist

- [ ] J'ai au moins 3 copies de mes données critiques.
- [ ] Les copies sont sur au moins 2 supports différents (pas tout sur le même NAS).
- [ ] Au moins 1 copie est hors site (autre bâtiment, cloud chiffré, coffre).
- [ ] La copie hors site n'est **pas accessible depuis le réseau de production** (protection ransomware).
- [ ] J'ai testé une restauration complète au cours des 3 derniers mois.
- [ ] J'ai un planning de sauvegarde documenté (quoi, quand, où, combien de temps de rétention).
- [ ] Je sais combien de temps il me faut pour restaurer (RTO) et combien de données je peux perdre (RPO).

---

## Pour aller plus loin

- **Offre associée** : [Bundle A — Socle SI sécurisé](/offres/socle-si-securise) — Mise en place de la stratégie 3-2-1 incluse.
- **Preuve associée** : [Preuve A2 — PRA/PCA minimal](/preuves/preuve-a2-pra-pca-minimal) — Tests de restauration documentés sur lab.
- **Méthode** : [Restauration, backup & PRA/PCA](/methodes/restauration-backup-pra) — Détails techniques et scénarios.

---

## Références

- [ANSSI — Guide d'hygiène informatique](https://www.ssi.gouv.fr/guide/guide-dhygiene-informatique/) (mesures R36, R37)
- [Article complémentaire — RPO/RTO expliqué sans jargon](/ressources/rpo-rto-explique-sans-jargon)
