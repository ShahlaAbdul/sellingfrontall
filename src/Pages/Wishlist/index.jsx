import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import { WishlistContex } from '../../useContext/WishlistContex';

function Wishlist() {
  const { wishlist, addWishlist,remoweWishlist,isWishlist}= useContext(WishlistContex)
  return (
    <div>

      <Helmet>
        <title>WishlistPage</title>
      </Helmet>
      <div className="our_product_cards">
        {console.log(wishlist)}
        {}
        {wishlist.map((x)=>(
          <div className="our_product_card" key={x._id}>
          

            <ul>
              <li className='image'> <img src={x.item.image} alt="" /></li>
              <li className='name'>{x.item.name}</li>
              <li className='desc '>{x.item.description}</li>
              <li className='icons'>
              <i className="fa-regular fa-eye"></i>
              <i className="fa-regular fa-heart"></i>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist;