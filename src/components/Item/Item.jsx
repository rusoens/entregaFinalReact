import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
      <p>Nombre: {nombre}</p>
      <br />
      <p>Precio: ${precio}</p>
      <br />
      <img className='imgProducto' src={img} alt={nombre} />
      <Link className='btnStandar' to={`/item/${id}`}>Ver detalles</Link>
    </div>
  )
}

export default Item
