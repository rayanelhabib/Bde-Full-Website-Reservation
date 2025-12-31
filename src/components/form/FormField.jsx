import Input from '../ui/Input'

/**
 * Composant FormField pour les champs de formulaire avec icône
 */
function FormField({
  name,
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  required = false,
  icon,
  helperText,
  error
}) {
  const iconElement = icon ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {icon}
    </svg>
  ) : null

  return (
    <Input
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      required={required}
      icon={iconElement}
      helperText={helperText}
      error={error}
    />
  )
}

export default FormField




