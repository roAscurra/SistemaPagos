let precioCompra=0;
function consultarAPI(){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=ARS`;
    fetch(url)
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            setInterval(precioCompra=(resultadoJson.RAW.USDT.ARS.PRICE)-(resultadoJson.RAW.USDT.ARS.PRICE*1/100),1000);
        })
        .catch(error => console.log(error));
}
function mostrar(valor){
    let equivalente=valor/precioCompra;
    document.getElementById("resultado").value=`${equivalente.toFixed(3)} USDT`;
}
consultarAPI()