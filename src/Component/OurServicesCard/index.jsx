import React from 'react'
import "./style.scss"

function OurServicesCard({head,ptext,icon}) {
  return (
    <div>
        <div className="card">
            <div className='icon'>
                <i className={icon}></i>
            </div>
            <ul className='content'>
                <li className='head'>{head}</li>
                <li>{ptext} </li>
                <li className='learn'>learn More</li>
            </ul>
        </div>

    </div>
  )
}

export default OurServicesCard