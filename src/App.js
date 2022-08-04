import React, {useState, useEffect} from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";

function App() {

  //get data mockapi
  const [items, setItems] = useState([])

  useEffect(() =>{
    axios.get('https://61db06c54593510017aff7a4.mockapi.io/items')
      .then(res =>{
        setItems(res.data)
      })
    axios.get('https://61db06c54593510017aff7a4.mockapi.io/cart')
      .then(res =>{
        setCartItems(res.data)
      })
  }, [])

  const [cartItems, setCartItems] = useState([])

  const onAddToCart = (item) =>{
    axios.post('https://61db06c54593510017aff7a4.mockapi.io/cart', item)
    setCartItems(prev => [...prev, item])
  }

  const onRemoveItem = (id) =>{
    axios.delete(`https://61db06c54593510017aff7a4.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  //cart
  const [cartOpened, setCartOpened] = useState(false)

  const handleCartOpen = () =>{
    setCartOpened(!cartOpened)
  }

  //search
  const [searchValue, setSearchValue] = useState('')

  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value)
  }


  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer 
                        handleCartOpen={handleCartOpen} 
                        items={cartItems}
                        onRemoveItem={onRemoveItem}
      />}

      <Header 
        handleCartOpen={handleCartOpen}
      />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Result for: ${searchValue}` : 'All sneakers'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search"/>
            {searchValue && <img 
                                className="clear cu-p" 
                                src="img/btn-remove.svg" 
                                alt="remove"
                                onClick={()=>{setSearchValue('')}} 
                            />}
            <input 
              placeholder="Search..." 
              onChange={onChangeSearchInput}
              value={searchValue}
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            items
              .filter(i => i.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj, index) => (
                <Card 
                  key={index}
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
