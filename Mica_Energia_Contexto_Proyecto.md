# Mica · Energía — Contexto vigente de la primera versión

Actualizado: 19 de noviembre de 2026, con material adicional de Instagram aportado por la desarrolladora.

## Comunicación del inicio — material nuevo

- Prioridad de contenido: las sesiones son el producto principal. Orden del inicio: bienvenida breve, catálogo de servicios, situaciones con las que puede identificarse el lector, herramientas y contacto. Las herramientas explican el trabajo y no reemplazan ni desplazan el catálogo.
- Las dos tarjetas conocidas también se incluyen en el HTML inicial para que sean visibles sin JavaScript o al abrir el archivo local. JavaScript amplía los detalles y habilita los filtros a partir de los datos separados.

- Voz editorial acordada: Mica habla en primera persona singular al visitante, con voseo rioplatense. Usar «trabajo», «te invito», «contame» y «escribime»; evitar explicaciones del tipo «Mica utiliza» o «en sus publicaciones, Mica habla». Es una adaptación de voz, sin agregar promesas, credenciales ni información nueva.

- Bio aportada: «Mica | terapias energéticas y místicas», operadora de mesa cuántica energética, Tameana y Reiki; limpieza y desbloqueo energético, apertura de caminos; «¿Qué querés transformar?».
- La bienvenida utiliza «Terapias energéticas y místicas» y «¿Qué querés transformar?». El párrafo introductorio es una adaptación editorial basada en esa bio.
- Nueva captura aportada: Mica habla de sentirse estancada, cansancio emocional, preocupación constante, necesidad de soltar y ganas de empezar a sentirse diferente. Presentar estas situaciones como motivos para conversar con ella, sin prometer resultados ni presentarlas como indicaciones clínicas.
- La desarrolladora confirmó que utiliza runas, péndulo, mesa cuántica y limpiezas con piedras y sales. El inicio presenta esas herramientas; falta información específica del enfoque de runas y del procedimiento con piedras y sales. No inventar sus efectos, pasos ni modalidades.
- Catálogo parcial de dos servicios autorizado para la primera publicación. El catálogo completo de 11 sigue pendiente. Logo y favicon originales ya incorporados, sin modificaciones, en `assets/brand/`.

Esta actualización reemplaza los estados pendientes que contradiga del registro histórico que figura más abajo. La guía HTML de octubre conserva su función de documento de reunión y no es la especificación vigente de desarrollo.

## Objetivo y alcance aprobados

Sitio de presentación y catálogo de 11 servicios, responsive, accesible y preparado para hosting estático en Cloudflare Pages. Inicio, catálogo con filtro por categorías y vista de detalle de cada sesión. Desarrollo local primero; no publicar ni modificar configuraciones remotas sin autorización.

No incluye carrito, pagos, calendario de reservas, usuarios, formularios que almacenen datos personales, backend ni base de datos. El flujo comercial posterior continúa fuera de esta primera versión.

## Identidad visual aprobada

- Paleta definitiva: salvia `#A8B59A`, verde oscuro `#465747`, tierra `#B99B7A`, marfil `#F7F2E7`, dorado mate `#C3A36A`.
- Estética principal: romanticismo botánico / vintage.
- Estética secundaria: maximalismo místico.
- Intensidad decorativa: equilibrada. Herbarios, ilustraciones botánicas, papel vintage, cristales y pequeños símbolos en encabezados, separadores y detalles. Mantener lectura clara.
- Títulos: Cormorant Garamond. Textos y controles: Lato.
- Usar el logo original proporcionado, sin recrearlo ni modificarlo. Hay varios archivos candidatos en la carpeta contenedora; falta identificar inequívocamente el aprobado. Si falta esa confirmación, preparar el espacio para incorporarlo.

## Estructura y categorías aprobadas

Inicio con logo, navegación, bienvenida, presentación breve, acceso al catálogo, categorías, Sobre Micaela y contacto. La foto y presentación personal se incorporarán cuando se proporcionen.

Categorías del catálogo:

1. Energía personal.
2. Espacios.
3. Sesiones combinadas y vínculos.
4. Familia y animales.
5. Técnicas y encuentros especiales.

Tarjetas con nombre original, resumen, categoría, material visual autorizado si existe y botón Ver más. Detalles con descripción completa, qué se trabaja, procedimiento, modalidad, datos necesarios, condiciones o advertencias y consulta según información disponible.

## Fuentes de contenido y faltantes

`Catalogo_Mica_Energia_Borrador.md` debe ser la fuente de los 11 servicios. No se encontró en el repositorio ni en la carpeta de trabajo durante esta revisión. No inventar nombres ni completar los once servicios con los dos ejemplos históricos.

Mantener descripciones originales, sin inventar precios, plazos, beneficios médicos, credenciales ni datos personales. Registrar lo pendiente internamente y omitir marcadores técnicos al visitante. Conservar avisos complementarios existentes.

Preparar un componente de WhatsApp reutilizable. El número todavía no está disponible: no inventarlo ni activar un enlace ficticio. Instagram conocido: `mica.energia`.

## Tecnología y forma de trabajo

- Hosting objetivo: Cloudflare Pages; la arquitectura local debe ser estática, pública al desplegar y sin autenticación.
- Arquitectura propuesta, todavía no aprobada: HTML, CSS y JavaScript con módulos, contenido separado y sin dependencias de producción.
- Revisar `docs/Propuesta_Primera_Version.md` en el repositorio para carpetas y ejecución previstas.
- Primero revisar archivos, proponer arquitectura, mostrar carpetas y explicar la ejecución local. Implementar después de la aprobación de la desarrolladora, según el pedido recibido.
- Mantener código reutilizable, HTML semántico, navegación por teclado, foco visible, buen contraste y adaptación a móviles.
- No publicar, hacer push ni alterar configuraciones remotas en esta etapa.

## Estado de preparación

Repositorio local: `mica-energia-web/`, remoto `https://github.com/NoeliaRio/mica-energia-web.git`, rama `main` al revisar.

Pendientes para implementar: aprobación de la arquitectura y entrega del catálogo. Logo original a identificar; número de WhatsApp, foto y biografía a recibir. No se encontró Node.js en el PATH del entorno durante la revisión; si se aprueba el servidor local propuesto, hará falta disponer de Node.js.

---

# Registro histórico — 27 de octubre de 2026

Las propuestas y estados de esta sección se conservan como antecedentes. Ante contradicciones, prevalece la actualización del 10 de noviembre de 2026.

# Mica · Energía --- Contexto del proyecto web

> Documento de contexto para trabajar con Codex. Actualizado: 27 de
> octubre de 2026. Estado: descubrimiento, definición visual y análisis
> de alternativas técnicas. **Importante:** distinguir decisiones
> confirmadas, propuestas y cuestiones pendientes. No implementar
> decisiones pendientes como si fueran requisitos aprobados.

## 1. Resumen del proyecto

Se desarrollará una página web para **Micaela**, cuya marca en Instagram
aparece como **Mica · Energía** (`mica.energia`). Ofrece sesiones de
armonización energética, radiestesia, péndulos, mesa cuántica y otros
servicios relacionados. Su comunicación se dirige principalmente a
personas que ya conocen o se interesan por estas prácticas.

La web debe funcionar como **vidriera y catálogo de servicios**: -
Mostrar las sesiones y combos disponibles. - Ofrecer descripciones
extensas y claras de cada servicio, conservando el lenguaje de
Micaela. - Indicar modalidad, requisitos, precio y forma de recibir la
devolución. - Facilitar la contratación, consulta, reserva o pago, según
el flujo que se defina. - Conectarse con Instagram y WhatsApp mediante
enlaces visibles. - Presentar a Micaela como profesional y persona
detrás de la marca.

**Restricción principal:** presupuesto muy bajo, idealmente sin costos
fijos al comienzo. Se trata de una primera prueba del negocio en la web;
se prefieren herramientas gratuitas, subdominios gratuitos y servicios
que no exijan una suscripción. Los posibles costos por transacción deben
aclararse.

La desarrolladora conoce programación y puede trabajar con Codex; **no
es obligatorio usar un constructor no-code**.

## 2. Audiencia, tono y comunicación

-   La marca se comunica con cercanía, calidez, sensibilidad y un
    lenguaje espiritual/místico.
-   Micaela suele aparecer en fotos y videos; su presencia personal es
    importante para generar confianza.
-   Una sección **«Sobre mí»** con fotografía real, presentación en
    primera persona y explicación de su enfoque probablemente sea
    relevante.
-   **No reescribir los servicios en lenguaje técnico o escéptico**, ni
    eliminar expresiones propias de su actividad: la clienta tiene una
    audiencia que conoce estas prácticas.
-   La mejora de UX debe enfocarse en la **estructura y claridad
    operativa**: cómo se contrata, qué datos se necesitan, si hay
    llamada o sesión en vivo, cuándo llega la devolución, etc.
-   Evitar presentar prácticas energéticas como tratamientos
    médicos/veterinarios comprobados o prometer curaciones. Conservar
    los avisos de carácter complementario que proporcione la clienta.
-   No inventar textos definitivos, precios, plazos, certificaciones ni
    modalidades.

## 3. Servicios conocidos (ejemplos; catálogo incompleto)

### 3.1. Sesión de vínculo (para dos personas)

**Descripción aportada por la clienta:**

> Una sesión energética para armonizar la energía de un vínculo y
> acompañar los procesos que hoy necesitan mayor equilibrio, comprensión
> y fluidez.

Se dirige a vínculos de pareja, familiares, amistades y relaciones
laborales. **Ambas personas deben estar de acuerdo** en realizar el
trabajo.

La descripción extendida indica que, a través de la Mesa Cuántica
Energética, se trabaja sobre: - La energía individual de cada persona. -
La energía compartida del vínculo. - Bloqueos o tensiones energéticas
presentes. - Patrones que pueden estar afectando la relación. -
Armonización energética del vínculo. - Integración de nuevas
posibilidades energéticas para el proceso.

**Modalidad conocida:** a distancia, con devolución mediante audio de
WhatsApp.

**Datos solicitados:** nombre completo y fecha de nacimiento de ambas
personas.

**Pendiente:** precio, plazo, procedimiento de pago y eventual
información adicional.

### 3.2. Limpieza energética para bichijos

Servicio para mascotas: perros, gatos, aves, peces y otros animales de
compañía.

Micaela lo describe como una herramienta de armonización energética
complementaria. En sus textos menciona temas como bloqueos energéticos,
nerviosismo, miedos, vitalidad, procesos emocionales y armonización de
espacios compartidos.

**Herramientas descritas:** tabla de radiestesia, péndulo, cristales y
códigos de luz.

**Etapas descritas:** lectura energética; detección de bloqueos;
limpieza y armonización; apertura de caminos energéticos;
fortalecimiento y equilibrio vibratorio; sellado y protección
energética.

**Datos solicitados:** - Nombre completo del animal (incluido apellido,
según su texto). - Fecha de nacimiento, si se conoce. - Fotografía. -
Contexto y motivo de consulta. - Número de WhatsApp.

**Modalidad:** a distancia. El animal no necesita estar presente ni
modificar su rutina.

**Entrega:** audio por WhatsApp con información de la lectura, aspectos
identificados, trabajo realizado y recomendaciones de acompañamiento.

**Aviso importante aportado por Micaela:** no reemplaza la atención
veterinaria ni tratamientos indicados por profesionales. No existe una
cantidad obligatoria de sesiones.

**Pendiente:** precio, plazo concreto de entrega, forma de pago y otros
detalles.

### 3.3. Otros servicios

Se mencionaron runas, péndulos, mesa cuántica, armonizaciones
energéticas y **combos**, pero aún no se recibió el catálogo completo.
No asumir categorías ni servicios definitivos sin confirmación.

## 4. Identidad visual

### 4.1. Paleta propuesta

Se acordó trabajar a partir de los colores que Micaela ya utiliza en
Instagram. La siguiente paleta fue bien recibida por la desarrolladora y
enviada a la clienta, **pero su aprobación definitiva todavía no está
documentada**.

  -----------------------------------------------------------------------
  Color                   Hex                     Uso sugerido
  ----------------------- ----------------------- -----------------------
  Salvia                  `#A8B59A`               Fondos secundarios,
                                                  tarjetas, bloques
                                                  suaves

  Verde viejo oscuro      `#465747`               Encabezados, botones,
                                                  navegación y pie

  Tierra                  `#B99B7A`               Bordes, acentos
                                                  orgánicos e
                                                  ilustraciones

  Marfil                  `#F7F2E7`               Fondo principal

  Dorado mate             `#C3A36A`               Ornamentos discretos,
                                                  estrellas y separadores
  -----------------------------------------------------------------------

El dorado es un **acento**, no un fondo principal. Priorizar contraste y
legibilidad.

### 4.2. Elementos gráficos frecuentes

-   Hojas, plantas, ramas, flores y botánica ilustrada.
-   Cristales, gemas y péndulos.
-   Papel antiguo/pergamino suave.
-   Estrellas, lunas y símbolos celestes delicados.
-   Ilustraciones femeninas etéreas.
-   Detalles artesanales y orgánicos.

### 4.3. Corrientes estéticas a consultar con Micaela

**NO hay un estilo final elegido.** La clienta usa distintas corrientes
en sus publicaciones. La reunión presencial servirá para ordenar la
identidad.

1.  **Minimalismo botánico:** espacios amplios, pocos adornos,
    fotografía natural, jerarquía clara.
2.  **Romanticismo botánico/vintage:** herbarios, ilustraciones
    antiguas, flores prensadas, papel envejecido y aire editorial
    nostálgico.
3.  **Fairycore / cuento ilustrado:** naturaleza encantada, estrellas,
    luna, figuras etéreas, cristales, atmósfera de libro de cuentos.
4.  **Maximalismo místico:** abundancia de ornamentos, símbolos, marcos,
    entramados y texturas.

La publicación de Instagram «25 de julio · Día Fuera del Tiempo» se
interpretó como una **mezcla de Fairycore/cuento ilustrado y
romanticismo botánico vintage**. También se mencionó *whimsical
botanical* como referencia útil.

**Decisión de diseño a explorar:** un universo visual mágico o vintage
con una **interfaz de navegación ordenada, legible y poco recargada**.
El grado de decoración debe definirse con la clienta.

**Pregunta clave para la reunión:** separar la elección del *universo
estético* (botánico, cuento de hadas, místico, etc.) de la *intensidad
decorativa* (sutil, equilibrada, abundante).

### 4.4. Tipografías propuestas

**Opción A --- elegante/clásica:** - Cormorant Garamond para títulos. -
Lato o Nunito Sans para cuerpo.

**Opción B --- romántica/manuscrita:** - Allura, Alex Brush, Italianno o
Parisienne para títulos o frases destacadas. - Cormorant Garamond para
títulos secundarios. - Lato para párrafos y controles.

En la publicación «Día Fuera del Tiempo» aparece una cursiva fluida
similar a las referencias de la opción B, **sin identificar la fuente
exacta**.

Usar tipografías de Google Fonts puede facilitar licencias y carga web.
Limitar la cursiva decorativa a textos breves.

### 4.5. Logo e identidad personal

-   Se pidió a Micaela su logo o confirmación de si desea crear uno.
-   En sus publicaciones se repiten un ojo cerrado/pestañas, hojas y
    cristales, pero **no se confirmó que alguno sea el logo oficial**.
-   No inventar ni dar por aprobado un isotipo.
-   La identidad puede apoyarse inicialmente en un logotipo tipográfico
    con su nombre.
-   Reservar lugar para fotografías reales y sección «Sobre mí».

## 5. Referencias de colegas y plataformas

Las siguientes URLs fueron proporcionadas por la desarrolladora como
**referencias para analizar estructura y flujo comercial**, no para
copiar diseños, textos o recursos.

### Bruja en Aries

-   Instagram: https://www.instagram.com/bruja.en.aries/
-   Cursos: https://brujaenaries.tiendup.com/
-   Catálogo/productos: https://blending.com.ar/brujaenaries/catalogos/
-   Servicios: https://brujaenaries.empretienda.com.ar/productos

En la captura aportada se observa que el perfil agrupa enlaces bajo
«Info cursos», «Info Productos» e «Info servicios». Interesa estudiar la
**separación por líneas de negocio**.

### Las Terapias de la Mane

-   Instagram: https://www.instagram.com/las_terapias_de_la_mane/
-   Reservas: https://las-terapias-de-la-mane.skedu.com/
-   Sitio: http://www.lasterapiasdelamane.cl/

Interesa estudiar el modelo de **sesiones con precio, duración y reserva
de turno**. Algunas páginas pueden no estar disponibles.

### Maga de la Luna

-   Instagram: https://www.instagram.com/magadeluna\_/
-   Tienda: https://maga-de-la-luna.tiendup.com/
-   Página de enlaces: https://linktr.ee/magalunarr

Interesa estudiar el uso de **Linktree como concentrador de accesos** y
la combinación de cursos/servicios.

### Minita Mágica

-   Instagram: https://www.instagram.com/minita.magica/
-   Productos: https://minitamagica.empretienda.com.ar/productos
-   Sesiones: https://minitamagica.empretienda.com.ar/sesiones

Interesa estudiar la **separación de sesiones por categorías**, fichas
individuales y flujo de compra.

**Precaución:** algunas referencias pueden estar caídas, desactualizadas
o bloquear acceso automatizado. No asumir que siguen operativas ni que
sus funcionalidades son iguales a las de las plataformas actuales.
Verificar antes de recomendar o implementar.

## 6. Objetivo funcional y posibles flujos

Patrón observado:

`Instagram → enlace en biografía → web/catálogo → detalle del servicio → contratación, consulta o reserva`

Tres flujos posibles, **aún sin seleccionar**:

**A. Consulta/contratación por WhatsApp** - La visitante ve un
servicio. - Pulsa «Consultar» o «Solicitar sesión». - Se abre WhatsApp
con un mensaje prearmado. - Micaela coordina datos, pago y entrega
manualmente.

**B. Compra con pago online** - La visitante elige un servicio o
combo. - Paga mediante un enlace o pasarela. - Se confirma el pedido. -
Se recopilan los datos necesarios. - Micaela realiza el trabajo y
entrega la devolución.

**C. Reserva de turno** - La visitante selecciona un servicio, fecha y
hora. - Reserva, con o sin pago anticipado. - Recibe instrucciones y
recordatorios.

**No asumir que todas las sesiones necesitan horario**: algunas se hacen
a distancia y se entregan mediante audio.

Preguntas pendientes: - ¿Qué servicios son asincrónicos y cuáles
requieren una sesión en vivo? - ¿Se reserva un turno, se paga
directamente o se consulta primero? - ¿Se necesita carrito para
contratar varios servicios? - ¿Se cobran anticipos o pagos completos? -
¿Qué medios de pago se aceptan y en qué moneda? - ¿Qué datos se recogen
y en qué momento? - ¿Cómo se comprueba un pago? - ¿Cuándo y cómo se
envía la devolución? - ¿Se necesitan recordatorios, cancelaciones o
reprogramaciones? - ¿Quién actualizará los precios y textos? - ¿Se
ofrecerán cursos, productos físicos o descargas en el futuro?

## 7. Alternativas tecnológicas consideradas

**No hay tecnología elegida.**

### Google Sites

-   Publicación sencilla y alojamiento gratuito en subdominio.
-   Menor libertad de diseño y funciones de e-commerce.
-   Posibilidad de enlaces externos a WhatsApp, formularios o pagos.

### Sitio estático propio (Cloudflare Pages o GitHub Pages)

-   Alojamiento gratuito sujeto a condiciones y límites del proveedor.
-   Gran libertad de diseño.
-   Posibilidad de crear catálogo y fichas de servicios a medida.
-   Integración de WhatsApp, formularios y enlaces externos de pago.
-   No incluye por sí mismo un backend de pedidos, verificación de pagos
    ni agenda.

### Plataformas comerciales vistas en referencias

-   Tiendup: sesiones, productos y cursos.
-   Empretienda: catálogo, carrito y pagos.
-   Skedu: agenda y reservas.
-   Linktree: concentrador de enlaces, no sustituye necesariamente una
    tienda.
-   Blending: revisar su funcionamiento antes de evaluarlo.

**No tomar como vigentes precios mencionados durante la exploración.**
Los planes, pruebas gratuitas, comisiones, limitaciones y disponibilidad
por país deben verificarse al decidir.

### Hipótesis inicial a evaluar

Para un MVP de bajo costo, estudiar:

`Sitio estático personalizado + catálogo de sesiones + WhatsApp + enlaces de pago (si se necesitan)`

Ventajas: costos fijos potencialmente nulos, diseño propio y menor
dependencia de suscripciones.

Desventajas: confirmación manual, posible necesidad de herramientas
externas, más responsabilidad de mantenimiento y limitaciones para
automatizar pedidos.

**No implementar una pasarela, backend, carrito o calendario sin definir
antes el flujo real de contratación.** Si se usa Mercado Pago, validar
comisiones, condiciones y modo de confirmar pagos; nunca confiar en que
visitar una URL de éxito equivale a un pago verificado.

## 8. Estructura preliminar del sitio (hipótesis)

1.  **Inicio:** presentación, identidad visual, llamada a explorar
    sesiones.
2.  **Sesiones:** catálogo con categorías, precios y resumen.
3.  **Detalle de sesión:** descripción completa de Micaela, modalidad,
    datos necesarios, entrega, precio y acción de contratación.
4.  **Sobre mí:** fotografía, presentación y trayectoria de Micaela.
5.  **Preguntas frecuentes:** modalidad a distancia, plazos,
    coordinación, pagos y otras dudas confirmadas.
6.  **Contacto:** WhatsApp, Instagram y canales autorizados.

La estructura puede cambiar según los servicios y la plataforma elegida.

## 9. Requisitos de experiencia y calidad

-   **Mobile first**: gran parte del tráfico llegará desde Instagram.
-   Botones claros de contacto/compra en fichas de servicio.
-   Enlaces funcionales a Instagram y WhatsApp.
-   Tipografía legible; cursiva ornamental solo en títulos cortos.
-   Buen contraste entre verde oscuro y fondos claros.
-   Imágenes optimizadas y tiempos de carga bajos.
-   Navegación simple y categorías fáciles de entender.
-   Diseño coherente entre páginas, sin mezclar estéticas
    arbitrariamente.
-   Accesibilidad básica: etiquetas, textos alternativos, foco visible y
    controles accesibles.
-   Si se recopilan nombres, fechas de nacimiento, fotografías de
    mascotas u otros datos, prever información de privacidad,
    minimización de datos y manejo seguro. No exponerlos en URLs
    públicas ni repositorios.
-   No reutilizar imágenes de Instagram de colegas sin autorización.
-   Usar textos, fotos, logos y otros materiales autorizados por
    Micaela.

## 10. Estado de decisiones

  -----------------------------------------------------------------------
  Tema                                Estado
  ----------------------------------- -----------------------------------
  Objetivo: catálogo y contratación   Confirmado
  de servicios                        

  Instagram como canal de promoción   Confirmado

  Presupuesto muy limitado            Confirmado

  Inspiración en colores actuales de  Acordado como dirección
  Instagram                           

  Paleta hexadecimal exacta           Propuesta; pendiente confirmación
                                      final

  Botánica, gemas y cristales         Referencias presentes en la marca

  Corriente estética final            Pendiente de reunión

  Tipografía final                    Pendiente

  Logo                                Solicitado; pendiente

  Catálogo completo y combos          Pendiente

  Precios y plazos                    Pendiente

  Flujo de contratación/pago/reserva  Pendiente

  Tecnología y hosting                Pendiente

  Dominio propio o subdominio         Pendiente

  Materiales reales (fotos, videos,   Pendiente de reunir
  textos)                             
  -----------------------------------------------------------------------

## 11. Cómo debe colaborar Codex

1.  **Tratar este documento como contexto de producto**, no como una
    orden de construir inmediatamente.
2.  Antes de implementar funcionalidades de compra o reserva, preguntar
    por el flujo operativo real.
3.  No suponer que una propuesta visual ya fue aprobada.
4.  Priorizar soluciones económicas, simples y mantenibles.
5.  Proponer alternativas con ventajas, limitaciones y costos fijos o
    variables.
6.  Mantener separadas las capas de contenido, diseño y lógica.
7.  Si se empieza un prototipo, usar contenido de muestra claramente
    marcado y datos ficticios donde falte información.
8.  No inventar descripciones definitivas, precios, credenciales,
    testimonios, certificaciones o datos de contacto.
9.  Si se diseña una landing o prototipo, conservar el tono cálido,
    botánico y espiritual sin sacrificar usabilidad.
10. Pedir validación antes de integrar pagos, publicar el sitio o
    gestionar datos reales de clientes.

## 12. Próximos pasos

1.  Reunión presencial con Micaela para elegir dirección estética y
    grado de ornamentación.
2.  Confirmar logo, fotografías y materiales de marca.
3.  Recibir catálogo completo de sesiones y combos.
4.  Definir cómo funciona exactamente la compra, reserva, pago y
    entrega.
5.  Comparar plataformas según esos requisitos y el presupuesto real.
6.  Crear un wireframe y luego un prototipo visual responsive.
7.  Validar el prototipo con Micaela antes del desarrollo definitivo.

------------------------------------------------------------------------

**Nota para Codex:** Este documento reúne conversaciones de
planificación y referencias aportadas por la desarrolladora. Algunas
afirmaciones son hipótesis de diseño o tecnología, no decisiones
aprobadas por la clienta. Ante cualquier ambigüedad, preguntar antes de
fijar requisitos.
