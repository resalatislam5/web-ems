import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { siteInfo } from '../utils/siteInfo';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className='border-t border-border bg-muted/40 mt-24'>
      <div className='main-container py-16 grid gap-12 md:grid-cols-4'>
        <div className='md:col-span-2 max-w-sm'>
          <Logo />
          <p className='mt-4 text-sm text-muted-foreground leading-relaxed'>
            {t('footer.tagline')}
          </p>
          <div className='mt-6 space-y-3 text-sm text-muted-foreground'>
            <Link
              className='flex items-center gap-2'
              href={`mailto:${siteInfo.email}`}
            >
              <Mail className='h-4 w-4 text-primary' /> {siteInfo.email}
            </Link>

            <Link
              className='flex items-center gap-2'
              href={`tel:${siteInfo.mobile}`}
            >
              <Phone className='h-4 w-4 text-primary' /> {siteInfo.mobile}
            </Link>

            <div className='flex items-center gap-2'>
              <MapPin className='h-4 w-4 text-primary' /> Dhaka, Bangladesh
            </div>
          </div>
        </div>

        <div>
          <h4 className='font-display font-semibold mb-4'>
            {t('footer.product')}
          </h4>
          <ul className='space-y-2 text-sm text-muted-foreground'>
            <li>
              <Link href='/features' className='hover:text-primary'>
                {t('nav.features')}
              </Link>
            </li>
            <li>
              <Link href='/pricing' className='hover:text-primary'>
                {t('nav.pricing')}
              </Link>
            </li>
            <li>
              <Link href='/contact' className='hover:text-primary'>
                {t('nav.contact')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='font-display font-semibold mb-4'>
            {t('footer.company')}
          </h4>
          <ul className='space-y-2 text-sm text-muted-foreground'>
            <li>
              <Link href='/' className='hover:text-primary'>
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link href='/contact' className='hover:text-primary'>
                {t('contact.emailUs')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='border-t border-border'>
        <div className='main-container py-6 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2'>
          <span>
            © {new Date().getFullYear()} EMS. {t('footer.rights')}
          </span>
          <span>
            Maintained by{' '}
            <Link
              target='_blank'
              href={siteInfo.company_url}
              className='text-primary hover:underline font-semibold'
            >
              {siteInfo.company_name}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
