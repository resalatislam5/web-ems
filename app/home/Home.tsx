'use client';
import heroImg from '@/common/assets/hero-dashboard.jpg';
import { Layout } from '@/common/components/Layout';
import { Button } from '@/common/components/ui/button';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  FileText,
  Landmark,
  Receipt,
  Settings2,
  TrendingDown,
  UserCog,
  Users,
  Wallet,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
} as const;

const Home = () => {
  const { t } = useTranslation();

  const stats = [
    { v: '50+', k: t('stats.schools') },
    { v: '28K', k: t('stats.students') },
    { v: '99.9%', k: t('stats.uptime') },
    { v: '24/7', k: t('stats.support') },
  ];

  const features = [
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

  return (
    <Layout>
      {/* HERO */}
      <section className='relative overflow-hidden bg-hero-gradient'>
        <div className='absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl animate-blob' />
        <div className='absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-3xl animate-blob [animation-delay:4s]' />

        <div className='main-container relative pt-20 pb-24 md:pt-28 md:pb-32 grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary'
            >
              <span className='h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse' />{' '}
              {t('hero.badge')}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial='hidden'
              animate='show'
              custom={1}
              className='mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight'
            >
              {t('hero.title1')}{' '}
              <span className='text-gradient'>{t('hero.title2')}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial='hidden'
              animate='show'
              custom={2}
              className='mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl'
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial='hidden'
              animate='show'
              custom={3}
              className='mt-8 flex flex-wrap gap-3'
            >
              <Button asChild variant='hero' size='lg'>
                <Link href='/contact'>
                  {t('hero.cta')} <ArrowRight className='h-4 w-4' />
                </Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='rounded-full'
              >
                <Link href='/features'>{t('hero.secondary')}</Link>
              </Button>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial='hidden'
              animate='show'
              custom={4}
              className='mt-8 text-xs uppercase tracking-widest text-muted-foreground'
            >
              {t('hero.trust')}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className='relative'
          >
            <div className='absolute inset-0 bg-primary-gradient rounded-3xl blur-3xl opacity-20 animate-pulse' />
            <div className='relative rounded-3xl overflow-hidden shadow-elegant border border-border/60 bg-card'>
              <Image
                src={heroImg}
                alt='EMS dashboard preview'
                width={1536}
                height={1152}
                className='w-full h-auto'
              />
            </div>
            <div className='absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-card animate-float hidden sm:flex items-center gap-3'>
              <div className='h-10 w-10 rounded-full bg-primary-gradient flex items-center justify-center'>
                <Users className='h-5 w-5 text-primary-foreground' />
              </div>
              <div>
                <div className='text-2xl font-bold font-display'>+248</div>
                <div className='text-xs text-muted-foreground'>
                  new enrollments today
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className='border-y border-border bg-card'>
        <div className='main-container py-10 grid grid-cols-2 md:grid-cols-4 gap-6'>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className='text-center'
            >
              <div className='text-3xl md:text-4xl font-display font-bold text-gradient'>
                {s.v}
              </div>
              <div className='mt-1 text-xs uppercase tracking-wider text-muted-foreground'>
                {s.k}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className='main-container py-24'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='max-w-2xl mx-auto text-center'
        >
          <h2 className='text-4xl md:text-5xl font-bold'>
            {t('features.title')}
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className='mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className='group relative bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-card transition-all duration-300'
              >
                <div className='h-12 w-12 rounded-xl bg-primary-gradient flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform'>
                  <Icon className='h-6 w-6 text-primary-foreground' />
                </div>
                <h3 className='mt-5 text-xl font-semibold'>
                  {t(`features.items.${f.k}.title`)}
                </h3>
                <p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
                  {t(`features.items.${f.k}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-12 flex justify-center'
        >
          <Button asChild variant='hero' size='lg'>
            <Link href='/features'>
              See More <ArrowRight className='h-4 w-4' />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* SPOTLIGHT */}
      <section className='main-container pb-24'>
        <div className='relative overflow-hidden rounded-3xl bg-dark-gradient text-secondary-foreground p-8 md:p-14'>
          <div className='absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl' />
          <div className='relative grid md:grid-cols-2 gap-10 items-center'>
            <div>
              <div className='inline-flex items-center gap-2 rounded-full bg-primary/20 text-primary-glow px-3 py-1 text-xs font-medium uppercase tracking-wider'>
                <BookOpen className='h-3.5 w-3.5' /> Featured
              </div>
              <h3 className='mt-4 text-3xl md:text-4xl font-bold leading-tight'>
                {t('features.spotlightTitle')}
              </h3>
              <p className='mt-4 text-secondary-foreground/70 leading-relaxed'>
                {t('features.spotlightDesc')}
              </p>
              <ul className='mt-6 space-y-3'>
                {/* {(
                  t('features.bullets', { returnObjects: true }) as string[]
                ).map((b) => (
                  <li key={b} className='flex items-start gap-3 text-sm'>
                    <CheckCircle2 className='h-5 w-5 text-primary-glow shrink-0 mt-0.5' />
                    <span>{b}</span>
                  </li>
                ))} */}
              </ul>
              <Button asChild variant='hero' size='lg' className='mt-8'>
                <Link href='/features'>
                  {t('hero.secondary')} <ArrowRight className='h-4 w-4' />
                </Link>
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='bg-card text-card-foreground rounded-2xl p-6 shadow-elegant'
            >
              <div className='text-xs uppercase tracking-wider text-muted-foreground mb-3'>
                New Student
              </div>
              <div className='space-y-3'>
                {[
                  { l: 'Full name', v: 'Arabi Zaman' },
                  { l: 'Student ID', v: 'EMS-2026-0481' },
                  {
                    l: 'Programs',
                    v: 'OSHA-30 HOUR(USA) · IOSH-MS (UK) · HSE',
                  },
                  { l: 'Batch', v: 'RA2026' },
                ].map((r) => (
                  <div
                    key={r.l}
                    className='flex items-center justify-between border-b border-border pb-2 last:border-0'
                  >
                    <span className='text-xs text-muted-foreground'>{r.l}</span>
                    <span className='text-sm font-medium text-right'>
                      {r.v}
                    </span>
                  </div>
                ))}
              </div>
              <Button variant='hero' className='mt-5 w-full'>
                Enroll in 3 courses
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='main-container pb-24'>
        <div className='bg-primary-gradient rounded-3xl p-12 md:p-16 text-center shadow-elegant'>
          <h3 className='text-3xl md:text-4xl font-bold text-primary-foreground'>
            {t('hero.title1')}
          </h3>
          <p className='mt-3 text-primary-foreground/90 max-w-xl mx-auto'>
            {t('hero.subtitle')}
          </p>
          <Button
            asChild
            variant='dark'
            size='lg'
            className='mt-8 rounded-full'
          >
            <Link href='/contact'>
              {t('hero.cta')} <ArrowRight className='h-4 w-4' />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
