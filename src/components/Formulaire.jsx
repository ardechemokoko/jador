import React, { useState } from 'react';

export default function Formulaire() {
    const initialState = {
        pseudo: "",
        price: "",
        account: ""
    };

    const [data, setData] = useState(initialState);
    const [resultat, setResultat] = useState([]);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(data).every((value) => value.length > 0)) {
            setResultat([...resultat, data]);
            setData(initialState);
            setError('');
        } else {
            setError('Tous les champs sont obligatoires');
        }
    };

    return (
        <>
            <div className='col-md-4 px-5 py-3 card shadow'>
                <h5>Information du donateur</h5>
                <hr />
                {error !== "" && (
                    <div className="alert alert-danger">{error}</div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="pseudo">Pseudo<span className='text-danger'>*</span> : </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name='pseudo'
                            value={data.pseudo}
                            className='form-control'
                            placeholder='Pseudo'
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor="price">Montant<span className='text-danger'>*</span> : </label>
                        <input
                            onChange={handleInputChange}
                            type="number"
                            name='price'
                            value={data.price}
                            className='form-control'
                            placeholder='Montant'
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor="account">Numéro de compte<span className='text-danger'>*</span> :</label>
                        <input
                            onChange={handleInputChange}
                            type="number"
                            name='account'
                            value={data.account}
                            className='form-control'
                            placeholder='Numéro de compte'
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <button type='submit' className='btn btn-primary w-100'>Envoyer</button>
                    </div>
                </form>
            </div>
            <div className='col-md-6  px-5 py-3 shadow'>
                <h5>Liste des donateurs</h5>
                <hr />
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Pseudo</th>
                            <th>Montant</th>
                            <th>Numéro de compte</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultat.map((item, index) => (
                            <tr key={index}>
                                <td>{item.pseudo}</td>
                                <td>{item.price} DHS</td>
                                <td>{item.account}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
