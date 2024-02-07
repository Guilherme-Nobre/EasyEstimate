// CSS
import styles from "./Home.module.css"

// hooks
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className={styles.home}>
      <h1>Olá, seja bem vindo</h1>
      <p>Qual planilha deseja acessar ?</p>
      <div>
        <Link to="/clientes" className="btn">Clientes</Link>
        <Link to="/funcionarios" className="btn">Funcionários</Link>
      </div>
    </div>
  )
}

export default Home