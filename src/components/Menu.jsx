import React from 'react'

function Menu({items}) {
  return (
    <div>
      {items.map((dish,idx)=>(
        <div key={idx} >
          <img src={dish.image} alt={dish.name} style={{height:"250px"}} />
          <h3>Name:{dish.name}</h3>
          <h4>Description:{dish.description}</h4>
          <p>$:{dish.price}</p>

        </div>
      ))}
    </div>
  )
}

export default Menu