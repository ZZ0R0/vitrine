---
title: "FAQ"
tags:
  - offre
  - faq
---

# Foire aux questions

Réponses aux questions les plus fréquentes des prospects et clients.

---

## Est-ce que vous touchez à la prod ?

**Oui, mais dans un cadre strict.**

Chaque intervention en production est :
- **Planifiée** dans une fenêtre de maintenance validée par le client.
- **Documentée** avant exécution (plan d'action + procédure de rollback).
- **Testée** autant que possible sur un environnement de pré-production ou une OU/VM de test.
- **Tracée** : chaque action est journalisée.

En cas de doute, l'intervention est reportée. Aucune modification "à chaud" sans accord explicite.

---

## Comment vous gérez la confidentialité ?

**Trois principes systématiques :**

1. **Séparation stricte** : les données client ne sont jamais mélangées, jamais publiées, jamais stockées au-delà de la mission.
2. **Anonymisation** : tout ce qui est publié (preuves, schémas, captures) passe par un [[methodes/anonymisation-publication|pipeline d'anonymisation]] documenté. Noms, IP, domaines, identifiants sont remplacés par des tokens génériques (`CLIENT-X`, `DC01`, `APP01`).
3. **Chiffrement & effacement** : les données de travail sont chiffrées en transit et au repos. En fin de mission, les données sont effacées selon la [[methodes/securite-des-donnees|politique de sécurité des données]].

> Détail complet : [[methodes/securite-des-donnees|Sécurité des données]]

---

## Que publiez-vous dans vos preuves ?

**Uniquement des démonstrations anonymisées, réalisées sur des environnements lab.**

Ce qui est publié :
- Schémas d'architecture (reconstitués, pas de captures brutes).
- Captures d'écran floutées avec cartouche d'anonymisation.
- KPIs et résultats (chiffrés mais génériques, clairement marqués "exemple lab").
- Méthodes et checklists (transposables, sans détails spécifiques).

Ce qui n'est **jamais** publié :
- Configurations réelles de clients.
- Noms d'hôtes, IP, domaines, identifiants.
- Détails techniques permettant d'identifier un client ou d'exploiter une vulnérabilité.

> Détail complet : [[methodes/anonymisation-publication|Politique d'anonymisation]]

---

## Est-ce que vous faites du pentest ?

**Sur demande, dans un cadre légal strict.**

- Les tests d'intrusion ne font pas partie des bundles standard.
- Sur demande explicite, un audit technique peut être proposé : périmètre défini, convention signée, méthodologie documentée.
- **Aucun détail offensif n'est publié.** Les résultats sont restitués au client uniquement, avec un rapport de recommandations.
- L'approche est toujours **purple team** : l'objectif est d'améliorer la détection et la défense, pas de démontrer une capacité d'attaque.

> Orientation : simulation d'adversaire au niveau conceptuel, toujours au service de la défense.

---

## Quelle est la différence entre les 3 bundles ?

| Critère | Bundle A | Bundle B | Bundle C |
|---------|----------|----------|----------|
| **Focus** | Socle technique (réseau, sauvegardes, supervision) | Active Directory (privilèges, durcissement, IAM) | Plateforme (virtualisation, conteneurs, SSO) |
| **Cible** | SI "en vrac" à remettre à niveau | AD non durci, comptes partagés | Hébergement interne à industrialiser |
| **Pré-requis** | Accès admin au SI | AD existant ou à déployer | Serveur(s) Proxmox |

Les bundles sont **complémentaires** : un client peut commencer par A, puis enchaîner B et C. Le cadrage initial identifie la priorité.

> Détail : [[offres|Comparatif des offres]]

---

## Combien ça coûte ?

Chaque offre est chiffrée **sur devis** après un cadrage gratuit de 30 minutes.
Le cadrage permet de dimensionner le périmètre exact et de fournir une proposition ferme.

Pas de tarif catalogue : chaque SI est différent, et un forfait "au kilo" ne garantit pas la qualité.

> **[[à-propos/contact|Prendre contact →]]**

---

## Est-ce que vous travaillez à distance ?

**Oui, principalement.**

- La majorité des interventions se font en remote (VPN / accès sécurisé).
- Les interventions sur site sont possibles en Hauts-de-France et ponctuellement ailleurs.
- Les restitutions peuvent se faire en visio ou en présentiel.

---

## Et si j'ai juste besoin d'un coup de main ponctuel ?

C'est possible. Les [[offres/options|options à la carte]] permettent des interventions ciblées :
- Revue d'architecture.
- Formation.
- Audit rapide.
- Mise en place d'un composant spécifique.

Le cadrage gratuit permet de définir le format le plus adapté.

---

## Références

- [[offres|Toutes les offres]]
- [[methodes/process-6-etapes|Process en 6 étapes]]
- [[methodes/anonymisation-publication|Politique d'anonymisation]]
- [[methodes/securite-des-donnees|Sécurité des données]]
- [[à-propos/contact|Contact]]
