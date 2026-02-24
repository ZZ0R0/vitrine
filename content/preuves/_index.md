---
title: Preuves
---

# Preuves — Projets lab & démonstrateurs

Chaque preuve est un projet réalisé sur environnement lab (Proxmox), documenté et anonymisé selon la [[content/methodes/anonymisation-publication|politique d'anonymisation]].

Les preuves démontrent la méthode, les compétences et les livrables — pas des données clients.

---

## Bundle A — Socle SI sécurisé

| Preuve | Thème | KPI clé |
|--------|-------|---------|
| [[content/preuves/preuve-a1-socle-si-lab\|A1 — Socle SI (lab)]] | Segmentation + MFA + sauvegardes testées + monitoring | Couverture backup 100 %, restore < 30 min |
| [[content/preuves/preuve-a2-pra-pca-minimal\|A2 — PRA/PCA minimal]] | RPO/RTO + 3-2-1 + exercices de restauration | RPO 4 h, RTO 1 h (lab) |

---

## Bundle B — Active Directory durci

| Preuve | Thème | KPI clé |
|--------|-------|---------|
| [[content/preuves/preuve-b1-ad-tiering-admin-securisee\|B1 — AD tiering & admin sécurisée]] | Séparation privilèges + bastion + GPO + LAPS | 0 compte partagé, LAPS 100 % |
| [[content/preuves/preuve-b2-iam-onboarding-offboarding\|B2 — IAM onboarding/offboarding]] | Procédures, checklists, moindre privilège, traçabilité | 100 % départs traités < 24 h (lab) |

---

## Bundle C — Plateforme Proxmox & Docker

| Preuve | Thème | KPI clé |
|--------|-------|---------|
| [[content/preuves/preuve-c1-proxmox-plateforme-stable\|C1 — Proxmox plateforme stable]] | Segmentation réseau, snapshots, backups, supervision | Disponibilité > 99,5 %, rollback < 15 min |
| [[content/preuves/preuve-c2-docker-portainer-ldap-sso\|C2 — Docker industrialisé + SSO]] | Reverse proxy TLS + Portainer + SSO/LDAP | 100 % services derrière SSO + TLS |

---

## Projets transverses

| Preuve | Thème | KPI clé |
|--------|-------|---------|
| [[content/preuves/preuve-t1-observabilite-siem-lite\|T1 — Observabilité & SIEM-lite]] | Journalisation + dashboards + alerting + runbook | Temps de détection < 15 min (lab) |
| [[content/preuves/preuve-t2-vuln-management-patch-cadence\|T2 — Vuln management & patch cadence]] | Scan, priorisation, SLA, backlog | Patch critique < 72 h (lab) |

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

> Gabarit utilisé : [[content/methodes/_template-preuve|Template preuve]]
