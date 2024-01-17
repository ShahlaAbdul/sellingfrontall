import React from 'react'
import "./style.scss"
import LeaderCard from '../LeaderCard'

function Leadership() {
  return (
    <div>
      <div className="leadership">
        <div className="leadership_head">
          <span>Team</span>
          <h1>Leadership</h1>
        </div>
        <div className="leadership_cards">
          <LeaderCard
          image={"https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp"}
          name={"John Rooster"}
          author={"CO-FOUNDER, PRESIDENT"}
           ptext={"Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur."}></LeaderCard>
          <LeaderCard
          image={"https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp"}
          name={"John Rooster"}
          author={"CO-FOUNDER, PRESIDENT"}
           ptext={"Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur."}></LeaderCard>
           <LeaderCard
          image={"https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp"}
          name={"John Rooster"}
          author={"CO-FOUNDER, PRESIDENT"}
           ptext={"Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur."}></LeaderCard>
        </div>
      </div>
    </div>
  )
}

export default Leadership