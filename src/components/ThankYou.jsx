import React from 'react'
import Card from './Card'
import "./ThankYou.css"
import thankYouImg from "../resources/illustration-thank-you.svg"

const ThankYou = ({rating}) => {
  return (
    <Card>
        <div className="thank-you-img-container">
          <img src={thankYouImg} alt="" />  
        </div>
        <div className="selected">
            <p>You selected {rating} out of 5</p>
        </div>
       <h1 className="title">Thank You!</h1>
       <p className='text'>we appreciate you taking the time to give a rating ,
       more support, don't hesitate to get in touch!
       </p>
    </Card>
  )
}

export default ThankYou