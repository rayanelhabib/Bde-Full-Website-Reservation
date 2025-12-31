# Site Web de Réservation - BDE Al Kendi

Site web de réservation d'événements pour l'école BDE Al Kendi avec intégration Supabase.

## Fonctionnalités

- ✅ Page d'accueil avec bouton de réservation
- ✅ Page de réservation avec formulaire complet
- ✅ Formulaire contenant : Nom, Prénom, Numéro de téléphone, Carte Nationale
- ✅ Envoi des données vers Supabase
- ✅ Interface moderne avec TailwindCSS et DaisyUI

## Installation

```bash
npm install
```

## Configuration Supabase

### 1. Créer un projet Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un compte ou connectez-vous
3. Créez un nouveau projet

### 2. Créer la table `reservations`

Dans l'éditeur SQL de Supabase, exécutez cette commande :

```sql
CREATE TABLE reservations (
  id BIGSERIAL PRIMARY KEY,
  nom TEXT NOT NULL,
  prenom TEXT NOT NULL,
  numero TEXT NOT NULL,
  carte_nationale TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);
```

### 3. Configurer les politiques RLS (Row Level Security)

Pour permettre l'insertion publique (sans authentification) :

```sql
-- Activer RLS
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Créer une politique qui permet l'insertion pour tous
CREATE POLICY "Permettre l'insertion publique"
ON reservations
FOR INSERT
TO public
WITH CHECK (true);

-- Optionnel : Permettre la lecture (si nécessaire)
CREATE POLICY "Permettre la lecture publique"
ON reservations
FOR SELECT
TO public
USING (true);
```

### 4. Configurer les variables d'environnement

Créez un fichier `.env` à la racine du projet :

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_cle_anon_supabase
```

**Comment trouver ces valeurs :**

1. Dans votre projet Supabase, allez dans **Settings** > **API**
2. **Project URL** = `VITE_SUPABASE_URL`
3. **anon public** key = `VITE_SUPABASE_ANON_KEY`

## Lancer le projet

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## Structure du projet

```
src/
├── lib/
│   └── supabase.js       # Configuration Supabase
├── pages/
│   ├── Home.jsx          # Page d'accueil
│   └── Reservation.jsx   # Page de réservation
├── App.jsx               # Router principal
└── main.jsx              # Point d'entrée
```

## Technologies utilisées

- React 19
- Vite
- React Router DOM
- TailwindCSS
- DaisyUI
- Supabase

## Notes importantes

⚠️ **Sécurité** : Dans un environnement de production, vous devriez :
- Ajouter une authentification utilisateur
- Valider les données côté serveur
- Implémenter des limites de taux (rate limiting)
- Ajouter une validation plus stricte des entrées
