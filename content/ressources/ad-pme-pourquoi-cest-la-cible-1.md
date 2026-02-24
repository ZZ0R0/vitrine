---
title: "AD en PME : pourquoi c'est la cible nº1"
tags:
  - ressource
  - ad
  - pme
  - securite
---

# AD en PME : pourquoi c'est la cible nº1

> **En bref** : Active Directory est le cœur de l'authentification et des droits dans la plupart des PME. Un AD mal configuré, c'est la porte ouverte à toute l'entreprise — et les attaquants le savent.

---

## Le problème

Dans beaucoup de PME, Active Directory a été installé il y a des années et n'a jamais été durci :

- **Tout le monde est "Domain Admin"** (ou presque) : les comptes IT ont parfois les droits maximaux par défaut, sans distinction de rôle.
- **Un seul compte admin partagé** : le mot de passe circule par email, est noté sur un post-it, ou n'a pas changé depuis 5 ans.
- **Le mot de passe administrateur local est identique partout** : le même mot de passe sur tous les postes et serveurs. Un poste compromis = tous compromis.
- **Pas de journalisation** : impossible de savoir qui a fait quoi, quand, et d'où.
- **Des comptes d'anciens employés encore actifs** : parce que personne n'a de procédure de départ formalisée.

---

## Pourquoi c'est important

Active Directory contrôle :
- **Qui peut se connecter** (authentification).
- **Qui peut accéder à quoi** (autorisation : fichiers, applications, email).
- **Qui peut administrer quoi** (privilèges : serveurs, GPO, comptes).

Un attaquant qui compromet l'AD a **accès à tout**. C'est pour cela que la quasi-totalité des attaques ciblées contre des PME passent par l'AD à un moment ou un autre :
- Ransomware : l'attaquant obtient les droits Domain Admin pour déployer le chiffrement sur tous les postes en une seule GPO.
- Vol de données : l'attaquant accède aux partages fichiers, à la messagerie, aux applications métier.
- Persistance : l'attaquant crée un compte admin caché pour revenir plus tard.

---

## La solution en pratique

Durcir un AD de PME ne prend pas des mois. Les actions prioritaires :

1. **Séparer les comptes** : un compte par admin, par niveau de privilège. Plus de "Administrateur" partagé.
2. **Déployer un bastion** : les admins ne se connectent aux serveurs que depuis un poste dédié, isolé.
3. **Appliquer LAPS** : chaque poste a un mot de passe administrateur local unique, qui change automatiquement.
4. **Durcir les GPO** : politique de mots de passe, verrouillage, restrictions d'exécution.
5. **Journaliser** : activer les audits sur les événements critiques (connexions, modifications de comptes et de groupes).
6. **Nettoyer** : supprimer les comptes inutilisés, retirer les droits excessifs.

---

## Mini-checklist

- [ ] Aucun compte "Domain Admin" n'est utilisé au quotidien.
- [ ] Chaque administrateur a un compte nominatif dédié à l'administration.
- [ ] LAPS (ou équivalent) est déployé sur tous les postes.
- [ ] Les GPO incluent une politique de mots de passe robuste.
- [ ] Les événements critiques sont journalisés (connexions, modifications de comptes/groupes).
- [ ] Les comptes d'anciens employés sont désactivés dans les 24 h après le départ.
- [ ] Une revue des groupes à privilèges est faite au moins une fois par trimestre.

---

## Pour aller plus loin

- **Offre associée** : [[offres/ad-durci|Bundle B — Active Directory durci]] — Durcissement complet en 5 à 10 jours.
- **Preuve associée** : [[preuves/preuve-b1-ad-tiering-admin-securisee|Preuve B1 — AD tiering & admin sécurisée]] — Modèle de rôles, bastion, GPO, LAPS sur lab.
- **Méthode** : [[methodes/process-6-etapes|Process en 6 étapes]]

---

## Références

- [ANSSI — Recommandations pour l'administration sécurisée des SI](https://www.ssi.gouv.fr/guide/recommandations-relatives-a-ladministration-securisee-des-systemes-dinformation/)
- [ANSSI — Points de contrôle AD](https://www.cert.ssi.gouv.fr/dur/CERTFR-2020-DUR-001/)
- [[ressources/onboarding-offboarding-les-10-erreurs|Article complémentaire — Onboarding/offboarding : les 10 erreurs]]
