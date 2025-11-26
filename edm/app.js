// =======================================================
// 1. TUS DATOS - JSON (6 Épocas x 3 Highlights con Ficha Expandida)
// =======================================================
const historiaMapas = [
    {
        id: "epoca-1",
        nombre_corto: "Prehistoria",
        rango_anos: "25,000 a.C – 3,300 a.C",
        descripcion: "Los primeros registros de pensamiento espacial y simbólico, usando cuevas, huesos y rocas como lienzos para representar territorios, rutas de caza y patrones estelares.",
        highlights: [
            {
                titulo: "Pinturas Rupestres de Chauvet",
                pais: "Chauvet (Francia)",
                fecha: "~36,000 a.C.",
                imagen: "./assets/maps/era1_map1_chauvet.webp", 
                dato_rapido: "Contiene las representaciones de animales más antiguas y mejor conservadas del mundo.",
                tipo: "Pared de cueva / Pintura Rupestre",
                importancia: "Primeras representaciones narrativas y rituales, base del pensamiento simbólico y proto-narrativo.",
                ficha: {
                    edad: "~38,000 años",
                    periodo: "Paleolítico Superior (Auriñaciense)",
                    material: "Pared de cueva (Caliza) y pigmentos",
                    tecnica: "Dibujo al carbón y raspado",
                    dimensiones: "Sistema de 800m de largo",
                    ubicacion: "Ardèche, Francia",
                    proposito: "Ritual / Narrativo",
                    contexto: "Orígenes del arte figurativo"
                }
            },
            {
                titulo: "Mapa en Colmillo de Pavlov",
                pais: "Pavlov (República Checa)",
                fecha: "~25,000 a.C.",
                imagen: "./assets/maps/era1_map2_pavlov.webp",
                dato_rapido: "Considerado el **mapa físico más antiguo** conocido, posiblemente para navegación de caza.",
                tipo: "Colmillo grabado",
                importancia: "Evidencia de la planificación espacial y la capacidad de abstracción topográfica de los primeros *Homo sapiens*.",
                ficha: {
                    edad: "~27,000 años",
                    periodo: "Paleolítico Superior (Gravetiense)",
                    material: "Marfil de mamut (colmillo)",
                    tecnica: "Incisión fina con buril de sílex",
                    dimensiones: "13 cm de largo",
                    ubicacion: "Museo de Moravia, Brno",
                    proposito: "Navegación de caza / Topografía",
                    contexto: "Cazadores-recolectores de mamuts"
                }
            },
            {
                titulo: "Mapa del Abrigo del Llonín",
                pais: "Asturias (España)",
                fecha: "~18,000 a.C.",
                imagen: "./assets/maps/era1_map3_llonin.webp", 
                dato_rapido: "Grabado en hueso que representa ríos y cuevas, uno de los pocos mapas topográficos del Paleolítico.",
                tipo: "Grabado en hueso",
                importancia: "Muestra la capacidad de representar elementos geográficos durante el Paleolítico Superior.",
                ficha: {
                    edad: "~20,000 años",
                    periodo: "Magdaleniense",
                    material: "Hueso plano (Escápula)",
                    tecnica: "Grabado lítico",
                    dimensiones: "17 cm de largo",
                    ubicacion: "Museo Arqueológico de Asturias",
                    proposito: "Memorización del territorio",
                    contexto: "Arte mueble cantábrico"
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
            {
                titulo: "Mapa Topográfico de Nuzi",
                pais: "Nuzi (Irak)",
                fecha: "~2,500 a.C.",
                imagen: "./assets/maps/era2_map1_nuzi.webp", 
                dato_rapido: "El **mapa topográfico más antiguo** conocido, con orientación (puntos cardinales).",
                tipo: "Tablilla de arcilla",
                importancia: "Primera representación de propiedad de tierras con orientación geográfica.",
                ficha: {
                    edad: "~4,500 años",
                    periodo: "Dinástico Arcaico",
                    material: "Arcilla cocida",
                    tecnica: "Incisión cuneiforme",
                    dimensiones: "7.6 x 6.8 cm",
                    ubicacion: "Museo de Antigüedades, Estambul",
                    proposito: "Registro fiscal / Propiedad",
                    contexto: "Burocracia mesopotámica"
                }
            },
            {
                titulo: "Mapas Topográficos Egipcios",
                pais: "Antiguo Egipto",
                fecha: "~1,300 a.C.",
                imagen: "./assets/maps/era2_map2_egipcio.webp",
                dato_rapido: "Evidencia de la agrimensura y la ingeniería hidráulica aplicadas al control del Nilo.",
                tipo: "Pintura mural / Papiro",
                importancia: "Uso pragmático para el control del Nilo y la agricultura.",
                ficha: {
                    edad: "~3,300 años",
                    periodo: "Imperio Nuevo",
                    material: "Papiro y estuco",
                    tecnica: "Pintura lineal con cuadrícula",
                    dimensiones: "Variable (murales)",
                    ubicacion: "Tumbas tebanas",
                    proposito: "Ingeniería hidráulica / Agrimensura",
                    contexto: "Sociedad agraria fluvial"
                }
            },
            {
                titulo: "Itinerario de Antonino",
                pais: "Imperio Romano",
                fecha: "Siglo III d.C.",
                imagen: "./assets/maps/era2_map5_antonino.webp",
                dato_rapido: "El **'GPS' de la antigüedad** (texto), sistematizando las redes de transporte romanas.",
                tipo: "Registro escrito",
                importancia: "Registro clave para la logística militar y comercial romana.",
                ficha: {
                    edad: "~1,700 años (compilación)",
                    periodo: "Bajo Imperio Romano",
                    material: "Pergamino (copias)",
                    tecnica: "Lista topológica",
                    dimensiones: "Miles de km de red viaria",
                    ubicacion: "Varios manuscritos",
                    proposito: "Logística militar y postal",
                    contexto: "Control territorial imperial"
                }
            },
        ]
    },
    {
        id: "epoca-3",
        nombre_corto: "Edad Media",
        rango_anos: "Siglo V - XV",
        descripcion: "Dominio de los 'Mappa Mundi' religiosos y el surgimiento de la cartografía náutica.",
        highlights: [
            {
                titulo: "Mapas T-O (Orbis Terrarum)",
                pais: "EUROPA",
                fecha: "Siglos VI - XIII",
                imagen: "./assets/maps/era3_map1_to.webp", 
                dato_rapido: "El mundo visto a través de la Biblia, con el Este (Oriente) hacia arriba.",
                tipo: "Ilustración",
                importancia: "No sirve para navegar, sino para teología. La geografía subordinada a la fe.",
                ficha: {
                    edad: "Concepto de ~1,400 años",
                    periodo: "Alta Edad Media",
                    material: "Pergamino (manuscritos)",
                    tecnica: "Esquema circular simbólico",
                    dimensiones: "Ilustración de libro",
                    ubicacion: "Monasterios europeos",
                    proposito: "Didáctico / Religioso",
                    contexto: "Cristiandad latina"
                }
            },
            {
                titulo: "Mapas Chinos (Dinastía Song)",
                pais: "China",
                fecha: "Siglo XI (Ej. Yu Ji Tu)",
                imagen: "./assets/maps/era3_map3_song.webp",
                dato_rapido: "La invención de la cuadrícula cartográfica (escala graduada).",
                tipo: "Estela de piedra",
                importancia: "Precisión matemática muy superior a la europea de la época.",
                ficha: {
                    edad: "~900 años",
                    periodo: "Dinastía Song",
                    material: "Grabado en piedra (estela)",
                    tecnica: "Cuadrícula escalada",
                    dimensiones: "Aprox. 1 metro cuadrado",
                    ubicacion: "Museo del Bosque de Estelas, Xi'an",
                    proposito: "Administrativo / Control hídrico",
                    contexto: "Edad de oro científica china"
                }
            },
            {
                titulo: "Tabula Rogeriana (Al-Idrisi)",
                pais: "Sicilia (Corte Normanda)",
                fecha: "1154 d.C.",
                imagen: "./assets/maps/era3_map4_idrisi.webp",
                dato_rapido: "El mapa del mundo más preciso de la época, combinando conocimiento griego y árabe.",
                tipo: "Manuscrito / Disco",
                importancia: "Fusión cultural y científica en Sicilia; influenció la exploración.",
                ficha: {
                    edad: "~870 años",
                    periodo: "Edad Media (Normando-Árabe)",
                    material: "Libro y Plata (perdido)",
                    tecnica: "Compilación geográfica",
                    dimensiones: "Atlas de 70 hojas",
                    ubicacion: "Biblioteca Bodleiana (copias)",
                    proposito: "Científico / Estado",
                    contexto: "Multiculturalismo siciliano"
                }
            },
        ]
    },
    {
        id: "epoca-4",
        nombre_corto: "Renacimiento",
        rango_anos: "Siglo XV - XVI",
        descripcion: "La era dorada de la exploración, impulsada por las nuevas proyecciones matemáticas.",
        highlights: [
            {
                titulo: "Globos de Behaim",
                pais: "Alemania",
                fecha: "1492",
                imagen: "./assets/maps/era4_map1_behaim.webp",
                dato_rapido: "El **globo terráqueo más antiguo** que aún existe, pre-colombino.",
                tipo: "Globo terráqueo",
                importancia: "Muestra la visión del mundo justo antes del descubrimiento de América.",
                ficha: {
                    edad: "532 años",
                    periodo: "Era de los Descubrimientos",
                    material: "Lino, papel maché, yeso",
                    tecnica: "Esfera pintada a mano",
                    dimensiones: "51 cm de diámetro",
                    ubicacion: "Museo Nacional Germano",
                    proposito: "Educativo / Prestigio",
                    contexto: "Vísperas de la expansión europea"
                }
            },
            {
                titulo: "Mapamundi de Cantino",
                pais: "Portugal",
                fecha: "1502",
                imagen: "./assets/maps/era4_map2_cantino.webp",
                dato_rapido: "Mapa robado por un espía que contenía información secreta de Brasil.",
                tipo: "Portulano",
                importancia: "Muestra el conocimiento cartográfico como secreto de Estado.",
                ficha: {
                    edad: "522 años",
                    periodo: "Renacimiento Temprano",
                    material: "Pergamino (Vitela)",
                    tecnica: "Manuscrito iluminado",
                    dimensiones: "2.2 m x 1.02 m",
                    ubicacion: "Biblioteca Estense, Módena",
                    proposito: "Espionaje / Estrategia",
                    contexto: "Rivalidad España-Portugal"
                }
            },
            {
                titulo: "Plano Urbano de Imola",
                pais: "ITALIA (Da Vinci)",
                fecha: "~1502",
                imagen: "./assets/maps/era4_map3_davinci.webp",
                dato_rapido: "La invención de la **'vista de satélite'** 500 años antes de los satélites.",
                tipo: "Dibujo técnico",
                importancia: "Primer plano urbano cenital geométricamente exacto.",
                ficha: {
                    edad: "522 años",
                    periodo: "Alto Renacimiento",
                    material: "Tinta y acuarela sobre papel",
                    tecnica: "Medición con brújula/odómetro",
                    dimensiones: "Hoja de cuaderno",
                    ubicacion: "Castillo de Windsor",
                    proposito: "Ingeniería Militar",
                    contexto: "Guerras italianas (César Borgia)"
                }
            },
        ]
    },
    {
        id: "epoca-5",
        nombre_corto: "Era Moderna",
        rango_anos: "Siglo XVII – XIX",
        descripcion: "Consolidación de la cartografía como ciencia exacta del Estado y análisis temático.",
        highlights: [
            {
                titulo: "Proyecciones Cassini",
                pais: "Francia",
                fecha: "Siglo XVII-XVIII",
                imagen: "./assets/maps/era5_map1_escuela_francesa.webp",
                dato_rapido: "El fin del 'ojo de buen cubero'. Uso de triangulación geodésica.",
                tipo: "Mapa topográfico",
                importancia: "Aplicación de matemáticas para definir fronteras estatales exactas.",
                ficha: {
                    edad: "~300 años",
                    periodo: "Siglo de las Luces",
                    material: "Grabado en cobre",
                    tecnica: "Triangulación geodésica",
                    dimensiones: "180 hojas (Mapa de Francia)",
                    ubicacion: "Observatorio de París",
                    proposito: "Control estatal / Catastro",
                    contexto: "Centralismo monárquico"
                }
            },
            {
                titulo: "Mapas Geológicos de Smith",
                pais: "Reino Unido",
                fecha: "1815",
                imagen: "./assets/maps/era5_map4_smith.webp",
                dato_rapido: "**'El mapa que cambió el mundo'**. Permitió predecir el subsuelo.",
                tipo: "Mapa geológico",
                importancia: "Base de la economía moderna (minería) y la estratigrafía.",
                ficha: {
                    edad: "210 años",
                    periodo: "Revolución Industrial",
                    material: "Grabado coloreado a mano",
                    tecnica: "Estratigrafía visual",
                    dimensiones: "2.6 x 1.8 metros",
                    ubicacion: "Londres",
                    proposito: "Minería / Ciencia",
                    contexto: "Auge del carbón y canales"
                }
            },
            {
                titulo: "Mapa de Cólera (Snow)",
                pais: "Reino Unido",
                fecha: "1854",
                imagen: "./assets/maps/era5_map6_snow.webp",
                dato_rapido: "El **primer mapa epidemiológico**, identificó el origen de un brote.",
                tipo: "Mapa de Puntos",
                importancia: "Pionero de la visualización de datos para resolver crisis de salud.",
                ficha: {
                    edad: "170 años",
                    periodo: "Era Victoriana",
                    material: "Impresión (Informe)",
                    tecnica: "Mapeo de incidencias (puntos)",
                    dimensiones: "Ilustración de libro",
                    ubicacion: "Londres",
                    proposito: "Salud Pública",
                    contexto: "Epidemias urbanas"
                }
            },
        ]
    },
    {
        id: "epoca-6",
        nombre_corto: "Era Contemporánea",
        rango_anos: "Siglo XX – XXI",
        descripcion: "Transición a lo digital, observación remota e interacción en tiempo real.",
        highlights: [
            {
                titulo: "Mapa del Fondo Oceánico",
                pais: "EE. UU. (Heezen/Tharp)",
                fecha: "1957",
                imagen: "./assets/maps/era6_map1_fondo_oceanico.webp",
                dato_rapido: "Primer mapa detallado del fondo oceánico y la dorsal media.",
                tipo: "Mapa Batimétrico",
                importancia: "Prueba visual clave para la teoría de la **tectónica de placas**.",
                ficha: {
                    edad: "67 años",
                    periodo: "Guerra Fría / Año Geofísico",
                    material: "Dibujo a mano (tinta)",
                    tecnica: "Interpolación de perfiles de sonar",
                    dimensiones: "Mural global",
                    ubicacion: "Biblioteca del Congreso",
                    proposito: "Ciencia / Estrategia naval",
                    contexto: "Descubrimiento del planeta oculto"
                }
            },
            {
                titulo: "GIS (Sistemas de Info.)",
                pais: "Canadá (CGIS)",
                fecha: "1960s",
                imagen: "./assets/maps/era6_map2_gis.webp",
                dato_rapido: "El mapa como 'sándwich de datos'. Padre de la cartografía digital.",
                tipo: "Software / Base de datos",
                importancia: "Permitió separar información en capas para análisis complejo.",
                ficha: {
                    edad: "~60 años",
                    periodo: "Era de la Computación",
                    material: "Código binario / Pantallas",
                    tecnica: "Digitalización vectorial/raster",
                    dimensiones: "Ilimitado (Digital)",
                    ubicacion: "Servidores (Ottawa)",
                    proposito: "Gestión de recursos",
                    contexto: "Transición analógico-digital"
                }
            },
            {
                titulo: "Mapas 3D y Realidad Aumentada",
                pais: "GLOBAL",
                fecha: "Siglo XXI",
                imagen: "./assets/maps/era6_map5_ar_3d.webp",
                dato_rapido: "El mapa como **'Gemelo Digital'**. Información sobre el mundo real.",
                tipo: "Modelado 3D / LiDAR",
                importancia: "Facilita la orientación intuitiva y la computación espacial.",
                ficha: {
                    edad: "Actualidad",
                    periodo: "Era de la IA / Espacial",
                    material: "Nube de puntos / Pixeles",
                    tecnica: "Fotogrametría / Escaneo Láser",
                    dimensiones: "Escala 1:1",
                    ubicacion: "La Nube / Móvil",
                    proposito: "Navegación / Inmersión",
                    contexto: "Fusión mundo físico-digital"
                }
            },
        ]
    }
];

// =======================================================
// 2. RENDERIZADO Y VISUALIZACIÓN
// =======================================================
const sidebarList = document.getElementById('sidebar-list');
const mainContent = document.getElementById('main-content');

function renderApp() {
    mainContent.innerHTML = `
        <div class="text-center mb-5">
            <h1 class="display-4 fw-bold">Una Breve Historia de los Mapas</h1>
            <p class="lead text-muted">Un recorrido visual a través de 6 épocas clave.</p>
        </div>
    `;

    historiaMapas.forEach((epoca) => {
        // Crear Link
        const navItem = document.createElement('li');
        navItem.className = 'nav-item';
        navItem.innerHTML = `<a class="nav-link" href="#${epoca.id}" data-target-id="${epoca.id}" title="${epoca.rango_anos}" data-bs-toggle="tooltip" data-bs-placement="right">${epoca.nombre_corto}</a>`;
        sidebarList.appendChild(navItem);

        // Crear Sección
        const section = document.createElement('section');
        section.id = epoca.id;
        section.className = 'mb-5 pt-5 section-epoca';
        
        let htmlContent = `
            <h2 class="border-bottom pb-2 mb-4 text-uppercase text-primary">${epoca.nombre_corto}</h2>
            <p class="lead mb-4 text-secondary">${epoca.descripcion}</p>
            <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-4"> 
        `;

        epoca.highlights.forEach((mapa, indexMapa) => {
            const uniqueId = `${epoca.id}-${indexMapa}`;
            const datoRapidoHTML = mapa.dato_rapido.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            const importanciaHTML = mapa.importancia.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

            htmlContent += `
                <div class="col">
                    <div class="card h-100 border-0 shadow-sm map-card">
                        <div class="img-container position-relative">
                            <img src="${mapa.imagen}" loading="lazy" class="card-img-top" alt="${mapa.titulo}">
                            <span class="badge bg-dark position-absolute top-0 end-0 m-3 fs-6 shadow"><i class="bi bi-calendar-event"></i> ${mapa.fecha}</span>
                        </div>
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-2 text-muted text-uppercase small fw-bold">
                                <i class="bi bi-geo-alt-fill text-danger me-1"></i> ${mapa.pais}
                            </div>
                            <h3 class="card-title h4 mb-3">${mapa.titulo}</h3>
                            <div class="dato-rapido mb-3"><i class="bi bi-lightbulb-fill text-warning"></i> ${datoRapidoHTML}</div>
                            <ul class="list-unstyled small mb-3 text-secondary">
                                <li class="mb-1"><strong>Tipo:</strong> ${mapa.tipo}</li>
                                <li><strong>Importancia:</strong> ${importanciaHTML}</li>
                            </ul>
                            <button class="btn btn-outline-primary btn-sm w-100" type="button" data-bs-toggle="collapse" data-bs-target="#${uniqueId}">Ver Ficha Técnica</button>
                            
                            <div class="collapse mt-3" id="${uniqueId}">
                                <div class="card card-body bg-light border-0 small">
                                    <div class="row g-2">
                                        <div class="col-6"><strong>Edad:</strong><br>${mapa.ficha.edad}</div>
                                        <div class="col-6"><strong>Periodo:</strong><br>${mapa.ficha.periodo}</div>
                                        <div class="col-6"><strong>Ubicación:</strong><br>${mapa.ficha.ubicacion}</div>
                                        <div class="col-6"><strong>Contexto:</strong><br>${mapa.ficha.contexto || mapa.ficha.idioma}</div>
                                        <div class="col-12"><hr class="my-1"></div>
                                        <div class="col-6"><strong>Material:</strong><br>${mapa.ficha.material}</div>
                                        <div class="col-6"><strong>Dimensiones:</strong><br>${mapa.ficha.dimensions || mapa.ficha.dimensiones}</div>
                                        <div class="col-12"><strong>Técnica:</strong><br>${mapa.ficha.tecnica}</div>
                                        <div class="col-12"><strong>Propósito:</strong><br>${mapa.ficha.proposito}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        // *** AQUÍ SE QUITÓ EL SEPARADOR <HR> ***
        htmlContent += `</div>`; 
        section.innerHTML = htmlContent;
        mainContent.appendChild(section);
    });
    
    const spacer = document.createElement('div');
    spacer.className = "pb-5 mb-5";
    mainContent.appendChild(spacer);

    // 3. INICIALIZACIONES
    setupTooltips();
    setupDarkMode();
    setupManualScrollSpy();
}

// --- FUNCIONES AUXILIARES ---

function setupTooltips() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) { return new bootstrap.Tooltip(tooltipTriggerEl); });
}

function setupDarkMode() {
    const toggle = document.getElementById('darkModeToggle');
    if(!toggle) return;
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
    toggle.addEventListener('change', () => { applyTheme(toggle.checked ? 'dark' : 'light'); });
}

function setupManualScrollSpy() {
    const sections = document.querySelectorAll('.section-epoca');
    const navLinks = document.querySelectorAll('.sidebar .nav-link');

    const observerOptions = {
        root: null, 
        rootMargin: '-20% 0px -60% 0px', 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active-manual'));
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.sidebar .nav-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active-manual');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

document.addEventListener('DOMContentLoaded', renderApp);