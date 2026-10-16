const fi = (p: string) => `https://cdn-icons-png.flaticon.com/512/${p}.png`;

export const razones = [
  [fi('1141/1141082'),'Dos únicos grupos reducidos de alumnos para una formación exigente y personalizada.'],
  [fi('8632/8632741'),'El mejor equipo de profesores con amplia experiencia en formación de opositores y policías.'],
  [fi('3362/3362850'),'Te preparamos para TODAS las pruebas de la oposición incluyendo personalidad, psicotécnia, físicas y natación.'],
  ['https://www.isfes.es/wp-content/uploads/2024/12/entrevista-en-linea-300x300.png','Preparamos con garantías tanto de forma PRESENCIAL como ONLINE adaptándonos a tus necesidades personales.'],
  [fi('17672/17672384'),'Somos los únicos con nuestra propia IA que nos ayuda a tener TESTS idénticos a los de la oposición.'],
  [fi('2200/2200055'),'Todo el temario propio en PDF destacando conceptos importantes para un mejor estudio. Una parte del mismo comentado incluso en video.'],
  ['https://www.isfes.es/wp-content/uploads/2024/12/discusion.png','Ambiente muy sano entre nuestro alumnado, motivando a la asistencia a clase y el seguimiento de la preparación.'],
  [fi('408/408737'),'Grupos en redes sociales para una comunicación instantánea con todos los alumnos.'],
  [fi('18289/18289587'),'Preparación prioritaria del ejercicio de TEST, la parte más decisiva de la oposición.'],
  [fi('8542/8542649'),'Todas nuestras clases del temario, emitidas online y grabadas para que no te pierdas ni una.'],
  ['https://www.isfes.es/wp-content/uploads/2024/12/httpscdn-icons-png.flaticon.com512689689355.png.png','Además de preparar opositores, formamos a más de 13.000 policías y mandos en activo de toda España con nuestros más de 100 cursos policiales.'],
].map(([img, text]) => ({ img, text }));

export const requisitos = [
  ['Nacionalidad','Tener la nacionalidad española.'],
  ['Sin altura mínima','Ya no se exige una estatura mínima ni a hombres ni a mujeres.'],
  ['Titulación','Estar en posesión o en condiciones de obtener el título de bachiller, técnico (grado medio o superior) o equivalentes a efectos profesionales.'],
  ['Permiso de conducir A y B','Estar en posesión de los permisos de conducir clase «A» o «A2», así como el de clase «B». Quien acceda con el «A2» deberá comprometerse a obtener el «A» en el plazo más breve posible y como máximo en dos años.'],
];

export const stats: [string, string[]][] = [
  ['2019',['El proceso de oposición celebrado en 2019 para el acceso a Policía Local en Zaragoza el <b>65% de los alumnos</b> de ISFES aprobaron la oposición.']],
  ['2021',['Durante el 2021 en las diferentes oposiciones a Policía Local en Aragón, el <b>41% de los alumnos</b> presentados por ISFES son policías locales en algún municipio.','El <b>35% de los alumnos</b> de ISFES superaron el ejercicio test de Policía Local celebrado en 2021.']],
  ['2023',['El <b>69% de los alumnos</b> presentados por ISFES superó el ejercicio test celebrado el 4 de febrero 2023.']],
  ['2024',['El <b>70% del Grupo Avanzado</b> superó la oposición de Policía Local Zaragoza.','A pesar de ser considerado como uno de los exámenes más difíciles de los últimos años, el <b>40% del Grupo Avanzado</b> de ISFES superó la oposición.']],
  ['2025',['<b>Un 64%</b> de los alumnos que cursaron al menos 9 meses de formación en ISFES aprobaron la oposición. Con el mejor ratio de aprobados en el TEST.']],
];

export const comunes = [
  'Acceso a TODAS las clases en formato presencial.','Acceso a clases en streaming, en directo y grabadas durante varios días.',
  'BOT de telegram con miles de preguntas','Aula virtual ISFES','Todo el temario organizado','Grupo Telegram cooperativo con profesores',
  'Material didáctico adicional (videos, esquemas, temario comentado...)','Acceso a entrenamientos pruebas físicas','Miles de preguntas de TEST',
  'Exámenes con Inteligencia Artificial generativa','Normativa explicada en video','Simulacros de examen TEST online',
];
export const comunes2 = ['Clases de psicotécnia/personalidad','Simulacros presenciales de exámenes oficiales TEST y caso práctico'];

export const tarifas = [
  { nombre: 'PRESENCIAL', precio: 95, clases: 'Clases presenciales 3 días a la semana en Zaragoza' },
  { nombre: 'ONLINE CON clases', precio: 85, clases: 'Clases ONLINE 3 días a la semana.' },
  { nombre: 'ONLINE SIN clases', precio: 70, clases: 'Acceso completo al aula virtual, temario y tests sin clases.' },
];

export const requisitosOposicion = [
  ['Nacionalidad','Tener la nacionalidad española.'],
  ['Edad','Tener cumplidos dieciocho años y no exceder de la edad máxima de jubilación forzosa.'],
  ['Titulación','Bachiller, técnico o equivalentes a efectos profesionales. Si es titulación extranjera, credencial de homologación y traducción jurada.'],
  ['Compatibilidad funcional','Acreditar no padecer enfermedad y poseer las condiciones físicas y psíquicas adecuadas, sin estar incurso en el cuadro de exclusiones médicas (anexo III de las bases).'],
  ['Antecedentes penales','No haber sido condenado por delitos dolosos.'],
  ['Habilitación','No haber sido separado mediante expediente disciplinario de ninguna Administración Pública, ni estar inhabilitado para funciones públicas por resolución judicial.'],
  ['Uso de armas','Compromiso escrito de portar armas y de su utilización en los casos previstos en la normativa, mediante declaración jurada.'],
  ['Permisos de conducir','Clase «A» o «A2» y clase «B». Con el «A2», compromiso de obtener el «A» en un máximo de dos años desde la toma de posesión, mediante declaración jurada.'],
  ['Tasa','Haber abonado la correspondiente tasa.'],
];

export const pruebas = [
  ['1️⃣ Examen Test 100 preguntas','100 preguntas tipo test con 3 respuestas alternativas, más doce de reserva, en un máximo de setenta y cinco minutos. Solo una respuesta es la correcta o más correcta.'],
  ['2️⃣ Pruebas físicas','Trepa de cuerda (6 m hombres / 5 m mujeres, máx. 20 s) · Salto de altura (88 cm / 73 cm) · Levantamiento de pesas en dos tiempos, 3 repeticiones (40 kg / 30 kg) · Natación 50 m libres (máx. 40" hombres / 47" mujeres, un intento) · Salto de longitud con carrera (4,30 m / 3,50 m) · Carrera de 1.500 m (5\'24" hombres / 6\'24" mujeres, un intento). 3 intentos por prueba salvo natación y carrera.'],
  ['3️⃣ Examen psicotécnico/personalidad','Aptitud psicotécnica: capacidad intelectual (razonamiento abstracto y aptitud verbal), estabilidad emocional, iniciativa personal, responsabilidad, sociabilidad y colaboración, y tendencias disfuncionales de personalidad.'],
  ['4️⃣ Caso práctico','Resolución por escrito de dos supuestos prácticos relacionados con las funciones del puesto y/o el temario, entre una y dos horas, sin bibliografía, y lectura ante el tribunal en sesión pública.'],
];

export const resenasGoogle = [
  {
    nombre: 'Carlos M.',
    rol: 'Opositor Policía Local Zaragoza',
    texto: 'La mejor academia de Zaragoza para preparar Policía Local sin duda. El nivel de los test y el temario actualizado marcan la diferencia en el examen real. Superé el proceso a la primera.',
    tiempo: 'Hace 2 meses',
    valoracion: 5,
  },
  {
    nombre: 'Elena S.',
    rol: 'Alumna Grupo Online',
    texto: 'Profesores en activo que saben exactamente qué entra y cómo evalúan los tribunales. El bot de Telegram y las clases grabadas me salvaron para poder compaginarlo con mi trabajo.',
    tiempo: 'Hace 3 meses',
    valoracion: 5,
  },
  {
    nombre: 'Jorge R.',
    rol: 'Agente en activo (promoción 2024)',
    texto: 'Trato muy cercano y grupos reducidos de verdad. La preparación de psicotécnicos y supuestos prácticos es de 10. Muy agradecido a Rubén y a todo el equipo de ISFES.',
    tiempo: 'Hace 5 meses',
    valoracion: 5,
  },
  {
    nombre: 'Patricia B.',
    rol: 'Alumna Grupo Avanzado',
    texto: 'Material impecable y siempre actualizado según las últimas publicaciones del BOA. Los simulacros con IA y la exigencia de las clases te dan una seguridad enorme el día del examen.',
    tiempo: 'Hace 6 meses',
    valoracion: 5,
  },
];

export const municipios: [string, string, string | number, string, string?][] = [
  ['Huesca','13/05/2026',15,'https://www.huesca.es/documents/20126/5045050/BOP+bases+PL.pdf/4b86f5de-5fb7-9945-64ed-2aa4109af1ee?t=1775716698991'],
  ['Caspe','23/12/2025',4,'https://www.caspe.es/wp-content/uploads/2025/12/Convocatoria-y-Bases-oposicion-libre-4-plazas-Policia-Local-BOPZ-.293-de-23-12-25-Bop_9430_2025.pdf'],
  ['Zaragoza','26/11/2025',47,'https://www.zaragoza.es/oferta/verHTMLOferta.jsp?id=1703&tipo=bases'],
  ['Unificada DGA','10/06/2025',27,'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1397710700707','https://www.isfes.es/convocatoria-unica-de-policia-local-de-aragon-2025/'],
  ['Tauste','30/03/2025',3,'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1380566480707'],
  ['Andorra (Teruel)','27/03/2025',3,'https://drive.google.com/file/d/1wFn30k56g4qZRFfAhGTmd-mU_qWwhTCY/view'],
  ['Ejea de los caballeros','16/01/2025',2,'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-663'],
  ['Sabiñánigo','01/01/2025',3,'https://bop.dphuesca.es/index.php/mod.bopboletines/mem.visualizarpdf/relcategoria.60002/idbopboletin.9005/chk.0b5f44f1ea14e9a02301d2bc76269501.html'],
  ['Calatayud','29/10/2024',2,'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1358260750404&type=pdf'],
  ['Cuarte de huerva','19/09/2024',6,'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1351721940808&type=pdf'],
  ['Huesca','29/08/2024',18,'https://avanzaragoza.com/academia-oposiciones/wp-content/uploads/2024/12/BASES-HUESCA.pdf'],
  ['Zaragoza','03/08/2024','91 plazas + sobrantes de 18 de movilidad','https://www.zaragoza.es/oferta/ofertaDetalle.jsp?id=1620'],
  ['Barbastro','31/07/2024',2,'https://barbastro.org/sede-electronica/empleo-publico/4620-dos-plazas-de-policia-local'],
  ['Alagón','02/07/2024',2,'https://alagon.es/bopz-02-07-2024-2a-parte-convocatoria-para-la-provision-de-dos-plazas-de-agente-de-policia-local-del-cuerpo-del-ayuntamiento/'],
  ['Alcañiz','24/05/2024',2,'https://sede.alcaniz.es/firma/documento.aspx?csv=24AAAEJ4FHQNNHTKHU97&modo=abrir'],
  ['Binefar','25/04/2024',1,'https://www.binefar.es/uploads/imagenes/Secretaria/Personal/Policia/2024/Anuncio%20BOP%20bases%20Polic%C3%ADa%20Local.pdf'],
  ['Fraga','15/03/2024',2,'https://bop.dphuesca.es/index.php/mod.bopanuncios/mem.visualizarpdf/relcategoria.60008/idbopanuncio.214391/seccion.portal/chk.d4ad1bb65c6773de6540f06997190a32.html'],
  ['Jaca','23/02/2024',1,'https://www.jaca.es/sites/default/files/publicacion_bop_14.pdf'],
];