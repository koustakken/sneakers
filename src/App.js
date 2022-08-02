

function App() {
  return (
    <div className="wrapper clear">
      
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
        <h1 className="mb-40">All sneakers</h1>

        <div className="d-flex">

        <div className="card">
          <img height={112} width={133} src="img/1.jpg" alt="card-item"/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price: </span>
              <b>12 999 RUB</b>
            </div>
            <button className="button"><img height={11} width={11} src="img/plus.svg" alt="plus"/></button>
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
            <button className="button"><img height={11} width={11} src="img/plus.svg" alt="plus"/></button>
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
            <button className="button"><img height={11} width={11} src="img/plus.svg" alt="plus"/></button>
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
            <button className="button"><img height={11} width={11} src="img/plus.svg" alt="plus"/></button>
          </div>
        </div>

        </div>

      </div>
    </div>
  );
}

export default App;
