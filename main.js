var btnAgregar = document.querySelector('#btnAgregar');
var btnEliminar = document.querySelector('#btnEliminar');
var btnBuscar = document.querySelector('#btnBuscar');
var lista = new Array
var listaInvertida = new Array

class Articulo {
    constructor(codigo, nombre, descripcion, cantidad, costo) {
        this.codigo = codigo
        this.nombre = nombre
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.costo = costo
    }
    añadir(elemento) {
        lista.push(elemento);
    }
}

btnAgregar.addEventListener('click', () => {
    let codigo = document.querySelector('#codigo');
    let nombre = document.querySelector('#nombre');
    let descripcion = document.querySelector('#descripcion');
    let cantidad = document.querySelector('#cantidad');
    let costo = document.querySelector('#costo');
    let articulo = new Articulo(codigo.value, nombre.value, descripcion.value, cantidad.value, costo.value);
    console.clear();
    console.log('Se oprimió el botón Agregar');
    if (articulo.codigo && articulo.nombre && articulo.descripcion && articulo.cantidad && articulo.costo) {
        articulo.añadir(articulo);
        console.log(lista);
    } else {
        alert('📄 Llena todos los espacios 📄')
        if (lista.length > 0) {
            console.log(lista);
        }
    }
});

btnEliminar.addEventListener('click', () => {
    let codigo = document.querySelector('#codigo');
    console.clear();
    console.log('Se oprimió el botón Eliminar');
    if (codigo.value) {
        for (let i = 0; i <= lista.length; i++) {
            if (lista[i]) {
                if (lista[i].codigo == codigo.value) {
                    lista.splice(i, 1)
                    alert('🗑 Artículo eliminado 🗑');
                    if (lista.length > 0) {
                        console.log(lista);
                    } else {
                        alert('🌀 Sin artículos restantes 🌀');
                        console.log('Sin artículos restantes');
                    }
                }
            } else {
                alert('❔ Artículo no encontrado ❔');
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

});