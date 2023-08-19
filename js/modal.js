const modalContenedor = document.querySelector(".modal-contenedor");
const abrirCarrito = document.getElementById("cesta-carrito");
const cerrarCarrito = document.getElementById("btn-cerrar-carrito");
const modalCarrito = document.querySelector(".modal-carrito"); // Modal que muestra el resumen de compra

// const carrito = [ ]

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

// Revisar esta función para bajar la complejidad

const modalBtnEntradas = (obras) => {
	obras.forEach(obra => {
	  const btnObra = document.getElementById(obra.id.toString());
	  btnObra.addEventListener("click", () => {
		const opcionesFechasHorarios = obra.funciones.map(funcion => {
			return `<option value="${funcion.trim()}">${funcion.trim()}</option>`;
		}).join('');

		const opcionesPrecios = obra.precio.map (pr => {
			return `<option value="${pr.trim()}">${pr.trim()}</option>`;
		}).join('');
		
  
		Swal.fire({
			width: 600,
			title: `Entradas para ${obra.titulo}`,
			html: `
				<form class="container-fluid col-sm-12 col-md-12 col-lg-12 text-lg-start text-md-center modal-sweet" id="formuEntradas">
					<div>
						<label for="opcFH" class="form-label">Fecha y horario</label>
						<select class="form-select m-2 bg-green2" id="opcFH" required>
							<option selected>Seleccionar</option>
							${opcionesFechasHorarios}
						</select>
					</div>
					<div>
				<label for="validationCustom04" class="form-label">Precio</label>
				<select class="form-select m-2 bg-green2" id="opcPrecio" required>
					<option selected>Seleccionar</option>
					${opcionesPrecios}
				</select>
			</div>
			<div>
				<label for="validationCustom04" class="form-label">Localidades</label>
				<select class="form-select m-2 bg-green2" id="opcCantidad" required>
					<option selected>Seleccionar</option>
					<option value="1">1 persona</option>
					<option value="2">2 personas</option>
					<option value="3">3 personas</option>
					<option value="3">4 personas</option>
					<option value="3">5 personas</option>
					<option value="3">6 personas</option>
					<option value="3">7 personas</option>
					<option value="3">8 personas</option>
				</select>
			</div>

		  <div class="mb-3">
			<label for="validationCustom01" class="form-label m-2">Nombre</label>
			<input type="text" class="form-control m-2 bg-green2" id="validationCustom01">
		  </div>
		  <div class="mb-3">
			<label for="validationCustom01" class="form-label m-2">Apellido</label>
			<input type="text" class="form-control m-2 bg-green2" id="validationCustom02">
		  </div>
		  <div class="mb-3">
			<label for="exampleInputEmail1" class="form-label ms-2">Teléfono</label>
			<input type="number" class="form-control m-2 bg-green2" id="telephoneNumber">
		  </div>
		  <div class="mb-3">
			<label for="exampleInputEmail1" class="form-label ms-2">Email</label>
			<input type="email" class="form-control m-2 bg-green2" id="exampleInputEmail1" aria-describedby="emailHelp">
		  </div>
		</form>
			`,
		showCancelButton: true,
		confirmButtonText: `Continuar`,
		cancelButtonText: 'Cancelar',
		focusConfirm: false,
		preConfirm: () => {
			const formData = {
					fechaHorario: document.getElementById('opcFH').value,
					precio: document.getElementById('opcPrecio').value,
					localidades: document.getElementById('opcCantidad').value,
					nombre: document.getElementById('validationCustom01').value,
					apellido: document.getElementById('validationCustom02').value,
					telefono: document.getElementById('telephoneNumber').value,
					email: document.getElementById('exampleInputEmail1').value
			};
			return formData;
		  }
		}).then((result) => {
		  if (result.isConfirmed) {
			const entrada = {
				id: obra.id,
				titulo: obra.titulo,
				precio: obra.precio,
				cantidad: result.value.localidades,
				nombre: result.value.nombre,
				apellido: result.value.apellido,
				telefono: result.value.telefono,
				email: result.value.email,
			};
  
			agregarObraAlCarrito(entrada); // Agregar la entrada al carrito
			actualizarTotalesCarrito(carrito); // Actualizar los totales en el carrito
  
			const resumenCompra = `
			<p>
				Resumen de compra:<br>
				Obra: ${obra.titulo}<br>
				Fecha y horario: ${result.value.fechaHorario}<br>
				Precio por entrada: ${result.value.precio}<br>
				Cantidad: ${result.value.localidades}<br>
				Nombre: ${result.value.nombre}<br>
				Apellido: ${result.value.apellido}<br>
				Teléfono: ${result.value.telefono}<br>
				Email: ${result.value.email}<br>
			</p>
			`;			
			Swal.fire(
			  'Resumen de compra',
			  resumenCompra,
			  'success'
			);
		  }
		});
	  });
	});
  };





// const modalBtnEntradas = (obras) => {
//     obras.forEach(obra => {
//         const btnObra = document.getElementById(obra.id.toString());
//         btnObra.addEventListener("click", () => {
//             const opcionesFechasHorarios = obra.funciones.map(funcion => {
//                 return `<option value="${funcion.trim()}">${funcion.trim()}</option>`;
//             }).join('');
// 			// console.log(opcionesFechasHorarios)

//             Swal.fire({
//                 width: 600,
// 				title: `Entradas para ${obra.titulo}`,
//                 html: `
//                     <form class="container-fluid col-sm-12 col-md-12 col-lg-12 text-lg-start text-md-center modal-sweet" id="formuEntradas">
//                         <div>
//                             <label for="opcFH" class="form-label">Fecha y horario</label>
//                             <select class="form-select m-2 bg-green2" id="opcFH" required>
//                                 <option selected>Seleccionar</option>
// 								${opcionesFechasHorarios}
//                             </select>
//                         </div>
// 						<div>
// 					<label for="validationCustom04" class="form-label">Precio</label>
// 					<select class="form-select m-2 bg-green2" id="opcPrecio" required>
// 						<option selected>Seleccionar</option>
// 						<option value="$3000 - Entrada general">$3000 - Entrada general</option>
// 						<option value="$2500 - Descuento Estudiantes">$2500 - Descuento Estudiantes</option>
// 						<option value="$1800 - Descuento jubiladxs">$1800 - Descuento jubiladxs</option>
// 					</select>
// 				</div>
// 				<div>
// 					<label for="validationCustom04" class="form-label">Localidades</label>
// 					<select class="form-select m-2 bg-green2" id="opcCantidad" required>
// 						<option selected>Seleccionar</option>
// 						<option value="1">1 persona</option>
// 						<option value="2">2 personas</option>
// 						<option value="3">3 personas</option>
// 						<option value="3">4 personas</option>
// 						<option value="3">5 personas</option>
// 						<option value="3">6 personas</option>
// 						<option value="3">7 personas</option>
// 						<option value="3">8 personas</option>
// 					</select>
// 				</div>
  
// 			  <div class="mb-3">
// 				<label for="validationCustom01" class="form-label m-2">Nombre</label>
// 				<input type="text" class="form-control m-2 bg-green2" id="validationCustom01">
// 			  </div>
// 			  <div class="mb-3">
// 				<label for="validationCustom01" class="form-label m-2">Apellido</label>
// 				<input type="text" class="form-control m-2 bg-green2" id="validationCustom02">
// 			  </div>
// 			  <div class="mb-3">
// 				<label for="exampleInputEmail1" class="form-label ms-2">Teléfono</label>
// 				<input type="number" class="form-control m-2 bg-green2" id="telephoneNumber">
// 			  </div>
// 			  <div class="mb-3">
// 				<label for="exampleInputEmail1" class="form-label ms-2">Email</label>
// 				<input type="email" class="form-control m-2 bg-green2" id="exampleInputEmail1" aria-describedby="emailHelp">
// 			  </div>
//             </form>
//                 `,
// 					showCancelButton: true,
// 					confirmButtonText: `Continuar`,
// 					cancelButtonText: 'Cancelar',
// 					focusConfirm: false,
// 					preConfirm: () => {
// 						const formData = {
// 							fechaHorario: document.getElementById('opcFH').value,
// 							precio: document.getElementById('opcPrecio').value,
// 							localidades: document.getElementById('opcCantidad').value,
// 							nombre: document.getElementById('validationCustom01').value,
// 							apellido: document.getElementById('validationCustom02').value,
// 							telefono: document.getElementById('telephoneNumber').value,
// 							email: document.getElementById('exampleInputEmail1').value
// 						};
// 						return formData;
// 					}
// 				}).then((result) => {
// 					if (result.isConfirmed) {
// 						const entrada = {
// 							id: obra.id,
// 							titulo: obra.titulo,
// 							precio: obra.precio,
// 							cantidad: result.value.localidades,
// 							nombre: result.value.nombre,
// 							apellido: result.value.apellido,
// 							telefono: result.value.telefono,
// 							email: result.value.email,
// 						};

// 						console.log(entrada)

// 						const resumenCompra = `
// 						<p>
// 							Resumen de compra:<br>
// 							Obra: ${obra.titulo}<br>
// 							Fecha y horario: ${result.value.fechaHorario}<br>
// 							Precio: ${result.value.precio}<br>
// 							Cantidad: ${result.value.localidades}<br>
// 							Nombre: ${result.value.nombre}<br>
// 							Apellido: ${result.value.apellido}<br>
// 							Teléfono: ${result.value.telefono}<br>
// 							Email: ${result.value.email}<br>
// 						</p>
// 						`;
						
// 						Swal.fire(
// 							'Resumen de compra',
// 							resumenCompra,
// 							'success', 
							
// 						);
// 					}
// 				}); 
//         });
//     });
// };


