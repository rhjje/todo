import { ReactElement } from 'react';
import { ButtonProps } from '../Button';
import styles from './GroupButtons.module.scss';

interface GroupButtonsProps {
  children: ReactElement<ButtonProps> | Array<ReactElement<ButtonProps>>;
}

export const GroupButtons = ({ children }: GroupButtonsProps) => (
  <div className={styles.GroupButtons}>{children}</div>
);
