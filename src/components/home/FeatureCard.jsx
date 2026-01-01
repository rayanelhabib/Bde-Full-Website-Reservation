/**
 * Carte de fonctionnalité pour la page d'accueil - Design bleu/blanc/gris
 */
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 shadow-lg dark:shadow-xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-3 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{description}</p>
    </div>
  )
}

export default FeatureCard

