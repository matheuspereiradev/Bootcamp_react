import React from 'react'

function Cabecalho({ titulo,children }) {
    return (
        <>
        <h1>{titulo}</h1>
        <div>{children}</div>
        </>
    )
}

export default Cabecalho
