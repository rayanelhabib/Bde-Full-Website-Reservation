import Button from '../ui/Button'

/**
 * Composant de récapitulatif de confirmation
 */
function ConfirmationSummary({ formData, onConfirm, onEdit, loading }) {
  return (
    <div className="mb-8 p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl border-2 border-purple-300 shadow-xl">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500 rounded-full mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Confirmez vos informations
        </h2>
        <p className="text-gray-600">Vérifiez les détails avant de finaliser votre réservation</p>
      </div>
      
      <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
        <div className="space-y-4">
          <SummaryRow
            icon={
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            }
            label="Nom complet"
            value={`${formData.prenom} ${formData.nom}`}
          />
          <SummaryRow
            icon={
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            }
            label="Téléphone"
            value={formData.numero}
          />
          <SummaryRow
            icon={
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            }
            label="Carte Nationale"
            value={formData.carte_nationale}
            noBorder
          />
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          variant="primary"
          size="xl"
          onClick={onConfirm}
          loading={loading}
          disabled={loading}
          fullWidth
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Confirmer la réservation
        </Button>
        <Button
          variant="outline"
          size="xl"
          onClick={onEdit}
          disabled={loading}
          fullWidth
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Modifier
        </Button>
      </div>
    </div>
  )
}

function SummaryRow({ icon, label, value, noBorder = false }) {
  return (
    <div className={`flex justify-between items-center py-3 ${noBorder ? '' : 'border-b border-gray-200'}`}>
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {icon}
        </svg>
        <span className="font-semibold text-gray-700">{label}</span>
      </div>
      <span className="text-gray-800 font-medium">{value}</span>
    </div>
  )
}

export default ConfirmationSummary

