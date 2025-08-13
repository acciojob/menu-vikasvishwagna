import React, { useState } from 'react'
import Menu from './Menu'

const menuData = [
  // LUNCH
  {
    id: 1,
    name: "Truffle Mushroom Risotto",
    category: "lunch",
    image: "https://hildaskitchenblog.com/wp-content/uploads/2022/06/mushroom-and-praun-risotto-ingredients-10.jpg",
    price: 18.99,
    description: "Creamy arborio rice with earthy mushrooms and a hint of truffle oil."
  },
  {
    id: 2,
    name: "Moroccan Lamb Tagine",
    category: "lunch",
    image: "https://bing.com/th?id=OSK.44654c97d969b1cc63c2d6b1e520791f",
    price: 22.50,
    description: "Slow-cooked lamb with apricots, almonds, and Moroccan spices."
  },
  {
    id: 3,
    name: "Thai Green Curry with Prawns",
    category: "lunch",
    image: "https://www.alycealexandra.com/cdn/shop/articles/recipe_photos_33a6b19e-16f2-40be-9159-aae245cb3055.jpg?v=1722311567&width=1100",
    price: 19.75,
    description: "Fresh prawns in a fragrant coconut-based green curry sauce."
  },

  // BREAKFAST
  {
    id: 4,
    name: "Croissant Benedict",
    category: "breakfast",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jKPxFyjNvzddnNfykfg_l3tCU1YvOk2nrA&s",
    price: 12.99,
    description: "Flaky croissant topped with poached eggs and hollandaise sauce."
  },
  {
    id: 5,
    name: "Shakshuka",
    category: "breakfast",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqveZ0hZxgIotOcYit3vYbITe2HUco47iwHA&s",
    price: 11.50,
    description: "Poached eggs simmered in a spiced tomato and pepper sauce."
  },
  {
    id: 6,
    name: "Japanese Soufflé Pancakes",
    category: "breakfast",
    image: "https://danishcreamery.com/wp-content/uploads/recipe-mushroom-palmiers-feature-1.jpg",
    price: 14.25,
    description: "Fluffy, cloud-like pancakes served with fresh berries."
  },

  // SHAKES
  {
    id: 7,
    name: "Pistachio Rose Milkshake",
    category: "shakes",
    image: "https://images.ctfassets.net/18q9nqfz1jg6/3GGregPaORBYumJT7Didnh/77ec86c270d2576d542453b2beb39457/32169105.jpg?w=640&h=640&fit=fill&fm=webp&q=90",
    price: 8.50,
    description: "Creamy milkshake infused with pistachios and a hint of rose water."
  },
  {
    id: 8,
    name: "Salted Caramel Pretzel Shake",
    category: "shakes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQ3LnCtfdt9QXHEeEPAuKgwjsM5UDZ8VURQ&s",
    price: 9.25,
    description: "Vanilla ice cream blended with salted caramel and crunchy pretzels."
  },
  {
    id: 9,
    name: "Tropical Dragon Fruit Smoothie",
    category: "shakes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqgIhQOFAeOoIhXtY1B_hmX_WUAQsuHJM4A&s",
    price: 7.99,
    description: "Bright pink smoothie with dragon fruit, mango, and coconut milk."
  }
]

function App() {
  const [items, setItems] = useState(menuData)

  const filterCategory = (cat) => {
    if (cat === "all") {
      setItems(menuData)
    } else {
      setItems(menuData.filter((dish) => dish.category === cat))
    }
  }

  return (
    <div className='p-8 bg-gray-100 min-h-screen' >
      <h1 className='text-4xl font-bold text-center mb-7 ' >🍽 Menu</h1>

      {/* Filter Buttons */}
      <div className='flex justify-center gap-4 mb-10 '>
        <button onClick={() => filterCategory("all")} 
        className='bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 cursor-pointer'
        >All</button>
        <button onClick={() => filterCategory("breakfast")}className='bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-800 cursor-pointer'
        >Breakfast</button>
        <button onClick={() => filterCategory("lunch")} className='bg-green-600 text-white px-4 py-2 rounded hover:bg-yellow-800 cursor-pointer'
        >Lunch</button>
        <button onClick={() => filterCategory("shakes")} className='bg-orange-600 text-white px-4 py-2 rounded hover:bg-yellow-800 cursor-pointer'
        >Shakes</button>
      </div>

      <Menu items={items} />
    </div>
  )
}

export default App
