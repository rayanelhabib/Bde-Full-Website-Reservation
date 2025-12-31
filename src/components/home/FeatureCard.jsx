/**
 * Carte de fonctionnalité pour la page d'accueil - Design bleu/blanc/gris
 */
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-gray-900 font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default FeatureCard

