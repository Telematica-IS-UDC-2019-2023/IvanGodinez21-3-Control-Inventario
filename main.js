var btnAgregar = document.querySelector('#btnAgregar');
var btnEliminar = document.querySelector('#btnEliminar');
var btnBuscar = document.querySelector('#btnBuscar');
var btnLimpiar = document.querySelector('#btnLimpiar');
var cboxInsertar = document.querySelector('#cboxInsertar');
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
        let casilla = document.querySelector('#casilla')
        if (casilla) {
            if ((casilla.value - 1) < lista.length) {
                lista.splice((casilla.value - 1), 0, elemento);
            } else {
                alert('🚫 No puedes insertar en el ultimo artículo o por encima del mismo 🚫');
            }
        } else {
            lista.push(elemento);
        }
    }
}
cboxInsertar.addEventListener('click', () => {
    if (cboxInsertar.checked == true) {
        let divinsertar = document.getElementById('divinsertar');
        divinsertar.innerHTML = '<input name="casilla" type="number" placeholder="Casilla" id="casilla" />'
    } else if (cboxInsertar.checked == false) {
        let casilla = document.querySelector('#casilla');
        casilla.remove();
    }
});
btnAgregar.addEventListener('click', () => {
    console.clear();
    console.log('Se oprimió el botón Agregar');
    if (lista.length < 20) {
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
        let cabecera1 = table.insertRow(-1);
        let titulo11 = cabecera1.insertCell(0);
        let titulo12 = cabecera1.insertCell(1);
        titulo11.textContent = 'Código';
        titulo12.textContent = 'Nombre';
        let cabecera2 = tableinvertida.insertRow(-1);
        let titulo21 = cabecera2.insertCell(0);
        let titulo22 = cabecera2.insertCell(1);
        titulo21.textContent = 'Código';
        titulo22.textContent = 'Nombre';
        if (articulo.codigo && articulo.nombre && articulo.descripcion && articulo.cantidad && articulo.costo) {
            articulo.añadir(articulo);
            console.log(lista);
            for (let i = 0; i < lista.length; i++) {
                let fila = table.insertRow(-1);
                let celda1 = fila.insertCell(0);
                let celda2 = fila.insertCell(1);
                celda1.textContent = lista[i].codigo;
                celda2.textContent = lista[i].nombre;
            }
            for (let i = (lista.length - 1); i >= 0; i--) {
                let fila = tableinvertida.insertRow(-1);
                let celda1 = fila.insertCell(0);
                let celda2 = fila.insertCell(1);
                celda1.textContent = lista[i].codigo;
                celda2.textContent = lista[i].nombre;
            }
        } else {
            alert('📄 Llena todos los espacios 📄');
            if (lista.length > 0) {
                console.log(lista);
            }
        }
    } else {
        alert('📟 Se ha llegado al limite de registros | 20 máximo 📟');
        if (lista.length > 0) {
            console.log(lista);
        }
    }
});
btnEliminar.addEventListener('click', () => {
    console.clear();
    console.log('Se oprimió el botón Eliminar');
    let table = document.getElementById('lista');
    let tableinvertida = document.getElementById('listainvertida');
    let codigo = document.querySelector('#codigo');
    if (codigo.value) {
        for (let i = 0; i <= lista.length; i++) {
            if (lista[i]) {
                if (lista[i].codigo == codigo.value) {
                    table.innerHTML = '';
                    tableinvertida.innerHTML = '';
                    lista.splice(i, 1);
                    let cabecera1 = table.insertRow(-1);
                    let titulo11 = cabecera1.insertCell(0);
                    let titulo12 = cabecera1.insertCell(1);
                    titulo11.textContent = 'Código';
                    titulo12.textContent = 'Nombre';
                    let cabecera2 = tableinvertida.insertRow(-1);
                    let titulo21 = cabecera2.insertCell(0);
                    let titulo22 = cabecera2.insertCell(1);
                    titulo21.textContent = 'Código';
                    titulo22.textContent = 'Nombre';
                    alert('🗑 Artículo eliminado 🗑');
                    for (let i = 0; i < lista.length; i++) {
                        let fila = table.insertRow(-1);
                        let celda1 = fila.insertCell(0);
                        let celda2 = fila.insertCell(1);
                        celda1.textContent = lista[i].codigo;
                        celda2.textContent = lista[i].nombre;
                    }
                    for (let i = (lista.length - 1); i >= 0; i--) {
                        let fila = tableinvertida.insertRow(-1)
                        let celda1 = fila.insertCell(0);
                        let celda2 = fila.insertCell(1);
                        celda1.textContent = lista[i].codigo;
                        celda2.textContent = lista[i].nombre;
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
    console.clear();
    console.log('Se oprimió el botón Buscar');
    let table = document.querySelector("#infoarticulo");
    let codigo = document.querySelector('#codigo');
    if (codigo.value) {
        for (let i = 0; i <= lista.length; i++) {
            if (lista[i]) {
                if (lista[i].codigo == codigo.value) {
                    let tablecodigo = document.getElementById('tablecodigo');
                    let tablenombre = document.getElementById('tablenombre');
                    let tabledescripcion = document.getElementById('tabledescripcion');
                    let tablecantidad = document.getElementById('tablecantidad');
                    let tablecosto = document.getElementById('tablecosto');
                    tablecodigo.innerText = lista[i].codigo;
                    tablenombre.innerText = lista[i].nombre;
                    tabledescripcion.innerText = lista[i].descripcion;
                    tablecantidad.innerText = lista[i].cantidad;
                    tablecosto.innerText = lista[i].costo;
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
btnLimpiar.addEventListener('click', () => {
    let codigo = document.querySelector('#codigo');
    let nombre = document.querySelector('#nombre');
    let descripcion = document.querySelector('#descripcion');
    let cantidad = document.querySelector('#cantidad');
    let costo = document.querySelector('#costo');
    codigo.value = '';
    nombre.value = '';
    descripcion.value = '';
    cantidad.value = '';
    costo.value = '';
    cboxInsertar.checked = false
    let casilla = document.querySelector('#casilla');
    if (casilla) {
        casilla.remove();
    }
});