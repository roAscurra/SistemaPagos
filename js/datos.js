import { InsertData } from "./firebase.js";

const datos = document.getElementById('formulario');

datos.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nombre = datos['nombre'];
    const transaccion = datos['n_transaccion'];
    const tipoCaja = datos['caja'];
    const cantidad = datos['cantidad'];
    const usd = datos['resultado'];
    InsertData(nombre.value,transaccion.value,tipoCaja.value,cantidad.value,resultado.value,usd.value);
    datos.reset();
})
