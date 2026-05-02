'use client';
import { Layout } from '@/common/components/Layout';
import { PageBanner } from '@/common/components/PageBanner';
import { Button } from '@/common/components/ui/button';
import { cn } from '@/common/lib/utils';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();

  const plans = ['monthly', 'yearly'] as const;

  return (
    <Layout>
      <PageBanner
        eyebrow={t('nav.pricing')}
        title={t('pricing.title')}
        subtitle={t('pricing.subtitle')}
        trustItems={['No setup fees', 'Cancel anytime', '14-day free trial']}
      />

      <section className='max-w-[800px] mx-auto py-12 pb-24 grid md:grid-cols-2 gap-6 mt-20'>
        {plans.map((p, i) => {
          const popular = p === 'yearly';
          const features = t(`pricing.plans.${p}.features`, {
            returnObjects: true,
          }) as string[];

          return (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                'relative rounded-3xl p-8 border transition-all',
                popular
                  ? 'border-primary shadow-elegant md:-translate-y-4'
                  : 'bg-card border-border hover:shadow-card',
              )}
            >
              {popular && (
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-gradient text-primary-foreground text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-full shadow-elegant'>
                  {t('pricing.popular')}
                </div>
              )}
              <h3 className='text-2xl font-display font-bold'>
                {t(`pricing.plans.${p}.name`)}
              </h3>
              <p className={cn('mt-2 text-sm text-muted-foreground')}>
                {t(`pricing.plans.${p}.desc`)}
              </p>
              <div className='mt-6 flex items-baseline gap-1'>
                <span className='text-5xl font-display font-bold'>
                  <span
                    className={cn(
                      'text-2xl font-display line-through',
                      'text-muted-foreground/60',
                    )}
                  >
                    {t(`pricing.plans.${p}.price`)}
                  </span>
                  {t(`pricing.plans.${p}.discount_price`)}
                </span>
                <span className='text-sm'>{t(`pricing.plans.${p}.per`)}</span>
              </div>
              {popular && (
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-gradient text-primary-foreground text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-full shadow-elegant'>
                  {t('pricing.popular')}
                </div>
              )}

              <div className='mt-3 inline-flex items-center gap-2'>
                <span className='text-[10px] uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-semibold'>
                  {t(`pricing.plans.${p}.discount`)}
                </span>
                <span
                  className={cn(
                    'text-xs font-medium',
                    popular ? 'text-primary-glow' : 'text-primary',
                  )}
                >
                  {popular && <span>{t(`pricing.plans.${p}.freeMonths`)}</span>}
                </span>
              </div>

              <ul className='mt-7 space-y-3'>
                {features.map((f) => (
                  <li key={f} className='flex items-start gap-3 text-sm'>
                    <Check
                      className={cn(
                        'h-5 w-5 shrink-0 mt-0.5',
                        popular ? 'text-primary-glow' : 'text-primary',
                      )}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={popular ? 'hero' : 'outline'}
                size='lg'
                className={cn(
                  'mt-8 w-full rounded-full',
                  !popular && 'border-foreground/20',
                )}
              >
                <Link href='/contact'>{t('pricing.cta')}</Link>
              </Button>
            </motion.div>
          );
        })}
      </section>
    </Layout>
  );
};

export default Pricing;
