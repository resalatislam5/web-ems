import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        features: 'Features',
        pricing: 'Pricing',
        contact: 'Contact',
        login: 'Sign in',
        cta: 'Start free trial',
      },
      hero: {
        badge: 'Built for course-selling & overseas-prep companies',
        title1: 'Run your education business',
        title2: 'from one complete platform',
        subtitle:
          'EMS is a complete internal management solution for course-selling companies and overseas preparation services — handling students, enrollments, payments, agents, accounts and reports in one place.',
        cta: 'Start free trial',
        secondary: 'See features',
        trust:
          'Trusted by 50+ academies, coaching centers and overseas consultancies',
      },
      stats: {
        schools: 'Companies',
        students: 'Students managed',
        uptime: 'Uptime',
        support: 'Support',
      },
      features: {
        title: 'Everything your education business needs',
        subtitle:
          'A complete operating system for course-selling companies and overseas preparation services.',
        items: {
          enroll: {
            title: 'Student & Enrollment Management',
            desc: 'Easily create and manage student profiles and enroll them in multiple courses or programs.',
          },
          payments: {
            title: 'Enrollment Payment Tracking',
            desc: 'Monitor payment status, dues, and the complete transaction history for every student.',
          },
          receipts: {
            title: 'Automated Receipt Generation',
            desc: 'Instantly generate and manage payment and enrollment receipts — no manual work required.',
          },
          forms: {
            title: 'Auto-Generated Enrollment Forms',
            desc: 'Create dynamic, ready-to-use enrollment forms with minimal input.',
          },
          accounts: {
            title: 'Account Management System',
            desc: 'Maintain and manage all your financial accounts efficiently from one dashboard.',
          },
          agents: {
            title: 'Agent Management & Commission',
            desc: 'Add agents and automatically calculate, track and pay commissions on every enrollment.',
          },
          expense: {
            title: 'Expense Management',
            desc: 'Record, categorize and monitor all organizational expenses with full visibility.',
          },
          config: {
            title: 'Flexible Configuration',
            desc: 'Customize batches, courses, packages and other system settings to match your workflow.',
          },
          report: {
            title: 'Advanced Reporting & Analytics',
            desc: 'Generate detailed audit, student, financial and account reports in a single click.',
          },
        },
        spotlightTitle:
          'Create a student & enroll in multiple courses — in one flow',
        spotlightDesc:
          'Skip the spreadsheets. Add a learner, pick the programs, set fees, assign an agent and generate the receipt in a single elegant form.',
        bullets: [
          'Bulk import via CSV/Excel',
          'Auto-generated student ID & receipt',
          'Custom enrollment fields',
          'Multiple course & batch assignment',
        ],
      },
      pricing: {
        title: 'Simple, honest pricing',
        subtitle:
          'Choose a plan that scales with your business. No hidden fees.',
        monthly: 'Monthly',
        yearly: 'Yearly',
        save: 'Save 20%',
        cta: 'Get started',
        popular: 'Most popular',
        plans: {
          starter: {
            name: 'Starter',
            price: '$29',
            desc: 'For small academies just getting started.',
            features: [
              'Up to 200 students',
              'Student & enrollment',
              'Payment tracking & receipts',
              'Email support',
            ],
          },
          pro: {
            name: 'Professional',
            price: '$89',
            desc: 'For growing course providers & consultancies.',
            features: [
              'Up to 2,000 students',
              'Everything in Starter',
              'Agent & commission system',
              'Accounts & expense management',
              'Priority support',
            ],
          },
          enterprise: {
            name: 'Enterprise',
            price: 'Custom',
            desc: 'For large groups and multi-branch operations.',
            features: [
              'Unlimited students',
              'Multi-branch',
              'Custom integrations',
              'Dedicated manager',
              'On-premise option',
            ],
          },
        },
        per: '/month',
      },
      contact: {
        title: "Let's talk",
        subtitle:
          "Tell us about your business — we'll get back within 24 hours.",
        name: 'Full name',
        email: 'Email',
        org: 'Company',
        message: 'How can we help?',
        send: 'Send message',
        sent: "Thanks! We'll be in touch soon.",
        emailUs: 'Email us',
        callUs: 'Call us',
        visit: 'Visit',
      },
      footer: {
        tagline:
          'The operating system for course-selling & overseas-prep companies.',
        product: 'Product',
        company: 'Company',
        legal: 'Legal',
        rights: 'All rights reserved.',
      },
    },
  },
  bn: {
    translation: {
      nav: {
        home: 'হোম',
        features: 'ফিচার',
        pricing: 'প্রাইসিং',
        contact: 'যোগাযোগ',
        login: 'সাইন ইন',
        cta: 'ফ্রি ট্রায়াল শুরু',
      },
      hero: {
        badge: 'কোর্স-সেলিং ও ওভারসিজ প্রস্তুতি প্রতিষ্ঠানের জন্য',
        title1: 'আপনার এডুকেশন বিজনেস চালান',
        title2: 'একটি সম্পূর্ণ প্ল্যাটফর্ম থেকে',
        subtitle:
          'EMS হলো কোর্স-সেলিং কোম্পানি ও ওভারসিজ প্রস্তুতি সার্ভিসের জন্য একটি সম্পূর্ণ ইন্টারনাল ম্যানেজমেন্ট সলিউশন — শিক্ষার্থী, এনরোলমেন্ট, পেমেন্ট, এজেন্ট, একাউন্ট ও রিপোর্ট এক জায়গায়।',
        cta: 'ফ্রি ট্রায়াল শুরু',
        secondary: 'ফিচার দেখুন',
        trust: '৫০০+ একাডেমি, কোচিং সেন্টার ও ওভারসিজ কনসালটেন্সির আস্থা',
      },
      stats: {
        schools: 'কোম্পানি',
        students: 'শিক্ষার্থী',
        uptime: 'আপটাইম',
        support: 'সাপোর্ট',
      },
      features: {
        title: 'আপনার এডুকেশন বিজনেসের সব প্রয়োজন',
        subtitle:
          'কোর্স-সেলিং ও ওভারসিজ প্রস্তুতি সার্ভিসের জন্য সম্পূর্ণ অপারেটিং সিস্টেম।',
        items: {
          enroll: {
            title: 'স্টুডেন্ট ও এনরোলমেন্ট ম্যানেজমেন্ট',
            desc: 'সহজেই শিক্ষার্থীর প্রোফাইল তৈরি ও একাধিক কোর্সে এনরোল করুন।',
          },
          payments: {
            title: 'এনরোলমেন্ট পেমেন্ট ট্র্যাকিং',
            desc: 'প্রতিটি শিক্ষার্থীর পেমেন্ট স্ট্যাটাস, বকেয়া ও সম্পূর্ণ ট্রানজেকশন হিস্টোরি মনিটর করুন।',
          },
          receipts: {
            title: 'অটোমেটেড রিসিপ্ট জেনারেশন',
            desc: 'তাৎক্ষণিকভাবে পেমেন্ট ও এনরোলমেন্ট রিসিপ্ট তৈরি ও ম্যানেজ করুন।',
          },
          forms: {
            title: 'অটো-জেনারেটেড এনরোলমেন্ট ফর্ম',
            desc: 'ন্যূনতম ইনপুটে ডায়নামিক, রেডি-টু-ইউজ এনরোলমেন্ট ফর্ম তৈরি করুন।',
          },
          accounts: {
            title: 'একাউন্ট ম্যানেজমেন্ট সিস্টেম',
            desc: 'এক ড্যাশবোর্ড থেকে আপনার সমস্ত আর্থিক একাউন্ট দক্ষতার সাথে পরিচালনা করুন।',
          },
          agents: {
            title: 'এজেন্ট ম্যানেজমেন্ট ও কমিশন',
            desc: 'এজেন্ট যোগ করুন এবং প্রতিটি এনরোলমেন্টে স্বয়ংক্রিয়ভাবে কমিশন হিসাব ও ট্র্যাক করুন।',
          },
          expense: {
            title: 'এক্সপেন্স ম্যানেজমেন্ট',
            desc: 'প্রতিষ্ঠানের সমস্ত খরচ রেকর্ড, ক্যাটাগরাইজ ও মনিটর করুন।',
          },
          config: {
            title: 'ফ্লেক্সিবল কনফিগারেশন',
            desc: 'ব্যাচ, কোর্স, প্যাকেজ ও অন্যান্য সেটিংস আপনার ওয়ার্কফ্লো অনুযায়ী কাস্টমাইজ করুন।',
          },
          report: {
            title: 'অ্যাডভান্সড রিপোর্ট ও অ্যানালিটিক্স',
            desc: 'এক ক্লিকে অডিট, স্টুডেন্ট, ফাইন্যান্সিয়াল ও একাউন্ট রিপোর্ট তৈরি করুন।',
          },
        },
        spotlightTitle:
          'একজন শিক্ষার্থী তৈরি করুন এবং একাধিক কোর্সে এনরোল করুন — এক ফ্লোতে',
        spotlightDesc:
          'স্প্রেডশিট ভুলে যান। একটি সুন্দর ফর্মে শিক্ষার্থী যোগ করুন, প্রোগ্রাম নির্বাচন করুন, ফি সেট করুন, এজেন্ট অ্যাসাইন করুন এবং রিসিপ্ট তৈরি করুন।',
        bullets: [
          'CSV/Excel দিয়ে বাল্ক ইম্পোর্ট',
          'অটো স্টুডেন্ট আইডি ও রিসিপ্ট',
          'কাস্টম এনরোলমেন্ট ফিল্ড',
          'মাল্টিপল কোর্স ও ব্যাচ অ্যাসাইনমেন্ট',
        ],
      },
      pricing: {
        title: 'সহজ ও স্বচ্ছ প্রাইসিং',
        subtitle: 'আপনার ব্যবসার সাথে স্কেল করে এমন প্ল্যান বেছে নিন।',
        monthly: 'মাসিক',
        yearly: 'বার্ষিক',
        save: '২০% সাশ্রয়',
        cta: 'শুরু করুন',
        popular: 'সর্বাধিক জনপ্রিয়',
        plans: {
          starter: {
            name: 'স্টার্টার',
            price: '$29',
            desc: 'ছোট একাডেমির জন্য।',
            features: [
              '২০০ পর্যন্ত শিক্ষার্থী',
              'স্টুডেন্ট ও এনরোলমেন্ট',
              'পেমেন্ট ট্র্যাকিং ও রিসিপ্ট',
              'ইমেইল সাপোর্ট',
            ],
          },
          pro: {
            name: 'প্রফেশনাল',
            price: '$89',
            desc: 'বর্ধমান কোর্স প্রোভাইডার ও কনসালটেন্সির জন্য।',
            features: [
              '২,০০০ পর্যন্ত শিক্ষার্থী',
              'স্টার্টারের সব সুবিধা',
              'এজেন্ট ও কমিশন সিস্টেম',
              'একাউন্ট ও এক্সপেন্স ম্যানেজমেন্ট',
              'প্রায়োরিটি সাপোর্ট',
            ],
          },
          enterprise: {
            name: 'এন্টারপ্রাইজ',
            price: 'কাস্টম',
            desc: 'বড় গ্রুপ ও মাল্টি-ব্রাঞ্চের জন্য।',
            features: [
              'আনলিমিটেড শিক্ষার্থী',
              'মাল্টি-ব্রাঞ্চ',
              'কাস্টম ইন্টিগ্রেশন',
              'ডেডিকেটেড ম্যানেজার',
              'অন-প্রিমাইস অপশন',
            ],
          },
        },
        per: '/মাস',
      },
      contact: {
        title: 'চলুন কথা বলি',
        subtitle: 'আপনার ব্যবসা সম্পর্কে বলুন — ২৪ ঘণ্টার মধ্যে উত্তর পাবেন।',
        name: 'পূর্ণ নাম',
        email: 'ইমেইল',
        org: 'কোম্পানি',
        message: 'কীভাবে সাহায্য করতে পারি?',
        send: 'মেসেজ পাঠান',
        sent: 'ধন্যবাদ! শীঘ্রই যোগাযোগ করব।',
        emailUs: 'ইমেইল করুন',
        callUs: 'কল করুন',
        visit: 'ঠিকানা',
      },
      footer: {
        tagline:
          'কোর্স-সেলিং ও ওভারসিজ প্রস্তুতি প্রতিষ্ঠানের অপারেটিং সিস্টেম।',
        product: 'প্রোডাক্ট',
        company: 'কোম্পানি',
        legal: 'লিগাল',
        rights: 'সর্বস্বত্ব সংরক্ষিত।',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'bn'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
