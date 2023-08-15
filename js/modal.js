const modalContenedor = document.querySelector(".modal-contenedor");
const abrirCarrito = document.getElementById("cesta-carrito");
const cerrarCarrito = document.getElementById("btn-cerrar-carrito");
const modalCarrito = document.querySelector(".modal-carrito");

abrirCarrito.addEventListener("click", () => {
	modalContenedor.classList.toggle("modal-active");
	modalContenedor.classList.toggle("hide");
});

cerrarCarrito.addEventListener("click", () => {
	modalContenedor.classList.toggle("modal-active");
	modalContenedor.classList.toggle("hide");
});

modalContenedor.addEventListener("click", () => {
	cerrarCarrito.click();
});

modalCarrito.addEventListener("click", (e) => {
	e.stopPropagation(); // Para frenar la propagación de hijos hacia padres
	//console.log(e.target);
	if (e.target.classList.contains("boton-eliminar")) {
		eliminarObraCarrito(e.target);
	}
});

const modalBtnEntradas = (obras) => {
	obras.forEach(obra => {
	  const btnObra = document.getElementById(obra.id.toString()); // Convierte el id a string
	  btnObra.addEventListener("click", () => {
		Swal.fire({
		  title: `Entradas para ${obra.titulo}`,
		  input: 'select',
		  inputOptions: {
			"Fecha 1": 'Viernes 18/8 20.30 hs',
			"Fecha 2": 'Viernes 25/8 20.30 hs',
			"Fecha 3": 'Viernes 1/9 20.30 hs',
			"Fecha 4": 'Viernes 8/9 20.30 hs',
		  },
		  inputPlaceholder: 'Seleccione una fecha',
		  showCancelButton: true,
		  inputValidator: (value) => {
			return new Promise((resolve) => {
			  if (value === 'Fecha 1') {
				resolve()
			  } else {
				resolve('Entradas agotadas para esa fecha')
			  }
			})
		  }
		});
	  });
	});
  };
  
  modalBtnEntradas(obras)
