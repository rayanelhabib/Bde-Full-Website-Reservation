import SectionHeader from '../ui/SectionHeader'
import FormField from './FormField'

/**
 * Section Pièce d'Identité
 */
function IdentitySection({ formData, onChange, errors = {} }) {
  return (
    <div className="mb-8">
      <SectionHeader
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
          </svg>
        }
        title="Pièce d'Identité"
      />

      <FormField
        name="carte_nationale"
        label="Numéro de Carte Nationale"
        value={formData.carte_nationale}
        onChange={onChange}
        placeholder="Entrez le numéro de votre carte nationale"
        required
        helperText="Ces informations sont nécessaires pour valider votre réservation"
        icon={
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        }
        error={errors.carte_nationale}
      />
    </div>
  )
}

export default IdentitySection




