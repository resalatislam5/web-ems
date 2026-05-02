'use client';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Users,
  Wallet,
  Receipt,
  FileText,
  Landmark,
  UserCog,
  TrendingDown,
  Settings2,
  BarChart3,
  ArrowUpRight,
} from 'lucide-react';
import { Layout } from '@/common/components/Layout';
import { PageBanner } from '@/common/components/PageBanner';

const Features = () => {
  const { t } = useTranslation();
  const items = [
    { icon: Users, k: 'enroll' },
    { icon: Wallet, k: 'payments' },
    { icon: Receipt, k: 'receipts' },
    { icon: FileText, k: 'forms' },
    { icon: Landmark, k: 'accounts' },
    { icon: UserCog, k: 'agents' },
    { icon: TrendingDown, k: 'expense' },
    { icon: Settings2, k: 'config' },
    { icon: BarChart3, k: 'report' },
  ] as const;

  const featuresVisual = (
    <div className='relative'>
      <div className='absolute -inset-4 bg-primary-gradient opacity-20 blur-2xl rounded-3xl' />
      <div className='relative bg-card text-card-foreground rounded-2xl border border-border/40 shadow-elegant p-5 space-y-4'>
        <div className='flex items-center justify-between'>
          <div className='text-xs uppercase tracking-wider text-muted-foreground'>
            Today
          </div>
          <div className='flex items-center gap-1 text-xs font-medium text-primary'>
            <ArrowUpRight className='h-3.5 w-3.5' />
            +18.2%
          </div>
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <div className='rounded-xl bg-muted/60 p-3'>
            <div className='text-[10px] uppercase tracking-wider text-muted-foreground'>
              Enrollments
            </div>
            <div className='mt-1 text-2xl font-display font-bold'>248</div>
          </div>
          <div className='rounded-xl bg-muted/60 p-3'>
            <div className='text-[10px] uppercase tracking-wider text-muted-foreground'>
              Revenue
            </div>
            <div className='mt-1 text-2xl font-display font-bold'>$12.4k</div>
          </div>
        </div>
        <div className='space-y-2'>
          {[
            { l: 'IELTS Foundation', v: '42 seats' },
            { l: 'GRE Quant Intensive', v: '28 seats' },
            { l: 'Canada PR Counseling', v: '16 seats' },
          ].map((r) => (
            <div
              key={r.l}
              className='flex items-center justify-between text-sm border-b border-border/60 pb-2 last:border-0'
            >
              <span className='text-muted-foreground'>{r.l}</span>
              <span className='font-medium'>{r.v}</span>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute -top-6 -left-8 bg-card border border-border rounded-xl px-3 py-2 shadow-card flex items-center gap-2'
      >
        <div className='h-8 w-8 rounded-lg bg-primary-gradient flex items-center justify-center'>
          <Receipt className='h-4 w-4 text-primary-foreground' />
        </div>
        <div className='text-xs'>
          <div className='font-semibold'>Receipt #2048</div>
          <div className='text-muted-foreground'>Auto-generated</div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <Layout>
      <PageBanner
        eyebrow={t('nav.features')}
        title={t('features.title')}
        subtitle={t('features.subtitle')}
        trustItems={[
          '9 integrated modules',
          'Multi-branch ready',
          'Bilingual EN / BN',
        ]}
      />

      <section className='main-container py-16 grid md:grid-cols-2 gap-8'>
        {items.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.article
              key={f.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className='bg-card border border-border rounded-3xl p-8 hover:shadow-card transition-shadow'
            >
              <div className='flex items-start gap-5'>
                <div className='h-14 w-14 rounded-2xl bg-primary-gradient flex items-center justify-center shadow-elegant shrink-0'>
                  <Icon className='h-7 w-7 text-primary-foreground' />
                </div>
                <div>
                  <h2 className='text-2xl font-semibold'>
                    {t(`features.items.${f.k}.title`)}
                  </h2>
                  <p className='mt-2 text-muted-foreground leading-relaxed'>
                    {t(`features.items.${f.k}.desc`)}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>
    </Layout>
  );
};

export default Features;
