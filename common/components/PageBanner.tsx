import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface PageBannerProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  trustItems?: string[];
}

export const PageBanner = ({
  eyebrow,
  title,
  subtitle,
  trustItems,
}: PageBannerProps) => {
  return (
    <section className='relative w-full overflow-hidden bg-dark-gradient text-secondary-foreground'>
      {/* Grid pattern */}
      <div
        className='absolute inset-0 opacity-[0.07]'
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 40%, transparent 75%)',
        }}
      />
      {/* Glow orbs */}
      <div className='absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/30 blur-[120px] animate-blob' />
      <div className='absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-[120px] animate-blob [animation-delay:4s]' />
      {/* Top hairline accent */}
      <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent' />

      <div className='relative main-container pt-32 pb-20 md:pt-36 md:pb-24 flex flex-col items-center text-center max-w-4xl'>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className='inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary-glow'
        >
          <span className='h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse' />
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className='mt-6 text-4xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.05] tracking-tight'
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='mt-6 text-base md:text-lg text-secondary-foreground/70 max-w-2xl leading-relaxed'
        >
          {subtitle}
        </motion.p>

        {trustItems && trustItems.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className='mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3'
          >
            {trustItems.map((item) => (
              <li
                key={item}
                className='flex items-center gap-2 text-sm text-secondary-foreground/80'
              >
                <CheckCircle2 className='h-4 w-4 text-primary-glow shrink-0' />
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </section>
  );
};
