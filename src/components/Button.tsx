import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
  onClick?: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[#F2EFE9] text-[#020202] border-[#F2EFE9] hover:bg-[#D6D1C7]',
  secondary: 'bg-transparent border-[#383530] text-[#F2EFE9] hover:bg-[#161513] hover:border-[#F2EFE9] hover:text-[#FFFFFF]',
  tertiary: 'bg-[#161513] border-[#262421] text-[#A8A29C] hover:bg-[#22201D] hover:border-[#3D3A35] hover:text-[#F2EFE9]',
};

// 3. Словарь размеров
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'w-40',
  md: 'w-full max-w-80',
  lg: 'w-full'
};

const Button: React.FC<ButtonProps> = ({  
  variant = 'primary', // значение по умолчанию
  size = 'md',
  className = '',
  onClick, 
  text, 
  type, 
  href  }: ButtonProps) => {
  
    const baseStyles =
    'flex justify-center items-center h-8 font-medium rounded-sm uppercase text-xs border cursor-pointer';

  if (href) {
    return (
      <Link
        to={href}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      >
        {text}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
