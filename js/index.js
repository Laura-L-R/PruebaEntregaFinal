const pintarObrasIndex = () => {
  // Creación de un nuevo array obrasPpales ya que este array solo será usado en esta función que pinta el Index
  const obrasPpales = obras.slice(3, 6).map(obra => ({
    ...obra // Spread de cada objeto obra
  }));
  
    obrasPpales.push({ // Se agrega la imagen de programación completa del index
      id: 7,
      titulo: "PROGRAMACIÓN COMPLETA",
      img: "./images/programacion/programacion-completa.webp",
      alt: "programacion completa",
      link: "pages/programacion-actual.html"
    });
    
    const contenedorIndex = document.getElementById('contenedor-index'); // Se obtiene el contenedor 

    const divIndex = document.createElement('div'); // Se crea dentro de ese contenedor una etiqueta div que englobará las 4 iteraciones del array
    divIndex.classList.add('container-fluid', 'my-4', 'row'); // se le agregan clases.

    obrasPpales.forEach(obraPpal => { 

        divIndex.innerHTML += ` 
            <article class="col-sm-12 col-md-6 col-lg-3 mb-2">
              <div class="card">
                <a href="${obraPpal.link}" target="_blank">
                  <img src="${obraPpal.img}" class="card-img-top w-100" alt="${obraPpal.alt}">  
                </a>                        
              </div>
            </article>
        `; 
    });

    contenedorIndex.appendChild(divIndex); // Sumamos el div creado al contenedor obtenido
}

pintarObrasIndex(); // Llamamos a la función
