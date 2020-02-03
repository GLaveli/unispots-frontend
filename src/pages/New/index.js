import React, { useState, useMemo } from 'react';

import cameraPic from '../../assets/pic.png'
import './styles.css'

export default function New() {
    const { thumbnail, setThumnail } = useState(null)
    const { valor, setValor } = useState('');
    const { reference, setReference } = useState('');
    const { rooms, setRooms } = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    },
        [thumbnail]
    )

    function handleContractChange(e) {
        let { value } = e.target;
        if (value === "nao") {
            document.getElementById("contractTime").style.visibility = "hidden";
        } else {
            document.getElementById("contractTime").style.visibility = "visible";
        };

    }

    function handleSubmit() {

    }
    return (
        <form className="formNewSpot" onSubmit={handleSubmit}>
            <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }} >
                <input type="file" onChange={event => setThumnail(event.target.files[0])} />
                <img src={cameraPic} alt="imagem" />
            </label>

            <label htmlFor="tipo">Tipo <span></span></label>
            <select className="centerSelect" id="tipo">
                <option value="">Kitnet</option>
                <option value="">Casa</option>
                <option value="">Hostel</option>
                <option value="">Republica</option>
                <option value="">Apartamento</option>
            </select>

            <label htmlFor="university">Universidades <span>(Separado por virgulas)</span></label>
            <input
                id="university"
                placeholder="UFSC, UDESC, SENAI, UNISUL"
                value={reference}
                onChange={event => setReference(event.target.value)}
            />
            <label htmlFor="description">Descrição <span>(Separado por virgulas)</span></label>
            <input
                id="description"
                placeholder="SALA, COZINHA, BANHEIRO"
                value={rooms}
                onChange={event => setRooms(event.target.value)}
            />

            <label htmlFor="">Tipo de contrato *</label>
            <div className="subFormNew">
                <span className="contractSeparator" onClick="handleBtnPrice"><p>|</p></span>

                <select className="centerSelect" onChange={handleContractChange}>
                    <option value="sim">Com contrato</option>
                    <option value="nao">Sem contrato</option>
                </select>

                <span className="contractSeparator" onClick="handleBtnPrice"><p>|</p></span>

                <select id="contractTime" className="centerSelect">
                    <option value="1">01 mês</option>
                    <option value="2">02 mêses</option>
                    <option value="3">03 mêses</option>
                    <option value="4">04 mêses</option>
                    <option value="5">05 mêses</option>
                    <option value="6">06 mêses</option>
                    <option value="7">07 mêses</option>
                    <option value="8">08 mêses</option>
                    <option value="9">09 mêses</option>
                    <option value="10">10 mêses</option>
                    <option value="11">11 mêses</option>
                    <option value="12">12 mêses</option>
                </select>

                <span className="contractSeparator" onClick="handleBtnPrice"><p>|</p></span>

            </div>

            <label htmlFor="">Valor* <span></span></label>
            <div className="subFormNew">
                <span className="currencyBtn"><p>R$:</p></span>
                <input
                    className="currencyInput"
                    id="valor"
                    placeholder="00,00"
                    value={valor}
                    onChange={event => setValor(event.target.value)}
                />
            </div>
            <button type="submit" className="btn">Salvar Spot</button>

        </form>
    )
}