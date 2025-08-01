
import "./FormCheckout.css";

const FormCheckout = ({ dataForm, handleChangeInput, sendOrder }) => {
    return (
        <div>
            <form onSubmit={sendOrder}>
                <label htmlFor="fullname">Nombre completo</label>
                <input
                    type="text"
                    name="fullname"
                    value={dataForm.fullname}
                    onChange={handleChangeInput}
                    required
                />

                <label htmlFor="phone">Teléfono</label>
                <input
                    type="number"
                    name="phone"
                    value={dataForm.phone}
                    onChange={handleChangeInput}
                    required
                />

                <label htmlFor="email">Correo electrónico</label>
                <input
                    type="email"
                    name="email"
                    value={dataForm.email}
                    onChange={handleChangeInput}
                    required
                />

                <label htmlFor="paymentStatus">Estado de pago</label>
                <select
                    name="paymentStatus"
                    value={dataForm.paymentStatus}
                    onChange={handleChangeInput}
                    required
                >
                    <option value="pendiente de pago">Pendiente de pago</option>
                    <option value="pagado">Pagado</option>
                </select>

                <button type="submit">Enviar Orden</button>
            </form>
        </div>
    );
};

export default FormCheckout;
