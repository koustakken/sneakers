import React from 'react'

function Drawer() {
  return (
    <div style={{display : 'none'}} className="overlay">
        <div className="drawer d-flex flex-column">
          <h2 className="d-flex justify-between mb-20">Cart <img className="removeBtn cu-p" src="img/btn-remove.svg" alt="remove" /></h2>

          <div className="items flex">
            <div className="cartItem d-flex align-center mb-20">
              <img className="mr-20" width={70} height={70} src="img/1.jpg" alt="sneakers" />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 RUB</b>
              </div>
              <img className="removeBtn" src="img/btn-remove.svg" alt="remove" />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <img className="mr-20" width={70} height={70} src="img/1.jpg" alt="sneakers" />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 RUB</b>
              </div>
              <img className="removeBtn" src="img/btn-remove.svg" alt="remove" />
            </div>
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
        </div>
    </div>
  )
}

export default Drawer