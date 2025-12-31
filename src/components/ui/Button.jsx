/**
 * Composant Button réutilisable avec plusieurs variantes
 */
function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false, 
  loading = false,
  type = 'button',
  className = '',
  fullWidth = false 
}) {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-purple-500 text-purple-600 hover:bg-purple-50',
    ghost: 'text-gray-600 hover:bg-gray-100',
    success: 'bg-green-500 hover:bg-green-600 text-white'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl h-14'
  }
  
  const widthClass = fullWidth ? 'w-full' : ''
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className} ${loading ? 'cursor-wait' : ''}`}
    >
      {loading ? (
        <span className="loading loading-spinner loading-sm mr-2"></span>
      ) : null}
      {children}
    </button>
  )
}

export default Button

