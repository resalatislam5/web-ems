import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { Button } from './ui/button';

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const next = i18n.language?.startsWith('bn') ? 'en' : 'bn';
  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={() => i18n.changeLanguage(next)}
      className='gap-2 font-medium'
      aria-label='Toggle language'
    >
      <Languages className='h-4 w-4' />
      <span className='text-xs uppercase tracking-wider'>
        {next === 'bn' ? 'বাংলা' : 'EN'}
      </span>
    </Button>
  );
};
