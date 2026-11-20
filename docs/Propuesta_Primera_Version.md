# Propuesta técnica — pendiente de aprobación

Fecha: 10 de noviembre de 2026.

## Arquitectura

HTML semántico, CSS y JavaScript con módulos nativos, sin framework ni dependencias de producción. Para este catálogo de 11 servicios permite separar contenido y componentes sin incorporar un proceso de compilación. Astro es una alternativa si más adelante necesitamos generar muchas páginas o gestionar contenido con más herramientas; no es necesario para el alcance actual.

Tres páginas: inicio, catálogo y detalle. El detalle usará una dirección como `sesion.html?id=sesion-de-vinculo`, que funciona en hosting estático sin reglas especiales de rutas. El identificador solo representa un servicio; no llevará datos personales.

Los módulos compartidos crearán navegación, tarjetas y botones de contacto. El catálogo completo se renderizará desde un archivo de datos, y el filtro se podrá utilizar con teclado. Un identificador desconocido mostrará un estado claro con enlace de regreso al catálogo. Se documentará el requisito de JavaScript para los filtros y fichas.

## Estructura propuesta (todavía no implementada)

```text
mica-energia-web/
├── README.md
├── Mica_Energia_Contexto_Proyecto.md
├── Catalogo_Mica_Energia_Borrador.md  # falta recibirlo
├── docs/
│   └── Propuesta_Primera_Version.md
├── index.html
├── catalogo.html
├── sesion.html
├── assets/
│   ├── brand/                       # logo original, sin alteraciones
│   ├── images/                      # solo material autorizado
│   └── fonts/                       # Cormorant Garamond y Lato + licencias
├── styles/
│   ├── tokens.css                   # colores, tipografía y espaciado
│   ├── base.css
│   └── components.css
├── scripts/
│   ├── data/
│   │   ├── services.js
│   │   └── site-config.js           # WhatsApp sin número hasta recibirlo
│   ├── components/
│   │   ├── navigation.js
│   │   ├── service-card.js
│   │   └── contact-link.js
│   ├── catalog.js
│   └── service-detail.js
└── tools/
    └── dev-server.mjs               # servidor local sin paquetes externos
```

## Contenido y diseño

- Identidad aprobada: romanticismo botánico/vintage, maximalismo místico secundario y ornamentación equilibrada.
- Cormorant Garamond para títulos y Lato para textos y controles.
- Cinco categorías: Energía personal; Espacios; Sesiones combinadas y vínculos; Familia y animales; Técnicas y encuentros especiales.
- Cada servicio conservará su nombre y descripción originales. Los datos incluirán resumen, descripción completa, qué se trabaja, procedimiento, modalidad, requisitos, condiciones y advertencias según el Markdown recibido.
- Faltantes registrados internamente, sin marcadores como `[CONFIRMAR]` en pantalla. No se completarán con suposiciones.
- Si falta WhatsApp, no habrá un enlace ficticio ni un botón que no funcione. El componente quedará listo para activarse al configurar el número; se podrá mostrar el Instagram confirmado como contacto alternativo.
- Sobre Micaela: preparar la sección sin inventar biografía, fotografía o credenciales.
- Conservar el logo original. Hay varios candidatos fuera del repositorio: identificar cuál es el aprobado antes de integrarlo.

## Ejecución local prevista

Requisito de desarrollo: Node.js (no se encontró disponible en el PATH durante esta revisión). No hace falta instalar paquetes con npm.

Una vez aprobada e implementada la estructura, desde la carpeta del repositorio:

```powershell
node tools/dev-server.mjs
```

Abrir `http://localhost:3000`. El servidor escuchará solo en la máquina local. Este comando todavía no funciona: el servidor se creará con la implementación aprobada.

No abrir directamente los HTML con doble clic: los módulos se probarán mediante HTTP.

## Publicación prevista

Sitio estático sin compilación. La carpeta que contiene `index.html` será la salida de producción (raíz del repositorio para esta propuesta); `docs/` y los Markdown no deben contener datos privados porque podrían quedar accesibles si se publica la raíz.

Al aprobar el despliegue, verificar las opciones vigentes de Cloudflare Pages y documentar en el README la conexión con GitHub, rama, directorio raíz, ausencia de comando de compilación y directorio de salida. No conectar cuentas, hacer push ni publicar en esta etapa.

## Validación de la primera versión

Comprobar los 11 servicios contra el catálogo recibido, las cinco categorías, los filtros, las fichas y el regreso al catálogo. Revisar navegación con teclado, foco visible, tamaños de celular, contraste, imágenes, errores de identificador y ausencia de contactos ficticios. Confirmar que pagos, reservas, cuentas y recolección de datos no forman parte de la implementación.

## Para avanzar

1. Aprobar o ajustar esta propuesta.
2. Recibir `Catalogo_Mica_Energia_Borrador.md`.
3. Confirmar cuál archivo es el logo original aprobado. El número de WhatsApp, la foto y la presentación pueden incorporarse después.
