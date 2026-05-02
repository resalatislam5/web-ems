import logo from '@/common/assets/ems-logo.png';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = ({ className = '' }: { className?: string }) => (
  <Link
    href='/'
    className={`flex items-center gap-2 group ${className}`}
    aria-label='EMS home'
  >
    <Image
      src={logo}
      alt='EMS — Education Management System'
      className='h-9 w-auto transition-transform duration-300 group-hover:scale-105'
      width={120}
      height={36}
    />
  </Link>
);
