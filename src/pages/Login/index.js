import React, { useState } from 'react';
import api from '../../services/api'
import Logo from '../../components/LogoComponent';

import './styles.css';

export default function Login({ history }) {

    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/sessions', { email });

        const { _id } = response.data;

        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }

    return (
        <>
            <div className="containerLogin">
                <Logo />
                <div className="contentLogin">
                    <p>
                        Passou no
                        <strong>vestibular</strong>
                        e não tem onde ficar? <br /> o
                         <strong>Spot</strong> te mostra!
                    </p>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">E-mail *</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="seu@email.com.br"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                        <button className="btn" type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}