---
title: Preuves
---

# Preuves — Projets lab & démonstrateurs

Chaque preuve est un projet réalisé sur environnement lab (Proxmox), documenté et anonymisé selon la [politique d'anonymisation](/methodes/anonymisation-publication).

Les preuves démontrent la méthode, les compétences et les livrables — pas des données clients.

---

## Bundle A — Socle SI sécurisé

| Preuve | Thème | KPI clé |
|--------|-------|---------|
| [A1 — Socle SI (lab)](/preuves/preuve-a1-socle-si-lab) | Segmentation + MFA + sauvegardes testées + monitoring | Couverture backup 100 %, restore < 30 min |
| [A2 — PRA/PCA minimal](/preuves/preuve-a2-pra-pca-minimal) | RPO/RTO + 3-2-1 + exercices de restauration | RPO 4 h, RTO 1 h (lab) |

---

## Bundle B — Active Directory durci

| Preuve | Thème | KPI clé |
|--------|-------|---------|
| [B1 — AD tiering & admin sécurisée](/preuves/preuve-b1-ad-tiering-admin-securisee) | Séparation privilèges + bastion + GPO + LAPS | 0 compte partagé, LAPS 100 % |
| [B2 — IAM onboarding/offboarding](/preuves/preuve-b2-iam-onboarding-offboarding) | Procédures, checklists, moindre privilège, traçabilité | 100 % départs traités < 24 h (lab) |

---

## Bundle C — Plateforme Proxmox & Docker

| Preuve | Thème | KPI clé |
|--------|-------|---------|
| [C1 — Proxmox plateforme stable](/preuves/preuve-c1-proxmox-plateforme-stable) | Segmentation réseau, snapshots, backups, supervision | Disponibilité > 99,5 %, rollback < 15 min |
| [C2 — Docker industrialisé + SSO](/preuves/preuve-c2-docker-portainer-ldap-sso) | Reverse proxy TLS + Portainer + SSO/LDAP | 100 % services derrière SSO + TLS |

---

## Projets transverses

| Preuve | Thème | KPI clé |
|--------|-------|---------|
| [T1 — Observabilité & SIEM-lite](/preuves/preuve-t1-observabilite-siem-lite) | Journalisation + dashboards + alerting + runbook | Temps de détection < 15 min (lab) |
| [T2 — Vuln management & patch cadence](/preuves/preuve-t2-vuln-management-patch-cadence) | Scan, priorisation, SLA, backlog | Patch critique < 72 h (lab) |

---

## Comment lire une preuve

Chaque preuve suit la même structure :
1. **Résumé exécutif** (1 min) — le problème, la solution, le résultat.
2. **Contexte** — type de structure, objectifs mesurables.
3. **Architecture** — schéma (Mermaid + images).
4. **Méthode** — étapes suivies.
5. **Contrôles** — références ANSSI / CNIL appliquées.
6. **Résultats / KPIs** — mesures avant/après.
7. **Backlog** — ce qui reste à faire.
8. **Runbooks** — extraits de procédures opérationnelles.
9. **Annexes** — schémas, captures anonymisées.

> Gabarit utilisé : [Template preuve](/methodes/_template-preuve)
