import React, { useState } from 'react';
import api from '../../services/api'

export default function Login() {

    const [emai, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/sessions', { emai });

        const { _id } = response.data;

        localStorage.setItem('user', _id);

        console.log(_id);

    }

    return (
        <>

            <p>
                Passou no <strong>vestibular</strong> e não tem onde ficar ? o <strong>Spot</strong> te mostra!
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail *</label>
                <input
                    type="email"
                    id="email"
                    placeholder="seu@email.com.br"
                    onChange={event => setEmail(event.target.value)}
                />
                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}