import { useNavigate } from 'react-router-dom'

/**
 * Composant de bouton retour
 */
function BackButton({ className = '' }) {
  const navigate = useNavigate()
  
  return (
    <button
      onClick={() => navigate('/')}
      className={`btn btn-ghost btn-sm text-white hover:bg-white/20 mb-4 ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Retour
    </button>
  )
}

export default BackButton



