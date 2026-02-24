---
title: "Bundle A — Socle SI sécurisé"
tags:
  - offre
  - socle
  - pme
  - sauvegarde
  - supervision
---

# Bundle A — Socle SI sécurisé

**Remise à niveau + durcissement + sauvegardes testées + supervision minimale.**

---

## Pour qui ?

- TPE/PME dont le SI "fonctionne" mais sans visibilité, sans documentation, sans preuve de sauvegarde.
- Structures qui ont grandi vite et dont l'infrastructure n'a jamais été formalisée.
- Dirigeants ou DSI qui veulent un état des lieux clair et des actions concrètes.

---

## Résultats attendus

- **Réseau segmenté** : séparation des flux (administration, production, sauvegarde).
- **Durcissement appliqué** : services inutiles désactivés, accès restreints, MFA activé où possible.
- **Sauvegardes vérifiées** : politique 3-2-1 en place, au moins un test de restauration documenté.
- **Supervision minimale** : alertes sur les services critiques (disponibilité, espace disque, certificats).
- **Documentation complète** : schéma réseau, inventaire, runbooks, backlog de remédiation.

---

## Périmètre

### IN (inclus)
- Audit rapide de l'existant (réseau, services, comptes, sauvegardes).
- Segmentation réseau (VLAN, firewall — règles par flux).
- Durcissement des services exposés et des accès d'administration.
- Mise en place ou vérification des sauvegardes (politique, planification, test de restauration).
- Supervision minimale (monitoring des services critiques).
- Documentation & runbooks.
- Restitution & transfert de compétences.

### OUT (exclus sauf option)
- Refonte complète du réseau physique (câblage, switches).
- Déploiement de nouveaux serveurs / migration applicative.
- Gestion des postes utilisateurs (masterisation, MDM).
- PRA/PCA complet (voir [[offres/options|options]]).
- Supervision avancée / SIEM (voir [[offres/options|options]]).

---

## Livrables

| Livrable | Format |
|----------|--------|
| Schéma réseau segmenté | Mermaid + PNG anonymisé |
| Inventaire des services et des comptes | Tableau Markdown / Excel |
| Politique de sauvegarde | Document Markdown |
| Preuve de test de restauration | Journal + captures anonymisées |
| Runbooks d'exploitation | Markdown (pas-à-pas) |
| Backlog de remédiation priorisé | Tableau Markdown |
| Compte-rendu de restitution | Markdown / PDF |

---

## Planning indicatif

| Phase | Durée |
|-------|-------|
| 1. Cadrage & périmètre | 0,5 jour |
| 2. Audit rapide & inventaire | 1 à 2 jours |
| 3. Plan de remédiation | 0,5 jour |
| 4. Implémentation | 2 à 8 jours |
| 5. Validation & tests | 1 à 2 jours |
| 6. Restitution & transfert | 0,5 à 1 jour |
| **Total** | **5 à 15 jours** |

---

## Pré-requis client

- Accès administrateur au firewall, aux serveurs, aux équipements réseau.
- Un interlocuteur technique disponible pour les fenêtres de maintenance.
- Accord écrit sur le périmètre et les fenêtres d'intervention.
- Accès VPN ou sur site selon le cas.

---

## Risques & limites

- **Interruption de service** : toute modification est planifiée en fenêtre de maintenance avec rollback documenté.
- **Découverte d'obsolescence critique** : matériel ou logiciel en fin de vie pouvant nécessiter un remplacement hors périmètre.
- **Dépendance éditeur** : certaines configurations dépendent du support éditeur (licences, compatibilités).
- **Périmètre applicatif** : les applications métier ne sont pas modifiées — uniquement sécurisées au niveau réseau et accès.

---

## Options complémentaires

- [[offres/options|PRA/PCA + tests réguliers]]
- [[offres/options|Vuln management & patch cadence]]
- [[offres/options|Observabilité / SIEM-lite]]
- [[offres/options|Formation interne]]

---

## Preuves associées

Ces projets lab démontrent les compétences et la méthode appliquées dans ce bundle :

- [[preuves/preuve-a1-socle-si-lab|Preuve A1 — Socle SI (lab complet)]] : segmentation, MFA, sauvegardes testées, monitoring.
- [[preuves/preuve-a2-pra-pca-minimal|Preuve A2 — PRA/PCA minimal]] : RPO/RTO, stratégie 3-2-1, exercices de restauration.

---

## Tarification

**À partir de** — sur devis après cadrage gratuit (30 min).
Le cadrage permet de dimensionner précisément le périmètre et de fournir une proposition fixe.

> **[[à-propos/contact|Prendre contact →]]**

---

## Références méthodologiques

- [[methodes/process-6-etapes|Process en 6 étapes]]
- [ANSSI — Guide d'hygiène informatique](https://www.ssi.gouv.fr/guide/guide-dhygiene-informatique/)
- [ANSSI — Recommandations pour l'administration sécurisée des SI](https://www.ssi.gouv.fr/guide/recommandations-relatives-a-ladministration-securisee-des-systemes-dinformation/)
