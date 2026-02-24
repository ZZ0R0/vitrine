---
title: "Journalisation utile sans surveiller vos employés"
tags:
  - ressource
  - journalisation
  - cnil
  - conformite
  - pme
---

# Journalisation utile sans surveiller vos employés

> **En bref** : les logs sont indispensables pour la sécurité et le diagnostic. Mais collecter tout, tout le temps, sur tout le monde, c'est illégal et inutile. Voici comment journaliser ce qui sert vraiment, dans le respect de la CNIL.

---

## Le problème

Deux extrêmes coexistent dans les PME :

**Pas de logs du tout** :
- Un incident survient → impossible de savoir ce qui s'est passé, quand, par qui.
- Un serveur tombe → on découvre le problème quand un utilisateur appelle.
- Une intrusion a lieu → aucune trace, aucune investigation possible.

**Trop de logs** :
- On enregistre tout : URLs visitées, horaires de connexion, contenu des emails.
- Les logs occupent des téraoctets, personne ne les consulte.
- L'entreprise est en infraction RGPD/CNIL : collecte disproportionnée, pas de justification, pas d'information des salariés.

---

## Pourquoi c'est important

- **Sécurité** : sans logs, un incident est invisible. Pas de détection, pas d'investigation, pas de preuve.
- **Diagnostic** : sans logs, chaque panne est un mystère. Le temps de résolution explose.
- **Conformité** : le RGPD et la CNIL imposent de **justifier** chaque collecte, de **minimiser** les données, et d'**informer** les personnes concernées.
- **Confiance** : vos collaborateurs doivent savoir que les logs servent à la sécurité et au diagnostic, pas à la surveillance.

---

## La solution : journaliser ce qui SERT

### Ce qu'il faut logger

| Catégorie | Exemples | Pourquoi |
|-----------|----------|----------|
| **Authentification** | Connexions réussies/échouées (AD, VPN, SSH) | Détecter les tentatives d'intrusion |
| **Privilèges** | Élévations (`sudo`, ajout Domain Admin) | Tracer les actions sensibles |
| **Modifications** | Changements GPO, firewall, comptes | Audit des changements |
| **Système** | Redémarrages, erreurs critiques, disque plein | Diagnostic et prévention |
| **Réseau** | Connexions bloquées par le firewall | Détection d'anomalies réseau |

### Ce qu'il ne faut PAS logger (CNIL)

| Interdit | Pourquoi |
|----------|----------|
| Contenu des emails | Vie privée, disproportionné |
| URLs visitées (détail par utilisateur) | Surveillance disproportionnée (sauf proxy avec justification et information) |
| Frappes clavier (keylogger) | Interdit sauf cas exceptionnel justifié |
| Géolocalisation permanente | Disproportionné pour des salariés sédentaires |
| Vidéosurveillance des écrans | Interdit sauf cas très encadré |

### Principe de minimisation (CNIL)

> *"La collecte de données personnelles doit être limitée à ce qui est strictement nécessaire au regard de la finalité poursuivie."*

Concrètement :
- Définir la finalité de chaque log (sécurité, diagnostic, conformité).
- Ne collecter que ce qui est nécessaire à cette finalité.
- Définir une durée de rétention justifiée (pas "pour toujours").
- Informer les salariés (charte informatique).

---

## Mini-checklist

- [ ] Je sais quels logs je collecte et pourquoi (finalité documentée).
- [ ] Je ne collecte pas de données disproportionnées (pas de keylogger, pas de surveillance des emails).
- [ ] Mes logs sont centralisés (pas uniquement sur chaque machine en local).
- [ ] La durée de rétention est définie et appliquée (rotation automatique).
- [ ] Les logs de sécurité sont stockés séparément (les admins ne peuvent pas modifier leurs propres logs).
- [ ] Les salariés sont informés (charte informatique signée).
- [ ] J'ai des alertes sur les événements critiques (pas juste des logs passifs).

---

## Pour aller plus loin

- **Offre associée** : [[offres/options|Options — Observabilité / SIEM-lite]] — Pipeline de collecte, dashboards, alerting.
- **Preuve associée** : [[preuves/preuve-t1-observabilite-siem-lite|Preuve T1 — Observabilité & SIEM-lite]] — Déploiement complet sur lab.
- **Méthode** : [[methodes/journalisation-et-conformite|Journalisation & conformité]] — Détails techniques et architecture.

---

## Références

- [CNIL — Recommandation relative à la journalisation](https://www.cnil.fr/fr/la-cnil-publie-une-recommandation-relative-a-la-journalisation)
- [CNIL — Guide de la sécurité des données personnelles](https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles)
- [ANSSI — Guide d'hygiène informatique](https://www.ssi.gouv.fr/guide/guide-dhygiene-informatique/)
- [Directive NIS2 — contexte](https://www.ssi.gouv.fr/directive-nis-2/)
