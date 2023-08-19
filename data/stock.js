const obras = [
    {
        id: 1,
        titulo: "PERO NO ES DEL TODO CIERTO", 
        dramaturgia: "Ana Kantemiroff", 
        dirección: "Ana Kantemiroff",
        elenco: "Daniela Daverio, Agustina Pettina, Félix Prync, Jorge Vera",
        dia: "Jueves",
        horario: "20.30 hs",
        funciones: ["Jueves 17/8 20.30 hs", "Jueves 24/8 20.30 hs", "Jueves 31/8 20.30 hs"],
        precio: ["Entrada general $"+3000, "Descuento estudiantes $"+2700, "Descuento jubiladxs $"+1800] , 
        cantidad: 1,
        img: "../images/programacion/obra-pero-no-es-todo-cierto.webp", 
        sinopsis: " Una obra de teatro musical, que hace visible lo invisible, que reflexiona sobre nosotros y con nosotros como individuos. Para poder ver al otro tal y como es, aun cuando la realidad nos quiera imponer otra mirada, otra percepción.",
        alt: "flyer obra  pero no es del todo cierto",
        link: "https://www.alternativateatral.com/obra83445-pero-no-es-del-todo-cierto"
    },

    {
        id: 2,
        titulo: "EL MANCHADO", 
        dramaturgia: "Ariel Barchilón", 
        dirección: "Agustina Gutiérrez",
        elenco: "Lali Fischer, Federico Foscaldi, Juan Ortiz",
        dia: "Viernes",
        horario: "20.30 hs",
        funciones: ["Viernes 18/8 20.30 hs", "Viernes 25/8 20.30 hs", "Viernes 1/9 20.30 hs"] ,
        precio: ["Entrada general $"+3000, "Descuento estudiantes $"+2700, "Descuento jubiladxs $"+1800] , 
        cantidad: 1,
        img: "../images/programacion/el-manchado-obra.webp", 
        sinopsis: "Un hombre espera en una oficina. No sabemos por qué, quién es, ni qué quiere. La alienación del trabajo, los mandatos, la aceptación, la impunidad y el abuso conducen inevitablemente al pozo de la deshumanización.",
        alt: "flyer obra El Manchado",
        link: "https://alternativateatral.com/obra83803-el-manchado"
    },

    {
        id: 3,
        titulo: "ENTROMETIDA", 
        dramaturgia: "Victoria Casellas, Carla Giurastante, Luna Schapira, Ivana Schiaffino, Gemán Touza", 
        dirección: "n/c", // No corresponde
        elenco: "Carla Abelando, Sayi Lavagna, Victoria Pepe, Emilia Rebottaro, Marcos Ribas",
        dia: "Viernes",
        horario: "22.30 hs",
        funciones: ["Viernes 18/8 22.30 hs","Viernes 25/8 22.30 hs","Viernes 1/9 22.30 hs"] ,
        precio: ["Entrada general $"+2800, "Descuento estudiantes $"+2500, "Descuento jubiladxs $"+1700] ,  
        cantidad: 1,
        img: "../images/programacion/entrometida-cuadrado-g.webp", 
        sinopsis: "¿Cuáles son los elementos mínimos necesarios para que ocurra el hecho escénico? \n Un texto y un cuerpo que lo encarne.\n Entrometida, una simbiosis mínima, reúne estos dos componentes; unx autorx que se desprende de su creación y un intérprete que se apropia del material.",
        alt: "ciclo monologos Entrometida",
        link: "https://www.alternativateatral.com/obra83057-entrometida-una-simbiosis-minima-quinta-edicion"

    },

    {
        id: 4,
        titulo: "HOMENAJE A CONNIE PARKER", 
        dramaturgia: "Sylvia Plath y Sarah Kane", 
        dirección: "Ulises Romero", 
        elenco: "Martina Meirama, Bernardita Ottonello",
        dia: "Sábado", //Esperando nuevo flyer con día actualizado
        horario: "20.00 hs",
        funciones: ["Sábado 19/8 20.00 hs","Sábado 26/8 20.00 hs","Sábado 2/9 20.00 hs"],
        precio: ["Entrada general $"+3000, "Descuento estudiantes $"+2700, "Descuento jubiladxs $"+1800] , 
        cantidad: 1,
        img: "../images/programacion/homenaje-a-connie-parker.webp", 
        sinopsis: "Sobre textos de Sylvia Plath y Sarah Kane.\n La escena no tiene final: ocurre dentro de los pliegues de la mente donde se incuba la enfermedad de Connie. Humillada, confundida, prueba de todo para volverse ella misma, para que la amen precisamente por aquello que la destruye. Además escribe.",
        alt: "flyer obra Homenaje a Connie Parker",
        link: "https://alternativateatral.com/obra84484-homenaje-a-connie-parker"

    },

    {
        id: 5,
        titulo: "EFECTO DERRAME", 
        dramaturgia: "Laura Loredo Rubio, Pedro Almodovar", 
        dirección: "n/c",
        elenco: "Laura Loredo Rubio, Alejandro Amdan, Fede Foscaldi, Jimena García Conde y Olave Mendoza",
        dia: "Sábado",
        horario: "22.30 hs",        
        funciones: ["Sábado 19/8 20.00 hs"],
        precio:["Entrada general $"+2800, "Descuento estudiantes $"+2500, "Descuento jubiladxs $"+1700]  , 
        cantidad: 1,
        img: "../images/programacion/Flyer-derrame-cuadrado-g.webp", 
        sinopsis: "Ciclo de escenas independientes. \n En esta edición, entre otras:\n `El refugio` de Laura Loredo Rubio.\n `Dos hombres`, con Alejandro Amdan y Fede Foscaldi.\n `La concejala antropófaga`, con Jimena García Conde y Olave Mendoza", 
        alt: "ciclo escenas comicas Efecto derrame",
        link: "https://alternativateatral.com/obra84916-efecto-derrame-agosto"
    },

    {
        id: 6,
        titulo: "MALFLASH", 
        dramaturgia: "Gabriel Navarro, Juan Santiago, Emilce Olguin Ramírez", 
        dirección: "Gabriel Navarro, Juan Santiago, Emilce Olguin Ramírez",
        elenco: "Victoria Casellas, Diego Centorame, Violeta Gros, Vladimir Klink, Martina López González, Marco Spaggiari, Cintia Duarte, Constanza Duarte, Luna Jankowski, Rosa Ortiz Pereyra, Nicolas Schneider, Manuela López González",
        dia: "Domingo",
        horario: "20.30 hs",
        funciones: ["Domingo 20/8 20.30 hs"],
        precio: ["Entrada general $"+2800, "Descuento estudiantes $"+2500, "Descuento jubiladxs $"+1700] ,  
        cantidad: 1, 
        img: "../images/programacion/malflash-mayo.webp", 
        sinopsis: "Aterradoras piezas teatrales en tono paródico.\n En esta edición podés ver, entre otras.\n `El familiar`, con Diego Centorame, Martina López González, Rosa Ortiz Pereyra, Nicolas Schneider.\n `Permitido`, con Agostina Maldino, Tahis Montero, Laila Selci.", 
        alt: "ciclo Malflash",
        link: "https://panel.alternativateatral.com/obra83722-malflash-edicion-mayo"

    }

]

// Dejé esto comentado ya que, en un principio, el array obrasPpales lo creé en esta hoja de stock.js, solo que pensé que, si este array solo se usará para pintar el index, quizás puede estar en la función que se encarga de ello


// const obrasPpales = obras.slice(3, 6).map(obra => ({
//     ...obra
//   }));
  
//   obrasPpales.push({
//     id: 7,
//     titulo: "PROGRAMACIÓN COMPLETA",
//     img: "./images/programacion/programacion-completa.webp",
//     alt: "programacion completa",
//     link: "pages/programacion-actual.html"
//   });
  