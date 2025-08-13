import React from 'react'

function Menu({ items }) {
  return (
    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {items.map((dish, idx) => (
        <div key={idx} className='bg-white  rounded-lg shadow-lg overflow-hidden hover:shadow-2xl'>
          <img 
            src={dish.image} 
            alt={dish.name} 
            className='h-56 w-full object-cover'
          />
          <div className='p-4'>
            <h3 className='text-xl font-semibold text-gray-800'>{dish.name}</h3>
            <p className='text-gray-600 mt-1'>{dish.description}</p>
            <p className='mt-3 text-lg font-bold'>${dish.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Menu
