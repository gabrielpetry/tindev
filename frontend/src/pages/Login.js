import React, { useState } from 'react'
import './Login.css'
import api from '../services/api'

import logo from '../assets/logo.svg'

export default function Login({ history }) {
  const [username, setUsername] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    console.log('Autenticando, aguarde')
    const response = await api.post('/devs', {
      username,
    })
    console.log('Autenticado')

    const { _id } = response.data
    console.log(response.data)

    history.push(`/dev/${ _id }`)
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input type="text"
          placeholder="Digite seu usuário do github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

