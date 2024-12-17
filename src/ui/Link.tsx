import type {AnchorHTMLAttributes} from 'react';
import {clsx} from 'clsx';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

export const Link = (
  {active, ...props}: LinkProps
) => {
  return (
    <a 
      {...props} 
      className={clsx(
        'text-lg text-gray-800 dark:text-white p-2 transition hover:underline underline-offset-4 decoration-dotted', 
        active && 'text-blue-400 dark:text-blue-400',
        props.className
      )}
    >
      {props.children}
    </a>
  )
}