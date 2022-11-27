import { useMemo } from 'react';

interface ButtonProps {
  tailwind?: boolean;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  tailwind = false,
  size = 'md',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = useMemo(() => {
    if (primary) return 'bg-blue-400';
    if (tailwind) return 'bg-red-400';
    return 'bg-green-400';
  }, [primary, tailwind]);

  return (
    <button
      type="button"
      className={[mode, `py-2 px-5 text-white rounded-md w-${size}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
