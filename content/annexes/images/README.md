# Annexes — Images

Ce dossier contient les images (captures d'écran, schémas) utilisées dans les preuves et les pages du site.

## Nommage standard

Chaque image suit la convention :

```
[ID_preuve]_[description].png
```

### Exemples

| Fichier | Preuve | Contenu |
|---------|--------|---------|
| `A1_schema.png` | Preuve A1 | Schéma réseau segmenté |
| `A1_backup_restore.png` | Preuve A1 | Preuve de test de restauration |
| `A1_monitoring_dashboard.png` | Preuve A1 | Dashboard de supervision |
| `A2_backup_planning.png` | Preuve A2 | Planning de sauvegarde PBS |
| `A2_restore_log.png` | Preuve A2 | Journal d'un test de restauration |
| `B1_ou_schema.png` | Preuve B1 | Schéma de structure OU AD |
| `B1_laps_proof.png` | Preuve B1 | Preuve LAPS déployé |
| `B1_bastion_access.png` | Preuve B1 | Preuve accès via bastion |
| `B2_checklist_example.png` | Preuve B2 | Exemple checklist onboarding |
| `B2_event_log.png` | Preuve B2 | Journal d'événements Windows |
| `B2_audit_table.png` | Preuve B2 | Tableau d'audit des comptes |
| `C1_proxmox_overview.png` | Preuve C1 | Vue Proxmox (VMs, réseaux) |
| `C1_pbs_backup.png` | Preuve C1 | Preuve backup PBS |
| `C1_monitoring_dashboard.png` | Preuve C1 | Dashboard supervision |
| `C2_portainer.png` | Preuve C2 | Vue Portainer |
| `C2_sso_login.png` | Preuve C2 | Page login SSO |
| `C2_auth_flow.png` | Preuve C2 | Schéma flux authentification |
| `T1_grafana_dashboard.png` | Preuve T1 | Dashboard Grafana |
| `T1_alert_example.png` | Preuve T1 | Exemple d'alerte |
| `T2_backlog.png` | Preuve T2 | Backlog de patching |
| `T2_patch_proof.png` | Preuve T2 | Preuve de patch appliqué |

## Règles d'anonymisation avant commit

**Chaque image doit être anonymisée avant d'être ajoutée au dépôt Git.**

Checklist obligatoire :

- [ ] **Flouter** : barres de titre, identifiants, noms de machine, IP, domaines, URLs.
- [ ] **Remplacer** : utiliser les tokens standards (`CLIENT-X`, `DC01`, `APP01`, `LAN-A`, `DMZ`, `VPN`, `corp.local`, `example.com`).
- [ ] **Cartouche** : ajouter un cartouche visible au-dessus de la capture :
  ```
  Capture anonymisée — méthode : /methodes/anonymisation-publication
  ```
- [ ] **Métadonnées EXIF** : supprimer avec `exiftool -all= image.png`.
- [ ] **Vérification** : grep inverse sur les noms/IP/domaines réels.
- [ ] **Nommage** : respecter la convention ci-dessus.

## Outils suggérés

| Outil | Usage |
|-------|-------|
| **GIMP** | Floutage, ajout de cartouche, retouche |
| **Shotwell** | Floutage rapide |
| **ImageMagick** | Floutage batch en CLI (`convert -blur 0x8`) |
| **exiftool** | Suppression métadonnées EXIF (`exiftool -all=`) |
| **mat2** | Nettoyage métadonnées (alternative) |

## Important

> **Ne jamais committer d'images non anonymisées.**
>
> Travailler dans une branche `draft/`, anonymiser, puis merger dans `main` uniquement les images finales.
> L'historique Git conserve tout : une image brute même supprimée reste dans l'historique.
