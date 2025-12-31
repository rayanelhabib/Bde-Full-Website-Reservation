# Structure des Composants

Ce dossier contient tous les composants React organisés par catégorie.

## Organisation

```
components/
├── ui/              # Composants UI de base réutilisables
├── form/            # Composants spécifiques aux formulaires
├── reservation/     # Composants spécifiques à la réservation
├── home/            # Composants de la page d'accueil
└── layout/          # Composants de mise en page
```

## Composants UI (`ui/`)

Composants de base réutilisables dans toute l'application :

- **Button.jsx** - Bouton avec variantes (primary, secondary, outline, ghost, success)
- **Input.jsx** - Champ de saisie avec icône et gestion d'erreur
- **Alert.jsx** - Messages d'alerte (error, success, info)
- **SectionHeader.jsx** - En-tête de section avec icône

## Composants Formulaire (`form/`)

Composants pour les formulaires :

- **FormField.jsx** - Champ de formulaire avec label et icône
- **PersonalInfoSection.jsx** - Section informations personnelles
- **ContactInfoSection.jsx** - Section informations de contact
- **IdentitySection.jsx** - Section pièce d'identité

## Composants Réservation (`reservation/`)

Composants spécifiques au processus de réservation :

- **ConfirmationSummary.jsx** - Récapitulatif avant confirmation
- **SuccessMessage.jsx** - Message de succès après réservation

## Composants Home (`home/`)

Composants de la page d'accueil :

- **HeroSection.jsx** - Section hero principale
- **FeatureCard.jsx** - Carte de fonctionnalité
- **FeaturesSection.jsx** - Section des fonctionnalités
- **AnimatedBackground.jsx** - Fond animé avec blobs

## Composants Layout (`layout/`)

Composants de mise en page :

- **PageHeader.jsx** - En-tête de page avec titre et icône
- **BackButton.jsx** - Bouton retour vers l'accueil

## Utilisation

Exemple d'import :

```jsx
import Button from '../components/ui/Button'
import PersonalInfoSection from '../components/form/PersonalInfoSection'
```

## Modification d'un composant

Chaque composant est indépendant et peut être modifié sans affecter les autres. Pour modifier un composant :

1. Ouvrez le fichier du composant
2. Modifiez le code selon vos besoins
3. Les changements seront automatiquement appliqués partout où le composant est utilisé

