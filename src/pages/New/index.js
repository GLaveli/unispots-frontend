import React, { useState, useMemo } from 'react';
import api from '../../services/api';
import CurrencyFormat from 'react-currency-format';

import cameraPic from '../../assets/pic.png'
import './styles.css'

export default function New({ history }) {
    const [thumbnail, setThumnail] = useState(null);
    const [type, setType] = useState('Kitnet');
    const [reference, setReference] = useState('');
    const [rooms, setRooms] = useState('');
    const [contract, setContract] = useState('Não');
    const [contractTime, setContractTime] = useState('0');
    const [valor, setValor] = useState('');

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

    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('type', type);
        data.append('reference', reference);
        data.append('rooms', rooms);
        data.append('valor', valor);

        await api.post('spots', data, {
            headers: { user_id }
        });

        history.push('/dashboard');
    }
    return (
        <form className="formNewSpot" onSubmit={handleSubmit}>
            <label
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'hasThumbnail' : ''}
            >
                <input type="file" onChange={event => setThumnail(event.target.files[0])} />
                <img src={cameraPic} alt="Foto aqui" />
            </label>

            <label htmlFor="tipo">Tipo <span></span></label>
            <select className="centerSelect" id="type" onChange={event => setType(event.target.value)} >
                <option value="Kitnet">Kitnet</option>
                <option value="Casa">Casa</option>
                <option value="Hostel">Hostel</option>
                <option value="Republica">Republica</option>
                <option value="Apartamento">Apartamento</option>
            </select>

            <label htmlFor="university">Universidades* <span>(Separado por virgulas)</span></label>
            <input
                id="university"
                placeholder="UFSC, UDESC, SENAI, UNISUL"
                value={reference}
                onChange={event => setReference(event.target.value)}
                required
            />
            <label htmlFor="description">Descrição* <span>(Separado por virgulas)</span></label>
            <input
                id="description"
                placeholder="SALA, COZINHA, BANHEIRO"
                value={rooms}
                onChange={event => setRooms(event.target.value)}
                required
            />

            <label htmlFor="">Tipo de contrato</label>
            <div className="subFormNew">
                <span className="contractSeparator" ><p>|</p></span>

                <select className="centerSelect" onChange={handleContractChange}>
                    <option value="sim">Com contrato</option>
                    <option value="nao">Sem contrato</option>
                </select>

                <span className="contractSeparator" ><p>|</p></span>

                <select id="contractTime" className="centerSelect" onChange={event => setContractTime(event.target.value)}>
                    <option >Tempo de contrato</option>
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

                <span className="contractSeparator" ><p>|</p></span>

            </div>

            <label htmlFor="">Valor* </label>

            <div className="subFormNew">
                <span className="currencyBtn"><p>R$:</p></span>
                <CurrencyFormat thousandSeparator={true}
                    className="currencyInput"
                    id="valor"
                    placeholder="00,00"
                    onChange={event => setValor(event.target.value)} />
            </div>

            <button type="submit" className="btn">Salvar Spot</button>

        </form>
    )
}