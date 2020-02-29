import React, { useEffect, useState } from 'react';
import Logo from '../../components/LogoComponent';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpot() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });

            setSpots(response.data);

        }
        loadSpot();
    }, []);


    return (
        <>
            <div className="containerDash">
                <Logo />
                <div className="contentDash">
                    <ul className="spot-list">
                        {spots.map(spot => (
                            <li key={spot._id}>
                                <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                                <strong>{spot.type}</strong>
                                <span>{spot.valor ? `R$: ${spot.valor}/mes` : 'R$: Não informado'}</span>
                            </li>
                        ))}
                    </ul>

                    <Link to="/new">
                        <button className="btn"> Cadastrar novo Spot!</button>
                    </Link>
                </div>
            </div>
        </>
    )
}