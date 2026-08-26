[![GitHub Release][releases-shield]][releases]
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)
[![Community Forum][forum-shield]][forum]

# 🇬🇧 🇩🇪 🇪🇸 🇮🇹 🇳🇱 🇵🇹 Multi-languages support

English | Deutsch | Español | Italiano | Nederlands | Português

# 🛡️ Somfy Protexial Card

Carte personnalisée Home Assistant pour les centrales **Somfy Protexial / Protexiom / Protexial IO**.

Elle permet de regrouper dans une seule carte :

- le contrôle de l'alarme
- l'état de la centrale
- les principaux capteurs Somfy
- les défauts détectés
- les équipements actifs ou mis en pause
- les boutons de réinitialisation
- la dernière synchronisation
- l'actualisation manuelle

La carte est conçue pour fonctionner avec l'intégration
[**AuroreVgn/somfy-protexial**](https://github.com/AuroreVgn/somfy-protexial).

Elle dispose d'un **éditeur graphique**, s'adapte automatiquement aux thèmes clair et sombre de Home Assistant et prend en charge plusieurs langues.

---

## ✅ Prérequis

- **Home Assistant 2025.12 ou supérieur**
- Intégration [somfy-protexial](https://github.com/AuroreVgn/somfy-protexial) installée et configurée
- **Version minimale recommandée de l'intégration : 2.1.1**

> La carte peut détecter automatiquement une grande partie des entités créées par l'intégration.
> Les `entity_id` peuvent également être définis manuellement depuis l'éditeur graphique ou le YAML.

---

## 📥 Installation

### Via HACS — recommandé

1. Ouvrir **HACS**
2. Aller dans **Frontend**
3. Ouvrir le menu **⋮**
4. Choisir **Dépôts personnalisés**
5. Ajouter :

```text
https://github.com/AuroreVgn/somfy-protexial-card
```

6. Sélectionner la catégorie **Lovelace**
7. Installer **Somfy Protexial Card**
8. Recharger Home Assistant si nécessaire puis vider le cache du navigateur / de l'application

### Installation manuelle

1. Télécharger `somfy-protexial-card.js`
2. Copier le fichier dans :

```text
/config/www/
```

3. Dans Home Assistant :

**Paramètres → Tableaux de bord → Ressources → Ajouter une ressource**

4. Ajouter :

```text
/local/somfy-protexial-card.js
```

Type :

```text
Module JavaScript
```

5. Vider le cache du navigateur ou de l'application Home Assistant

---

# 🎯 Utilisation

## Configuration minimale

```yaml
type: custom:somfy-protexial-card
alarm_entity: alarm_control_panel.alarme
```

Grâce à la **détection automatique**, cette configuration peut suffire dans la majorité des installations.

---

## Configuration complète

```yaml
type: custom:somfy-protexial-card
alarm_entity: alarm_control_panel.alarme
title: "Somfy Protexial — Contrôle"

automatic_detection: true

show_faults: true
show_pauses: true
show_last_sync: true
show_refresh: true
compact_mode: false

sensors:
  - capteur1
  - capteur2
  - capteur3
  - capteur4
  - capteur5
  - capteur6
  - capteur7
  - capteur8
  - capteur9

entities:
  capteur1: binary_sensor.somfy_protexial_batterie
  capteur2: binary_sensor.somfy_protexial_centrale
  capteur3: binary_sensor.somfy_protexial_portes_ou_fenetres
  capteur4: binary_sensor.somfy_protexial_mouvement
  capteur5: binary_sensor.somfy_protexial_camera
  capteur6: binary_sensor.somfy_protexial_comm_centrale_capteurs
  capteur7: binary_sensor.somfy_protexial_communication_gsm
  capteur8: sensor.somfy_protexial_operateur_gsm
  capteur9: sensor.somfy_protexial_signal_gsm_5

labels:
  capteur1: "Batterie"
  capteur3: "Portes / Fenêtres"
  capteur8: "Opérateur GSM"
```

La carte possède un **éditeur graphique intégré**. Il n'est donc normalement pas nécessaire d'éditer le YAML à la main.

---

# ✨ Fonctionnalités

## 🔐 Contrôle de l'alarme

La carte affiche l'état actuel de l'alarme avec une couleur dynamique et indique depuis combien de temps cet état est actif.

Les boutons disponibles dépendent automatiquement des fonctions exposées par `alarm_control_panel`.

| Bouton | Action Home Assistant |
|---|---|
| Désarmer | `alarm_control_panel.alarm_disarm` |
| Absent | `alarm_control_panel.alarm_arm_away` |
| Présent | `alarm_control_panel.alarm_arm_home` |
| Nuit | `alarm_control_panel.alarm_arm_night` |

Le bouton **Nuit** n'est affiché que lorsque la centrale le supporte.

---

## 🔑 Code / PIN

Si la centrale exige un code, la carte affiche une **fenêtre de saisie intégrée**.

Le code n'a pas besoin d'être stocké dans la configuration Lovelace.

Cela évite l'utilisation des fenêtres natives `prompt()` du navigateur et conserve une interface cohérente avec Home Assistant.

---

## 📡 État du système

La section **État** affiche jusqu'à neuf informations principales :

| Information | Entité par défaut |
|---|---|
| Batterie | `binary_sensor.somfy_protexial_batterie` |
| Centrale | `binary_sensor.somfy_protexial_centrale` |
| Portes / Fenêtres | `binary_sensor.somfy_protexial_portes_ou_fenetres` |
| Mouvement | `binary_sensor.somfy_protexial_mouvement` |
| Caméra | `binary_sensor.somfy_protexial_camera` |
| Communication centrale ↔ capteurs | `binary_sensor.somfy_protexial_comm_centrale_capteurs` |
| Communication GSM | `binary_sensor.somfy_protexial_communication_gsm` |
| Opérateur GSM | `sensor.somfy_protexial_operateur_gsm` |
| Signal GSM | `sensor.somfy_protexial_signal_gsm_5` |

Les entités peuvent être remplacées individuellement depuis l'éditeur graphique.

### Ouverture du More Info

Un clic sur une ligne ouvre directement la fenêtre **Plus d'informations** native de Home Assistant pour l'entité correspondante.

---

## 🚨 Défauts

La carte peut rechercher automatiquement les entités de diagnostic Somfy et afficher les anomalies dans une section dédiée.

Exemples :

- défaut batterie
- défaut radio
- défaut de communication
- arrachement
- ouverture
- défaut d'un équipement

Les valeurs normales comme **OK**, **Connecté** ou **Fermé** ne sont pas considérées comme des défauts.

Pour les entités de communication Somfy :

```text
ON  = communication correcte
OFF = défaut de communication
```

---

## ⏸️ Équipements et mise en pause

La carte détecte les switches de pause créés par l'intégration Somfy.

La logique utilisée est :

```text
switch ON  = équipement actif
switch OFF = équipement en pause
```

Pour un équipement actif, la carte propose :

```text
Pause
```

Pour un équipement déjà en pause :

```text
Réactiver
```

Les actions correspondent à :

```text
Pause      → switch.turn_off
Réactiver  → switch.turn_on
```

---

## 🔄 Actualisation

Un bouton **Actualiser** est disponible directement dans l'en-tête de la carte.

Lorsque l'intégration fournit un bouton d'actualisation / synchronisation, la carte l'utilise automatiquement.

Dans le cas contraire, elle peut utiliser `homeassistant.update_entity` comme solution de secours.

---

## 🕒 Dernière synchronisation

La carte peut afficher la date de dernière synchronisation sous forme relative :

```text
depuis moins d'une minute
depuis 4 min
depuis 1h32
```

L'état de connexion de la centrale est affiché au-dessus de cette information :

```text
● Centrale connectée
  Dernière synchronisation
  depuis moins d'une minute ↻
```

---

## ♻️ Réinitialisation des défauts

La carte peut afficher jusqu'à trois boutons de réinitialisation :

- défauts piles
- défauts alarme
- liaison radio

Les entités par défaut sont :

```yaml
button.somfy_protexial_reinitialiser_defaut_piles
button.somfy_protexial_reinitialiser_defaut_alarme
button.somfy_protexial_reinitialiser_defaut_liaison_radio
```

Une confirmation est demandée avant l'exécution.

Les boutons qui n'existent pas dans Home Assistant peuvent être masqués automatiquement.

---

## 🪄 Détection automatique des entités

Lorsque `automatic_detection` est activé, la carte cherche automatiquement les entités correspondant aux différents éléments Somfy.

La détection utilise notamment :

- le domaine de l'entité
- son `entity_id`
- son nom
- les alias connus de l'intégration

Une entité définie manuellement dans `entities:` reste toujours prioritaire.

---

## 📱 Mode compact

La carte propose un **mode compact** destiné aux tableaux de bord mobiles ou aux vues contenant plusieurs cartes.

Exemple :

```yaml
type: custom:somfy-protexial-card
alarm_entity: alarm_control_panel.alarme
compact_mode: true
```

Le mode compact réduit l'espace utilisé tout en conservant les informations essentielles.

---

## 🎨 Thèmes

La carte utilise les variables CSS natives de Home Assistant et s'adapte automatiquement :

- aux thèmes clairs
- aux thèmes sombres
- aux couleurs principales du thème 
- aux rayons et ombres des cartes Home Assistant

---

# ⚙️ Options de configuration

| Option | Description | Défaut |
|---|---|---|
| `alarm_entity` | Entité `alarm_control_panel` | `alarm_control_panel.alarme` |
| `title` | Titre de la carte | Somfy Protexial — Contrôle |
| `automatic_detection` | Détection automatique des entités | `true` |
| `show_faults` | Affiche la section Défauts | `true` |
| `show_pauses` | Affiche les équipements / pauses | `true` |
| `show_last_sync` | Affiche la dernière synchronisation | `true` |
| `show_refresh` | Affiche le bouton Actualiser | `true` |
| `compact_mode` | Active le mode compact | `false` |
| `sensors` | Liste des capteurs affichés | Tous |
| `entities` | Remplacement manuel des entités | — |
| `labels` | Noms personnalisés | — |
| `last_sync_entity` | Entité utilisée pour la dernière synchronisation | Auto |
| `refresh_entity` | Bouton utilisé pour l'actualisation | Auto |

---

# 🚦 États de l'alarme

| État Home Assistant | Affichage |
|---|---|
| `disarmed` | Désarmée |
| `armed_away` | Armée — Absent |
| `armed_home` | Armée — Présent |
| `armed_night` | Armée — Nuit |
| `arming` | Armement… |
| `pending` | En attente… |
| `triggered` | Déclenchée |
| `unknown` | Inconnu |
| `unavailable` | Indisponible |

---

# 🌍 Langues

La carte prend actuellement en charge :

- 🇫🇷 Français
- 🇬🇧 English
- 🇩🇪 Deutsch
- 🇪🇸 Español
- 🇮🇹 Italiano
- 🇳🇱 Nederlands
- 🇵🇹 Português

La langue est déterminée automatiquement à partir des paramètres Home Assistant / navigateur.

---

# 🧩 Intégration associée

Cette carte est principalement conçue pour :

👉 [**AuroreVgn/somfy-protexial**](https://github.com/AuroreVgn/somfy-protexial)

Intégration Home Assistant activement maintenue pour les centrales :

- Somfy Protexial
- Somfy Protexial IO
- Somfy Protexiom

---

[releases-shield]: https://img.shields.io/github/v/release/AuroreVgn/somfy-protexial-card?style=for-the-badge
[releases]: https://github.com/AuroreVgn/somfy-protexial-card/releases
[hacs-badge]: https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge
[hacs]: https://github.com/hacs/integration
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/
