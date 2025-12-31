/**
 * Composant SectionHeader pour les sections du formulaire
 */
function SectionHeader({ icon, title, subtitle }) {
  return (
    <div className="flex items-center mb-4 pb-3 border-b-2 border-purple-100">
      {icon && (
        <div className="bg-purple-100 rounded-lg p-2 mr-3">
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
      </div>
    </div>
  )
}

export default SectionHeader

