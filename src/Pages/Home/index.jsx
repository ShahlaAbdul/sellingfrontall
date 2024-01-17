import React from 'react'
import { Helmet } from 'react-helmet-async'
import ShopWith from '../../Component/ShopWith'
import OurProduct from '../../Component/OurProduct'
import OurServices from '../../Component/OurServices'
import Leadership from '../../Component/LeaderShip'

function Home() {
  return (
    <div>
       <Helmet>
        <title>HomePage</title>
      </Helmet>
      <ShopWith></ShopWith>
      <OurProduct></OurProduct>
      <OurServices></OurServices>
      <Leadership></Leadership>
    </div>
  )
}

export default Home