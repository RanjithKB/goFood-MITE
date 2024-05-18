import React from 'react'

export default function Card(props) {
  return (
    <div>
      <div className="card" style={{width: '18rem'}}>
  <img src={props.cardData.img} className="card-img-top" alt="..."  style={{height: '130px', objectFit:'cover'}}/>
  <div className="card-body">
    <p className="card-text">{props.cardData.description}</p>
  </div>
</div>
    </div>
  )
}
