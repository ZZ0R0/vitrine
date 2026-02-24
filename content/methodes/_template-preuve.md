---
title: "Template — Preuve"
tags:
  - template
  - methode
---

# Template — Preuve

*Gabarit à copier pour documenter chaque preuve / projet lab.*

---

```markdown
---
title: "Preuve XX — [Titre court]"
tags:
  - preuve
  - [bundle-a / bundle-b / bundle-c / transverse]
  - [tags techniques]
---

# Preuve XX — [Titre court]

> **Résumé exécutif (1 min)** : [2-3 phrases : problème, solution, résultat principal, KPI clé.]

---

## Contexte

- **Type de structure** : [PME / startup / lab personnel]
- **Problème initial** : [description courte]
- **Objectifs mesurables** : [liste de KPIs attendus]

---

## Architecture

[Schéma Mermaid]

![Schéma anonymisé — TODO](../annexes/images/TODO_XX_schema.png)

---

## Méthode

1. [Étape 1]
2. [Étape 2]
3. [Étape n]

> Méthode complète : [Process en 6 étapes](/methodes/process-6-etapes)

---

## Contrôles appliqués

| Contrôle | Référence | Statut |
|----------|-----------|--------|
| [Contrôle 1] | ANSSI Hygiène — mesure XX | ✅ |
| [Contrôle 2] | CNIL — [section] | ✅ |
| [Contrôle n] | [référence] | ⏳ Backlog |

---

## Résultats / KPIs

| KPI | Avant | Après | Objectif |
|-----|-------|-------|----------|
| [KPI 1] | [valeur] | [valeur] | [cible] |
| [KPI 2] | [valeur] | [valeur] | [cible] |

*Valeurs issues d'un environnement lab — clairement marquées "exemple lab".*

---

## Backlog de remédiation (extrait)

| # | Action | Priorité | Statut |
|---|--------|----------|--------|
| 1 | [Action 1] | Haute | ✅ Fait |
| 2 | [Action 2] | Moyenne | ⏳ Planifié |
| 3 | [Action 3] | Basse | 📋 Backlog |

---

## Runbooks (extraits)

### Runbook : [Nom de la procédure]

1. **Pré-requis** : [accès, outils]
2. **Étapes** :
   1. [Étape 1]
   2. [Étape 2]
3. **Vérification** : [comment vérifier le succès]
4. **Rollback** : [procédure de retour arrière]

---

## Anonymisation appliquée

- [ ] Tokens de remplacement utilisés (voir [tableau](/methodes/anonymisation-publication))
- [ ] Captures floutées + cartouche ajouté
- [ ] Métadonnées EXIF supprimées
- [ ] Grep inverse effectué (aucun résultat)
- [ ] Vérification visuelle effectuée
- [ ] Nommage standard respecté

---

## Annexes

- [Schéma — TODO](../annexes/images/TODO_XX_schema.png)
- [Capture — TODO](../annexes/images/TODO_XX_capture.png)

---

## Références

- **Offre** : [Bundle X — Titre](/offres/xxx)
- **Méthode** : [Process en 6 étapes](/methodes/process-6-etapes)
- **Article** : [Titre de l'article](/ressources/xxx)

---

## À faire (humain)

- [ ] Exécuter les tâches LAB (liste ci-dessus)
- [ ] Produire les captures (liste ci-dessus)
- [ ] Anonymiser (checklist ci-dessus)
- [ ] Ajouter les images dans `annexes/images/`
- [ ] Vérifier les liens internes
- [ ] Relire "Résumé exécutif"
```
