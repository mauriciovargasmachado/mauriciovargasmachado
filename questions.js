const questions = [
  {
    "question": "¿Cuáles son las tres partes del Parlamento canadiense?",
    "options": [
      "El Rey, el Senado y la Cámara de los Comunes",
      "El Primer Ministro, el Gobernador General y la Corte Suprema",
      "El Senado, la Cámara de los Comunes y la Policía",
      "La Asamblea Nacional, el Senado y la Corte"
    ],
    "answer": 0
  },
  {
    "question": "¿Quién fue el primer Primer Ministro de Canadá?",
    "options": [
      "Sir John A. Macdonald",
      "Wilfrid Laurier",
      "Lester B. Pearson",
      "Pierre Trudeau"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué provincia es oficialmente bilingüe?",
    "options": [
      "Ontario",
      "Nueva Brunswick",
      "Manitoba",
      "Columbia Británica"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es la capital de Canadá?",
    "options": [
      "Montreal",
      "Toronto",
      "Ottawa",
      "Calgary"
    ],
    "answer": 2
  },
  {
    "question": "¿Cómo se llama la policía nacional de Canadá?",
    "options": [
      "Policía de Ontario",
      "Servicio de Policía de Montreal",
      "Gendarmería Real de Canadá",
      "Policía Montada Provincial"
    ],
    "answer": 2
  },
  {
    "question": "¿Qué océano bordea Canadá al oeste?",
    "options": [
      "Atlántico",
      "Pacífico",
      "Ártico",
      "Índico"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es el himno nacional de Canadá?",
    "options": [
      "Dios salve a la Reina",
      "La Marsellesa",
      "O Canada",
      "Oh Susana"
    ],
    "answer": 2
  },
  {
    "question": "¿En qué fecha se celebra el Día de Canadá?",
    "options": [
      "1 de julio",
      "1 de enero",
      "24 de junio",
      "11 de noviembre"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué guerra consolidó la independencia de Canadá de Estados Unidos?",
    "options": [
      "La Guerra Civil",
      "La Guerra de 1812",
      "La Guerra de Independencia",
      "La Primera Guerra Mundial"
    ],
    "answer": 1
  },
  {
    "question": "¿En qué provincia se encuentra la Bahía de Fundy?",
    "options": [
      "Nueva Escocia",
      "Nueva Brunswick",
      "Quebec",
      "Ontario"
    ],
    "answer": 1
  },
  {
    "question": "¿Quién es la jefa de Estado de Canadá?",
    "options": [
      "El Primer Ministro",
      "El Gobernador General",
      "El Rey o Reina",
      "El Presidente"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la ciudad capital de Saskatchewan?",
    "options": [
      "Regina",
      "Saskatoon",
      "Winnipeg",
      "Edmonton"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuáles son los tres pueblos indígenas principales de Canadá?",
    "options": [
      "Métis, Inuit y Primeras Naciones",
      "Huron, Cree y Sioux",
      "Ojibwa, Iroquois y Dakota",
      "Aborígenes, Innu y Micmac"
    ],
    "answer": 0
  },
  {
    "question": "¿Cómo se llama la constitución escrita de Canadá?",
    "options": [
      "Ley Constitucional de 1867",
      "Ley de Manitoba",
      "Ley de Provincias Unidas",
      "Carta de los Derechos"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué importante obra de ingeniería une el este con el oeste de Canadá?",
    "options": [
      "Canal de Suez",
      "Canal de Panamá",
      "Ferrocarril Transcontinental",
      "Metro de Toronto"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la capital de Quebec?",
    "options": [
      "Montreal",
      "Quebec",
      "Trois-Rivières",
      "Sherbrooke"
    ],
    "answer": 1
  },
  {
    "question": "¿Cómo se llama la provincia más pequeña de Canadá?",
    "options": [
      "Isla del Príncipe Eduardo",
      "Nueva Escocia",
      "Nuevo Brunswick",
      "Manitoba"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué derecho garantiza la libertad de expresión en Canadá?",
    "options": [
      "Acta de Canadá",
      "Carta Canadiense de Derechos y Libertades",
      "Código Civil",
      "Ley de Seguridad"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué feriado se celebra el 11 de noviembre para honrar a los veteranos?",
    "options": [
      "Día de Canadá",
      "Acción de Gracias",
      "Día del Recuerdo",
      "Día del Trabajo"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la moneda oficial de Canadá?",
    "options": [
      "Euro",
      "Dólar canadiense",
      "Libra esterlina",
      "Peso"
    ],
    "answer": 1
  },
  {
    "question": "¿En qué año las mujeres obtuvieron el derecho total de voto en las elecciones federales?",
    "options": [
      "1918",
      "1921",
      "1940",
      "1898"
    ],
    "answer": 0
  },
  {
    "question": "¿Cómo se llaman las praderas canadienses que se extienden por tres provincias?",
    "options": [
      "Las Llanuras del Norte",
      "Las Grandes Praderas",
      "Los Grandes Lagos",
      "Las Tierras Bajas de St. Lawrence"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué provincia produce la mayor parte del petróleo de Canadá?",
    "options": [
      "Ontario",
      "Alberta",
      "Saskatchewan",
      "Terranova y Labrador"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es la capital del territorio de Yukón?",
    "options": [
      "Yellowknife",
      "Iqaluit",
      "Whitehorse",
      "Dawson"
    ],
    "answer": 2
  },
  {
    "question": "¿Quién dirige el gobierno municipal en la mayoría de las ciudades?",
    "options": [
      "El Primer Ministro",
      "El Alcalde",
      "El Gobernador General",
      "El Diputado"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué evento histórico se conoce como la Gran Depresión?",
    "options": [
      "La caída de la bolsa en 1929",
      "La crisis del petróleo",
      "La Segunda Guerra Mundial",
      "La Crisis del Canal de Suez"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuál es la provincia conocida por sus grandes reservas de madera y pesca?",
    "options": [
      "Quebec",
      "Terranova y Labrador",
      "Columbia Británica",
      "Nueva Escocia"
    ],
    "answer": 2
  },
  {
    "question": "¿Quién tiene el derecho de votar en las elecciones federales?",
    "options": [
      "Ciudadanos canadienses mayores de 18 años",
      "Residentes permanentes",
      "Visitantes con visa",
      "Residentes temporales"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué lema aparece en el escudo de Canadá?",
    "options": [
      "De un mar a otro",
      "Paz, orden y buen gobierno",
      "Que Dios nos proteja",
      "Por una patria fuerte"
    ],
    "answer": 0
  },
  {
    "question": "¿Dónde se encuentra la Región de los Grandes Lagos y San Lorenzo?",
    "options": [
      "En Ontario y Quebec",
      "En Alberta",
      "En las Praderas",
      "En los Territorios del Norte"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué documento rige la estructura gubernamental de Canadá?",
    "options": [
      "La Carta Magna",
      "La Ley Constitucional de 1867",
      "El Código Napoleónico",
      "La Declaración de Independencia"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué provincia es famosa por su producción de jarabe de arce?",
    "options": [
      "Nuevo Brunswick",
      "Manitoba",
      "Quebec",
      "Columbia Británica"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la capital de Columbia Británica?",
    "options": [
      "Vancouver",
      "Victoria",
      "Kelowna",
      "Prince George"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué celebración marca el fin del invierno y el inicio de la primavera?",
    "options": [
      "Día del Trabajo",
      "Festival de Invierno",
      "Cabalgata de Calgary",
      "Carnaval de Quebec"
    ],
    "answer": 3
  },
  {
    "question": "¿Quién es responsable de la elección del Primer Ministro?",
    "options": [
      "El Senado",
      "La población directamente",
      "El partido con más escaños en la Cámara de los Comunes",
      "La Corte Suprema"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es el símbolo animal oficial de Canadá?",
    "options": [
      "Castor",
      "Alce",
      "Ganso",
      "Caribú"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué suceso histórico se recuerda el Día de la Recordación?",
    "options": [
      "El nacimiento de Canadá",
      "Las vidas perdidas en guerras",
      "La llegada de los colonos",
      "La creación de la bandera"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es el principal grupo de inmigrantes en Canadá en el siglo XIX?",
    "options": [
      "Chinos",
      "Italianos",
      "Ucranianos",
      "Franceses"
    ],
    "answer": 0
  },
  {
    "question": "¿En qué región se concentra la mayor parte de la industria manufacturera?",
    "options": [
      "Los Territorios del Norte",
      "Las Praderas",
      "El Corredor Quebec-Windsor",
      "Columbia Británica"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la ciudad más grande de Canadá?",
    "options": [
      "Vancouver",
      "Toronto",
      "Montreal",
      "Calgary"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué territorio se creó en 1999?",
    "options": [
      "Yukón",
      "Nunavut",
      "Territorios del Noroeste",
      "Terranova"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué primer ministro es conocido por la bandera maple leaf?",
    "options": [
      "Lester B. Pearson",
      "John Diefenbaker",
      "Brian Mulroney",
      "Stephen Harper"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuál es la capital del territorio de Nunavut?",
    "options": [
      "Yellowknife",
      "Iqaluit",
      "Whitehorse",
      "Rankin Inlet"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué nombre recibe la fiesta que celebra la cosecha en otoño?",
    "options": [
      "Día de Canadá",
      "Acción de Gracias",
      "Día del Trabajo",
      "Halloween"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué provincia es conocida como el 'bluenose'?",
    "options": [
      "Nueva Escocia",
      "Ontario",
      "Alberta",
      "Saskatchewan"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuál es la Corte más alta del país?",
    "options": [
      "La Corte Suprema de Canadá",
      "El Tribunal Superior",
      "La Corte Federal",
      "La Corte de Apelaciones"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué provincia es la principal productora de trigo?",
    "options": [
      "Alberta",
      "Saskatchewan",
      "Ontario",
      "Columbia Británica"
    ],
    "answer": 1
  },
  {
    "question": "¿Cómo se llama el parlamento provincial de Quebec?",
    "options": [
      "Asamblea Nacional",
      "Legislatura de Quebec",
      "Cámara de los Comunes",
      "Parlamento Provincial"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué grupo ayudó a construir el ferrocarril en Columbia Británica?",
    "options": [
      "Ucranianos",
      "Chinos",
      "Griegos",
      "Italianos"
    ],
    "answer": 1
  },
  {
    "question": "¿Quién tiene la responsabilidad de recolectar impuestos provinciales?",
    "options": [
      "El gobierno federal",
      "Las municipalidades",
      "Las provincias",
      "Las Naciones Unidas"
    ],
    "answer": 2
  },
  {
    "question": "¿Qué evento mundial de 1976 se celebró en Montreal?",
    "options": [
      "Expo 67",
      "Los Juegos Olímpicos de verano",
      "El G20",
      "La Feria Mundial"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué persona es reconocida como héroe de los derechos civiles en Canadá por su carrera contra el racismo?",
    "options": [
      "Viola Desmond",
      "Emily Carr",
      "Lucy Maud Montgomery",
      "Laura Secord"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué puerto canadiense es uno de los más grandes de América del Norte?",
    "options": [
      "Halifax",
      "Vancouver",
      "Montreal",
      "Victoria"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es la provincia con mayor producción minera?",
    "options": [
      "Ontario",
      "Quebec",
      "Columbia Británica",
      "Alberta"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué árbol es símbolo nacional de Canadá?",
    "options": [
      "Pino",
      "Abedul",
      "Arce",
      "Roble"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuáles son las tres partes del Parlamento canadiense?",
    "options": [
      "El Rey, el Senado y la Cámara de los Comunes",
      "El Primer Ministro, el Gobernador General y la Corte Suprema",
      "El Senado, la Cámara de los Comunes y la Policía",
      "La Asamblea Nacional, el Senado y la Corte"
    ],
    "answer": 0
  },
  {
    "question": "¿Quién fue el primer Primer Ministro de Canadá?",
    "options": [
      "Sir John A. Macdonald",
      "Wilfrid Laurier",
      "Lester B. Pearson",
      "Pierre Trudeau"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué provincia es oficialmente bilingüe?",
    "options": [
      "Ontario",
      "Nueva Brunswick",
      "Manitoba",
      "Columbia Británica"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es la capital de Canadá?",
    "options": [
      "Montreal",
      "Toronto",
      "Ottawa",
      "Calgary"
    ],
    "answer": 2
  },
  {
    "question": "¿Cómo se llama la policía nacional de Canadá?",
    "options": [
      "Policía de Ontario",
      "Servicio de Policía de Montreal",
      "Gendarmería Real de Canadá",
      "Policía Montada Provincial"
    ],
    "answer": 2
  },
  {
    "question": "¿Qué océano bordea Canadá al oeste?",
    "options": [
      "Atlántico",
      "Pacífico",
      "Ártico",
      "Índico"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es el himno nacional de Canadá?",
    "options": [
      "Dios salve a la Reina",
      "La Marsellesa",
      "O Canada",
      "Oh Susana"
    ],
    "answer": 2
  },
  {
    "question": "¿En qué fecha se celebra el Día de Canadá?",
    "options": [
      "1 de julio",
      "1 de enero",
      "24 de junio",
      "11 de noviembre"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué guerra consolidó la independencia de Canadá de Estados Unidos?",
    "options": [
      "La Guerra Civil",
      "La Guerra de 1812",
      "La Guerra de Independencia",
      "La Primera Guerra Mundial"
    ],
    "answer": 1
  },
  {
    "question": "¿En qué provincia se encuentra la Bahía de Fundy?",
    "options": [
      "Nueva Escocia",
      "Nueva Brunswick",
      "Quebec",
      "Ontario"
    ],
    "answer": 1
  },
  {
    "question": "¿Quién es la jefa de Estado de Canadá?",
    "options": [
      "El Primer Ministro",
      "El Gobernador General",
      "El Rey o Reina",
      "El Presidente"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la ciudad capital de Saskatchewan?",
    "options": [
      "Regina",
      "Saskatoon",
      "Winnipeg",
      "Edmonton"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuáles son los tres pueblos indígenas principales de Canadá?",
    "options": [
      "Métis, Inuit y Primeras Naciones",
      "Huron, Cree y Sioux",
      "Ojibwa, Iroquois y Dakota",
      "Aborígenes, Innu y Micmac"
    ],
    "answer": 0
  },
  {
    "question": "¿Cómo se llama la constitución escrita de Canadá?",
    "options": [
      "Ley Constitucional de 1867",
      "Ley de Manitoba",
      "Ley de Provincias Unidas",
      "Carta de los Derechos"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué importante obra de ingeniería une el este con el oeste de Canadá?",
    "options": [
      "Canal de Suez",
      "Canal de Panamá",
      "Ferrocarril Transcontinental",
      "Metro de Toronto"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la capital de Quebec?",
    "options": [
      "Montreal",
      "Quebec",
      "Trois-Rivières",
      "Sherbrooke"
    ],
    "answer": 1
  },
  {
    "question": "¿Cómo se llama la provincia más pequeña de Canadá?",
    "options": [
      "Isla del Príncipe Eduardo",
      "Nueva Escocia",
      "Nuevo Brunswick",
      "Manitoba"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué derecho garantiza la libertad de expresión en Canadá?",
    "options": [
      "Acta de Canadá",
      "Carta Canadiense de Derechos y Libertades",
      "Código Civil",
      "Ley de Seguridad"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué feriado se celebra el 11 de noviembre para honrar a los veteranos?",
    "options": [
      "Día de Canadá",
      "Acción de Gracias",
      "Día del Recuerdo",
      "Día del Trabajo"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la moneda oficial de Canadá?",
    "options": [
      "Euro",
      "Dólar canadiense",
      "Libra esterlina",
      "Peso"
    ],
    "answer": 1
  },
  {
    "question": "¿En qué año las mujeres obtuvieron el derecho total de voto en las elecciones federales?",
    "options": [
      "1918",
      "1921",
      "1940",
      "1898"
    ],
    "answer": 0
  },
  {
    "question": "¿Cómo se llaman las praderas canadienses que se extienden por tres provincias?",
    "options": [
      "Las Llanuras del Norte",
      "Las Grandes Praderas",
      "Los Grandes Lagos",
      "Las Tierras Bajas de St. Lawrence"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué provincia produce la mayor parte del petróleo de Canadá?",
    "options": [
      "Ontario",
      "Alberta",
      "Saskatchewan",
      "Terranova y Labrador"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es la capital del territorio de Yukón?",
    "options": [
      "Yellowknife",
      "Iqaluit",
      "Whitehorse",
      "Dawson"
    ],
    "answer": 2
  },
  {
    "question": "¿Quién dirige el gobierno municipal en la mayoría de las ciudades?",
    "options": [
      "El Primer Ministro",
      "El Alcalde",
      "El Gobernador General",
      "El Diputado"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué evento histórico se conoce como la Gran Depresión?",
    "options": [
      "La caída de la bolsa en 1929",
      "La crisis del petróleo",
      "La Segunda Guerra Mundial",
      "La Crisis del Canal de Suez"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuál es la provincia conocida por sus grandes reservas de madera y pesca?",
    "options": [
      "Quebec",
      "Terranova y Labrador",
      "Columbia Británica",
      "Nueva Escocia"
    ],
    "answer": 2
  },
  {
    "question": "¿Quién tiene el derecho de votar en las elecciones federales?",
    "options": [
      "Ciudadanos canadienses mayores de 18 años",
      "Residentes permanentes",
      "Visitantes con visa",
      "Residentes temporales"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué lema aparece en el escudo de Canadá?",
    "options": [
      "De un mar a otro",
      "Paz, orden y buen gobierno",
      "Que Dios nos proteja",
      "Por una patria fuerte"
    ],
    "answer": 0
  },
  {
    "question": "¿Dónde se encuentra la Región de los Grandes Lagos y San Lorenzo?",
    "options": [
      "En Ontario y Quebec",
      "En Alberta",
      "En las Praderas",
      "En los Territorios del Norte"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué documento rige la estructura gubernamental de Canadá?",
    "options": [
      "La Carta Magna",
      "La Ley Constitucional de 1867",
      "El Código Napoleónico",
      "La Declaración de Independencia"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué provincia es famosa por su producción de jarabe de arce?",
    "options": [
      "Nuevo Brunswick",
      "Manitoba",
      "Quebec",
      "Columbia Británica"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la capital de Columbia Británica?",
    "options": [
      "Vancouver",
      "Victoria",
      "Kelowna",
      "Prince George"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué celebración marca el fin del invierno y el inicio de la primavera?",
    "options": [
      "Día del Trabajo",
      "Festival de Invierno",
      "Cabalgata de Calgary",
      "Carnaval de Quebec"
    ],
    "answer": 3
  },
  {
    "question": "¿Quién es responsable de la elección del Primer Ministro?",
    "options": [
      "El Senado",
      "La población directamente",
      "El partido con más escaños en la Cámara de los Comunes",
      "La Corte Suprema"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es el símbolo animal oficial de Canadá?",
    "options": [
      "Castor",
      "Alce",
      "Ganso",
      "Caribú"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué suceso histórico se recuerda el Día de la Recordación?",
    "options": [
      "El nacimiento de Canadá",
      "Las vidas perdidas en guerras",
      "La llegada de los colonos",
      "La creación de la bandera"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es el principal grupo de inmigrantes en Canadá en el siglo XIX?",
    "options": [
      "Chinos",
      "Italianos",
      "Ucranianos",
      "Franceses"
    ],
    "answer": 0
  },
  {
    "question": "¿En qué región se concentra la mayor parte de la industria manufacturera?",
    "options": [
      "Los Territorios del Norte",
      "Las Praderas",
      "El Corredor Quebec-Windsor",
      "Columbia Británica"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la ciudad más grande de Canadá?",
    "options": [
      "Vancouver",
      "Toronto",
      "Montreal",
      "Calgary"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué territorio se creó en 1999?",
    "options": [
      "Yukón",
      "Nunavut",
      "Territorios del Noroeste",
      "Terranova"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué primer ministro es conocido por la bandera maple leaf?",
    "options": [
      "Lester B. Pearson",
      "John Diefenbaker",
      "Brian Mulroney",
      "Stephen Harper"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuál es la capital del territorio de Nunavut?",
    "options": [
      "Yellowknife",
      "Iqaluit",
      "Whitehorse",
      "Rankin Inlet"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué nombre recibe la fiesta que celebra la cosecha en otoño?",
    "options": [
      "Día de Canadá",
      "Acción de Gracias",
      "Día del Trabajo",
      "Halloween"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué provincia es conocida como el 'bluenose'?",
    "options": [
      "Nueva Escocia",
      "Ontario",
      "Alberta",
      "Saskatchewan"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuál es la Corte más alta del país?",
    "options": [
      "La Corte Suprema de Canadá",
      "El Tribunal Superior",
      "La Corte Federal",
      "La Corte de Apelaciones"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué provincia es la principal productora de trigo?",
    "options": [
      "Alberta",
      "Saskatchewan",
      "Ontario",
      "Columbia Británica"
    ],
    "answer": 1
  },
  {
    "question": "¿Cómo se llama el parlamento provincial de Quebec?",
    "options": [
      "Asamblea Nacional",
      "Legislatura de Quebec",
      "Cámara de los Comunes",
      "Parlamento Provincial"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué grupo ayudó a construir el ferrocarril en Columbia Británica?",
    "options": [
      "Ucranianos",
      "Chinos",
      "Griegos",
      "Italianos"
    ],
    "answer": 1
  },
  {
    "question": "¿Quién tiene la responsabilidad de recolectar impuestos provinciales?",
    "options": [
      "El gobierno federal",
      "Las municipalidades",
      "Las provincias",
      "Las Naciones Unidas"
    ],
    "answer": 2
  },
  {
    "question": "¿Qué evento mundial de 1976 se celebró en Montreal?",
    "options": [
      "Expo 67",
      "Los Juegos Olímpicos de verano",
      "El G20",
      "La Feria Mundial"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué persona es reconocida como héroe de los derechos civiles en Canadá por su carrera contra el racismo?",
    "options": [
      "Viola Desmond",
      "Emily Carr",
      "Lucy Maud Montgomery",
      "Laura Secord"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué puerto canadiense es uno de los más grandes de América del Norte?",
    "options": [
      "Halifax",
      "Vancouver",
      "Montreal",
      "Victoria"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es la provincia con mayor producción minera?",
    "options": [
      "Ontario",
      "Quebec",
      "Columbia Británica",
      "Alberta"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué árbol es símbolo nacional de Canadá?",
    "options": [
      "Pino",
      "Abedul",
      "Arce",
      "Roble"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuáles son las tres partes del Parlamento canadiense?",
    "options": [
      "El Rey, el Senado y la Cámara de los Comunes",
      "El Primer Ministro, el Gobernador General y la Corte Suprema",
      "El Senado, la Cámara de los Comunes y la Policía",
      "La Asamblea Nacional, el Senado y la Corte"
    ],
    "answer": 0
  },
  {
    "question": "¿Quién fue el primer Primer Ministro de Canadá?",
    "options": [
      "Sir John A. Macdonald",
      "Wilfrid Laurier",
      "Lester B. Pearson",
      "Pierre Trudeau"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué provincia es oficialmente bilingüe?",
    "options": [
      "Ontario",
      "Nueva Brunswick",
      "Manitoba",
      "Columbia Británica"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es la capital de Canadá?",
    "options": [
      "Montreal",
      "Toronto",
      "Ottawa",
      "Calgary"
    ],
    "answer": 2
  },
  {
    "question": "¿Cómo se llama la policía nacional de Canadá?",
    "options": [
      "Policía de Ontario",
      "Servicio de Policía de Montreal",
      "Gendarmería Real de Canadá",
      "Policía Montada Provincial"
    ],
    "answer": 2
  },
  {
    "question": "¿Qué océano bordea Canadá al oeste?",
    "options": [
      "Atlántico",
      "Pacífico",
      "Ártico",
      "Índico"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es el himno nacional de Canadá?",
    "options": [
      "Dios salve a la Reina",
      "La Marsellesa",
      "O Canada",
      "Oh Susana"
    ],
    "answer": 2
  },
  {
    "question": "¿En qué fecha se celebra el Día de Canadá?",
    "options": [
      "1 de julio",
      "1 de enero",
      "24 de junio",
      "11 de noviembre"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué guerra consolidó la independencia de Canadá de Estados Unidos?",
    "options": [
      "La Guerra Civil",
      "La Guerra de 1812",
      "La Guerra de Independencia",
      "La Primera Guerra Mundial"
    ],
    "answer": 1
  },
  {
    "question": "¿En qué provincia se encuentra la Bahía de Fundy?",
    "options": [
      "Nueva Escocia",
      "Nueva Brunswick",
      "Quebec",
      "Ontario"
    ],
    "answer": 1
  },
  {
    "question": "¿Quién es la jefa de Estado de Canadá?",
    "options": [
      "El Primer Ministro",
      "El Gobernador General",
      "El Rey o Reina",
      "El Presidente"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la ciudad capital de Saskatchewan?",
    "options": [
      "Regina",
      "Saskatoon",
      "Winnipeg",
      "Edmonton"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuáles son los tres pueblos indígenas principales de Canadá?",
    "options": [
      "Métis, Inuit y Primeras Naciones",
      "Huron, Cree y Sioux",
      "Ojibwa, Iroquois y Dakota",
      "Aborígenes, Innu y Micmac"
    ],
    "answer": 0
  },
  {
    "question": "¿Cómo se llama la constitución escrita de Canadá?",
    "options": [
      "Ley Constitucional de 1867",
      "Ley de Manitoba",
      "Ley de Provincias Unidas",
      "Carta de los Derechos"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué importante obra de ingeniería une el este con el oeste de Canadá?",
    "options": [
      "Canal de Suez",
      "Canal de Panamá",
      "Ferrocarril Transcontinental",
      "Metro de Toronto"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la capital de Quebec?",
    "options": [
      "Montreal",
      "Quebec",
      "Trois-Rivières",
      "Sherbrooke"
    ],
    "answer": 1
  },
  {
    "question": "¿Cómo se llama la provincia más pequeña de Canadá?",
    "options": [
      "Isla del Príncipe Eduardo",
      "Nueva Escocia",
      "Nuevo Brunswick",
      "Manitoba"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué derecho garantiza la libertad de expresión en Canadá?",
    "options": [
      "Acta de Canadá",
      "Carta Canadiense de Derechos y Libertades",
      "Código Civil",
      "Ley de Seguridad"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué feriado se celebra el 11 de noviembre para honrar a los veteranos?",
    "options": [
      "Día de Canadá",
      "Acción de Gracias",
      "Día del Recuerdo",
      "Día del Trabajo"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la moneda oficial de Canadá?",
    "options": [
      "Euro",
      "Dólar canadiense",
      "Libra esterlina",
      "Peso"
    ],
    "answer": 1
  },
  {
    "question": "¿En qué año las mujeres obtuvieron el derecho total de voto en las elecciones federales?",
    "options": [
      "1918",
      "1921",
      "1940",
      "1898"
    ],
    "answer": 0
  },
  {
    "question": "¿Cómo se llaman las praderas canadienses que se extienden por tres provincias?",
    "options": [
      "Las Llanuras del Norte",
      "Las Grandes Praderas",
      "Los Grandes Lagos",
      "Las Tierras Bajas de St. Lawrence"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué provincia produce la mayor parte del petróleo de Canadá?",
    "options": [
      "Ontario",
      "Alberta",
      "Saskatchewan",
      "Terranova y Labrador"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es la capital del territorio de Yukón?",
    "options": [
      "Yellowknife",
      "Iqaluit",
      "Whitehorse",
      "Dawson"
    ],
    "answer": 2
  },
  {
    "question": "¿Quién dirige el gobierno municipal en la mayoría de las ciudades?",
    "options": [
      "El Primer Ministro",
      "El Alcalde",
      "El Gobernador General",
      "El Diputado"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué evento histórico se conoce como la Gran Depresión?",
    "options": [
      "La caída de la bolsa en 1929",
      "La crisis del petróleo",
      "La Segunda Guerra Mundial",
      "La Crisis del Canal de Suez"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuál es la provincia conocida por sus grandes reservas de madera y pesca?",
    "options": [
      "Quebec",
      "Terranova y Labrador",
      "Columbia Británica",
      "Nueva Escocia"
    ],
    "answer": 2
  },
  {
    "question": "¿Quién tiene el derecho de votar en las elecciones federales?",
    "options": [
      "Ciudadanos canadienses mayores de 18 años",
      "Residentes permanentes",
      "Visitantes con visa",
      "Residentes temporales"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué lema aparece en el escudo de Canadá?",
    "options": [
      "De un mar a otro",
      "Paz, orden y buen gobierno",
      "Que Dios nos proteja",
      "Por una patria fuerte"
    ],
    "answer": 0
  },
  {
    "question": "¿Dónde se encuentra la Región de los Grandes Lagos y San Lorenzo?",
    "options": [
      "En Ontario y Quebec",
      "En Alberta",
      "En las Praderas",
      "En los Territorios del Norte"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué documento rige la estructura gubernamental de Canadá?",
    "options": [
      "La Carta Magna",
      "La Ley Constitucional de 1867",
      "El Código Napoleónico",
      "La Declaración de Independencia"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué provincia es famosa por su producción de jarabe de arce?",
    "options": [
      "Nuevo Brunswick",
      "Manitoba",
      "Quebec",
      "Columbia Británica"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la capital de Columbia Británica?",
    "options": [
      "Vancouver",
      "Victoria",
      "Kelowna",
      "Prince George"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué celebración marca el fin del invierno y el inicio de la primavera?",
    "options": [
      "Día del Trabajo",
      "Festival de Invierno",
      "Cabalgata de Calgary",
      "Carnaval de Quebec"
    ],
    "answer": 3
  },
  {
    "question": "¿Quién es responsable de la elección del Primer Ministro?",
    "options": [
      "El Senado",
      "La población directamente",
      "El partido con más escaños en la Cámara de los Comunes",
      "La Corte Suprema"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es el símbolo animal oficial de Canadá?",
    "options": [
      "Castor",
      "Alce",
      "Ganso",
      "Caribú"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué suceso histórico se recuerda el Día de la Recordación?",
    "options": [
      "El nacimiento de Canadá",
      "Las vidas perdidas en guerras",
      "La llegada de los colonos",
      "La creación de la bandera"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es el principal grupo de inmigrantes en Canadá en el siglo XIX?",
    "options": [
      "Chinos",
      "Italianos",
      "Ucranianos",
      "Franceses"
    ],
    "answer": 0
  },
  {
    "question": "¿En qué región se concentra la mayor parte de la industria manufacturera?",
    "options": [
      "Los Territorios del Norte",
      "Las Praderas",
      "El Corredor Quebec-Windsor",
      "Columbia Británica"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la ciudad más grande de Canadá?",
    "options": [
      "Vancouver",
      "Toronto",
      "Montreal",
      "Calgary"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué territorio se creó en 1999?",
    "options": [
      "Yukón",
      "Nunavut",
      "Territorios del Noroeste",
      "Terranova"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué primer ministro es conocido por la bandera maple leaf?",
    "options": [
      "Lester B. Pearson",
      "John Diefenbaker",
      "Brian Mulroney",
      "Stephen Harper"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuál es la capital del territorio de Nunavut?",
    "options": [
      "Yellowknife",
      "Iqaluit",
      "Whitehorse",
      "Rankin Inlet"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué nombre recibe la fiesta que celebra la cosecha en otoño?",
    "options": [
      "Día de Canadá",
      "Acción de Gracias",
      "Día del Trabajo",
      "Halloween"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué provincia es conocida como el 'bluenose'?",
    "options": [
      "Nueva Escocia",
      "Ontario",
      "Alberta",
      "Saskatchewan"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuál es la Corte más alta del país?",
    "options": [
      "La Corte Suprema de Canadá",
      "El Tribunal Superior",
      "La Corte Federal",
      "La Corte de Apelaciones"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué provincia es la principal productora de trigo?",
    "options": [
      "Alberta",
      "Saskatchewan",
      "Ontario",
      "Columbia Británica"
    ],
    "answer": 1
  },
  {
    "question": "¿Cómo se llama el parlamento provincial de Quebec?",
    "options": [
      "Asamblea Nacional",
      "Legislatura de Quebec",
      "Cámara de los Comunes",
      "Parlamento Provincial"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué grupo ayudó a construir el ferrocarril en Columbia Británica?",
    "options": [
      "Ucranianos",
      "Chinos",
      "Griegos",
      "Italianos"
    ],
    "answer": 1
  },
  {
    "question": "¿Quién tiene la responsabilidad de recolectar impuestos provinciales?",
    "options": [
      "El gobierno federal",
      "Las municipalidades",
      "Las provincias",
      "Las Naciones Unidas"
    ],
    "answer": 2
  },
  {
    "question": "¿Qué evento mundial de 1976 se celebró en Montreal?",
    "options": [
      "Expo 67",
      "Los Juegos Olímpicos de verano",
      "El G20",
      "La Feria Mundial"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué persona es reconocida como héroe de los derechos civiles en Canadá por su carrera contra el racismo?",
    "options": [
      "Viola Desmond",
      "Emily Carr",
      "Lucy Maud Montgomery",
      "Laura Secord"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué puerto canadiense es uno de los más grandes de América del Norte?",
    "options": [
      "Halifax",
      "Vancouver",
      "Montreal",
      "Victoria"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es la provincia con mayor producción minera?",
    "options": [
      "Ontario",
      "Quebec",
      "Columbia Británica",
      "Alberta"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué árbol es símbolo nacional de Canadá?",
    "options": [
      "Pino",
      "Abedul",
      "Arce",
      "Roble"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuáles son las tres partes del Parlamento canadiense?",
    "options": [
      "El Rey, el Senado y la Cámara de los Comunes",
      "El Primer Ministro, el Gobernador General y la Corte Suprema",
      "El Senado, la Cámara de los Comunes y la Policía",
      "La Asamblea Nacional, el Senado y la Corte"
    ],
    "answer": 0
  },
  {
    "question": "¿Quién fue el primer Primer Ministro de Canadá?",
    "options": [
      "Sir John A. Macdonald",
      "Wilfrid Laurier",
      "Lester B. Pearson",
      "Pierre Trudeau"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué provincia es oficialmente bilingüe?",
    "options": [
      "Ontario",
      "Nueva Brunswick",
      "Manitoba",
      "Columbia Británica"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es la capital de Canadá?",
    "options": [
      "Montreal",
      "Toronto",
      "Ottawa",
      "Calgary"
    ],
    "answer": 2
  },
  {
    "question": "¿Cómo se llama la policía nacional de Canadá?",
    "options": [
      "Policía de Ontario",
      "Servicio de Policía de Montreal",
      "Gendarmería Real de Canadá",
      "Policía Montada Provincial"
    ],
    "answer": 2
  },
  {
    "question": "¿Qué océano bordea Canadá al oeste?",
    "options": [
      "Atlántico",
      "Pacífico",
      "Ártico",
      "Índico"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es el himno nacional de Canadá?",
    "options": [
      "Dios salve a la Reina",
      "La Marsellesa",
      "O Canada",
      "Oh Susana"
    ],
    "answer": 2
  },
  {
    "question": "¿En qué fecha se celebra el Día de Canadá?",
    "options": [
      "1 de julio",
      "1 de enero",
      "24 de junio",
      "11 de noviembre"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué guerra consolidó la independencia de Canadá de Estados Unidos?",
    "options": [
      "La Guerra Civil",
      "La Guerra de 1812",
      "La Guerra de Independencia",
      "La Primera Guerra Mundial"
    ],
    "answer": 1
  },
  {
    "question": "¿En qué provincia se encuentra la Bahía de Fundy?",
    "options": [
      "Nueva Escocia",
      "Nueva Brunswick",
      "Quebec",
      "Ontario"
    ],
    "answer": 1
  },
  {
    "question": "¿Quién es la jefa de Estado de Canadá?",
    "options": [
      "El Primer Ministro",
      "El Gobernador General",
      "El Rey o Reina",
      "El Presidente"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la ciudad capital de Saskatchewan?",
    "options": [
      "Regina",
      "Saskatoon",
      "Winnipeg",
      "Edmonton"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuáles son los tres pueblos indígenas principales de Canadá?",
    "options": [
      "Métis, Inuit y Primeras Naciones",
      "Huron, Cree y Sioux",
      "Ojibwa, Iroquois y Dakota",
      "Aborígenes, Innu y Micmac"
    ],
    "answer": 0
  },
  {
    "question": "¿Cómo se llama la constitución escrita de Canadá?",
    "options": [
      "Ley Constitucional de 1867",
      "Ley de Manitoba",
      "Ley de Provincias Unidas",
      "Carta de los Derechos"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué importante obra de ingeniería une el este con el oeste de Canadá?",
    "options": [
      "Canal de Suez",
      "Canal de Panamá",
      "Ferrocarril Transcontinental",
      "Metro de Toronto"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la capital de Quebec?",
    "options": [
      "Montreal",
      "Quebec",
      "Trois-Rivières",
      "Sherbrooke"
    ],
    "answer": 1
  },
  {
    "question": "¿Cómo se llama la provincia más pequeña de Canadá?",
    "options": [
      "Isla del Príncipe Eduardo",
      "Nueva Escocia",
      "Nuevo Brunswick",
      "Manitoba"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué derecho garantiza la libertad de expresión en Canadá?",
    "options": [
      "Acta de Canadá",
      "Carta Canadiense de Derechos y Libertades",
      "Código Civil",
      "Ley de Seguridad"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué feriado se celebra el 11 de noviembre para honrar a los veteranos?",
    "options": [
      "Día de Canadá",
      "Acción de Gracias",
      "Día del Recuerdo",
      "Día del Trabajo"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la moneda oficial de Canadá?",
    "options": [
      "Euro",
      "Dólar canadiense",
      "Libra esterlina",
      "Peso"
    ],
    "answer": 1
  },
  {
    "question": "¿En qué año las mujeres obtuvieron el derecho total de voto en las elecciones federales?",
    "options": [
      "1918",
      "1921",
      "1940",
      "1898"
    ],
    "answer": 0
  },
  {
    "question": "¿Cómo se llaman las praderas canadienses que se extienden por tres provincias?",
    "options": [
      "Las Llanuras del Norte",
      "Las Grandes Praderas",
      "Los Grandes Lagos",
      "Las Tierras Bajas de St. Lawrence"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué provincia produce la mayor parte del petróleo de Canadá?",
    "options": [
      "Ontario",
      "Alberta",
      "Saskatchewan",
      "Terranova y Labrador"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es la capital del territorio de Yukón?",
    "options": [
      "Yellowknife",
      "Iqaluit",
      "Whitehorse",
      "Dawson"
    ],
    "answer": 2
  },
  {
    "question": "¿Quién dirige el gobierno municipal en la mayoría de las ciudades?",
    "options": [
      "El Primer Ministro",
      "El Alcalde",
      "El Gobernador General",
      "El Diputado"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué evento histórico se conoce como la Gran Depresión?",
    "options": [
      "La caída de la bolsa en 1929",
      "La crisis del petróleo",
      "La Segunda Guerra Mundial",
      "La Crisis del Canal de Suez"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuál es la provincia conocida por sus grandes reservas de madera y pesca?",
    "options": [
      "Quebec",
      "Terranova y Labrador",
      "Columbia Británica",
      "Nueva Escocia"
    ],
    "answer": 2
  },
  {
    "question": "¿Quién tiene el derecho de votar en las elecciones federales?",
    "options": [
      "Ciudadanos canadienses mayores de 18 años",
      "Residentes permanentes",
      "Visitantes con visa",
      "Residentes temporales"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué lema aparece en el escudo de Canadá?",
    "options": [
      "De un mar a otro",
      "Paz, orden y buen gobierno",
      "Que Dios nos proteja",
      "Por una patria fuerte"
    ],
    "answer": 0
  },
  {
    "question": "¿Dónde se encuentra la Región de los Grandes Lagos y San Lorenzo?",
    "options": [
      "En Ontario y Quebec",
      "En Alberta",
      "En las Praderas",
      "En los Territorios del Norte"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué documento rige la estructura gubernamental de Canadá?",
    "options": [
      "La Carta Magna",
      "La Ley Constitucional de 1867",
      "El Código Napoleónico",
      "La Declaración de Independencia"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué provincia es famosa por su producción de jarabe de arce?",
    "options": [
      "Nuevo Brunswick",
      "Manitoba",
      "Quebec",
      "Columbia Británica"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la capital de Columbia Británica?",
    "options": [
      "Vancouver",
      "Victoria",
      "Kelowna",
      "Prince George"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué celebración marca el fin del invierno y el inicio de la primavera?",
    "options": [
      "Día del Trabajo",
      "Festival de Invierno",
      "Cabalgata de Calgary",
      "Carnaval de Quebec"
    ],
    "answer": 3
  },
  {
    "question": "¿Quién es responsable de la elección del Primer Ministro?",
    "options": [
      "El Senado",
      "La población directamente",
      "El partido con más escaños en la Cámara de los Comunes",
      "La Corte Suprema"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es el símbolo animal oficial de Canadá?",
    "options": [
      "Castor",
      "Alce",
      "Ganso",
      "Caribú"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué suceso histórico se recuerda el Día de la Recordación?",
    "options": [
      "El nacimiento de Canadá",
      "Las vidas perdidas en guerras",
      "La llegada de los colonos",
      "La creación de la bandera"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es el principal grupo de inmigrantes en Canadá en el siglo XIX?",
    "options": [
      "Chinos",
      "Italianos",
      "Ucranianos",
      "Franceses"
    ],
    "answer": 0
  },
  {
    "question": "¿En qué región se concentra la mayor parte de la industria manufacturera?",
    "options": [
      "Los Territorios del Norte",
      "Las Praderas",
      "El Corredor Quebec-Windsor",
      "Columbia Británica"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la ciudad más grande de Canadá?",
    "options": [
      "Vancouver",
      "Toronto",
      "Montreal",
      "Calgary"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué territorio se creó en 1999?",
    "options": [
      "Yukón",
      "Nunavut",
      "Territorios del Noroeste",
      "Terranova"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué primer ministro es conocido por la bandera maple leaf?",
    "options": [
      "Lester B. Pearson",
      "John Diefenbaker",
      "Brian Mulroney",
      "Stephen Harper"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuál es la capital del territorio de Nunavut?",
    "options": [
      "Yellowknife",
      "Iqaluit",
      "Whitehorse",
      "Rankin Inlet"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué nombre recibe la fiesta que celebra la cosecha en otoño?",
    "options": [
      "Día de Canadá",
      "Acción de Gracias",
      "Día del Trabajo",
      "Halloween"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué provincia es conocida como el 'bluenose'?",
    "options": [
      "Nueva Escocia",
      "Ontario",
      "Alberta",
      "Saskatchewan"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuál es la Corte más alta del país?",
    "options": [
      "La Corte Suprema de Canadá",
      "El Tribunal Superior",
      "La Corte Federal",
      "La Corte de Apelaciones"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué provincia es la principal productora de trigo?",
    "options": [
      "Alberta",
      "Saskatchewan",
      "Ontario",
      "Columbia Británica"
    ],
    "answer": 1
  },
  {
    "question": "¿Cómo se llama el parlamento provincial de Quebec?",
    "options": [
      "Asamblea Nacional",
      "Legislatura de Quebec",
      "Cámara de los Comunes",
      "Parlamento Provincial"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué grupo ayudó a construir el ferrocarril en Columbia Británica?",
    "options": [
      "Ucranianos",
      "Chinos",
      "Griegos",
      "Italianos"
    ],
    "answer": 1
  },
  {
    "question": "¿Quién tiene la responsabilidad de recolectar impuestos provinciales?",
    "options": [
      "El gobierno federal",
      "Las municipalidades",
      "Las provincias",
      "Las Naciones Unidas"
    ],
    "answer": 2
  },
  {
    "question": "¿Qué evento mundial de 1976 se celebró en Montreal?",
    "options": [
      "Expo 67",
      "Los Juegos Olímpicos de verano",
      "El G20",
      "La Feria Mundial"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué persona es reconocida como héroe de los derechos civiles en Canadá por su carrera contra el racismo?",
    "options": [
      "Viola Desmond",
      "Emily Carr",
      "Lucy Maud Montgomery",
      "Laura Secord"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué puerto canadiense es uno de los más grandes de América del Norte?",
    "options": [
      "Halifax",
      "Vancouver",
      "Montreal",
      "Victoria"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es la provincia con mayor producción minera?",
    "options": [
      "Ontario",
      "Quebec",
      "Columbia Británica",
      "Alberta"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué árbol es símbolo nacional de Canadá?",
    "options": [
      "Pino",
      "Abedul",
      "Arce",
      "Roble"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuáles son las tres partes del Parlamento canadiense?",
    "options": [
      "El Rey, el Senado y la Cámara de los Comunes",
      "El Primer Ministro, el Gobernador General y la Corte Suprema",
      "El Senado, la Cámara de los Comunes y la Policía",
      "La Asamblea Nacional, el Senado y la Corte"
    ],
    "answer": 0
  },
  {
    "question": "¿Quién fue el primer Primer Ministro de Canadá?",
    "options": [
      "Sir John A. Macdonald",
      "Wilfrid Laurier",
      "Lester B. Pearson",
      "Pierre Trudeau"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué provincia es oficialmente bilingüe?",
    "options": [
      "Ontario",
      "Nueva Brunswick",
      "Manitoba",
      "Columbia Británica"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es la capital de Canadá?",
    "options": [
      "Montreal",
      "Toronto",
      "Ottawa",
      "Calgary"
    ],
    "answer": 2
  },
  {
    "question": "¿Cómo se llama la policía nacional de Canadá?",
    "options": [
      "Policía de Ontario",
      "Servicio de Policía de Montreal",
      "Gendarmería Real de Canadá",
      "Policía Montada Provincial"
    ],
    "answer": 2
  },
  {
    "question": "¿Qué océano bordea Canadá al oeste?",
    "options": [
      "Atlántico",
      "Pacífico",
      "Ártico",
      "Índico"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es el himno nacional de Canadá?",
    "options": [
      "Dios salve a la Reina",
      "La Marsellesa",
      "O Canada",
      "Oh Susana"
    ],
    "answer": 2
  },
  {
    "question": "¿En qué fecha se celebra el Día de Canadá?",
    "options": [
      "1 de julio",
      "1 de enero",
      "24 de junio",
      "11 de noviembre"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué guerra consolidó la independencia de Canadá de Estados Unidos?",
    "options": [
      "La Guerra Civil",
      "La Guerra de 1812",
      "La Guerra de Independencia",
      "La Primera Guerra Mundial"
    ],
    "answer": 1
  },
  {
    "question": "¿En qué provincia se encuentra la Bahía de Fundy?",
    "options": [
      "Nueva Escocia",
      "Nueva Brunswick",
      "Quebec",
      "Ontario"
    ],
    "answer": 1
  },
  {
    "question": "¿Quién es la jefa de Estado de Canadá?",
    "options": [
      "El Primer Ministro",
      "El Gobernador General",
      "El Rey o Reina",
      "El Presidente"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la ciudad capital de Saskatchewan?",
    "options": [
      "Regina",
      "Saskatoon",
      "Winnipeg",
      "Edmonton"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuáles son los tres pueblos indígenas principales de Canadá?",
    "options": [
      "Métis, Inuit y Primeras Naciones",
      "Huron, Cree y Sioux",
      "Ojibwa, Iroquois y Dakota",
      "Aborígenes, Innu y Micmac"
    ],
    "answer": 0
  },
  {
    "question": "¿Cómo se llama la constitución escrita de Canadá?",
    "options": [
      "Ley Constitucional de 1867",
      "Ley de Manitoba",
      "Ley de Provincias Unidas",
      "Carta de los Derechos"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué importante obra de ingeniería une el este con el oeste de Canadá?",
    "options": [
      "Canal de Suez",
      "Canal de Panamá",
      "Ferrocarril Transcontinental",
      "Metro de Toronto"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la capital de Quebec?",
    "options": [
      "Montreal",
      "Quebec",
      "Trois-Rivières",
      "Sherbrooke"
    ],
    "answer": 1
  },
  {
    "question": "¿Cómo se llama la provincia más pequeña de Canadá?",
    "options": [
      "Isla del Príncipe Eduardo",
      "Nueva Escocia",
      "Nuevo Brunswick",
      "Manitoba"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué derecho garantiza la libertad de expresión en Canadá?",
    "options": [
      "Acta de Canadá",
      "Carta Canadiense de Derechos y Libertades",
      "Código Civil",
      "Ley de Seguridad"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué feriado se celebra el 11 de noviembre para honrar a los veteranos?",
    "options": [
      "Día de Canadá",
      "Acción de Gracias",
      "Día del Recuerdo",
      "Día del Trabajo"
    ],
    "answer": 2
  },
  {
    "question": "¿Cuál es la moneda oficial de Canadá?",
    "options": [
      "Euro",
      "Dólar canadiense",
      "Libra esterlina",
      "Peso"
    ],
    "answer": 1
  },
  {
    "question": "¿En qué año las mujeres obtuvieron el derecho total de voto en las elecciones federales?",
    "options": [
      "1918",
      "1921",
      "1940",
      "1898"
    ],
    "answer": 0
  },
  {
    "question": "¿Cómo se llaman las praderas canadienses que se extienden por tres provincias?",
    "options": [
      "Las Llanuras del Norte",
      "Las Grandes Praderas",
      "Los Grandes Lagos",
      "Las Tierras Bajas de St. Lawrence"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué provincia produce la mayor parte del petróleo de Canadá?",
    "options": [
      "Ontario",
      "Alberta",
      "Saskatchewan",
      "Terranova y Labrador"
    ],
    "answer": 1
  },
  {
    "question": "¿Cuál es la capital del territorio de Yukón?",
    "options": [
      "Yellowknife",
      "Iqaluit",
      "Whitehorse",
      "Dawson"
    ],
    "answer": 2
  },
  {
    "question": "¿Quién dirige el gobierno municipal en la mayoría de las ciudades?",
    "options": [
      "El Primer Ministro",
      "El Alcalde",
      "El Gobernador General",
      "El Diputado"
    ],
    "answer": 1
  },
  {
    "question": "¿Qué evento histórico se conoce como la Gran Depresión?",
    "options": [
      "La caída de la bolsa en 1929",
      "La crisis del petróleo",
      "La Segunda Guerra Mundial",
      "La Crisis del Canal de Suez"
    ],
    "answer": 0
  },
  {
    "question": "¿Cuál es la provincia conocida por sus grandes reservas de madera y pesca?",
    "options": [
      "Quebec",
      "Terranova y Labrador",
      "Columbia Británica",
      "Nueva Escocia"
    ],
    "answer": 2
  },
  {
    "question": "¿Quién tiene el derecho de votar en las elecciones federales?",
    "options": [
      "Ciudadanos canadienses mayores de 18 años",
      "Residentes permanentes",
      "Visitantes con visa",
      "Residentes temporales"
    ],
    "answer": 0
  },
  {
    "question": "¿Qué lema aparece en el escudo de Canadá?",
    "options": [
      "De un mar a otro",
      "Paz, orden y buen gobierno",
      "Que Dios nos proteja",
      "Por una patria fuerte"
    ],
    "answer": 0
  },
  {
    "question": "¿Dónde se encuentra la Región de los Grandes Lagos y San Lorenzo?",
    "options": [
      "En Ontario y Quebec",
      "En Alberta",
      "En las Praderas",
      "En los Territorios del Norte"
    ],
    "answer": 0
  }
];
