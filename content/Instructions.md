# Instructions.md — Génération complète de la vitrine (Quartz / GitHub Pages)

## Rôle de Copilot
Tu es **GitHub Copilot** et tu dois **générer tout le contenu** de la vitrine (pages, textes, checklists, templates, liens internes) à partir de ces instructions, **sans poser de questions**.  
Objectif : à la fin, le repo contient une vitrine complète et cohérente ; l’humain n’a plus qu’à exécuter les tâches sur son lab Proxmox et à insérer des captures anonymisées.

### Contraintes non négociables
- Langue : **français**, style professionnel, clair, orienté décideurs (DSI/RSSI) + annexes techniques.
- Priorité : **stabilité / scalabilité / rigueur opérationnelle** (process, runbooks, standards, preuves).
- Aucun élément identifiable : **pas de noms d’hôtes réels, pas d’IP, pas de domaines, pas de captures brutes non anonymisées, pas de configs copiées-collées**.
- Contenu “offensif” : **interdit** de publier des détails d’évasion/AV, de C2, ou des procédures exploitables.  
  Autorisé : uniquement **cadre légal**, “simulation d’adversaire” au niveau conceptuel, et toujours orienté amélioration défense/détection (purple team).
- Tout doit être **prêt** : pages complètes + texte final + TODOs + emplacements d’images + gabarits.
- Le CV sera fourni par l’humain dans `annexes/pdfs/CV.pdf` : tu dois créer une page qui l’affiche/télécharge.

---

## Contexte repo (arborescence existante)
Tu travailles dans `content/` :

```

content/
├── annexes
│   ├── images
│   └── pdfs
├── à-propos
├── index.md
├── methodes
├── offres
├── preuves
└── ressources

```

Tu dois **créer tous les fichiers manquants** (Markdown), et **modifier `index.md`** pour construire une navigation claire.

---

## Architecture éditoriale du site (navigation)
Le site doit refléter une entreprise solo “IT & cybersécurité externalisée” avec des offres clés en main.

### Menus / sections
1) **Accueil** (`index.md`)  
2) **Offres** (`/offres/`) : 3 bundles + options + FAQ  
3) **Méthodes** (`/methodes/`) : process, anonymisation, restitution, sécurité des données  
4) **Preuves** (`/preuves/`) : études de cas LAB / projets démonstrateurs (anonymisés)  
5) **Ressources** (`/ressources/`) : articles vulgarisés qui renvoient vers les offres  
6) **À propos** (`/à-propos/`) : profil, valeurs, périmètre, contact

---

## Standard de qualité (à appliquer partout)
### Ton & structure
- **Phrases courtes**, orientées résultats.
- Toujours inclure : “Problème → Solution → Résultat → Preuves → Livrables → Limites”.
- Chaque page “Preuve” doit contenir :  
  **Résumé exécutif (1 min)**, **Contexte**, **Architecture (schéma)**, **Méthode**, **Contrôles**, **Résultats/KPIs**, **Backlog**, **Runbooks**, **Annexes**.

### Liens internes
- Utiliser des liens Markdown **compatibles Quartz** :  
  - Exemple : `[Bundle A — Socle SI sécurisé](/offres/socle-si-securise)`
  - Exemple : `[Preuve A1 — Socle SI (lab)](/preuves/preuve-a1-socle-si-lab)`

### Schémas
- Utiliser **Mermaid** (flowchart/sequence) quand possible.
- Quand un schéma doit être “beau”, insérer un placeholder d’image :  
  `![Schéma anonymisé — TODO](../annexes/images/TODO_schema_xxx.png)`

### Captures & anonymisation (standard)
Dans chaque preuve, insérer une section “Anonymisation appliquée” avec :
- Remplacement des noms par tokens : `CLIENT-X`, `DC01`, `APP01`, `LAN-A`, `DMZ`, `VPN`.
- Floutage : identifiants, noms d’objets AD, URL internes, numéros de version précis si cela identifie.
- Ajout d’un cartouche au-dessus de la capture : “Capture anonymisée — méthode décrite”.

### Assets obligatoires
Chaque preuve doit avoir **au moins 1** :
- Schéma Mermaid (dans la page) **et/ou**
- Image/PNG anonymisée **et/ou**
- “Résumé exécutif 1 page” en PDF (placeholder)

---

## Référentiels publics (à citer sans copier-coller)
Insérer des références (liens) vers :
- ANSSI — Guide d’hygiène informatique (mesures)  
- ANSSI — Administration sécurisée d’un SI AD  
- CNIL — bonnes pratiques sécurité / journalisation  
- NIS2 (contexte, sans jurister)

Important : ne pas coller le texte des documents ; seulement citer et expliquer ce qui est appliqué.

---

# Plan de génération : fichiers à créer/mettre à jour

## 1) Accueil
### Fichier : `index.md` (modifier)
Créer une page d’accueil qui contient :
- Positionnement en 3 lignes : “IT & cybersécurité externalisée (TPE/PME) — infrastructures stables, sécurisées, documentées”.
- 3 cartes (ou sections) vers les **3 bundles**.
- 3 preuves mises en avant (1 par bundle).
- 3 ressources mises en avant (articles vulgarisés).
- Une section “Comment je travaille” (process en 6 étapes).
- Une section “Contact” (sans email en clair : utiliser un formulaire/texte générique ; placeholder).

Inclure un encadré “Ce que vous obtenez toujours” :
- Documentation, runbooks, backlog remédiation, transferts de compétences, preuves anonymisées.

---

## 2) Offres (3 bundles + options)
Créer dans `offres/` :

### `offres/_index.md`
Sommaire des offres + tableau comparatif (Bundle A/B/C).
- Colonnes : Objectif, Durée typique, Livrables, Pré-requis, Options, “À partir de”.

### `offres/socle-si-securise.md` (Bundle A)
Offre packagée : remise à niveau + durcissement + sauvegardes + supervision minimale.
Inclure :
- Pour qui, résultats attendus, périmètre IN/OUT, livrables, planning, pré-requis, risques/limites, options.
- Lien vers **2 preuves** minimum : A1 et A2 (définies plus bas).
- Appel à action : diagnostic (optionnel), “à partir de”.

### `offres/ad-durci.md` (Bundle B)
Offre AD durci + admin sécurisée + réduction chemins d’attaque.
Inclure liens vers **2 preuves** : B1 et B2.

### `offres/plateforme-proxmox-docker.md` (Bundle C)
Offre plateforme Proxmox + Docker + SSO + exploitation stable.
Inclure liens vers **2 preuves** : C1 et C2.

### `offres/options.md`
Options vendables (TJM ou forfait) :
- Vuln management & patch cadence
- Observabilité / SIEM-lite
- PRA/PCA + tests réguliers
- Formation interne (admin, bonnes pratiques)
- Revue d’architecture / revue de configuration (sans publier configs)
- Astreinte (si applicable) : cadrage strict

### `offres/faq.md`
FAQ orientée clients :
- “Est-ce que vous touchez à la prod ?”
- “Comment vous gérez la confidentialité ?”
- “Que publiez-vous dans vos preuves ?”
- “Est-ce que vous faites du pentest ?” (réponse : sur demande, cadré légalement, sans détailler techniques offensives)

---

## 3) Méthodes (process & garanties)
Créer dans `methodes/` :

### `methodes/_index.md`
Sommaire + liens.

### `methodes/process-6-etapes.md`
Process standard :
1) Cadrage & périmètre
2) Audit rapide & inventaire
3) Plan de remédiation (priorisé)
4) Implémentation (fenêtres, rollback)
5) Validation (tests, preuves)
6) Restitution + transfert (docs, runbooks)

Inclure une “checklist client” (pré-requis d’accès, contacts, fenêtres de maintenance).

### `methodes/anonymisation-publication.md`
Politique d’anonymisation + pipeline “private → publish”.
Inclure une checklist très concrète pour l’humain :
- flouter X, remplacer Y, supprimer Z
- renommer les ressources
- vérification finale

### `methodes/restauration-backup-pra.md`
Méthode PRA/PCA :
- définition RPO/RTO
- stratégie 3-2-1
- tests de restauration
- preuve et journal de test

### `methodes/journalisation-et-conformite.md`
Méthode de journalisation “utile” :
- quoi logger / pourquoi / durée / accès
- principe de minimisation (CNIL)
- séparation des rôles

### `methodes/securite-des-donnees.md`
Garantie : secrets, coffre, chiffrement, rétention, effacement.

---

## 4) Preuves (6 preuves minimum : 2 par bundle, diversifiées)
Créer dans `preuves/` :

### `preuves/_index.md`
Sommaire + filtres “Bundle A/B/C” (par sections) + “autres projets”.

---

## Définition des preuves (obligatoire : 2 par bundle)

### Bundle A — Socle SI sécurisé
#### Preuve A1 : `preuves/preuve-a1-socle-si-lab.md`
Thème : “Remise à niveau SI PME : segmentation + MFA + sauvegardes testées + monitoring”
Contenu à générer :
- Résumé exécutif (1 min)
- Contexte (PME type) + objectifs mesurables
- Schéma avant/après (Mermaid + placeholder PNG)
- Méthode (checklist)
- Contrôles appliqués (références ANSSI/CNIL)
- Résultats / KPIs (exemples chiffrés fictifs mais plausibles, clairement marqués “exemple lab”)
- Backlog remédiation (extrait)
- Runbooks (extraits)
- Section “Ce que l’humain doit faire sur Proxmox” (checklist) :
  - Créer un lab isolé (réseau, VLAN/segments, DMZ)
  - Déployer un firewall (OPNsense/pfSense ou équivalent) — sans configs publiées
  - Déployer une VM “poste admin” et une VM “serveur services”
  - Activer sauvegardes (PBS ou autre) + test de restauration
  - Mettre en place supervision (Zabbix/Prometheus)
- Section “Screenshots à produire (à anonymiser)” :
  - Topologie Proxmox (floutée)
  - Tableau backups (preuve de test restore)
  - Dashboard monitoring (flouté)
- Emplacements d’images (TODO) :
  - `../annexes/images/TODO_A1_schema.png`
  - `../annexes/images/TODO_A1_backup_restore.png`
  - `../annexes/images/TODO_A1_monitoring_dashboard.png`

#### Preuve A2 : `preuves/preuve-a2-pra-pca-minimal.md`
Thème : “PRA/PCA minimal : RPO/RTO + 3-2-1 + exercices de restauration”
Contenu :
- Approche “PME pragmatique”
- Scénarios (panne stockage, erreur admin, ransomware) — niveau conceptuel
- Méthode de test + journal de preuve
- KPIs (temps de restauration, couverture)
- Checklist Proxmox :
  - Mise en place PBS (ou backup équivalent)
  - Planification + rétention
  - Exercice de restauration sur VM clone
- Screenshots TODO :
  - Planning backup
  - Log d’un restore test (anonymisé)
  - Tableau RPO/RTO (rédigé)

---

### Bundle B — AD durci
#### Preuve B1 : `preuves/preuve-b1-ad-tiering-admin-securisee.md`
Thème : “AD durci : séparation des privilèges + bastion admin + réduction des chemins d’attaque”
Contenu :
- Modèle de rôles (users / IT admins / domain admins)
- Bastion / poste admin dédié (concept)
- Contrôles : comptes dédiés, MFA (si applicable), journalisation, durcissement
- Backlog de remédiation “AD” (extrait)
- Checklist Proxmox (lab AD) :
  - Déployer Windows Server (DC) + 1-2 serveurs membres + 1-2 postes
  - Structurer OU / groupes / comptes dédiés (sans publier détails)
  - Mettre en place une baseline GPO (décrite, pas exportée)
  - Mettre en place LAPS/équivalent (décrit)
- Screenshots TODO (anonymisés) :
  - Schéma OU (refait en image/texte, pas capture brute)
  - Preuve MFA (si lab)
  - Preuve LAPS (texte + capture floutée)

#### Preuve B2 : `preuves/preuve-b2-iam-onboarding-offboarding.md`
Thème : “IAM pragmatique : onboarding/offboarding, moindre privilège, traçabilité”
Objectif : preuve très vendable PME (process + sécurité).
Contenu :
- Procédures
- Checklists RH/IT
- Journalisation minimale + preuve d’audit
- Checklist Proxmox :
  - Simuler arrivées/départs (comptes, accès, boîtes)
  - Vérifier retrait des droits
- Screenshots TODO :
  - Checklist signée (exemple)
  - Journal d’événements (flouté)
  - Tableau de contrôle

---

### Bundle C — Plateforme Proxmox/Docker
#### Preuve C1 : `preuves/preuve-c1-proxmox-plateforme-stable.md`
Thème : “Plateforme Proxmox stable : segmentation réseau, snapshots, backups, supervision”
Contenu :
- Architecture (flux admin / prod / backup)
- Méthode exploitation (patch, rollback)
- KPIs : disponibilité, temps de rollback
- Checklist Proxmox :
  - Créer réseau mgmt vs prod vs backup (concept)
  - Activer snapshots planifiés
  - PBS / sauvegardes
  - Supervision
- Screenshots TODO :
  - Vue cluster/nœud (floutée)
  - Preuve snapshot/backup (floutée)
  - Dashboard supervision

#### Preuve C2 : `preuves/preuve-c2-docker-portainer-ldap-sso.md`
Thème : “Docker industrialisé : reverse proxy TLS + Portainer + SSO/LDAP + gestion des secrets”
Important : rester défensif, orienté exploitation.
Contenu :
- Architecture logique (Mermaid)
- Guide d’exploitation : ajout service, rotation secrets, mises à jour
- Checklist (sur VM Linux) :
  - Installer Docker + Compose
  - Déployer reverse proxy (Traefik/Caddy/Nginx — décrire, ne pas coller config)
  - Déployer Portainer
  - Déployer un SSO (Authentik/Keycloak — décrire choix)
  - Raccorder à LDAP/AD (concept)
  - Journaliser et restreindre accès
- Screenshots TODO :
  - Page Portainer (floutée)
  - Page SSO (floutée)
  - Schéma d’authentification

---

## 5) Projets transverses (preuves supplémentaires “diversification”)
Créer 2 preuves transverses (en plus des 6 ci-dessus), qui se rattachent à plusieurs bundles :

### `preuves/preuve-t1-observabilite-siem-lite.md`
Thème : “Journalisation & alerting minimal viable”
- Pipeline logs → dashboards → alerting → runbook d’investigation
- Références CNIL (minimisation)
- Screenshots TODO : dashboard flouté + exemple d’alerte

### `preuves/preuve-t2-vuln-management-patch-cadence.md`
Thème : “Vulnerability management + patch management”
- Matrice de priorisation
- SLA internes
- Backlog exemple (anonymisé)
- Screenshots TODO : backlog + preuve patch (texte)

---

## 6) Ressources (articles vulgarisés qui renvoient aux offres)
Créer dans `ressources/` :

### `ressources/_index.md`
Sommaire + tags : “PME”, “AD”, “Proxmox”, “Docker”, “Sauvegardes”, “Journalisation”.

Créer au minimum 8 articles (complets, prêts) :

1) `ressources/why-socle-securise-pme.md`  
2) `ressources/backup-3-2-1-pourquoi-ca-sauve.md`  
3) `ressources/rpo-rto-explique-sans-jargon.md`  
4) `ressources/ad-pme-pourquoi-cest-la-cible-1.md`  
5) `ressources/onboarding-offboarding-les-10-erreurs.md`  
6) `ressources/proxmox-plateforme-pme-approche.md`  
7) `ressources/docker-en-prod-les-7-regles.md`  
8) `ressources/journalisation-utile-sans-surveiller.md`

Chaque article doit :
- Expliquer un concept en FR simple
- Donner une mini-checklist
- Renvoyer vers 1 offre + 1 preuve

---

## 7) À propos (profil, valeurs, contact)
Créer dans `à-propos/` :

### `à-propos/_index.md`
Sommaire.

### `à-propos/profil.md`
- Présentation courte
- Axes : infra stable, sécurité pragmatique, documentation
- Domaines : AD, Linux/Windows, réseau, Docker/Proxmox
- Une section “Ce que je ne publie jamais” (confidentialité)

### `à-propos/valeurs-et-garanties.md`
- Confidentialité
- Traçabilité
- Tests & preuves
- Transfert de compétences
- Pas de dépendance “boîte noire”

### `à-propos/contact.md`
- Procédure de contact (placeholder)
- Ce que le prospect doit fournir (2 minutes)
- Engagement sur la réponse (sans promettre délais irréalistes)

### `à-propos/cv.md`
- Lien vers `annexes/pdfs/CV.pdf`
- Résumé des compétences (sans recopier le CV)
- Notes : page utile RH / LinkedIn

---

## 8) Annexes (préparer les emplacements)
Dans `annexes/images/` : ne crée pas d’images, mais crée un `annexes/images/README.md` avec :
- Nommage standard : `A1_*.png`, `B1_*.png`, etc.
- Règles d’anonymisation avant commit
- Outils suggérés : floutage, overlays, redaction

Dans `annexes/pdfs/` : créer `annexes/pdfs/README.md` et prévoir `CV.pdf`.

---

# Templates à insérer dans chaque preuve (à générer/copier)
Dans `methodes/` créer aussi :

### `methodes/_template-preuve.md`
Gabarit complet d’une preuve (sections + placeholders).

### `methodes/_template-offre.md`
Gabarit offre (IN/OUT, livrables, pré-requis, risques, options, “à partir de”).

### `methodes/_template-article.md`
Gabarit article ressource (problème, explication, checklist, liens).

---

# Checklist finale (Copilot doit l’écrire en bas de chaque preuve)
Chaque preuve doit finir par :

## À faire (humain)
- [ ] Exécuter les tâches LAB (liste)
- [ ] Produire les captures (liste)
- [ ] Anonymiser (checklist)
- [ ] Ajouter les images dans `annexes/images/`
- [ ] Vérifier les liens internes
- [ ] Relire “Résumé exécutif”

---

# Exigence de cohérence globale
- Les 3 bundles doivent être cohérents et **non redondants**.
- Chaque bundle doit pointer vers **au moins 2 preuves**.
- Chaque preuve doit pointer vers **1 offre** et **1 méthode**.
- Chaque ressource doit pointer vers **1 offre** et **1 preuve**.
- `index.md` doit renvoyer vers : 3 offres + 3 preuves + 3 ressources + process.

---

# Notes de contenu à intégrer (profil)
Sans citer de détails sensibles, tu dois intégrer :
- Expérience : admin AD/serveurs/réseau, Linux/Windows, Docker/virtu, supervision/backup.
- Orientation : missions très techniques, documentation possible mais optimisée (templates/runbooks).
- Cible : TPE/PME, startups, HDF + remote.
- Positionnement : “solutions clés en main + exploitation stable + sécurité mesurable”.

---

## Fin : exécution
À la fin, tu dois avoir :
- Des pages complètes prêtes à publier
- Des TODO explicites pour l’humain (Proxmox + captures)
- Zéro info identifiable
- Zéro contenu offensif exploitable

Génère maintenant tous les fichiers listés, remplis tous les textes, et mets à jour `index.md` pour relier l’ensemble.