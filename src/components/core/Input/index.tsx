import { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input ref={ref} className={classNames(styles.Input, className)} {...props} />
));
