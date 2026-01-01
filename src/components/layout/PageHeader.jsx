/**
 * Composant d'en-tête de page avec titre et description
 */
function PageHeader({ icon, title, subtitle }) {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 px-8 py-10 text-center transition-colors duration-300">
      {icon && (
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 dark:bg-white/10 rounded-full mb-4">
          {icon}
        </div>
      )}
      <h1 className="text-4xl font-bold text-white mb-3">
        {title}
      </h1>
      {subtitle && (
        <p className="text-white/90 dark:text-white/80 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default PageHeader






