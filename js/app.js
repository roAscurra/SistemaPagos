let precioCompra=0;
function consultarAPI(){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=ARS`;
    fetch(url)
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            precioCompra=(resultadoJson.RAW.USDT.ARS.PRICE)-(resultadoJson.RAW.USDT.ARS.PRICE*1/100);
        })
        .catch(error => console.log(error));
}
consultarAPI()