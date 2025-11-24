// =======================================================
// 1. TUS DATOS - JSON (36 Highlights) - ESTRUCTURA FINAL
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
            // 4. LASCAUX (~17,000 a.C.)
            {
                titulo: "Mapa Estelar en Lascaux",
                pais: "Lascaux (Francia)",
                fecha: "~17,000 a.C.",
                imagen: "./assets/maps/era1_map4_lascaux.webp",
                dato_rapido: "Patrones estelares junto a figuras animales, posiblemente la primera carta astronómica.",
                tipo: "Pared de cueva / Pintura Rupestre",
                importancia: "Primer registro astronómico que muestra la conciencia del espacio celeste y su vínculo con ciclos terrestres o rituales.",
                ficha: {
                    material: "Pared de cueva (caliza) y pigmentos minerales (ocre, carbón)",
                    dimensions: "Parte de un mural mayor",
                    ubicacion: "Cueva de Lascaux, Dordoña, Francia",
                    idioma: "N/A"
                }
            },
            // 5. BEDOLINA (~12,000 a.C.)
            {
                titulo: "Petroglifos de Bedolina (Val Camonica)",
                pais: "Val Camonica (Italia)",
                fecha: "~12,000 a.C.",
                imagen: "./assets/maps/era1_map5_bedolina.webp",
                dato_rapido: "Contiene parcelas agrícolas y caminos, evidenciando una planificación territorial temprana.",
                tipo: "Petroglifo (Grabado en roca)",
                importancia: "Considerado uno de los primeros esquemas territoriales y agrícolas conocidos, marcando la transición hacia el sedentarismo.",
                ficha: {
                    material: "Roca (Superficie granítica)",
                    dimensions: "Paneles que abarcan varios metros cuadrados",
                    ubicacion: "Parque Nacional de los Petroglifos, Val Camonica, Italia",
                    idioma: "N/A"
                }
            },
            // 6. ÇATALHÖYÜK (~6,200 a.C.)
            {
                titulo: "Plano Urbano de Çatalhöyük",
                pais: "Anatolia (Turquía)",
                fecha: "~6,200 a.C.",
                imagen: "./assets/maps/era1_map6_catalhoyuk.webp",
                dato_rapido: "Mural que representa la disposición de las casas y un volcán cercano, el plano urbano más antiguo.",
                tipo: "Mural en Yeso / Plano Urbano",
                importancia: "El primer plano urbano conocido, fundamental para entender la organización social y territorial de las primeras ciudades.",
                ficha: {
                    material: "Pintura sobre yeso",
                    dimensions: "Panel mural de aproximadamente 3 metros",
                    ubicacion: "Museo de las Civilizaciones de Anatolia, Ankara (Reconstrucción)",
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
            // 1. Nuzi (~2,500 a.C.)
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
            // 2. Egipcios (~1,300 a.C.)
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
            // 3. Papiro de Turín (~1,150 a.C.)
            {
                titulo: "Papiro Minero de Turín",
                pais: "Antiguo Egipto",
                fecha: "~1,150 a.C.",
                imagen: "./assets/maps/era2_map3_turin.webp",
                dato_rapido: "El **primer mapa geológico y minero** de la historia, mostrando tipos de roca y rutas logísticas.",
                tipo: "Rollo de papiro",
                importancia: "Combina topografía con geología, planificando la explotación de recursos para la construcción de monumentos faraónicos.",
                ficha: {
                    material: "Papiro (tinta negra, roja y marrón)",
                    dimensions: "Fragmentos que sumaban aprox. 2.8 metros",
                    ubicacion: "Museo Egipcio de Turín",
                    idioma: "Egipcio Hierático"
                }
            },
            // 4. Imago Mundi (~600 a.C.)
            {
                titulo: "Imago Mundi Babilonio",
                pais: "Sippar (Irak)",
                fecha: "~600 a.C.",
                imagen: "./assets/maps/era2_map4_imago_mundi.webp",
                dato_rapido: "La **primera visión conceptual del cosmos** y la cosmología babilocéntrica.",
                tipo: "Tablilla de arcilla con texto cuneiforme",
                importancia: "No busca precisión geográfica, sino explicar el lugar del hombre en el universo con una visión simbólica y mitológica.",
                ficha: {
                    material: "Arcilla cocida",
                    dimensions: "12.2 x 8.2 cm",
                    ubicacion: "Museo Británico, Londres",
                    idioma: "Acadio"
                }
            },
            // 5. Itinerario de Antonino (Siglo III d.C.)
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
            // 6. Tabula Peutingeriana (Siglo IV d.C.)
            {
                titulo: "Tabula Peutingeriana",
                pais: "Imperio Romano",
                fecha: "Siglo IV d.C.",
                imagen: "./assets/maps/era2_map6_peutingeriana.webp",
                dato_rapido: "Un mapa de carreteras de **6.75 metros de largo**, distorsionado para enfatizar rutas y ciudades clave.",
                tipo: "Itinerarium Pictum (Mapa de ruta ilustrado)",
                importancia: "Ejemplo más famoso de la cartografía práctica romana, no geográfica, sino funcional para el viajero.",
                ficha: {
                    material: "Pergamino (copia medieval de un original romano)",
                    dimensions: "6.75 m x 0.34 m",
                    ubicacion: "Biblioteca Nacional de Austria, Viena",
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
            // 2. Rutas y Navegación Vikinga
            {
                titulo: "Rutas y Navegación Vikinga",
                pais: "Escandinavia",
                fecha: "Siglo IX - XI",
                imagen: "./assets/maps/era3_map2_vikinga.webp",
                dato_rapido: "Descubrimiento de América (Vinland) basado en la observación natural, sin mapas de papel.",
                tipo: "Tradición oral / Mapas mentales",
                importancia: "La exploración a gran escala basada en la navegación sensorial (aves, corrientes) y por estima.",
                ficha: {
                    material: "N/A (Sagas orales, gnomón, piedra solar)",
                    dimensions: "N/A (Abarcaba todo el Atlántico Norte)",
                    ubicacion: "N/A",
                    idioma: "Nórdico antiguo"
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
            // 5. Cartas Portulanas
            {
                titulo: "Cartas Portulanas",
                pais: "Mediterráneo (Italia/España)",
                fecha: "Siglos XIII - XV",
                imagen: "./assets/maps/era3_map5_portulanas.webp",
                dato_rapido: "Los primeros mapas hechos por y para navegantes reales, con líneas de rumbo (vientos).",
                tipo: "Mapa en piel de oveja (vitela)",
                importancia: "Ignoran el interior para centrarse obsesivamente en costas y puertos con precisión. Base para el comercio marítimo.",
                ficha: {
                    material: "Vitela (piel de alta calidad)",
                    dimensions: "Grandes pliegos enrollables",
                    ubicacion: "Escuelas de Génova, Venecia y Mallorca",
                    idioma: "Latín/Italiano/Catalán"
                }
            },
            // 6. Mapa de Fra Mauro
            {
                titulo: "Mapamundi de Fra Mauro",
                pais: "Venecia (Italia)",
                fecha: "1459 d.C.",
                imagen: "./assets/maps/era3_map6_mauro.webp",
                dato_rapido: "El 'mapa del fin del mundo' medieval, financiado por Portugal, que intentó romper con la tradición de Ptolomeo.",
                tipo: "Mapa circular sobre pergamino",
                importancia: "Representa la culminación de la cartografía medieval europea, combinando la tradición T-O con información real de viajeros.",
                ficha: {
                    material: "Pergamino sobre madera",
                    dimensions: "2.4 x 2.4 metros (gran tamaño)",
                    ubicacion: "Biblioteca Nazionale Marciana, Venecia",
                    idioma: "Latín/Italiano"
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
            // 4. Waldseemüller (1507)
            {
                titulo: "Mapa de Waldseemüller",
                pais: "Sacro Imperio Romano Germánico",
                fecha: "1507",
                imagen: "./assets/maps/era4_map4_waldseemuller.webp",
                dato_rapido: "Primer mapa en usar el nombre **'América'** para referirse al Nuevo Mundo.",
                tipo: "Mapa del mundo impreso",
                importancia: "Bautizó al continente americano y fue el primer mapa en mostrar el Nuevo Mundo separado de Asia por un océano.",
                ficha: {
                    material: "Impresión (12 paneles xilográficos)",
                    dimensions: "Aprox. 2.4 m x 1.2 m",
                    ubicacion: "Biblioteca del Congreso, EE. UU.",
                    idioma: "Latín"
                }
            },
            // 5. Piri Reis (1513)
            {
                titulo: "Mapas de Piri Reis",
                pais: "IMPERIO OTOMANO (Turquía)",
                fecha: "1513",
                imagen: "./assets/maps/era4_map5_pirireis.webp",
                dato_rapido: "El mapa misterioso que citó fuentes perdidas de Cristóbal Colón para mostrar las Américas.",
                tipo: "Carta náutica (Portulano)",
                importancia: "Muestra la capacidad de compilación cartográfica otomana, uniendo conocimientos árabes y europeos de exploración.",
                ficha: {
                    material: "Piel de gacela",
                    dimensions: "Fragmento superviviente de aprox. 90 x 63 cm",
                    ubicacion: "Museo Topkapi, Estambul",
                    idioma: "Turco Otomano"
                }
            },
            // 6. Proyección de Mercator (1569)
            {
                titulo: "Proyección de Mercator",
                pais: "FLANDES (Bélgica)",
                fecha: "1569",
                imagen: "./assets/maps/era4_map6_mercator.webp",
                dato_rapido: "El estándar que **deformó el mundo** para que los navegantes pudieran trazar rutas de rumbo constante (líneas rectas).",
                tipo: "Mapamundi mural impreso (Proyección cilíndrica)",
                importancia: "Revolucionó la navegación marítima transoceánica, siendo la solución matemática al problema de la navegación larga.",
                ficha: {
                    material: "Papel impreso (Grabado en cobre)",
                    dimensions: "202 x 124 cm (montado en 18 hojas)",
                    ubicacion: "Varios museos (Duisburgo original)",
                    idioma: "Latín"
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
            // 2. Halley (1686)
            {
                titulo: "Mapas Temáticos de Halley",
                pais: "REINO UNIDO (Royal Society)",
                fecha: "1686",
                imagen: "./assets/maps/era5_map2_halley.webp",
                dato_rapido: "El abuelo de la visualización de datos (Data Viz). Primer mapa que muestra fuerzas invisibles (vientos).",
                tipo: "Carta meteorológica",
                importancia: "Inventó el uso de flechas y líneas para indicar dirección y flujo de datos, clave para la navegación comercial.",
                ficha: {
                    material: "Papel impreso",
                    dimensions: "Ilustración para publicación científica",
                    ubicacion: "Londres",
                    idioma: "Inglés"
                }
            },
            // 3. Carte de Cassini (S. XVIII)
            {
                titulo: "Cartografía Topográfica (Carte de Cassini)",
                pais: "FRANCIA",
                fecha: "Siglo XVIII",
                imagen: "./assets/maps/era5_map3_cassini.webp",
                dato_rapido: "El primer mapa nacional completo y detallado del mundo (180 hojas medulares).",
                tipo: "Mapa topográfico detallado (Escala 1:86,400)",
                importancia: "Estableció el estándar visual de los mapas modernos: carreteras, ríos, bosques, todo medido por geodesia sistemática.",
                ficha: {
                    material: "180 hojas de papel montadas",
                    dimensions: "Gran tamaño",
                    ubicacion: "Francia (Todo el territorio)",
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
            // 5. Gran Proyecto Trigonométrico (S. XIX)
            {
                titulo: "Gran Proyecto Trigonométrico (India)",
                pais: "INDIA (Imperio Británico)",
                fecha: "1802–1871",
                imagen: "./assets/maps/era5_map5_india_trig.webp",
                dato_rapido: "La hazaña cartográfica más ambiciosa de la historia; midió la India entera 'a pie'.",
                tipo: "Levantamiento topográfico imperial",
                importancia: "Calculó por primera vez la altura exacta del Monte Everest. El control imperial se consolidó a través de la ciencia.",
                ficha: {
                    material: "Mapas de campaña y teodolitos gigantes",
                    dimensions: "Miles de kilómetros de 'Cadenas de triangulación'",
                    ubicacion: "Desde el Cabo Comorín hasta el Himalaya",
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
            // 3. Cartografía Satelital (1972)
            {
                titulo: "Cartografía Satelital (Programa Landsat)",
                pais: "EE. UU. (NASA)",
                fecha: "1972",
                imagen: "./assets/maps/era6_map3_landsat.webp",
                dato_rapido: "El ojo que todo lo ve. Primer satélite civil para monitorear la Tierra constantemente.",
                tipo: "Imágenes de teledetección",
                importancia: "Permitió monitorear cambios ambientales, deforestación y crecimiento urbano en tiempo real a escala global.",
                ficha: {
                    material: "Sensores multiespectrales",
                    dimensions: "Cobertura global continua",
                    ubicacion: "Órbita terrestre",
                    idioma: "N/A"
                }
            },
            // 4. Mapas Interactivos (2005)
            {
                titulo: "Google Maps / OSM",
                pais: "SILICON VALLEY (EE.UU.) / GLOBAL",
                fecha: "2005",
                imagen: "./assets/maps/era6_map4_google_osm.webp",
                dato_rapido: "La democratización absoluta: 'Tú eres el punto azul'. Cambió el comportamiento humano.",
                tipo: "Aplicación Web / Móvil",
                importancia: "Eliminó la necesidad de leer mapas complejos; introdujo rutas paso a paso y Street View.",
                ficha: {
                    material: "Interfaces digitales en la nube",
                    dimensions: "Todo el planeta en tu bolsillo",
                    ubicacion: "Internet",
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
            // 6. Big Data y Cartografía Predictiva (Actualidad)
            {
                titulo: "Big Data y Cartografía Predictiva",
                pais: "LA NUBE (Servidores Globales)",
                fecha: "Actualidad",
                imagen: "./assets/maps/era6_map6_big_data.webp",
                dato_rapido: "Mapas que predicen el futuro: predicción de tráfico, brotes epidémicos, y optimización logística.",
                tipo: "Algoritmos dinámicos en tiempo real",
                importancia: "Ya no muestran solo 'qué hay ahí', sino 'qué está pasando' y 'qué pasará', gracias al Machine Learning y el flujo masivo de datos.",
                ficha: {
                    material: "Datos agregados de millones de sensores",
                    dimensions: "Petabytes de información procesada por segundo",
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
            <div class="row row-cols-1 row-cols-xl-2 g-4">
        `;

        // C. Generar Cards (Highlights)
        epoca.highlights.forEach((mapa, indexMapa) => {
            const uniqueId = `ficha-${indexEpoca}-${indexMapa}`;

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
    // D. INICIALIZACIÓN DE TOOLTIPS
    // =======================================================
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      // Inicializar cada tooltip
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Inicializar ScrollSpy de Bootstrap
    var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
    dataSpyList.forEach(function (dataSpyEl) {
      new bootstrap.ScrollSpy(dataSpyEl)
    });
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', renderApp);