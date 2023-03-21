let precioCompra=0;
function consultarAPI(){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=ARS`;
    fetch(url)
        .then(resultado => resultado.json())
        .then(resultadoJson => {resultadoJson.RAW.USDT.ARS.PRICE;
        })
        .catch(error => console.log(error));
}
consultarAPI()