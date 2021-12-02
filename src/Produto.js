import React from 'react'

const Produto = ({nome, propriedades}) => {
    return (
        <div style={{border:'1px solid #000', margin: '1rem', padding: '10px'}}>
            <p>{nome}</p>
            <ul>
                {propriedades.map(prop => <li style={{margin:'10px'}}>{prop}</li>)}
            </ul>
        </div>
    )
}

export default Produto
