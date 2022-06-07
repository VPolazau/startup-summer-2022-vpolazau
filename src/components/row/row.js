import React from 'react'

import './row.css'

const Row = () => {
    const userName = 'vpolazau'
    const repositoryName = 'star-db'
    let repositoryInfo = 'jshdfjshdfjhsbdfjhasbdfjshdvfjhsdvfjhsvdfjhsvdfjhsvdfjshdvfjsksljdfhlksjdhflkzjsdhfglkzjsdgkasjhdlkhncvakvhntalkvjatkesjvhtalkvjhntalkvjlnvjhdlnktjjvahtlnkvitwuechhdvfjshdvfjshdvfjshdvfjshdvfjshv'
    // let repositoryInfo = 'ksjdnfksljdnfksjn'
    if(repositoryInfo.length > 100){
        repositoryInfo = repositoryInfo.slice(0,100) + '...'
    }
    return <div className='row'>
      <a href={`https://github.com/${userName}/${repositoryName}`} className='repository-name'>{repositoryName}</a>
      <span className='repository-info'>{repositoryInfo}</span>
    </div>
}

export default Row
