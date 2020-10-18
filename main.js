var btnAgregar = document.querySelector('#btnAgregar');
var btnEliminar = document.querySelector('#btnEliminar');
var btnBuscar = document.querySelector('#btnBuscar');
var lista = new Array;
class Articulo {
    constructor(codigo, nombre, descripcion, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.costo = costo;
    }
    añadir(elemento) {
        lista.push(elemento);
    }
}
btnAgregar.addEventListener('click', () => {
    let table = document.getElementById('lista');
    let tableinvertida = document.getElementById('listainvertida');
    let codigo = document.querySelector('#codigo');
    let nombre = document.querySelector('#nombre');
    let descripcion = document.querySelector('#descripcion');
    let cantidad = document.querySelector('#cantidad');
    let costo = document.querySelector('#costo');
    let articulo = new Articulo(codigo.value, nombre.value, descripcion.value, cantidad.value, costo.value);
    table.innerHTML = '';
    tableinvertida.innerHTML = '';
    console.clear();
    console.log('Se oprimió el botón Agregar');
    let cabecera1 = table.insertRow(-1)
    let titulo11 = cabecera1.insertCell(0)
    let titulo12 = cabecera1.insertCell(1)
    titulo11.textContent = 'Código'
    titulo12.textContent = 'Nombre'
    let cabecera2 = tableinvertida.insertRow(-1)
    let titulo21 = cabecera2.insertCell(0)
    let titulo22 = cabecera2.insertCell(1)
    titulo21.textContent = 'Código'
    titulo22.textContent = 'Nombre'
    if (articulo.codigo && articulo.nombre && articulo.descripcion && articulo.cantidad && articulo.costo) {
        articulo.añadir(articulo);
        console.log(lista);
        for (let i = 0; i < lista.length; i++) {
            let fila = table.insertRow(-1)
            let celda1 = fila.insertCell(0)
            let celda2 = fila.insertCell(1)
            celda1.textContent = lista[i].codigo
            celda2.textContent = lista[i].nombre
        }
        for (let i = (lista.length - 1); i >= 0; i--) {
            let fila = tableinvertida.insertRow(-1)
            let celda1 = fila.insertCell(0)
            let celda2 = fila.insertCell(1)
            celda1.textContent = lista[i].codigo
            celda2.textContent = lista[i].nombre
        }
    } else {
        alert('📄 Llena todos los espacios 📄');
        if (lista.length > 0) {
            console.log(lista);
        }
    }
});
btnEliminar.addEventListener('click', () => {
    let table = document.getElementById('lista');
    let tableinvertida = document.getElementById('listainvertida');
    let codigo = document.querySelector('#codigo');
    console.clear();
    console.log('Se oprimió el botón Eliminar');
    if (codigo.value) {
        for (let i = 0; i <= lista.length; i++) {
            if (lista[i]) {
                if (lista[i].codigo == codigo.value) {
                    table.innerHTML = '';
                    tableinvertida.innerHTML = '';
                    lista.splice(i, 1);
                    let cabecera1 = table.insertRow(-1)
                    let titulo11 = cabecera1.insertCell(0)
                    let titulo12 = cabecera1.insertCell(1)
                    titulo11.textContent = 'Código'
                    titulo12.textContent = 'Nombre'
                    let cabecera2 = tableinvertida.insertRow(-1)
                    let titulo21 = cabecera2.insertCell(0)
                    let titulo22 = cabecera2.insertCell(1)
                    titulo21.textContent = 'Código'
                    titulo22.textContent = 'Nombre'
                    alert('🗑 Artículo eliminado 🗑');
                    for (let i = 0; i < lista.length; i++) {
                        let fila = table.insertRow(-1)
                        let celda1 = fila.insertCell(0)
                        let celda2 = fila.insertCell(1)
                        celda1.textContent = lista[i].codigo
                        celda2.textContent = lista[i].nombre
                    }
                    for (let i = (lista.length - 1); i >= 0; i--) {
                        let fila = tableinvertida.insertRow(-1)
                        let celda1 = fila.insertCell(0)
                        let celda2 = fila.insertCell(1)
                        celda1.textContent = lista[i].codigo
                        celda2.textContent = lista[i].nombre
                    }
                    if (lista.length > 0) {
                        console.log(lista);
                    } else {
                        alert('🌀 Sin artículos restantes 🌀');
                        console.log('Sin artículos restantes');
                    }
                    //Posible solución al problema
                    return;
                }
            } else {
                alert('❔ Artículo no encontrado ❔');
                if (lista.length > 0) {
                    console.log(lista);
                }
            }
        }
    } else {
        alert('📄 Ingresa el código del artículo a eliminar 📄');
        if (lista.length > 0) {
            console.log(lista);
        }
    }
});
btnBuscar.addEventListener('click', () => {
    let table = document.querySelector("#infoarticulo");
    let codigo = document.querySelector('#codigo');
    console.clear();
    console.log('Se oprimió el botón Buscar');
    if (codigo.value) {
        for (let i = 0; i <= lista.length; i++) {
            if (lista[i]) {
                if (lista[i].codigo == codigo.value) {
                    let tablecodigo = document.getElementById('tablecodigo');
                    let tablenombre = document.getElementById('tablenombre');
                    let tabledescripcion = document.getElementById('tabledescripcion');
                    let tablecantidad = document.getElementById('tablecantidad');
                    let tablecosto = document.getElementById('tablecosto');
                    tablecodigo.innerText = lista[i].codigo
                    tablenombre.innerText = lista[i].nombre
                    tabledescripcion.innerText = lista[i].descripcion
                    tablecantidad.innerText = lista[i].cantidad
                    tablecosto.innerText = lista[i].costo
                    if (lista.length > 0) {
                        console.log(lista);
                    }
                    //Posible solución al problema
                    return;
                }
            } else {
                alert('❔ Artículo no encontrado ❔');
                if (lista.length > 0) {
                    console.log(lista);
                }
            }
        }
    } else {
        alert('🔎 Ingresa el código del artículo a buscar 🔎');
        if (lista.length > 0) {
            console.log(lista);
        }
    }
});