import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: 'grey' | 'blue' | 'red' | 'green';
  size?: 'small' | 'normal';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, color = 'grey', size = 'normal', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          styles.Button,
          size === 'small' && styles.ButtonSmall,
          size === 'normal' && styles.ButtonNormal,
          color === 'grey' && styles.ButtonGrey,
          color === 'blue' && styles.ButtonBlue,
          color === 'red' && styles.ButtonRed,
          color === 'green' && styles.ButtonGreen,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
