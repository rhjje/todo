import { KeyboardEvent, MouseEvent } from 'react';

export const buttonize = <T>(
  handler: (event: MouseEvent<T> | KeyboardEvent<T>) => void,
) => ({
  role: 'button',
  onClick: (event: MouseEvent<T>) => handler(event),
  onKeyDown: (event: KeyboardEvent<T>) => {
    if (event.key === 'Enter') handler(event);
  },
});
