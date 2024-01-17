import React, { useContext } from 'react'
import "./style.scss"
import { Helmet } from 'react-helmet-async'
import { BaskettContext } from '../../useContext/BaskettContext'

function Basket() {
  const {basket,addBasket,remoweBasket,increaseCount,decreaseCount}= useContext(BaskettContext)

  return (
    <div>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <div className="our_product_cards">
        {console.log(basket)}
        {}
        {basket.map((x)=>(
          <div className="our_product_card" key={x._id}>
          

            <ul>
              <li className='image'> <img src={x.item.image} alt="" /></li>
              <li className='name'>{x.item.name}</li>
              <li className='desc '>{x.item.description}</li>
              <li className='icons'>
              <i className="fa-regular fa-eye"></i>
              <i className="fa-regular fa-heart"></i>
              <button onClick={()=>remoweBasket(x)}>remowe</button>
              <button onClick={()=>increaseCount(x)}>+</button>
              {x.count}
              <button onClick={()=>decreaseCount(x)}>-</button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Basket