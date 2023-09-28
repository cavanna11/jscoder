let totalDinero = parseFloat(prompt("Ingresa el total de dinero que tienes:"));

// Almacena gastos por categorías
const gastosPorCategoria = {};

function registrarGasto() {
    const nombreGasto = prompt("Ingresa el nombre del gasto (o escribe 'fin' para salir):");

    if (nombreGasto.toUpperCase() === 'FIN') {
        return;
    }

    const categoriaGasto = prompt("Ingresa la categoría del producto (o escribe 'fin' para salir)");
if (categoriaGasto.toUpperCase() === 'FIN') {
    return;
}

const categoriaMayusculas = categoriaGasto.toUpperCase();

const precioGasto = parseFloat(prompt("Ingresa el precio del gasto:"));
totalDinero -= precioGasto;

  // Registrar el gasto en la categoría correspondiente
if (!gastosPorCategoria[categoriaMayusculas]) {
    gastosPorCategoria[categoriaMayusculas] = [];
}
gastosPorCategoria[categoriaMayusculas].push({ nombre: nombreGasto, precio: precioGasto });

console.log(`Gasto registrado: ${nombreGasto}, Categoría: ${categoriaMayusculas}, Precio: $${precioGasto}`);
console.log(`Saldo restante: $${totalDinero}`);

  registrarGasto();
}

registrarGasto();

console.log("Fin del registro de gastos. Tu saldo final es: $" + totalDinero);
console.log("Gastos por categoría:");
console.log(gastosPorCategoria);
// -------------------------------------------------------------

// Buscar gastos por categoría o filtrar palabra
while (true) {
    const opcionBusqueda = prompt("¿Deseas buscar por categoría o por producto? (Escribe 'categoria' o 'producto' o 'fin' para salir)");
    if (opcionBusqueda.toUpperCase() === 'FIN') {
    console.log("Búsqueda finalizada.");
    break;
    }

    if (opcionBusqueda.toLowerCase() === 'categoria') {
    const categoriaBuscada = prompt("Ingrese la categoría a buscar:");
    const categoriaBuscadaMayusculas = categoriaBuscada.toUpperCase();
    const gastosEnCategoria = gastosPorCategoria[categoriaBuscadaMayusculas] || [];

    if (gastosEnCategoria.length === 0) {
        console.log(`No se encontraron gastos en la categoría "${categoriaBuscadaMayusculas}".`);
    } else {
        console.log(`Gastos en la categoría "${categoriaBuscadaMayusculas}":`);
        gastosEnCategoria.forEach((gasto, index) => {
        console.log(`Producto ${index + 1}:`);
        console.log(`Nombre: ${gasto.nombre}`);
        console.log(`Precio: $${gasto.precio}`);
        });
    };
    } else if (opcionBusqueda.toLowerCase() === 'producto') {
    const productoBuscado = prompt("Ingrese el nombre del producto a buscar:");
    const gastosFiltrados = [];

    for (const categoria in gastosPorCategoria) {
        gastosPorCategoria[categoria].forEach(gasto => {
        if (gasto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())) {
            gastosFiltrados.push(gasto);
        }
        });
    }

    if (gastosFiltrados.length === 0) {
        console.log(`No se encontraron gastos que contengan "${productoBuscado}".`);
    } else {
        console.log("Gastos que contienen la palabra '" + productoBuscado + "':");

        gastosFiltrados.forEach((gasto, index) => {
        console.log(`Producto ${index + 1}:`);
        console.log(`Nombre: ${gasto.nombre}`);
        console.log(`Precio: $${gasto.precio}`);
        });
        console.log(gastosFiltrados);
    }
    } else {
    console.log("Opción no válida. Por favor, elige 'categoria', 'producto' o 'fin'.");
    }
};
