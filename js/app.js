let precioCompra=0;
let botonEnviar = document.getElementById('boton');
let modal = document.getElementById('modal');
let cerrarmodal = document.getElementById('btn-cerrar-modal');

botonEnviar.addEventListener("click",()=>{
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
    document.getElementById("resultado").value=`$ ${equivalente.toFixed(2)} USDT`;
}
consultarAPI();
setInterval('consultarAPI()',1000);
botonEnviar.disabled=true;
function habilitar(){
    let nombre = document.getElementById('nombre').value;
    let caja = document.getElementById('caja').value;
    let cantidad = document.getElementById('cantidad').value;

    let des=0;
    if(nombre==''){
        des++;
    }
    if(caja=='0'){
        des++;
    }
    if(cantidad==''){
        des++;
    }
    if(des===0){
        botonEnviar.disabled=false;
    }else{
        botonEnviar.disabled=true;

    }
    
}
document.getElementById('caja').addEventListener('change',habilitar)
document.getElementById('formulario').addEventListener('keyup',habilitar);
