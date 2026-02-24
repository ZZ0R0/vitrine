---
title: "Bundle B — Active Directory durci"
tags:
  - offre
  - ad
  - durcissement
  - iam
  - bastion
---

# Bundle B — Active Directory durci

**Séparation des privilèges + bastion admin + réduction des chemins d'attaque + journalisation.**

---

## Pour qui ?

- PME avec un Active Directory existant, souvent déployé "par défaut" sans durcissement.
- Structures où tout le monde est "Domain Admin" ou presque.
- DSI / RSSI qui souhaitent un AD auditable, conforme aux recommandations ANSSI.

---

## Résultats attendus

- **Modèle de rôles clair** : séparation utilisateurs / IT admins / Domain Admins (tiering simplifié).
- **Bastion d'administration** : poste ou VM dédié(e) pour les opérations sensibles.
- **Comptes dédiés** : comptes nominatifs par niveau de privilège, pas de compte partagé.
- **Durcissement GPO** : politique de mots de passe, verrouillage, restrictions d'exécution, journalisation.
- **LAPS ou équivalent** : mots de passe administrateur locaux uniques et rotatifs.
- **Journalisation** : événements critiques collectés et exploitables.
- **Documentation** : schéma OU, matrice de droits, runbooks, backlog.

---

## Périmètre

### IN (inclus)
- Audit de la configuration AD existante (structure OU, GPO, comptes, groupes).
- Conception du modèle de rôles (tiering adapté PME).
- Création des comptes dédiés et restructuration des groupes.
- Déploiement d'un bastion admin (VM ou poste dédié).
- Durcissement GPO (baseline sécurité).
- Déploiement LAPS ou équivalent.
- Activation de la journalisation avancée (événements d'authentification, modifications sensibles).
- Documentation & runbooks.
- Restitution & transfert.

### OUT (exclus sauf option)
- Migration de domaine ou fusion de forêts.
- Déploiement Azure AD / Entra ID (périmètre cloud).
- Gestion des postes utilisateurs (masterisation, MDM).
- PKI complète (sauf si intégrée au bastion).
- IAM complet — onboarding/offboarding (voir [Preuve B2](/preuves/preuve-b2-iam-onboarding-offboarding) et [options](/offres/options)).

---

## Livrables

| Livrable | Format |
|----------|--------|
| Schéma de tiering / modèle de rôles | Mermaid + document Markdown |
| Matrice de droits (groupes / comptes / niveaux) | Tableau Markdown |
| Baseline GPO documentée | Document Markdown (description, pas export brut) |
| Runbooks administration AD | Markdown (pas-à-pas) |
| Backlog de remédiation AD | Tableau Markdown priorisé |
| Preuve LAPS / rotation de mots de passe | Capture anonymisée + texte |
| Compte-rendu de restitution | Markdown / PDF |

---

## Planning indicatif

| Phase | Durée |
|-------|-------|
| 1. Cadrage & périmètre | 0,5 jour |
| 2. Audit AD & inventaire | 1 à 2 jours |
| 3. Plan de remédiation | 0,5 jour |
| 4. Implémentation (tiering, GPO, LAPS, bastion) | 2 à 5 jours |
| 5. Validation & tests | 0,5 à 1 jour |
| 6. Restitution & transfert | 0,5 à 1 jour |
| **Total** | **5 à 10 jours** |

---

## Pré-requis client

- Accès Domain Admin encadré (compte dédié, tracé).
- Fenêtres de maintenance pour les modifications GPO.
- Inventaire (même partiel) des applications dépendantes de l'AD.
- Interlocuteur technique disponible.

---

## Risques & limites

- **Impact GPO** : chaque GPO est testée sur une OU de test avant déploiement global. Rollback documenté.
- **Applications legacy** : certaines applications anciennes peuvent ne pas supporter le durcissement (comptes de service, protocoles obsolètes). Elles sont identifiées et traitées au cas par cas.
- **Tiering complet** : le modèle proposé est adapté PME. Un tiering "entreprise" (T0/T1/T2 complet avec forêt admin) dépasse ce périmètre.
- **Pas d'audit offensif** : ce bundle ne comprend pas de test d'intrusion AD. Sur demande, un audit technique peut être proposé dans un cadre légal strict (voir [FAQ](/offres/faq)).

---

## Options complémentaires

- [IAM complet — onboarding/offboarding](/offres/options)
- [Audit AD récurrent (trimestriel)](/offres/options)
- [Formation administration AD sécurisée](/offres/options)
- [Observabilité / SIEM-lite](/offres/options)

---

## Preuves associées

- [Preuve B1 — AD durci : tiering & admin sécurisée (lab)](/preuves/preuve-b1-ad-tiering-admin-securisee) : modèle de rôles, bastion, GPO, LAPS sur environnement lab.
- [Preuve B2 — IAM pragmatique : onboarding/offboarding](/preuves/preuve-b2-iam-onboarding-offboarding) : procédures, checklists RH/IT, journalisation.

---

## Tarification

**À partir de** — sur devis après cadrage gratuit (30 min).

> **[Prendre contact →](/à-propos/contact)**

---

## Références méthodologiques

- [Process en 6 étapes](/methodes/process-6-etapes)
- [ANSSI — Recommandations pour l'administration sécurisée des SI](https://www.ssi.gouv.fr/guide/recommandations-relatives-a-ladministration-securisee-des-systemes-dinformation/)
- [ANSSI — Points de contrôle Active Directory](https://www.cert.ssi.gouv.fr/dur/CERTFR-2020-DUR-001/)
- [CNIL — Sécurité des données personnelles](https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles)
