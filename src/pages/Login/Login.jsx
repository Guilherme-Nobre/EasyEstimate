import styles from './Login.module.css'

import { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("")

    const user = {
      email,
      password
    }

    const res = await login(user);

    console.log(res);
  }

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError])

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input type="email" name='email' className={styles.inpLog} required placeholder='E-mail do Usuário' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name='password' className={styles.inpLog} required placeholder='Insira sua senha' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </form>
        {!loading && <button className='btn' onClick={handleSubmit}>Entrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
    </div>
  )
}

export default Login