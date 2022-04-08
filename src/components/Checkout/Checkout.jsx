import { useContext, useState } from 'react'
import { Navigate, Link } from "react-router-dom"

import { CartContext } from "../../context/CartContex"
import { generarOrden } from "../../utils/firebase"

import styles from "./styles.module.css";

const Checkout = () => {
    const {cart, total, clear} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [data, setData] = useState({
        nombre: '',
        email: '',
        tel: '',
    })

    if (orderId) {
        return (
            <div className={styles.tankyou}>
                <h2>Gracias por tu compra!</h2>
                <hr/>
                <h3>Tu número de orden es: {orderId}</h3>
                <div className={styles.button}><Link to="/">Volver</Link></div>                
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        generarOrden(data, cart, total, setOrderId, clear)
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    type='text'
                    placeholder="Nombre"
                    value={data.nombre}
                    onChange={handleInputChange}
                    name='nombre'
                />
                <input
                    className="form-control my-2"
                    type='email'
                    placeholder="Email"
                    value={data.email}
                    onChange={handleInputChange}
                    name='email'
                />
                <input
                    className="form-control my-2"
                    type='tel'
                    placeholder="Teléfono"
                    value={data.tel}
                    onChange={handleInputChange}
                    name='tel'
                />

                <button type="submit" className={styles.button}>
                    Enviar
                </button>
            </form>
        </div>
    )

}

export default Checkout