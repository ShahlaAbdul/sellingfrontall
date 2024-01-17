import React from 'react'
import "./style.scss"
function LeaderCard({name,image,author,ptext}) {
  return (
    <div>
      <div className="leadercard">
        <div className="card_image">
          <img src={image} alt="" />
        </div>
        <div className="card_name">
          <span>{name}</span>
          <span>{author}</span>
         <p>{ptext}</p> 
        </div>
        <div className="card_icons">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-facebook"></i>
        </div>
      </div>
    </div>
  )
}

export default LeaderCard