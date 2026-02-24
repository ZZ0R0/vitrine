---
title: "Bundle C — Plateforme Proxmox & Docker"
tags:
  - offre
  - proxmox
  - docker
  - sso
  - plateforme
---

# Bundle C — Plateforme Proxmox & Docker

**Virtualisation stable + conteneurisation industrialisée + SSO + reverse proxy TLS + exploitation documentée.**

---

## Pour qui ?

- PME ou startups qui veulent héberger des services internes sur une plateforme maîtrisée.
- Équipes qui utilisent Docker "au feeling" sans exploitation formalisée.
- DSI qui cherchent une alternative aux clouds publics pour certains workloads (coût, souveraineté, contrôle).

---

## Résultats attendus

- **Plateforme Proxmox stable** : segmentation réseau (admin / prod / backup), snapshots planifiés, sauvegardes vérifiées.
- **Docker industrialisé** : Compose structuré, reverse proxy TLS (Traefik/Caddy), gestion des secrets, mises à jour tracées.
- **Portainer** : interface de gestion des conteneurs, contrôle d'accès par rôle.
- **SSO/LDAP** : authentification centralisée (Authentik/Keycloak), raccordée à l'AD ou annuaire LDAP si existant.
- **Supervision** : monitoring des VMs, conteneurs et services critiques.
- **Documentation complète** : architecture, runbooks d'exploitation, procédures d'ajout de service.

---

## Périmètre

### IN (inclus)
- Architecture Proxmox : réseaux (mgmt, prod, backup), stockage, snapshots, PBS.
- Déploiement Docker + Compose sur VM(s) Linux dédiée(s).
- Reverse proxy TLS (Traefik, Caddy ou Nginx — choix justifié et documenté).
- Portainer (gestion centralisée des conteneurs).
- SSO (Authentik ou Keycloak — déployé, configuré, raccordé).
- Gestion des secrets (fichiers `.env` sécurisés, rotation documentée).
- Supervision des VMs et conteneurs.
- Documentation & runbooks.
- Restitution & transfert.

### OUT (exclus sauf option)
- Haute disponibilité Proxmox (cluster multi-nœuds avec Ceph/réplication).
- CI/CD applicatif (pipeline de build / déploiement automatisé).
- Développement applicatif (code métier).
- Migration de données depuis un hébergeur externe.
- Gestion DNS publique / registrar.

---

## Livrables

| Livrable | Format |
|----------|--------|
| Schéma d'architecture Proxmox + Docker | Mermaid + PNG anonymisé |
| Matrice des flux réseau | Tableau Markdown |
| Runbooks d'exploitation (ajout service, mise à jour, rollback) | Markdown |
| Procédure de rotation des secrets | Markdown |
| Documentation SSO (architecture, raccordement) | Markdown + captures anonymisées |
| Backlog de remédiation / évolutions | Tableau Markdown |
| Compte-rendu de restitution | Markdown / PDF |

---

## Planning indicatif

| Phase | Durée |
|-------|-------|
| 1. Cadrage & périmètre | 0,5 jour |
| 2. Audit existant / architecture cible | 1 à 2 jours |
| 3. Plan d'implémentation | 0,5 jour |
| 4. Déploiement (Proxmox, Docker, SSO, reverse proxy) | 3 à 8 jours |
| 5. Validation & tests | 0,5 à 2 jours |
| 6. Restitution & transfert | 0,5 à 1 jour |
| **Total** | **5 à 15 jours** |

---

## Pré-requis client

- Serveur(s) physique(s) avec Proxmox installé (ou à installer).
- Accès réseau et admin au(x) nœud(s) Proxmox.
- Nom(s) de domaine interne(s) ou externe(s) pour le reverse proxy TLS.
- Fenêtres de maintenance pour les déploiements.
- Interlocuteur technique disponible.

---

## Risques & limites

- **Performance** : le dimensionnement matériel doit être adapté aux workloads prévus. Un audit de capacité est inclus dans le cadrage.
- **Dépendance internet** : les certificats Let's Encrypt nécessitent un accès sortant. Alternative : certificats internes (documenté).
- **SSO & applications** : toutes les applications ne supportent pas OIDC/SAML. Compatibilité vérifiée au cadrage.
- **Pas de HA par défaut** : la haute disponibilité (cluster, réplication) est une option séparée.

---

## Options complémentaires

- [[offres/options|Haute disponibilité Proxmox (cluster)]]
- [[offres/options|CI/CD conteneurs]]
- [[offres/options|Observabilité / SIEM-lite]]
- [[offres/options|Formation exploitation Proxmox/Docker]]

---

## Preuves associées

- [[preuves/preuve-c1-proxmox-plateforme-stable|Preuve C1 — Plateforme Proxmox stable (lab)]] : segmentation, snapshots, backups, supervision.
- [[preuves/preuve-c2-docker-portainer-ldap-sso|Preuve C2 — Docker industrialisé : reverse proxy TLS + Portainer + SSO/LDAP]] : architecture complète, exploitation documentée.

---

## Tarification

**À partir de** — sur devis après cadrage gratuit (30 min).

> **[[à-propos/contact|Prendre contact →]]**

---

## Références méthodologiques

- [[methodes/process-6-etapes|Process en 6 étapes]]
- [[methodes/restauration-backup-pra|Méthode de sauvegarde et PRA]]
- [ANSSI — Guide d'hygiène informatique](https://www.ssi.gouv.fr/guide/guide-dhygiene-informatique/)
