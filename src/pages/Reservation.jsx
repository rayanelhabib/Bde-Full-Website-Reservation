import { useReservation } from '../hooks/useReservation'
import { useNavigate } from 'react-router-dom'

import Alert from '../components/ui/Alert'
import Button from '../components/ui/Button'

import BackButton from '../components/layout/BackButton'
import PageHeader from '../components/layout/PageHeader'

import PersonalInfoSection from '../components/form/PersonalInfoSection'
import ContactInfoSection from '../components/form/ContactInfoSection'
import IdentitySection from '../components/form/IdentitySection'

import ConfirmationSummary from '../components/reservation/ConfirmationSummary'
import SuccessMessage from '../components/reservation/SuccessMessage'

function Reservation() {
  const navigate = useNavigate()
  const {
    formData,
    loading,
    error,
    success,
    showConfirmation,
    handleChange,
    handleSubmit,
    handleConfirm,
    handleEdit
  } = useReservation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full">
        <BackButton />

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <PageHeader
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            title="Formulaire de Réservation"
            subtitle="Remplissez les informations ci-dessous pour réserver votre place à l'événement"
          />

          <div className="p-8 md:p-12">
            {error && <Alert type="error">{error}</Alert>}

            {success && <SuccessMessage onBackHome={() => navigate('/')} />}

            {showConfirmation && (
              <ConfirmationSummary
                formData={formData}
                onConfirm={handleConfirm}
                onEdit={handleEdit}
                loading={loading}
              />
            )}

            {!showConfirmation && !success && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <PersonalInfoSection
                  formData={formData}
                  onChange={handleChange}
                />

                <ContactInfoSection
                  formData={formData}
                  onChange={handleChange}
                />

                <IdentitySection
                  formData={formData}
                  onChange={handleChange}
                />

                <div className="pt-6 border-t-2 border-gray-100">
                  <Button
                    type="submit"
                    variant="primary"
                    size="xl"
                    fullWidth
                    disabled={loading || success}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Continuer vers la confirmation
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    * Champs obligatoires
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservation
