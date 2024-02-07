import {Link} from 'react-router-dom'
import styles from './RedirectLogin.module.css'

const RedirectLogin = () => {
  return (
    <div className={styles.redirectLogin}>
        <h1>Olá, seja bem vindo</h1>
        <p>Faça login para que possa ter acesso ao site.</p>
        <Link to="/login" className="btn">Fazer Login</Link>
    </div>
  )
}

export default RedirectLogin