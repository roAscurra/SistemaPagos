let precioCompra=0;
let mostrarmodal= document.getElementById('boton');
let modal = document.getElementById('modal');
let cerrarmodal = document.getElementById('btn-cerrar-modal');

mostrarmodal.addEventListener("click",()=>{
    modal.showModal();
})
cerrarmodal.addEventListener("click",()=>{
    modal.close();
})
function valorCompra(valor){
    let compra= valor-(valor*1/100);
    return compra;
}
function consultarAPI(){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=ARS`;
    fetch(url)
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            precioCompra=valorCompra(resultadoJson.RAW.USDT.ARS.PRICE)
        })
        .catch(error => console.log(error));
}
function mostrar(valor){
    let equivalente=valor/precioCompra;
    document.getElementById("resultado").value=`${equivalente.toFixed(3)} USDT`;
}
setInterval('consultarAPI()',1000);
