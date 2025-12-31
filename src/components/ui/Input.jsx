/**
 * Composant Input réutilisable avec icône optionnelle
 */
function Input({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  required = false,
  icon,
  helperText,
  error,
  className = ''
}) {
  return (
    <div className="form-control">
      {label && (
        <label className="label pb-2">
          <span className="label-text font-semibold text-gray-700 flex items-center">
            {icon && <span className="mr-1">{icon}</span>}
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </span>
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`input input-bordered w-full h-14 focus:input-primary focus:ring-2 focus:ring-purple-500 transition-all text-base ${
          error ? 'input-error border-red-500' : ''
        } ${className}`}
      />
      {helperText && !error && (
        <label className="label">
          <span className="label-text-alt text-gray-500">{helperText}</span>
        </label>
      )}
      {error && (
        <label className="label">
          <span className="label-text-alt text-red-500">{error}</span>
        </label>
      )}
    </div>
  )
}

export default Input

