import React from 'react'

function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">

        <div className="d-flex align-center">
          <img src="img/logo.svg" alt="logo" className="mr-15"/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">best shoes shop</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img src="img/cart.svg" alt="cart" className="mr-15"/>
            <span>1205 RUB</span>
          </li>
          <li>
            <img src="img/user.svg" alt="user"/>
          </li>
        </ul>

    </header>
  )
}

export default Header