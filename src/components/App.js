import React, { useState } from 'react'
import Menu from './Menu'

const menuData = 
  [
    // LUNCH
    {
      id: 1,
      name: "Truffle Mushroom Risotto",
      category: "lunch",
      image: "https://www.recipetineats.com/wp-content/uploads/2020/09/Mushroom-Risotto_5-SQ.jpg",
      price: 18.99, 
      description: "Creamy arborio rice with earthy mushrooms and a hint of truffle oil."
    },
    {
      id: 2,
      name: "Moroccan Lamb Tagine",
      category: "lunch",
      image: "https://www.recipetineats.com/wp-content/uploads/2018/10/Lamb-Tagine_6.jpg",
      price: 22.50,
      description: "Slow-cooked lamb with apricots, almonds, and Moroccan spices."
    },
    {
      id: 3,
      name: "Thai Green Curry with Prawns",
      category: "lunch",
      image: "https://www.recipetineats.com/wp-content/uploads/2019/02/Thai-Green-Curry_0.jpg",
      price: 19.75,
      description: "Fresh prawns in a fragrant coconut-based green curry sauce."
    },

    // BREAKFAST
    {
      id: 4,
      name: "Croissant Benedict",
      category: "breakfast",
      image: "https://hips.hearstapps.com/hmg-prod/images/eggs-benedict-croissants-1649780029.jpg",
      price: 12.99,
      description: "Flaky croissant topped with poached eggs and hollandaise sauce."
    },
    {
      id: 5,
      name: "Shakshuka",
      category: "breakfast",
      image: "https://www.recipetineats.com/wp-content/uploads/2018/01/Shakshuka_5-SQ.jpg",
      price: 11.50,
      description: "Poached eggs simmered in a spiced tomato and pepper sauce."
    },
    {
      id: 6,
      name: "Japanese Soufflé Pancakes",
      category: "breakfast",
      image: "https://images.unsplash.com/photo-1617196037696-5c34a75eb9d3",
      price: 14.25,
      description: "Fluffy, cloud-like pancakes served with fresh berries."
    },

    // SHAKES
    {
      id: 7,
      name: "Pistachio Rose Milkshake",
      category: "shakes",
      image: "https://i0.wp.com/www.cookingwithsapana.com/wp-content/uploads/2021/06/Pistachio-Milkshake-4-scaled.jpg",
      price: 8.50,
      description: "Creamy milkshake infused with pistachios and a hint of rose water."
    },
    {
      id: 8,
      name: "Salted Caramel Pretzel Shake",
      category: "shakes",
      image: "https://www.kitchensanctuary.com/wp-content/uploads/2016/07/Salted-Caramel-Milkshake-square-FS-92.jpg",
      price: 9.25,
      description: "Vanilla ice cream blended with salted caramel and crunchy pretzels."
    },
    {
      id: 9,
      name: "Tropical Dragon Fruit Smoothie",
      category: "shakes",
      image: "https://downshiftology.com/wp-content/uploads/2020/03/Dragon-Fruit-Smoothie-6.jpg",
      price: 7.99,
      description: "Bright pink smoothie with dragon fruit, mango, and coconut milk."
    }
  ]

function App() {

  const[items, setItems] = useState(menuData);

  const filterCategory = (cat)=>{
    if(cat === "all"){
      setItems(menuData);
    }else{
      setItems(menuData.filter((dish)=>dish.category === cat));
    }
  } 



  return (
    <div>
      <h1>Menu</h1>
      <button onClick={()=>filterCategory("all")}>All</button>
      <button onClick={()=>filterCategory("breakfast")}>BreakFast</button>
      <button onClick={()=>filterCategory("lunch")}>Lunch</button>
      <button onClick={()=>filterCategory("shakes")}>Shakes</button>

      <Menu items={items}/>
    </div>
  )
}

export default App

