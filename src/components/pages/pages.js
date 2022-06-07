import React from 'react'

import './pages.css'

const Pages = () => {
  const amount = 256
  const site = `5-8`
    
    return <div className='pages'>
      <span className='amount'></span>
      <button className='prev btn-pages'>{`<`}</button>
      <div className='page'>1</div>
      <div className='page'>2</div>
      <div className='page'>3</div>
      <span>...</span>
      <div className='page'>64</div>
      <button className='next btn-pages'>{`>`}</button>
    </div>
}

export default Pages