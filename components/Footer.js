import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/ethan-munden" target="_blank" rel="noopener">
          <img src="/smiley.svg" alt="Netlify Logo" className={styles.logo} />
        </a>
      </footer>
    </>
  )
}
