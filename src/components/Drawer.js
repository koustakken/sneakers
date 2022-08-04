import React from 'react'

function Drawer({handleCartOpen, items, onRemoveItem}) {

  return (
    <div className="overlay">
        <div className="drawer d-flex flex-column">
          <h2 className="d-flex justify-between mb-20">Cart 
            <img 
              className="removeBtn cu-p" 
              src="img/btn-remove.svg" 
              alt="remove" 
              onClick={handleCartOpen}
            />
          </h2>

          {
            items.length > 0 ? 
            <div>
              <div className="items flex">
              {items.map(obj =>(
                <div className="cartItem d-flex align-center mb-20">
                  <img className="mr-20" width={70} height={70} src={obj.img} alt="sneakers" />
                  <div className="mr-20">
                    <p className="mb-5">{obj.name}</p>
                    <b>{obj.price} RUB</b>
                  </div>
                  <img 
                    className="removeBtn" 
                    src="img/btn-remove.svg" 
                    alt="remove" 
                    onClick={() => onRemoveItem(obj.id)}
                  />
              </div>
              ))}
              </div>
              <div className="cartTotalBlock">
              <ul>
              <li>
                <span>Amoun</span>
                <div></div>
                <b>25 899 RUB</b>
              </li>
              <li>
                <span>Tax</span>
                <div></div>
                <b>1029 RUB</b>
              </li>
              </ul>
              <button className="greenButton">done <img src="img/arrow.svg" alt="arrow"/></button>
              </div>
            </div> : <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
              <img
                className='mb-20' width={120} height={120} 
                src='/img/empty-cart.jpg' 
                alt='empty'
              />
              <h2>Empty Cart</h2>
              <p className='opacity-6'>Add items to cart</p>
              <button onClick={handleCartOpen} className='greenButton'>
                <img src='/img/arrow.svg' alt='arrow'/>
                Back
              </button>
          </div>
          }

             
        </div>
    </div>
  )
}

export default Drawer