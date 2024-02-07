// CSS
import styles from "./About.module.css"

import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className={styles.about}>
        <h2><span>Sobre</span></h2>
        <p>Este site consiste em organizar as finanças da isn/isnep.</p>
        <Link to="/" className="btn">Ir para Home</Link>
    </div>
  )
}

export default About