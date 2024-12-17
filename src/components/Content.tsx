import type {ReactNode} from 'react';

interface ContentProps {
  children: ReactNode
}

export const Content = (
  { children }: ContentProps
) => {
  return (
    <main>
      <div className="container mx-auto">
        {children}
      </div>
    </main>
  );
}