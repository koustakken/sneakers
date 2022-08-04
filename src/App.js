import React, {useState, useEffect} from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {

  const [items, setItems] = useState([])

  useEffect(() =>{
    fetch('https://61db06c54593510017aff7a4.mockapi.io/items')
    .then(responce =>{
      return responce.json()
    })
    .then(json => {
      setItems(json)
    })
  }, [])

  const [cartItems, setCartItems] = useState([])

  const onAddToCart = (item) =>{
    setCartItems(prev => [...prev, item])
  }

  const [cartOpened, setCartOpened] = useState(false)

  const handleCartOpen = () =>{
    setCartOpened(!cartOpened)
  }

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer handleCartOpen={handleCartOpen} items={cartItems}/>}

      <Header 
        handleCartOpen={handleCartOpen}
      />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search"/>
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            items.map(obj => (
              <Card 
                name={obj.name}
                price={obj.price}
                img={obj.img}
                // onFavorite
                onPlus={item => onAddToCart(item)}
              />
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default App;
