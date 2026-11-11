import styles from './BrandPanel.module.css';

export function BrandPanel() {
  return (
    <aside className={styles.root}>
      <div className={styles.content}>
        <a href="/" className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">
            <span />
            <span />
          </span>

          <span>Nova</span>
        </a>

        <div className={styles.message}>
          <span className="eyebrow">GET STARTED</span>

          <h2>
            Build something
            <br />
            great together.
          </h2>

          <p>
            Create your account and get started with
            everything you need to turn your ideas into
            reality.
          </p>
        </div>
      </div>

      <div className={styles.art} aria-hidden="true">
        <div
          className={styles.mountain}
          data-layer="back"
        />
        <div
          className={styles.mountain}
          data-layer="middle"
        />
        <div
          className={styles.mountain}
          data-layer="front"
        />
        <div className={styles.lake} />
      </div>

      <div className={styles.footer}>
        <span>© 2026 Nova</span>
        <span>Simple things, well made.</span>
      </div>
    </aside>
  );
}
