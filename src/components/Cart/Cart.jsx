import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);

    const totalCarrito = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0)

    if (totalCarrito === 0) {
        return (
            <div className="containerStandar">
                <h2>No hay productos en el carrito</h2>
                <Link className="btnStandar" to="/">Volver</Link>
            </div>
        )
    } else {
        return (
            <div className="containerStandar">
                {carrito.map(producto => <CartItem key={producto.id}{...producto} />)}
                <h3>Total: ${total}</h3>
                <button className="btnStandar" onClick={vaciarCarrito}>Vaciar Carrito</button>
                <br />
                <br />
                <br />
                <Link className="btnStandar" to='/checkout' >Finalizar Compra</Link>
            </div>
        )
    }
}

export default Cart
