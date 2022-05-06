import React from 'react'
import '../Styles/Molecula2.css'

function Molecula2() {
    const Description='Description of what is done here'
  return (
    <div className='Molecula2'>
        <div className='description'>
            <p>{Description}</p> 
            <div className='Date'>
                <span>Last Updated</span>
                <span>3/8/2020</span>
            </div>
        </div>
    </div>
  )
}

export{Molecula2}