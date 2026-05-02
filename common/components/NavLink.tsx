'use client';

import Link, { LinkProps } from 'next/link';
import { forwardRef, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '../lib/utils';

type ClassNameFn = (props: { isActive: boolean }) => string;

interface NavLinkProps extends Omit<LinkProps, 'className'> {
  className?: string | ClassNameFn;
  activeClassName?: string;
  end?: boolean;
  children: ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, end, children, ...props }, ref) => {
    const pathname = usePathname();

    const path = typeof href === 'string' ? href : href.toString();

    const isActive = end ? pathname === path : pathname.startsWith(path);

    let finalClassName = '';

    if (typeof className === 'function') {
      finalClassName = className({ isActive });
    } else {
      finalClassName = cn(className, isActive && activeClassName);
    }

    return (
      <Link ref={ref} href={href} className={finalClassName} {...props}>
        {children}
      </Link>
    );
  },
);

NavLink.displayName = 'NavLink';
export { NavLink };
