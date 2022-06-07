import React from 'react'
import iconGithub from '../../icons/icon-github.png'

import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={iconGithub} className='icon-github' />
            <form className='search-panel'>
                <button id='btn-search'>
                    <div className='icon-search' />
                </button>
                <input className='input-text'></input>
            </form>
        </div>
    )
}

export default Header
