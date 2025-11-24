// 1. TUS DATOS (Aquí es donde rellenas tu investigación)
const historiaMapas = [
    {
        id: "epoca-1",
        nombre: "Epoca 1",
        descripcion: "Los primeros intentos de la humanidad por representar su entorno físico y cosmológico.",
        highlights: [
            {
                titulo: "Imago Mundi Babilonio",
                pais: "Babilonia (Irak)",
                fecha: "600 a.C.",
                imagen: "https://via.placeholder.com/600x400?text=Imago+Mundi", // Cambia por tu ruta local: 'img/babilonia.jpg'
                dato_rapido: "Considerado el mapa más antiguo del mundo que representa la tierra conocida.",
                tipo: "Tablilla de arcilla",
                importancia: "Representación simbólica y mitológica del mundo, con Babilonia en el centro.",
                ficha: {
                    material: "Arcilla cocida",
                    dimensiones: "12.2 x 8.2 cm",
                    ubicacion: "Museo Británico, Londres",
                    idioma: "Acadio"
                }
            },
            {
                titulo: "Mapa de Anaximandro",
                pais: "Grecia Antigua",
                fecha: "550 a.C.",
                imagen: "https://via.placeholder.com/600x400?text=Anaximandro",
                dato_rapido: "Fue el primero en dibujar un mapa de toda la Tierra habitada conocida.",
                tipo: "Reconstrucción teórica",
                importancia: "Introdujo la idea de un mundo circular rodeado por el océano.",
                ficha: {
                    material: "Papiro (perdido)",
                    dimensiones: "Desconocidas",
                    ubicacion: "Reconstrucción histórica",
                    idioma: "Griego antiguo"
                }
            },
            {
                titulo: "Mapa de Anaximandro",
                pais: "Grecia Antigua",
                fecha: "550 a.C.",
                imagen: "https://via.placeholder.com/600x400?text=Anaximandro",
                dato_rapido: "Fue el primero en dibujar un mapa de toda la Tierra habitada conocida.",
                tipo: "Reconstrucción teórica",
                importancia: "Introdujo la idea de un mundo circular rodeado por el océano.",
                ficha: {
                    material: "Papiro (perdido)",
                    dimensiones: "Desconocidas",
                    ubicacion: "Reconstrucción histórica",
                    idioma: "Griego antiguo"
                }
            },
            {
                titulo: "Mapa de Anaximandro",
                pais: "Grecia Antigua",
                fecha: "550 a.C.",
                imagen: "https://via.placeholder.com/600x400?text=Anaximandro",
                dato_rapido: "Fue el primero en dibujar un mapa de toda la Tierra habitada conocida.",
                tipo: "Reconstrucción teórica",
                importancia: "Introdujo la idea de un mundo circular rodeado por el océano.",
                ficha: {
                    material: "Papiro (perdido)",
                    dimensiones: "Desconocidas",
                    ubicacion: "Reconstrucción histórica",
                    idioma: "Griego antiguo"
                }
            },
            {
                titulo: "Mapa de Anaximandro",
                pais: "Grecia Antigua",
                fecha: "550 a.C.",
                imagen: "https://via.placeholder.com/600x400?text=Anaximandro",
                dato_rapido: "Fue el primero en dibujar un mapa de toda la Tierra habitada conocida.",
                tipo: "Reconstrucción teórica",
                importancia: "Introdujo la idea de un mundo circular rodeado por el océano.",
                ficha: {
                    material: "Papiro (perdido)",
                    dimensiones: "Desconocidas",
                    ubicacion: "Reconstrucción histórica",
                    idioma: "Griego antiguo"
                }
            },
            {
                titulo: "Mapa de Anaximandro",
                pais: "Grecia Antigua",
                fecha: "550 a.C.",
                imagen: "https://via.placeholder.com/600x400?text=Anaximandro",
                dato_rapido: "Fue el primero en dibujar un mapa de toda la Tierra habitada conocida.",
                tipo: "Reconstrucción teórica",
                importancia: "Introdujo la idea de un mundo circular rodeado por el océano.",
                ficha: {
                    material: "Papiro (perdido)",
                    dimensiones: "Desconocidas",
                    ubicacion: "Reconstrucción histórica",
                    idioma: "Griego antiguo"
                }
            }
            // ... Agrega aquí los otros 3 highlights de la Antigüedad ...
        ]
    },
    {
        id: "epoca-2",
        nombre: "Epoca 2",
        descripcion: "La cartografía influenciada por la religión y los mapas 'T en O'.",
        highlights: [
            // ... Agrega tus 5 highlights de la Edad Media aquí ...
             {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            }
        ]
    },
    ,
    {
        id: "epoca-3",
        nombre: "Epoca 3",
        descripcion: "La cartografía influenciada por la religión y los mapas 'T en O'.",
        highlights: [
             {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            }
        ]
    },
    ,
    {
        id: "epoca-4",
        nombre: "Epoca 4",
        descripcion: "La cartografía influenciada por la religión y los mapas 'T en O'.",
        highlights: [
            // ... Agrega tus 5 highlights de la Edad Media aquí ...
             {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            }
        ]
    },
    ,
    {
        id: "epoca-5",
        nombre: "Epoca 5",
        descripcion: "La cartografía influenciada por la religión y los mapas 'T en O'.",
        highlights: [
            // ... Agrega tus 5 highlights de la Edad Media aquí ...
             {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            }
        ]
    },
    ,
    {
        id: "epoca-6",
        nombre: "Epoca 6",
        descripcion: "La cartografía influenciada por la religión y los mapas 'T en O'.",
        highlights: [
            // ... Agrega tus 5 highlights de la Edad Media aquí ...
             {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            },
            {
                titulo: "Mapa de Ebstorf",
                pais: "Alemania",
                fecha: "1235 d.C.",
                imagen: "https://via.placeholder.com/600x400?text=Ebstorf",
                dato_rapido: "Representa el cuerpo de Cristo abrazando el mundo.",
                tipo: "Mappa Mundi",
                importancia: "Gran ejemplo de la visión teológica del mundo medieval.",
                ficha: {
                    material: "Pergamino de piel de cabra",
                    dimensiones: "3.5 x 3.5 metros",
                    ubicacion: "Destruido en WWII (Reconstruido)",
                    idioma: "Latín"
                }
            }
        ]
    }
];

// 2. LÓGICA DE RENDERIZADO (No necesitas tocar esto mucho)

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
        
        // A. Generar Link en Sidebar
        const navItem = document.createElement('li');
        navItem.className = 'nav-item';
        navItem.innerHTML = `<a class="nav-link" href="#${epoca.id}">${epoca.nombre}</a>`;
        sidebarList.appendChild(navItem);

        // B. Generar Sección de Época
        const section = document.createElement('section');
        section.id = epoca.id;
        section.className = 'mb-5 pt-4';
        
        // Header de la época
        let htmlContent = `
            <h2 class="border-bottom pb-2 mb-4 text-uppercase text-primary">${epoca.nombre}</h2>
            <p class="lead mb-4">${epoca.descripcion}</p>
            <div class="row row-cols-1 row-cols-xl-2 g-4">
        `;

        // C. Generar Cards (Highlights)
        epoca.highlights.forEach((mapa, indexMapa) => {
            // Crear ID único para el colapsable
            const uniqueId = `ficha-${indexEpoca}-${indexMapa}`;

            htmlContent += `
                <div class="col">
                    <div class="card h-100 border-0 shadow-sm map-card">
                        <div class="img-container bg-light position-relative">
                            <img src="${mapa.imagen}" class="card-img-top" alt="${mapa.titulo}">
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
                                <i class="bi bi-lightbulb-fill text-warning"></i> ${mapa.dato_rapido}
                            </div>

                            <ul class="list-unstyled small mb-3 text-secondary">
                                <li class="mb-1"><strong>Tipo:</strong> ${mapa.tipo}</li>
                                <li><strong>Importancia:</strong> ${mapa.importancia}</li>
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
                                        <div class="col-6 mb-1"><strong>Dimensiones:</strong><br>${mapa.ficha.dimensiones}</div>
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

        htmlContent += `</div> <hr class="my-5 text-muted" style="opacity: 0.1">`; // Cerrar Row y agregar separador
        
        section.innerHTML = htmlContent;
        mainContent.appendChild(section);
    });
    
    // Espacio final para scroll
    const spacer = document.createElement('div');
    spacer.className = "pb-5 mb-5";
    mainContent.appendChild(spacer);
    
    // Reiniciar ScrollSpy de Bootstrap para que detecte los nuevos elementos
    var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
    dataSpyList.forEach(function (dataSpyEl) {
      bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()
    });
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', renderApp);