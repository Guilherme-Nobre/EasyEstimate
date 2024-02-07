// CSS
import styles from "./About.module.css"

import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className={styles.about}>
        <h2><span>Sobre</span></h2>
        <p>Nosso site oferece uma solução completa para a gestão financeira da sua empresa. <br /><br /> Com nossa plataforma, você pode organizar suas finanças de forma eficiente, criando tabelas precisas que mostram os clientes que estão em débito, além de manter o controle dos pagamentos dos funcionários. <br /><br /> Simplifique a administração do seu negócio e tenha uma visão clara e detalhada das suas finanças com a nossa ferramenta.</p>
        <Link to="/" className="btn">Ir para Home</Link>
    </div>
  )
}

export default About