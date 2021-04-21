import { useState } from 'react';

import history from '../../services/history';
import './styles.css';

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit() {
    if (email === 'email' && password === 'password') {
      history.push('/node_list');
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Digite seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          placeholder="Digite sua senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Logar</button>
      </form>
    </div>
  );
}