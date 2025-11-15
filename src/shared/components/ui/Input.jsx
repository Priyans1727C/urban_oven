import React, { forwardRef } from 'react';

const Input = forwardRef(({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = false,
  size = 'md',
  variant = 'outline',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  ...props
}, ref) => {
  const baseClasses = `
    transition-all duration-200 outline-none
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg',
  };

  const variantClasses = {
    outline: `
      border-2 rounded-lg bg-white
      ${error 
        ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
        : 'border-gray-300 focus:border-orange-500 focus:ring-orange-200'
      }
      focus:ring-2
    `,
    filled: `
      border-0 rounded-lg bg-gray-100
      ${error 
        ? 'ring-2 ring-red-500 focus:ring-red-500' 
        : 'focus:ring-2 focus:ring-orange-500'
      }
      focus:bg-white
    `,
    underline: `
      border-0 border-b-2 rounded-none bg-transparent px-0
      ${error 
        ? 'border-red-500 focus:border-red-500' 
        : 'border-gray-300 focus:border-orange-500'
      }
    `,
  };

  const iconClasses = Icon ? (iconPosition === 'left' ? 'pl-12' : 'pr-12') : '';

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && (
          <div className={`
            absolute top-1/2 transform -translate-y-1/2 
            ${iconPosition === 'left' ? 'left-4' : 'right-4'}
            text-gray-500
          `}>
            <Icon className="w-5 h-5" />
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`
            ${baseClasses}
            ${sizeClasses[size]}
            ${variantClasses[variant]}
            ${iconClasses}
          `}
          {...props}
        />
      </div>
      
      {(error || helperText) && (
        <p className={`mt-2 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;