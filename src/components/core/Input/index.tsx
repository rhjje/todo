import { forwardRef, HTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends HTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return <input ref={ref} className={styles.Input} {...props} />;
  },
);
