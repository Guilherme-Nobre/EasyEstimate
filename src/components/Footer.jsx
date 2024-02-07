import styles from './Footer.module.css';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Minha Imagem" className={styles.logo} />
      <h3>Desenvolvido por: Guilherme Nóbrega &copy; 2024</h3>
    </footer>
  )
};

export default Footer