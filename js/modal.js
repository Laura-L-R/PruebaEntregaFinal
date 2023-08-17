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

// const modalBtnEntradas = (obras) => {
//     obras.forEach(obra => {
//         const btnObra = document.getElementById(obra.id.toString());
//         btnObra.addEventListener("click", () => {
//             Swal.fire({
//                 title: `Entradas para ${obra.titulo}`,
//                 html: `
// 				<form class="col-sm-12 col-md-12 col-lg-8 text-lg-start text-md-center" id="formuEntradas">
// 				<div>
// 					<label for="validationCustom04" class="form-label">Fecha y horario</label>
// 					<select class="form-select m-2 bg-green2" id="opcFH" required>
// 						<option selected>Seleccionar</option>
// 						<option value="1">Viernes 14/5 21.30 hs</option>
// 						<option value="2">Viernes 21/5 21.30 hs</option>
// 						<option value="3">Viernes 28/5 21.30 hs</option>
// 					</select>
// 				</div>
// 				<div>
// 					<label for="validationCustom04" class="form-label">Precio</label>
// 					<select class="form-select m-2 bg-green2" id="opcPrecio" required>
// 						<option selected>Seleccionar</option>
// 						<option value="1">$3000 - Entrada general</option>
// 						<option value="2">$2500 - Descuento Estudiantes</option>
// 						<option value="3">$1800 - Descuento jubiladxs</option>
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
			  
// 			  <button class="button-animation-enviar">
// 				<a href="../pages/error-404.html">Enviar</a>
// 			  </button>
// 			</form>
//                 `,
//                 focusConfirm: false,
//                 preConfirm: () => {
//                     const formData = {
//                         fechaHorario: document.getElementById('opcFH').value,
//                         precio: document.getElementById('opcPrecio').value,
//                         localidades: document.getElementById('opcCantidad').value,
//                         nombre: document.getElementById('validationCustom01').value,
//                         apellido: document.getElementById('validationCustom02').value,
//                         telefono: document.getElementById('telephoneNumber').value,
//                         email: document.getElementById('exampleInputEmail1').value
//                     };
//                     return formData;
//                 }
//             });
//         });
//     });
// };




const modalBtnEntradas = (obras) => {
    obras.forEach(obra => {
        const btnObra = document.getElementById(obra.id.toString());
        btnObra.addEventListener("click", () => {
            const opcionesFechasHorarios = obra.funciones.split("+").map(funcion => {
                return `<option value="${funcion.trim()}">\n${funcion.trim()}</option>`;
            }).join('');

            Swal.fire({
                title: `Entradas para ${obra.titulo}`,
                html: `
                    <form class="col-sm-12 col-md-12 col-lg-8 text-lg-start text-md-center" id="formuEntradas">
                        <div>
                            <label for="opcFH" class="form-label">Fecha y horario</label>
                            <select class="form-select m-2 bg-green2" id="opcFH" required>
                                <option selected>Seleccionar</option>
								<option value="${opcionesFechasHorarios}">${opcionesFechasHorarios}</option>
                            </select>
                        </div>
						<div>
					<label for="validationCustom04" class="form-label">Precio</label>
					<select class="form-select m-2 bg-green2" id="opcPrecio" required>
						<option selected>Seleccionar</option>
						<option value="1">$3000 - Entrada general</option>
						<option value="2">$2500 - Descuento Estudiantes</option>
						<option value="3">$1800 - Descuento jubiladxs</option>
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
			  
			  <button class="button-animation-enviar">
				<a href="../pages/error-404.html">Enviar</a>
			  </button>
            </form>
                `,
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
            });
        });
    });
};