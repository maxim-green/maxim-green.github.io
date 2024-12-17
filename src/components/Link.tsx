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
        'text-lg text-amber-50 p-2 transition hover:underline underline-offset-4 decoration-dotted', 
        active && 'text-blue-300',
        props.className
      )}
    >
      {props.children}
    </a>
  )
}