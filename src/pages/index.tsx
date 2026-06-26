import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const features = [
  {
    icon: '💸',
    title: 'Expense Tracking',
    description:
      'Log expenses instantly with a keypad that supports math expressions. Organise with custom categories, track monthly budgets, and visualise spending with charts.',
  },
  {
    icon: '📈',
    title: 'Wealth Management',
    description:
      'Track Fixed Deposits, PPF, EPF, NPS, Mutual Funds, and Chit Funds in one place. See your net worth, returns, and projected cashflows at a glance.',
  },
  {
    icon: '☁️',
    title: 'Sync via Google Drive',
    description:
      'Your data is stored in your own Google Drive — not on our servers. Sign in with Google and sync across devices anytime.',
  },
  {
    icon: '🔔',
    title: 'Smart Alerts',
    description:
      'Get notified about upcoming FD maturities, missed SIP contributions, PPF lock-in milestones, and other action items automatically.',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="TrackyFi — Personal Finance Tracker for India"
      description="Track expenses and wealth in one app. Built for India with support for FD, PPF, EPF, NPS, Mutual Funds, and Google Sheets sync.">

      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.badge}>Personal Finance · Made for India</div>
            <h1 className={styles.heroTitle}>
              Track your <span className={styles.accent}>expenses</span> and{' '}
              <span className={styles.accent}>wealth</span> in one place
            </h1>
            <p className={styles.heroSubtitle}>
              TrackyFi helps you log daily expenses, manage investments across FD, PPF, EPF,
              NPS, Mutual Funds, and Chit Funds — all stored privately on your device and
              your Google Drive.
            </p>
            <div className={styles.heroCta}>
              <span className={styles.comingSoon}>Coming soon on Google Play</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Everything you need to stay on top of your finances</h2>
            <div className={styles.featureGrid}>
              {features.map((f) => (
                <div key={f.title} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className={styles.screenshots}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>See it in action</h2>
            <div className={styles.screenshotGrid}>
              {/* Screenshots will be added here */}
              <div className={styles.screenshotPlaceholder}>Screenshots coming soon</div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className={styles.footerCta}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your data, your control</h2>
            <p className={styles.footerCtaText}>
              TrackyFi stores everything locally on your device. Sync is opt-in and goes
              directly to your own Google Drive — we never see your financial data.
            </p>
            <Link to="/privacy" className={styles.privacyLink}>
              Read our Privacy Policy →
            </Link>
          </div>
        </section>

      </main>
    </Layout>
  );
}
