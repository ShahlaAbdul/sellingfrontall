import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import { SearchContext } from '../../useContext/SearchContext';
import { BaskettContext } from '../../useContext/BaskettContext';
import { WishlistContex } from '../../useContext/WishlistContex';

function OurProduct() {
  const [fetchData, setFetchData] = useState([])
  const [sortedProperty, setSortedProperty] = useState(null)
   const {search,handleSearch}= useContext(SearchContext)
   const {basket,addBasket,remoweBasket,increaseCount,decreaseCount}= useContext(BaskettContext)
   const { wishlist, addWishlist,remoweWishlist,isWishlist}= useContext(WishlistContex)

  function getFetch() {
    fetch("http://localhost:4000/")
    .then((res)=>res.json())
    .then((data)=>setFetchData(data));
    
  }
  useEffect(() => {
    getFetch()
  }, [])
  
  return (
    <div>
      <div className='our_product'>
      <div className="our_product_head">
        <span>POPULAR PRODUCTS</span>
        <h1>Our Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
      </div>

<div className="our_product_search">
  <div className="inp">
    <input type="text" name="" id="" placeholder='search a product' onChange={(x)=>handleSearch(x)} />
  </div>
  <div className="filter_byprice">
    <button onClick={()=>setSortedProperty({property:"name", asc:true})}>A-z</button>
    <button onClick={()=>setSortedProperty({property:"name", asc:false})}>Z-a</button>
    <button onClick={()=>setSortedProperty(null)}>Default</button>

  </div>
</div>
      {/* cardds */}
      <div className="our_product_cards">
        {fetchData
        .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))

        .sort((a,b) =>{
          if (sortedProperty && sortedProperty.asc) {
            return (a[sortedProperty.property] > b[sortedProperty.property]) ? 1 : ((b[sortedProperty.property] > a[sortedProperty.property]) ? -1 : 0)
          } else if ((sortedProperty && sortedProperty.asc)) {
            return (a[sortedProperty.property] < b[sortedProperty.property]) ? 1 : ((b[sortedProperty.property] < a[sortedProperty.property]) ? -1 : 0)
          }else{
            return 0;
          }
        }
     )
        .map((x)=>(
          <div className="product_card" key={x._id}>
            
            <ul>
              <li className='image'> <img src={x.image} alt="" /></li>
              <li className='name'>{x.name}</li>
              <li className='desc '>{x.description}</li>
              <li className='icons'>
              <i className="fa-regular fa-eye"></i>
              <i className="fa-regular fa-heart" onClick={()=>addWishlist(x)}></i>
              <i className="fa-solid fa-cart-shopping" onClick={()=>addBasket(x)}></i>
              </li>
            </ul>
            <div className="detail_buttons">
                <button className='card'>Cart</button>
                <button className='view'>View</button>
              </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default OurProduct