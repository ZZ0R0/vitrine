---
title: "Onboarding/offboarding : les 10 erreurs qui coûtent cher"
tags:
  - ressource
  - iam
  - onboarding
  - offboarding
  - pme
---

# Onboarding/offboarding : les 10 erreurs qui coûtent cher

> **En bref** : un collaborateur qui arrive sans procédure accumule des droits excessifs. Un collaborateur qui part sans procédure garde ses accès. Les deux scénarios sont des failles de sécurité courantes et évitables.

---

## Le problème

Dans la plupart des PME, les arrivées et départs sont gérés "à la volée" :
- RH prévient l'IT le jour de l'arrivée (ou après).
- L'IT copie les droits d'un collègue existant ("mets-lui les mêmes accès que Dupont").
- Au départ, personne ne pense à couper les accès — le compte reste actif pendant des semaines ou des mois.

---

## Les 10 erreurs les plus fréquentes

### Arrivées (onboarding)

**1. Créer le compte le jour J**
Le nouveau n'a pas d'accès le premier jour. L'IT improvise dans l'urgence, en sautant les vérifications.

**2. Copier les droits d'un collègue**
Le collègue a accumulé des droits depuis 5 ans, dont certains ne correspondent plus à son poste. Le nouveau hérite de tous ces droits.

**3. Donner trop de droits "par sécurité"**
"On lui met admin, il demandera moins." Résultat : un commercial avec des droits d'admin serveur.

**4. Pas de charte signée**
Le collaborateur ne sait pas ce qu'il a le droit de faire ou non. En cas d'incident, pas de base contractuelle.

**5. Pas de trace**
Personne ne sait qui a créé le compte, quels droits ont été donnés, ni quand.

### Départs (offboarding)

**6. Compte désactivé "quand on a le temps"**
L'ancien employé peut encore se connecter au VPN, à la messagerie, aux fichiers — pendant des jours ou des semaines.

**7. Droits applicatifs oubliés**
Le compte AD est désactivé, mais l'accès à l'ERP, au CRM, ou au cloud reste actif.

**8. Boîte email laissée ouverte**
Des emails confidentiels continuent d'arriver dans une boîte que personne ne surveille.

**9. Pas de récupération du matériel**
Le poste portable n'est pas rendu, ou il est rendu sans être réinitialisé. Les données locales restent accessibles.

**10. Pas de revue post-départ**
Personne ne vérifie que tous les accès ont bien été coupés. Des comptes orphelins s'accumulent.

---

## Pourquoi c'est important

- **Comptes orphelins** = vecteur d'attaque : un attaquant qui découvre un compte actif sans propriétaire peut l'utiliser sans que personne ne remarque.
- **Accumulation de droits** = violation du moindre privilège : plus un utilisateur a de droits, plus l'impact d'un compromis est élevé.
- **Conformité** : le RGPD et les référentiels de sécurité (ANSSI, CNIL) exigent une gestion des habilitations tracée et à jour.

---

## La solution : des checklists simples et systématiques

Pas besoin d'un outil IAM coûteux. Des checklists papier ou Markdown suffisent, à condition d'être **appliquées systématiquement** :

- **Onboarding** : RH notifie l'IT 5 jours avant l'arrivée. L'IT suit une checklist standard (création compte, droits par profil, charte, trace).
- **Offboarding** : RH notifie l'IT le jour de la notification de départ. L'IT suit une checklist de retrait (désactivation < 24 h, retrait droits, archivage email, récupération matériel).
- **Revue trimestrielle** : comparer la liste des comptes actifs avec la liste des employés en poste.

---

## Mini-checklist

- [ ] RH notifie l'IT au moins 5 jours avant chaque arrivée.
- [ ] L'IT crée les comptes selon une matrice de droits par poste (pas par copie).
- [ ] La charte informatique est signée le jour de l'arrivée.
- [ ] RH notifie l'IT le jour de chaque départ.
- [ ] Le compte est désactivé dans les 24 h suivant le départ.
- [ ] Tous les accès (VPN, email, applications, cloud) sont révoqués.
- [ ] Une revue des comptes actifs est faite chaque trimestre.
- [ ] Chaque checklist est archivée (traçabilité).

---

## Pour aller plus loin

- **Offre associée** : [[offres/ad-durci|Bundle B — Active Directory durci]] — IAM inclus ou en option.
- **Preuve associée** : [[preuves/preuve-b2-iam-onboarding-offboarding|Preuve B2 — IAM onboarding/offboarding]] — Procédures testées sur lab AD.
- **Méthode** : [[methodes/process-6-etapes|Process en 6 étapes]]

---

## Références

- [ANSSI — Guide d'hygiène informatique](https://www.ssi.gouv.fr/guide/guide-dhygiene-informatique/) (mesures R2, R3)
- [CNIL — Gestion des habilitations](https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles)
- [[ressources/ad-pme-pourquoi-cest-la-cible-1|Article complémentaire — AD en PME : pourquoi c'est la cible nº1]]
