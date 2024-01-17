import React from 'react'
import "./style.scss"
import OurServicesCard from '../OurServicesCard'

function OurServices() {
  return (
    <div className='our_services'>
      <div className="our_services_head">
        <span>OUR SERVICES</span>
        <h1>We Offer Services</h1>
      </div>
      <div className="our_services_cards">
        <OurServicesCard 
        icon={"fa-solid fa-comment"} 
        head={"Business Consulting"} 
        ptext={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."}  >
        </OurServicesCard>
        <OurServicesCard 
        icon={"fa-solid fa-comment"} 
        head={"Business Consulting"} 
        ptext={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."}  >
        </OurServicesCard>
        <OurServicesCard 
        icon={"fa-solid fa-comment"} 
        head={"Business Consulting"} 
        ptext={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."}  >
        </OurServicesCard>
        <OurServicesCard 
        icon={"fa-solid fa-comment"} 
        head={"Business Consulting"} 
        ptext={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."}  >
        </OurServicesCard>
        <OurServicesCard 
        icon={"fa-solid fa-comment"} 
        head={"Business Consulting"} 
        ptext={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."}  >
        </OurServicesCard>
        <OurServicesCard 
        icon={"fa-solid fa-comment"} 
        head={"Business Consulting"} 
        ptext={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."}  >
        </OurServicesCard>
      </div>
    </div>
  )
}

export default OurServices