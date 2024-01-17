import React from 'react'
import "./style.scss"

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_head">
          <ul>
            <li className='about'>
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, debitis. Totam quaerat nesciunt architecto officiis possimus rerum, itaque eveniet nam.</p>
            </li>
            <li className='quick'>
              <h2>Quick Link </h2>
              <span>lorem</span>
              <span>lorem</span>
              <span>lorem</span>
            </li>
            <li className='follow'>
              <h2>Follow Us</h2>
              <span><i class="fa-brands fa-facebook"></i></span>
              <span><i class="fa-brands fa-twitter"></i></span>
              <span><i class="fa-brands fa-instagram"></i></span>
            </li>
          </ul>
          <div className='featured'>
              <h2>Featured Product  </h2>
              <div className="img">

              </div>
              <span>Leather Brown Shoe</span>
              <span>$60</span>
              <button>add to cart</button>
            </div>
        </div>
        <div className="footer_bottom">
        <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer