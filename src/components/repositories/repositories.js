import React from 'react'
import Pages from '../pages/pages'
import Row from '../row'

import './repositories.css'

const Repositories = () => {
    const numberOfRep = 256

    return (
        <div className='repositories flex-body-item'>
            <span className='number-repositories'>Repositories({numberOfRep})</span>
            <div className='repository-rows'>
                <Row />
                <Row />
                <Row />
                <Row />
            </div>
            <Pages />
        </div>
    )
}

export default Repositories
