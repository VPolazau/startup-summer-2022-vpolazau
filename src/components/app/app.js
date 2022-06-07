import React from 'react'
import Header from '../header'
import Info from '../info'
import Repositories from '../repositories'

import './app.css'

const App = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <Info />
                <Repositories />
            </div>
        </div>
    )
}

export default App
