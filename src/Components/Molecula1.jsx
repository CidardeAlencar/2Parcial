import React from 'react'
import Ellipse from '../Assets/Ellipse 1.png'
import Vector from '../Assets/Vector.png'
import { Molecula2 } from './Molecula2'
import '../Styles/Molecula1.css'
function Molecula1() {
  return (
    <div className='card'>
    <div className='Molecula1'>
      <img src={Ellipse} alt='icono de ELIPSE'></img>
      <span className='uno'>1</span>
      <span>Agenda/Topic</span>
      <span>SAAS-0000</span>
      <img src={Vector} alt='icono de Vector'></img>
    </div>
    <div className='Body'>
      {
       // TypeList.map(
        //  (card)=>
          <Molecula2/>
         // theme={props.theme}
        //  Houres={card.Houres}
        //  hrsweek={card.hrsweek}
          
      //  )
      }
  </div>
  </div>
  )
}

export {Molecula1}