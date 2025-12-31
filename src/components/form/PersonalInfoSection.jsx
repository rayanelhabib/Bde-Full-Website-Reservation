import SectionHeader from '../ui/SectionHeader'
import FormField from './FormField'

/**
 * Section Informations Personnelles
 */
function PersonalInfoSection({ formData, onChange, errors = {} }) {
  return (
    <div className="mb-8">
      <SectionHeader
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        }
        title="Informations Personnelles"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          name="prenom"
          label="Prénom"
          value={formData.prenom}
          onChange={onChange}
          placeholder="Entrez votre prénom"
          required
          icon={
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          }
          error={errors.prenom}
        />

        <FormField
          name="nom"
          label="Nom de famille"
          value={formData.nom}
          onChange={onChange}
          placeholder="Entrez votre nom"
          required
          error={errors.nom}
        />
      </div>
    </div>
  )
}

export default PersonalInfoSection

