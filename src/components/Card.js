import React from 'react'

function Card() {
  return (
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
  )
}

export default Card