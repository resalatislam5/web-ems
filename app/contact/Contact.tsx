'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '@/common/components/Layout';
import { PageBanner } from '@/common/components/PageBanner';
import { Button } from '@/common/components/ui/button';
import { Input } from '@/common/components/ui/input';
import { Label } from '@/common/components/ui/label';
import { Textarea } from '@/common/components/ui/textarea';
import { siteInfo } from '@/common/utils/siteInfo';

const Contact = () => {
  const { t } = useTranslation();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      // toast({ title: t('contact.sent') });
    }, 700);
  };

  const whatsappNumber = siteInfo.mobile;
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent("Hi! I'd like to know more about EMS.")}`;

  const cards = [
    {
      icon: Mail,
      label: t('contact.emailUs'),
      value: siteInfo.email,
      href: `mailto:${siteInfo.email}`,
    },
    {
      icon: Phone,
      label: t('contact.callUs'),
      value: siteInfo.mobile,
      href: `tel:${siteInfo.mobile}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: siteInfo.mobile,
      href: whatsappLink,
      accent: true,
    },
    { icon: MapPin, label: t('contact.visit'), value: 'Dhaka, Bangladesh' },
  ];

  return (
    <Layout>
      <PageBanner
        eyebrow={t('nav.contact')}
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        trustItems={[
          'Reply within 24h',
          'Personalized demo',
          'Bilingual support',
        ]}
      />

      <section className='main-container py-16 pb-24 grid lg:grid-cols-5 gap-8'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='lg:col-span-2 space-y-4'
        >
          {cards.map((c) => {
            const Icon = c.icon;
            const content = (
              <>
                <div
                  className={`h-11 w-11 rounded-xl flex items-center justify-center shadow-elegant shrink-0 ${c.accent ? 'bg-[#25D366]' : 'bg-primary-gradient'}`}
                >
                  <Icon className='h-5 w-5 text-primary-foreground' />
                </div>
                <div>
                  <div className='text-xs uppercase tracking-wider text-muted-foreground'>
                    {c.label}
                  </div>
                  <div className='mt-1 font-semibold'>{c.value}</div>
                </div>
              </>
            );
            const className =
              'bg-card border border-border rounded-2xl p-6 flex items-start gap-4 hover:shadow-card transition-shadow';
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel='noopener noreferrer'
                className={className}
              >
                {content}
              </a>
            ) : (
              <div key={c.label} className={className}>
                {content}
              </div>
            );
          })}
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='lg:col-span-3 bg-card border border-border rounded-3xl p-8 shadow-card space-y-5'
        >
          <div className='grid sm:grid-cols-2 gap-5'>
            <div>
              <Label htmlFor='name'>{t('contact.name')}</Label>
              <Input id='name' name='name' required className='mt-2 h-11' />
            </div>
            <div>
              <Label htmlFor='email'>{t('contact.email')}</Label>
              <Input
                id='email'
                name='email'
                type='email'
                required
                className='mt-2 h-11'
              />
            </div>
          </div>
          <div>
            <Label htmlFor='org'>{t('contact.org')}</Label>
            <Input id='org' name='org' className='mt-2 h-11' />
          </div>
          <div>
            <Label htmlFor='message'>{t('contact.message')}</Label>
            <Textarea
              id='message'
              name='message'
              required
              rows={5}
              className='mt-2'
            />
          </div>
          <Button
            type='submit'
            variant='hero'
            size='lg'
            className='w-full'
            disabled={submitting}
          >
            {t('contact.send')} <Send className='h-4 w-4' />
          </Button>
        </motion.form>
      </section>

      {/* Floating WhatsApp chat button */}
      <a
        href={whatsappLink}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Chat on WhatsApp'
        className='fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full pl-4 pr-5 py-3 shadow-elegant transition-all hover:scale-105'
      >
        <span className='relative flex h-6 w-6 items-center justify-center'>
          <span className='absolute inset-0 rounded-full bg-white/30 animate-ping' />
          <svg
            viewBox='0 0 24 24'
            className='h-6 w-6 relative'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.595 5.385l-.999 3.648 3.893-1.022zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
          </svg>
        </span>
        <span className='font-semibold text-sm hidden sm:inline'>
          Chat on WhatsApp
        </span>
      </a>
    </Layout>
  );
};

export default Contact;
