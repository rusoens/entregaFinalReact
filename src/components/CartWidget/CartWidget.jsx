import React from 'react'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const CartWidget = () => {
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/8146/8146003.png"
  const { carrito } = useContext(CarritoContext);
  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0)
  return (
    <div className='contCarrito'>
      <Link to="/cart">
        <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
        {
          totalCantidad
        }
      </Link>
    </div>
  )
}

export default CartWidget
