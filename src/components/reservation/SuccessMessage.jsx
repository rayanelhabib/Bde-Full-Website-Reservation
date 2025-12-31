import Button from '../ui/Button'

/**
 * Composant de message de succès
 */
function SuccessMessage({ onBackHome }) {
  return (
    <div className="text-center py-12">
      <div className="mb-6 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-green-500 rounded-full p-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
      
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Réservation confirmée !
      </h2>
      <p className="text-xl text-gray-600 mb-2">
        Votre réservation a été enregistrée avec succès
      </p>
      <p className="text-lg text-gray-500 mb-8">
        Vous recevrez une confirmation par téléphone sous peu
      </p>
      
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8 border-2 border-green-200">
        <div className="flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-green-700 font-semibold text-lg">Merci pour votre confiance !</span>
        </div>
        <p className="text-gray-600">
          Vous serez redirigé vers la page d'accueil dans quelques secondes...
        </p>
      </div>

      <Button
        variant="primary"
        size="lg"
        onClick={onBackHome}
      >
        Retourner à l'accueil
      </Button>
    </div>
  )
}

export default SuccessMessage

