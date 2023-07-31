import React from 'react';

const Parecer = ({ user }) => {

    return (
        <div>
            <h1>Parecer nº 123/2015</h1>
            <p>Nome: {user.name}</p>
            <p>CPF/CNPJ: {user.cpfcnpj}</p>
        </div>
    )
}

export default Parecer;