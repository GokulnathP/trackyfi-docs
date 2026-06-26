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

const dailyScreenshots = [
  {src: 'img/screenshots/add-expense.png', caption: 'Add Expense'},
  {src: 'img/screenshots/history.png', caption: 'History'},
  {src: 'img/screenshots/stats.png', caption: 'Analytics'},
];

const wealthScreenshots = [
  {src: 'img/screenshots/wealth-dashboard.png', caption: 'Dashboard'},
  {src: 'img/screenshots/wealth-portfolio.png', caption: 'Portfolio'},
  {src: 'img/screenshots/wealth-calendar.png', caption: 'Cash Flow'},
  {src: 'img/screenshots/wealth-analytics.png', caption: 'Analytics'},
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
            <img
              src="img/screenshots/onboarding.png"
              alt="TrackyFi app icon"
              className={styles.appIcon}
            />
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

            <div className={styles.screenshotGroup}>
              <h3 className={styles.screenshotGroupLabel}>Daily Expenses</h3>
              <div className={styles.screenshotRow}>
                {dailyScreenshots.map((s) => (
                  <div key={s.src} className={styles.screenshotItem}>
                    <img src={s.src} alt={s.caption} className={styles.screenshotImg} />
                    <span className={styles.screenshotCaption}>{s.caption}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.screenshotGroup}>
              <h3 className={styles.screenshotGroupLabel}>Wealth Management</h3>
              <div className={styles.screenshotRow}>
                {wealthScreenshots.map((s) => (
                  <div key={s.src} className={styles.screenshotItem}>
                    <img src={s.src} alt={s.caption} className={styles.screenshotImg} />
                    <span className={styles.screenshotCaption}>{s.caption}</span>
                  </div>
                ))}
              </div>
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
