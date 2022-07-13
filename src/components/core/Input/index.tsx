import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ ...props }, ref) => (
  <input ref={ref} className={styles.Input} {...props} />
));
