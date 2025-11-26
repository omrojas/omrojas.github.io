// =======================================================
// 1. TUS DATOS - JSON (6 Épocas x 3 Highlights) - FILTRADO FINAL
// =======================================================
const historiaMapas = [
    {
        id: "epoca-1",
        nombre_corto: "Prehistoria",
        rango_anos: "25,000 a.C – 3,300 a.C",
        descripcion: "Los primeros registros de pensamiento espacial y simbólico, usando cuevas, huesos y rocas como lienzos para representar territorios, rutas de caza y patrones estelares.",
        highlights: [
            // 1. CHAUVET (~36,000 a.C.)
            {
                titulo: "Pinturas Rupestres de Chauvet",
                pais: "Chauvet (Francia)",
                fecha: "~36,000 a.C.",
                imagen: "./assets/maps/era1_map1_chauvet.webp", 
                dato_rapido: "Contiene las representaciones de animales más antiguas y mejor conservadas del mundo.",
                tipo: "Pared de cueva / Pintura Rupestre",
                importancia: "Primeras representaciones narrativas y rituales, base del pensamiento simbólico y proto-narrativo.",
                ficha: {
                    material: "Pared de cueva (Caliza) y pigmentos minerales",
                    dimensions: "Parte de un sistema de cuevas de 800m",
                    ubicacion: "Cueva de Chauvet-Pont-d'Arc, Ardèche, Francia",
                    idioma: "N/A"
                }
            },
            // 2. PAVLOV (~25,000 a.C.)
            {
                titulo: "Mapa en Colmillo de Pavlov",
                pais: "Pavlov (República Checa)",
                fecha: "~25,000 a.C.",
                imagen: "./assets/maps/era1_map2_pavlov.webp",
                dato_rapido: "Considerado el **mapa físico más antiguo** conocido, posiblemente para navegación de caza.",
                tipo: "Colmillo grabado (Marfil de mamut)",
                importancia: "Evidencia de la planificación espacial y la capacidad de abstracción topográfica de los primeros *Homo sapiens*.",
                ficha: {
                    material: "Marfil de mamut (colmillo)",
                    dimensions: "Aproximadamente 13 cm de largo",
                    ubicacion: "Museo de Moravia, Brno",
                    idioma: "N/A"
                }
            },
            // 3. LLONÍN (~18,000 a.C.)
            {
                titulo: "Mapa del Abrigo del Llonín",
                pais: "Asturias (España)",
                fecha: "~18,000 a.C.",
                imagen: "./assets/maps/era1_map3_llonin.webp", 
                dato_rapido: "Grabado en hueso que representa ríos y cuevas, uno de los pocos mapas topográficos del Paleolítico.",
                tipo: "Grabado en hueso / Proto-mapa",
                importancia: "Muestra la capacidad de representar elementos geográficos y rutas de manera abstracta durante el Paleolítico Superior.",
                ficha: {
                    material: "Hueso (Escápula)",
                    dimensions: "Aproximadamente 17 cm de largo",
                    ubicacion: "Museo Arqueológico de Asturias",
                    idioma: "N/A"
                }
            },
        ]
    },
    {
        id: "epoca-2",
        nombre_corto: "Antigüedad",
        rango_anos: "3,200 a.C. – Siglo V d.C.",
        descripcion: "Transición de los mapas simbólicos a la cartografía matemática y científica, dominada por las proyecciones griegas y la planificación de rutas romanas.",
        highlights: [
            // 1. Nuzi
            {
                titulo: "Mapa Topográfico de Nuzi",
                pais: "Nuzi (Irak)",
                fecha: "~2,500 a.C.",
                imagen: "./assets/maps/era2_map1_nuzi.webp", 
                dato_rapido: "El **mapa topográfico más antiguo** conocido, con orientación (puntos cardinales) y registro de propiedad.",
                tipo: "Tablilla de arcilla grabada",
                importancia: "Primera representación de la propiedad de tierras con orientación geográfica, clave para la burocracia sumeria/acadia.",
                ficha: {
                    material: "Arcilla cocida",
                    dimensions: "Aprox. 7.6 x 6.8 cm",
                    ubicacion: "Museo de Antigüedades Orientales de Estambul",
                    idioma: "Acadio"
                }
            },
            // 2. Egipcios
            {
                titulo: "Mapas Topográficos Egipcios",
                pais: "Antiguo Egipto",
                fecha: "~1,300 a.C.",
                imagen: "./assets/maps/era2_map2_egipcio.webp",
                dato_rapido: "Evidencia de la agrimensura y la ingeniería hidráulica aplicadas al control del Nilo.",
                tipo: "Pintura mural / Papiro",
                importancia: "Uso pragmático para el control del Nilo y la agricultura; base de la agrimensura (*arpedonaptas*).",
                ficha: {
                    material: "Papiro, piedra caliza y estuco",
                    dimensions: "Variable (planos de mano hasta murales)",
                    ubicacion: "Tumbas tebanas y registros administrativos",
                    idioma: "Egipcio Jeroglífico"
                }
            },
            // 5. Itinerario de Antonino
            {
                titulo: "Itinerario de Antonino",
                pais: "Imperio Romano",
                fecha: "Siglo III d.C.",
                imagen: "./assets/maps/era2_map5_antonino.webp",
                dato_rapido: "El **'GPS' de la antigüedad** (versión texto), sistematizando las redes de transporte del Imperio Romano.",
                tipo: "Registro escrito (Itinerario) / Base de mapas lineales",
                importancia: "Registro clave para la logística militar, administrativa y comercial, listando estaciones, paradas y distancias en millas romanas.",
                ficha: {
                    material: "Originalmente rollos de pergamino (copias medievales existentes)",
                    dimensions: "Cubre miles de kilómetros de red viaria",
                    ubicacion: "Varios manuscritos",
                    idioma: "Latín"
                }
            },
        ]
    },
    {
        id: "epoca-3",
        nombre_corto: "Edad Media",
        rango_anos: "Siglo V - XV",
        descripcion: "Dominio de los 'Mappa Mundi' religiosos, donde la visión teológica superó la precisión geográfica, y el surgimiento de la cartografía náutica en Europa.",
        highlights: [
            // 1. Mapas T-O
            {
                titulo: "Mapas T-O (Orbis Terrarum)",
                pais: "EUROPA",
                fecha: "Siglos VI - XIII",
                imagen: "./assets/maps/era3_map1_to.webp", 
                dato_rapido: "El mundo visto a través de la Biblia, con el Este (Oriente) hacia arriba.",
                tipo: "Ilustración en manuscritos",
                importancia: "No sirve para navegar, sino para teología. La geografía subordinada a la historia sagrada cristiana.",
                ficha: {
                    material: "Pergamino (piel de animal)",
                    dimensions: "Generalmente ilustraciones pequeñas dentro de libros (Etimologías)",
                    ubicacion: "Monasterios europeos (iniciado en la Hispania visigoda)",
                    idioma: "Latín"
                }
            },
            // 3. Mapas Chinos (Dinastía Song)
            {
                titulo: "Mapas Chinos (Dinastía Song)",
                pais: "China",
                fecha: "Siglo XI (Ej. Yu Ji Tu)",
                imagen: "./assets/maps/era3_map3_song.webp",
                dato_rapido: "La invención de la cuadrícula cartográfica (escala graduada) para una precisión superior.",
                tipo: "Estela de piedra / Impresión",
                importancia: "Precisión matemática muy superior a la europea de la época, usada para control de inundaciones y administración.",
                ficha: {
                    material: "Grabado en piedra (estela)",
                    dimensions: "Aprox. 1 metro cuadrado",
                    ubicacion: "Xi'an, China",
                    idioma: "Chino"
                }
            },
            // 4. Mapas Islámicos (Al-Idrisi)
            {
                titulo: "Tabula Rogeriana (Al-Idrisi)",
                pais: "Sicilia (Corte Normanda)",
                fecha: "1154 d.C.",
                imagen: "./assets/maps/era3_map4_idrisi.webp",
                dato_rapido: "El mapa del mundo más preciso de la época, combinando conocimiento griego, árabe y la observación.",
                tipo: "Manuscrito / Disco de plata (perdido)",
                importancia: "Fusión cultural y científica en Sicilia; su precisión influenció la cartografía de exploración.",
                ficha: {
                    material: "Libro (papel/pergamino)",
                    dimensions: "Atlas de 70 mapas regionales",
                    ubicacion: "BNF, París",
                    idioma: "Árabe"
                }
            },
        ]
    },
    {
        id: "epoca-4",
        nombre_corto: "Renacimiento",
        rango_anos: "Siglo XV - XVI",
        descripcion: "La era dorada de la exploración, donde la cartografía pasa de ser una expresión artística a una herramienta científica y de poder, impulsada por las nuevas proyecciones matemáticas.",
        highlights: [
            // 1. Globos de Behaim (1492)
            {
                titulo: "Globos de Behaim (Erdapfel)",
                pais: "Alemania",
                fecha: "1492",
                imagen: "./assets/maps/era4_map1_behaim.webp",
                dato_rapido: "El **globo terráqueo más antiguo** que aún existe, creado justo antes del descubrimiento de América.",
                tipo: "Globo terráqueo",
                importancia: "Representa el conocimiento geográfico inmediatamente anterior a Colón, mostrando la creencia de que Asia era accesible por el Oeste.",
                ficha: {
                    material: "Lino y papel maché",
                    dimensions: "1.12m de diámetro",
                    ubicacion: "Museo Nacional Germano, Núremberg",
                    idioma: "Alemán"
                }
            },
            // 2. Mapa de Cantino (1502)
            {
                titulo: "Mapamundi de Cantino",
                pais: "Portugal",
                fecha: "1502",
                imagen: "./assets/maps/era4_map2_cantino.webp",
                dato_rapido: "Mapa robado por un espía italiano, que contenía información secreta de los descubrimientos portugueses en Brasil.",
                tipo: "Portulano (Carta náutica secreta)",
                importancia: "Muestra cómo el conocimiento cartográfico se convirtió en un secreto de Estado y una herramienta de espionaje en la carrera naval.",
                ficha: {
                    material: "Pergamino",
                    dimensions: "2.2 m x 1.02 m",
                    ubicacion: "Biblioteca Estense Universitaria, Módena",
                    idioma: "Portugués/Italiano"
                }
            },
            // 3. Da Vinci (1502)
            {
                titulo: "Plano Urbano de Imola (Da Vinci)",
                pais: "ITALIA (Toscana)",
                fecha: "~1502",
                imagen: "./assets/maps/era4_map3_davinci.webp",
                dato_rapido: "La invención de la **'vista de satélite'** o plano icnográfico, 500 años antes de los satélites.",
                tipo: "Dibujo técnico (Plano urbano cenital)",
                importancia: "Rompió con la perspectiva artística tradicional para crear un plano geométricamente exacto, clave para la ingeniería militar.",
                ficha: {
                    material: "Pluma, tinta y acuarela sobre papel",
                    dimensions: "Hoja suelta (parte de cuaderno)",
                    ubicacion: "Colección Real, Castillo de Windsor",
                    idioma: "Italiano"
                }
            },
        ]
    },
    {
        id: "epoca-5",
        nombre_corto: "Era Moderna",
        rango_anos: "Siglo XVII – XIX",
        descripcion: "Consolidación de la cartografía como una ciencia exacta del Estado, impulsada por la geodesia, la impresión en serie y la necesidad de análisis temático (geología, demografía).",
        highlights: [
            // 1. Escuela Francesa (S. XVII)
            {
                titulo: "Primeras Proyecciones Matemáticas",
                pais: "FRANCIA (Academia de Ciencias)",
                fecha: "Siglo XVII",
                imagen: "./assets/maps/era5_map1_escuela_francesa.webp",
                dato_rapido: "El fin del 'ojo de buen cubero'. Uso de las matemáticas y la triangulación geodésica rigurosa.",
                tipo: "Mapas basados en astronomía y topografía",
                importancia: "Aplicación de las matemáticas rigurosas para la definición exacta de fronteras estatales, sentando las bases del catastro moderno.",
                ficha: {
                    material: "Grabado en cobre de alta precisión",
                    dimensions: "Mapas nacionales a gran escala",
                    ubicacion: "París, Francia",
                    idioma: "Francés"
                }
            },
            // 4. Smith (1815)
            {
                titulo: "Mapas Geológicos de Smith",
                pais: "REINO UNIDO (Inglaterra y Gales)",
                fecha: "1815",
                imagen: "./assets/maps/era5_map4_smith.webp",
                dato_rapido: "**'El mapa que cambió el mundo'**. Permitió predecir lo que había debajo de la tierra.",
                tipo: "Mapa temático geológico",
                importancia: "Base de la economía moderna (carbón, minería). Pionero de la Estratigrafía (estudio de capas de suelo).",
                ficha: {
                    material: "Grabado coloreado a mano (acuarela)",
                    dimensions: "2.6 x 1.8 metros",
                    ubicacion: "Londres",
                    idioma: "Inglés"
                }
            },
            // 6. John Snow (1854)
            {
                titulo: "Mapa de Muertes por Cólera (Snow)",
                pais: "REINO UNIDO (Londres)",
                fecha: "1854",
                imagen: "./assets/maps/era5_map6_snow.webp",
                dato_rapido: "El **primer mapa temático epidemiológico**, que identificó el origen de un brote de cólera.",
                tipo: "Mapa de Puntos y Análisis Estadístico",
                importancia: "Pionero de la epidemiología y la cartografía de datos. Demostró que la enfermedad se transmitía por el agua, no por el aire.",
                ficha: {
                    material: "Impresión",
                    dimensions: "N/A",
                    ubicacion: "N/A",
                    idioma: "Inglés"
                }
            },
        ]
    },
    {
        id: "epoca-6",
        nombre_corto: "Era Contemporánea",
        rango_anos: "Siglo XX – XXI",
        descripcion: "Transición de la cartografía en papel a la digital, caracterizada por la observación remota, los sistemas de información geográfica (SIG) y la interacción en tiempo real.",
        highlights: [
            // 1. Mapa Submarino (1957)
            {
                titulo: "Mapa del Fondo Oceánico (Heezen/Tharp)",
                pais: "EE. UU.",
                fecha: "1957",
                imagen: "./assets/maps/era6_map1_fondo_oceanico.webp",
                dato_rapido: "El primer mapa detallado del fondo oceánico, revelando la dorsal medio-oceánica.",
                tipo: "Mapa Batimétrico (Dibujo a mano)",
                importancia: "Prueba clave para la teoría de la **tectónica de placas** y la geofísica moderna.",
                ficha: {
                    material: "Dibujo a mano basado en sonares",
                    dimensions: "N/A",
                    ubicacion: "N/A",
                    idioma: "Inglés"
                }
            },
            // 2. GIS (1960s)
            {
                titulo: "GIS (Sistemas de Información Geográfica)",
                pais: "CANADÁ (Origen: Roger Tomlinson)",
                fecha: "Década de 1960",
                imagen: "./assets/maps/era6_map2_gis.webp",
                dato_rapido: "El mapa como 'sándwich de datos'. Padre de toda la cartografía digital moderna.",
                tipo: "Software informático / Base de datos espacial",
                importancia: "Permitió por primera vez separar la información en 'capas' para análisis complejo de recursos y urbanismo.",
                ficha: {
                    material: "Código binario, servidores",
                    dimensions: "Ilimitado (Almacenamiento digital)",
                    ubicacion: "Ottawa, Canadá (CGIS)",
                    idioma: "N/A"
                }
            },
            // 5. Mapas 3D y Realidad Aumentada (2010s)
            {
                titulo: "Mapas 3D y Realidad Aumentada (AR)",
                pais: "ENTORNO URBANO / MÓVIL",
                fecha: "Siglo XXI (Auge)",
                imagen: "./assets/maps/era6_map5_ar_3d.webp",
                dato_rapido: "El mapa ya no es una guía, es un **'Gemelo Digital'**. Rompe la pantalla.",
                tipo: "Modelado inmersivo / Superposición visual (LiDAR)",
                importancia: "Facilita la orientación intuitiva proyectando información directamente sobre el mundo real (Computación Espacial).",
                ficha: {
                    material: "Nube de puntos (LiDAR) y fotogrametría",
                    dimensions: "Escala 1:1 (El mapa es del tamaño del territorio)",
                    ubicacion: "N/A",
                    idioma: "N/A"
                }
            },
        ]
    },
];

// =======================================================
// 2. LÓGICA DE RENDERIZADO Y TOOLTIPS
// =======================================================

const sidebarList = document.getElementById('sidebar-list');
const mainContent = document.getElementById('main-content');

// Función para generar el HTML
function renderApp() {
    
    // Título Principal
    mainContent.innerHTML = `
        <div class="text-center mb-5">
            <h1 class="display-4 fw-bold">Una Breve Historia de los Mapas</h1>
            <p class="lead text-muted">Un recorrido visual a través de 6 épocas clave.</p>
        </div>
    `;

    historiaMapas.forEach((epoca, indexEpoca) => {
        
        // A. Generar Link en Sidebar con Tooltip
        const navItem = document.createElement('li');
        navItem.className = 'nav-item';
        navItem.innerHTML = `
            <a class="nav-link" href="#${epoca.id}" 
               title="${epoca.rango_anos}" 
               data-bs-toggle="tooltip" 
               data-bs-placement="right">
                ${epoca.nombre_corto}
            </a>
        `;
        sidebarList.appendChild(navItem);

        // B. Generar Sección de Época
        const section = document.createElement('section');
        section.id = epoca.id;
        section.className = 'mb-5 pt-4';
        
        // Header de la época con Tooltip
        let htmlContent = `
            <h2 class="border-bottom pb-2 mb-4 text-uppercase text-primary"
                title="${epoca.rango_anos}" 
                data-bs-toggle="tooltip" 
                data-bs-placement="top">
                ${epoca.nombre_corto}
            </h2>
            <p class="lead mb-4 text-secondary">${epoca.descripcion}</p>
            
            <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-4"> 
        `;

        // C. Generar Cards (Highlights)
        epoca.highlights.forEach((mapa, indexMapa) => {
            const uniqueId = `ficha-${indexEpoca}-${indexMapa}`;
            
            // CONVERSIÓN DE **TEXTO** A HTML <strong>TEXTO</strong>
            const datoRapidoHTML = mapa.dato_rapido.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            const importanciaHTML = mapa.importancia.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');


            htmlContent += `
                <div class="col">
                    <div class="card h-100 border-0 shadow-sm map-card">
                        
                        <div class="img-container position-relative">
                            <img src="${mapa.imagen}" loading="lazy" class="card-img-top" alt="${mapa.titulo}">
                            
                            <span class="badge bg-dark position-absolute top-0 end-0 m-3 fs-6 shadow">
                                <i class="bi bi-calendar-event"></i> ${mapa.fecha}
                            </span>
                        </div>

                        <div class="card-body">
                            <div class="d-flex align-items-center mb-2 text-muted text-uppercase small fw-bold">
                                <i class="bi bi-geo-alt-fill text-danger me-1"></i> ${mapa.pais}
                            </div>
                            <h3 class="card-title h4 mb-3">${mapa.titulo}</h3>
                            
                            <div class="dato-rapido mb-3">
                                <i class="bi bi-lightbulb-fill text-warning"></i> ${datoRapidoHTML}
                            </div>

                            <ul class="list-unstyled small mb-3 text-secondary">
                                <li class="mb-1"><strong>Tipo:</strong> ${mapa.tipo}</li>
                                <li><strong>Importancia:</strong> ${importanciaHTML}</li>
                            </ul>

                            <button class="btn btn-outline-primary btn-sm w-100" type="button" data-bs-toggle="collapse" data-bs-target="#${uniqueId}">
                                <i class="bi bi-info-circle"></i> Ver Ficha Técnica
                            </button>

                            <div class="collapse mt-3" id="${uniqueId}">
                                <div class="card card-body bg-light border-0 small">
                                    <h6 class="fw-bold text-dark">Detalles Técnicos</h6>
                                    <hr class="my-1">
                                    <div class="row">
                                        <div class="col-6 mb-1"><strong>Material:</strong><br>${mapa.ficha.material}</div>
                                        <div class="col-6 mb-1"><strong>Dimensiones:</strong><br>${mapa.ficha.dimensions}</div>
                                        <div class="col-6"><strong>Ubicación:</strong><br>${mapa.ficha.ubicacion}</div>
                                        <div class="col-6"><strong>Idioma:</strong><br>${mapa.ficha.idioma}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        htmlContent += `</div> <hr class="my-5 text-muted" style="opacity: 0.1">`; 
        
        section.innerHTML = htmlContent;
        mainContent.appendChild(section);
    });
    
    // Espacio final para scroll
    const spacer = document.createElement('div');
    spacer.className = "pb-5 mb-5";
    mainContent.appendChild(spacer);
    
    // =======================================================
    // D. INICIALIZACIÓN DE TOOLTIPS y SCROLLSPY (CORREGIDO)
    // Se ejecuta después de que el HTML dinámico fue insertado
    // =======================================================

    function setupTooltipsAndScrollSpy() {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
        dataSpyList.forEach(function (dataSpyEl) {
          new bootstrap.ScrollSpy(dataSpyEl)
        });
    }

    function setupDarkMode() {
        const toggle = document.getElementById('darkModeToggle');
        const body = document.documentElement;

        const applyTheme = (theme) => {
            body.setAttribute('data-bs-theme', theme);
            localStorage.setItem('theme', theme);
            toggle.checked = (theme === 'dark');
        };

        let storedTheme = localStorage.getItem('theme');
        if (!storedTheme) {
            storedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        applyTheme(storedTheme);

        toggle.addEventListener('change', () => {
            const newTheme = toggle.checked ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }

    // Inicializamos las funciones después de que renderApp haya corrido.
    setupTooltipsAndScrollSpy();
    setupDarkMode();
}

document.addEventListener('DOMContentLoaded', renderApp);