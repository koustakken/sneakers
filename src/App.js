

function App() {
  return (
    <div className="wrapper clear">

      <div className="overlay">
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
                <span>Total</span>
                <div></div>
                <b>25 899 RUB</b>
              </li>
              <li>
                <span>Amount</span>
                <div></div>
                <b>1029 RUB</b>
              </li>
            </ul>
            <button className="greenButton">done <img src="img/arrow.svg" alt="arrow"/></button>
          </div>
          
        </div>
      </div>
      
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

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search"/>
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">

        <div className="card">
          <div className="favorite">
            <img className="" src="img/heart-unliked.svg" alt="fav"/>
          </div>
          <img height={112} width={133} src="img/1.jpg" alt="card-item"/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price: </span>
              <b>12 999 RUB</b>
            </div>
            <img className="cu-p" src="/img/btn-uncheked.svg"  alt="btn-uncheked"/>
          </div>
        </div>

        <div className="card">
          <img height={112} width={133} src="img/2.jpg" alt="card-item"/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price: </span>
              <b>12 999 RUB</b>
            </div>
            <img className="cu-p" src="/img/btn-uncheked.svg"  alt="btn-uncheked"/>
          </div>
        </div>

        <div className="card">
          <img height={112} width={133} src="img/3.jpg" alt="card-item"/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price: </span>
              <b>12 999 RUB</b>
            </div>
            <img className="cu-p" src="/img/btn-uncheked.svg"  alt="btn-uncheked"/>
          </div>
        </div>

        <div className="card">
          <img height={112} width={133} src="img/4.jpg" alt="card-item"/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price: </span>
              <b>12 999 RUB</b>
            </div>
            <img className="cu-p" src="/img/btn-uncheked.svg"  alt="btn-uncheked"/>
          </div>
        </div>

        </div>

      </div>
    </div>
  );
}

export default App;
