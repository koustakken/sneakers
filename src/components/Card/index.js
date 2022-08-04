import React, {useState} from 'react'
import styles from './Card.module.scss'

function Card({name, price, img, onFavorite, onPlus}) {
  const {card, favorite} = styles

  const [isAdd, setIsAdd] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleAdd = () =>{
    onPlus({name, img, price})
    setIsAdd(!isAdd)
  }

  return (
    <div className={card}>
        <div className={favorite}>
            <img className="cu-p" src="img/heart-unliked.svg" alt="fav" onClick={onFavorite}/>
        </div>
        <img height={112} width={133} src={img} alt="card-item"/>
        <h5>{name}</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price: </span>
              <b>{price} RUB</b>
        </div>
          <img 
            className="cu-p" 
            src={isAdd ? "/img/btn-cheked.svg" : "/img/btn-uncheked.svg"}  
            alt="btn-uncheked" 
            onClick={handleAdd}/>
        </div>
    </div>
  )
}

export default Card