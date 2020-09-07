export const convertNewLineToBr = (text)=>{
    return text.replace(/\n/g, "<br />");
}
export const priceParser = (price,digits = 0)=>{
    price = parseInt(price).toLocaleString('es-AR',{ minimumFractionDigits: digits });
    return `$ ${price}`
}
