// Comienza viendo si el carrito tiene algo almacenado el el local storage (de alguna otra vez que se entró a la página), o si está vacío
let carrito = JSON.parse(localStorage.getItem ("obrasCompradas")) || []
console.log(carrito)

const contenedorProgramacion =  document.getElementById("contenedor-programacion-actual") // Se captura el contenedor que contiene la programación (agregada de modo dinámico, ver la función en home.js)

// Se agrega un Listener para escuchar un elemento específico de dicho contenedor (aquel que tiene la clase "agregar", es decir, el button ENTRADAS)
contenedorProgramacion.addEventListener("click", (e)=>{
    if(e.target.classList.contains("agregar")){ //Busca esta clase en el button de cada card.
        agregarObraAlCarrito(obra, result.value); // Llamado a esta función 
    }
})

const agregarObraAlCarrito = (obra, formData) => {

    const estaRepetido = carrito.some(item => item.id === obra.id);

    if (!estaRepetido) {
        const nuevaObra = {
            id: obra.id,
            titulo: obra.titulo,
            precio: obra.precio,
            cantidad: 1, // Nueva obra, se inicia con cantidad 1
            ...formData // Agregar otros datos del formulario
        };

        carrito.push(nuevaObra);
        pintarObraCarrito();
        actualizarTotalesCarrito(carrito);
    } else {
        const obraExistente = carrito.find(item => item.id === obra.id);
        obraExistente.cantidad++; // Si está repetida, aumenta la cantidad
        const cantidadElement = document.getElementById(`cantidad${obra.id}`);
        cantidadElement.innerText = `Cantidad: ${obraExistente.cantidad}`;
        actualizarTotalesCarrito(carrito);
    }
};

const validarObraEnCarrito = (id)=>{
    const estaRepetido =  carrito.some (obra => obra.id == id)

    if (!estaRepetido){ // Si esa obra no está repetida (solo está una vez), se la suma al carrito
        const obra = obras.find(obra => obra.id == id)
        carrito.push(obra)
        pintarObraCarrito(obra)
        actualizarTotalesCarrito(carrito)
    }else{ 
        const obra = carrito.find(obra => obra.id  == id)
        const cantidad = document.getElementById(`cantidad${obra.id}`)
        obra.cantidad++ // Si está repetida, se suma la cantidad correspondiente 
        cantidad.innerText = `Cantidad: ${obra.cantidad}`
        actualizarTotalesCarrito(carrito)
    }
}

const pintarObraCarrito = () => {
	const contenedor = document.getElementById("carrito-contenedor");
    contenedor.innerHTML = " "

    carrito.forEach((obra) =>{
        const div = document.createElement("div");
        div.classList.add("productoEnCarrito");
    
        div.innerHTML = `
            <p>${obra.titulo} </p>
            <p>$ ${obra.precio}</p>
            <p id=cantidad${obra.id}>Cantidad: ${obra.cantidad}</p>
            <button class="boton-eliminar" id="${obra.id}">X</button>
        `;
        contenedor.appendChild(div);
    } )
	
};

//Aquí recibimos la etiqueta button, que en el parámetro lo capturamos como "target", y utilizamos su id para hacer el findIndex. Luego borramos ese elemento del array con el splice. Para borrarlo del DOM se debe eliminar esa etiqueta del modal.

const eliminarObraCarrito = (target) => {
	const obra = carrito.findIndex((producto) => producto.id == target.id);
	carrito.splice(obra, 1);
	target.parentNode.remove(); // Remueve el padre del botón del modal, que es toda la fila del producto que tenemos en el modal
	actualizarTotalesCarrito(carrito);
};

const actualizarTotalesCarrito = (carrito) =>{
    const totalCantidad = carrito.reduce ( (acc, item) => acc + item.cantidad, 0)
    const totalCompra = carrito.reduce ( (acc, item ) => acc + (item.precio * item.cantidad), 0 )
    pintarTotalesCarrito(totalCantidad, totalCompra)
    guardarCarritoStorage(carrito)
}

const pintarTotalesCarrito = (totalCantidad, totalCompra) =>{
    const contadorCarrito = document.getElementById("contador-carrito")
    const precioTotal = document.getElementById("precio-total")

    contadorCarrito.innerText = totalCantidad
    precioTotal.innerText = totalCompra
}

const guardarCarritoStorage = (carrito) =>{
    localStorage.setItem ("obrasCompradas", JSON.stringify(carrito))
}

pintarObraCarrito()
actualizarTotalesCarrito(carrito)