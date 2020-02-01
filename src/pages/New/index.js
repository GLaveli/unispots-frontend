import React, { useState } from 'react';

import './styles.css'

export default function New() {
    const { valor, setValor } = useState(0);

    function handleSubmit() {

    }
    return (
        <form className="formNewSpot" onSubmit={handleSubmit}>



            <select>
                <option value="">Selecione</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="kitnete">kitnet</option>
                <option value="Hostel">Hostel</option>
            </select>
            <select>
                <option value="">Selecione</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="kitnete">kitnet</option>
                <option value="Hostel">Hostel</option>
            </select>

            <label htmlFor="">TItem 1<span>(Teste)</span></label>

            <input
                id="valor"
                placeholder="valor"
                value=""
                onChange={event => setValor(event.target.value)} />
            <button type="submit" className="btn"></button>

        </form>
    )
}