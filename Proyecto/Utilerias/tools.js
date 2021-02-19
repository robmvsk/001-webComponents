
//web API llamada Intl (Internacionalizacion), que sirve para dar:
// 1.- formato de fechas  window.Intl.DateTimeFormat
// 2.- formato a monedas  window.Intl.NumberFormat 
//     El primer parametro: es el locate: es el pais en donde se encuentra el usuario
//     El segundo parametro: opciones del formato {}

const formatPrice = (price) => {
    
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",  //estilo tipo moneda
        currency: "USD",    //y la moneda que va a utilizar es USD: Dolar / GBP: Libras esterlinas
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price)  //formatea con la inicializacion de la web API, llamada Intl (Internacionalizacion)

    return newPrice.concat(" USD");
};

export default formatPrice;
