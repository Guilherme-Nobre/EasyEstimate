import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img alt="Sua Logo" className={styles.logo} />
      <h3>Desenvolvido por: Guilherme Nóbrega &copy; 2024</h3>
    </footer>
  )
};

export default Footer