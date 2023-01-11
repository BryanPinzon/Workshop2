import { theProducts } from "./array.js"

const containerProducts = document.getElementById('table')

let sesion = sessionStorage.getItem('baseDatos') ? JSON.parse(sessionStorage.getItem('baseDatos')): []


const printProducts = (listProducts, container)=>{
    listProducts.forEach((sesion)=>{
        const createItems = document.createElement('tr');
        createItems.innerHTML = `<td class='td__items'>${sesion.nameInput}</td>
        <td class='td__items'>${sesion.priceInput}</td>
        <td class='td__items'>${sesion.quantityInput}</td>
        <td class='td__items'>${sesion.categoryInput}</td>`
    
        container.appendChild(createItems);
    });

}
document.addEventListener('DOMContentLoaded',()=>{
    if(sesion.lenght === 0){
        sessionStorage.setItem('baseDatos', JSON.stringify(theProducts));
        sesion=JSON.parse(sessionStorage.getItem('baseDatos'))
    }
    printProducts(sesion,containerProducts)
})






