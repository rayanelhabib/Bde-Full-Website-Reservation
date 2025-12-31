/**
 * Composant d'en-tête de page avec titre et description
 */
function PageHeader({ icon, title, subtitle }) {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-10 text-center">
      {icon && (
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
          {icon}
        </div>
      )}
      <h1 className="text-4xl font-bold text-white mb-3">
        {title}
      </h1>
      {subtitle && (
        <p className="text-white/90 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default PageHeader




