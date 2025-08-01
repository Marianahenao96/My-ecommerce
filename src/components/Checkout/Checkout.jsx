import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import FormCheckout from "../FormCheckout/FormCheckout";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
        paymentStatus: "pendiente de pago", 
    });

    const { cart, totalPrice } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [orderDate, setOrderDate] = useState(null);
    const [error, setError] = useState(null);

    const handleChangeInput = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value,
        });
    };

    const sendOrder = (event) => {
        event.preventDefault();

        const createdAt = new Date();
        const order = {
            buyer: {
                fullname: dataForm.fullname,
                phone: dataForm.phone,
                email: dataForm.email,
            },
            products: [...cart],
            total: totalPrice(),
            status: dataForm.paymentStatus,
            createdAt: createdAt.toISOString(),
        };

        uploadOrder(order);
        setOrderDate(createdAt);
    };

    const uploadOrder = async (order) => {
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);
            setOrderId(response.id);
            console.log("Orden enviada:", order); 
            setError(null);
        } catch (err) {
            console.error("Error al enviar la orden:", err);
            setError("Ocurrió un error al procesar tu orden.");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            {!orderId ? (
                <FormCheckout
                    dataForm={dataForm}
                    handleChangeInput={handleChangeInput}
                    sendOrder={sendOrder}
                />
            ) : (
                <div style={{
                    background: "#5facff",
                    color: "#fff",
                    padding: "2rem",
                    borderRadius: "1rem",
                    maxWidth: "500px",
                    margin: "0 auto"
                }}>
                    <h2>Orden generada correctamente!</h2>
                    <p>Guarde el identificador de su orden:</p>
                    <strong>{orderId}</strong>
                    <p style={{ marginTop: "1rem" }}>
                        Fecha: {orderDate.toLocaleString()}
                    </p>
                    <p>Estado: pendiente de pago</p>
                </div>
            )}

            {error && (
                <div style={{ marginTop: "1rem", color: "red" }}>
                    {error}
                </div>
            )}
        </div>
    );
};

export default Checkout;
