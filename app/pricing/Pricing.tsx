'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, TrendingUp } from 'lucide-react';
import { cn } from '@/common/lib/utils';
import { Layout } from '@/common/components/Layout';
import { PageBanner } from '@/common/components/PageBanner';
import { Button } from '@/common/components/ui/button';
import Link from 'next/link';

const Pricing = () => {
  const { t } = useTranslation();
  const [yearly, setYearly] = useState(false);

  const plans = ['starter', 'pro', 'enterprise'] as const;

  const pricingVisual = (
    <div className='relative'>
      <div className='absolute -inset-4 bg-primary-gradient opacity-20 blur-2xl rounded-3xl' />
      <div className='relative grid gap-3'>
        {[
          {
            name: 'Starter',
            price: '$29',
            note: 'Up to 200 students',
            highlight: false,
          },
          {
            name: 'Professional',
            price: '$89',
            note: 'Up to 2,000 students',
            highlight: true,
          },
          {
            name: 'Enterprise',
            price: 'Custom',
            note: 'Multi-branch & SLA',
            highlight: false,
          },
        ].map((p) => (
          <div
            key={p.name}
            className={cn(
              'rounded-xl border p-4 flex items-center justify-between backdrop-blur transition',
              p.highlight
                ? 'bg-primary-gradient text-primary-foreground border-transparent shadow-elegant scale-[1.03]'
                : 'bg-card/95 text-card-foreground border-border',
            )}
          >
            <div>
              <div
                className={cn(
                  'text-[11px] uppercase tracking-wider',
                  p.highlight
                    ? 'text-primary-foreground/80'
                    : 'text-muted-foreground',
                )}
              >
                {p.name}
              </div>
              <div className='mt-0.5 text-xs opacity-80'>{p.note}</div>
            </div>
            <div className='flex items-baseline gap-1'>
              <span className='text-xl font-display font-bold'>{p.price}</span>
              {p.price.startsWith('$') && (
                <span
                  className={cn(
                    'text-[11px]',
                    p.highlight
                      ? 'text-primary-foreground/70'
                      : 'text-muted-foreground',
                  )}
                >
                  /mo
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute -bottom-5 -right-5 bg-card border border-border rounded-xl px-3 py-2 shadow-card flex items-center gap-2'
      >
        <div className='h-8 w-8 rounded-lg bg-primary-gradient flex items-center justify-center'>
          <TrendingUp className='h-4 w-4 text-primary-foreground' />
        </div>
        <div className='text-xs'>
          <div className='font-semibold'>Save 20%</div>
          <div className='text-muted-foreground'>Annual billing</div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <Layout>
      <PageBanner
        eyebrow={t('nav.pricing')}
        title={t('pricing.title')}
        subtitle={t('pricing.subtitle')}
        trustItems={['No setup fees', 'Cancel anytime', '14-day free trial']}
      />

      <section className='main-container pt-12 text-center'>
        <div className='inline-flex items-center gap-1 rounded-full bg-muted p-1 border border-border'>
          <button
            onClick={() => setYearly(false)}
            className={cn(
              'px-5 py-2 rounded-full text-sm font-medium transition',
              !yearly ? 'bg-card shadow-soft' : 'text-muted-foreground',
            )}
          >
            {t('pricing.monthly')}
          </button>
          <button
            onClick={() => setYearly(true)}
            className={cn(
              'px-5 py-2 rounded-full text-sm font-medium transition flex items-center gap-2',
              yearly ? 'bg-card shadow-soft' : 'text-muted-foreground',
            )}
          >
            {t('pricing.yearly')}
            <span className='text-[10px] uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-full'>
              {t('pricing.save')}
            </span>
          </button>
        </div>
      </section>

      <section className='main-container py-12 pb-24 grid md:grid-cols-3 gap-6'>
        {plans.map((p, i) => {
          const popular = p === 'pro';
          const features = t(`pricing.plans.${p}.features`, {
            returnObjects: true,
          }) as string[];
          const rawPrice = t(`pricing.plans.${p}.price`);
          const numeric = rawPrice.replace(/[^0-9]/g, '');
          const display =
            numeric && yearly
              ? `$${Math.round(parseInt(numeric) * 0.8)}`
              : rawPrice;
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
                  ? 'bg-dark-gradient text-secondary-foreground border-transparent shadow-elegant md:-translate-y-4'
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
              <p
                className={cn(
                  'mt-2 text-sm',
                  popular
                    ? 'text-secondary-foreground/70'
                    : 'text-muted-foreground',
                )}
              >
                {t(`pricing.plans.${p}.desc`)}
              </p>
              <div className='mt-6 flex items-baseline gap-1'>
                <span className='text-5xl font-display font-bold'>
                  {display}
                </span>
                {numeric && (
                  <span
                    className={cn(
                      'text-sm',
                      popular
                        ? 'text-secondary-foreground/60'
                        : 'text-muted-foreground',
                    )}
                  >
                    {t('pricing.per')}
                  </span>
                )}
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
