let sesion = sessionStorage.getItem('baseDatos') ? JSON.parse(sessionStorage.getItem('baseDatos')): []


const form = document.querySelector('.form__container') 

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const valuesForm = Object.values(form)
    const formInfo = {};

    valuesForm.forEach(valueInput =>{
        formInfo[valueInput.id] = valueInput.value 

    })
    console.log(formInfo);
    sesion.push(formInfo)

    sessionStorage.setItem('baseDatos',JSON.stringify(sesion))
});





