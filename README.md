# mica-energia-web
Sitio web de servicios energéticos
# Estado del proyecto

Primera versión de presentación y catálogo de Mica · Energía. `index.html` incluye el logo original, favicon, filtros y detalles de las dos sesiones documentadas y autorizadas: vínculo y bichijos. Queda pendiente recibir el catálogo de 11 servicios para completar la selección.

- [Contexto y decisiones vigentes](Mica_Energia_Contexto_Proyecto.md).
- [Propuesta técnica, carpetas y ejecución local prevista](docs/Propuesta_Primera_Version.md).

Los servicios están separados en `scripts/data/services.js`; el comportamiento está en `scripts/catalog.js` y la presentación en `styles/site.css`. No hay dependencias de producción que instalar. Abrir mediante un servidor HTTP para usar los módulos JavaScript, por ejemplo la extensión Live Server de VS Code. Las fuentes Cormorant Garamond y Lato se cargan desde Google Fonts con fuentes locales de respaldo.

No se publicará ni se modificará la configuración remota sin autorización.

## Página provisional y Cloudflare Pages

El aviso de desarrollo es discreto y está en el pie. La consulta usa el Instagram confirmado; WhatsApp está pendiente de configurar. Los precios y plazos pendientes permanecen en los datos internos y no se muestran como marcadores al visitante. Los originales del logo y la m con péndulo se conservan sin modificaciones en `assets/brand/`.

Configuración para esta página: rama `main`, marco de trabajo Ninguno, comando `exit 0`, directorio de salida `/` y directorio raíz sin especificar. No requiere variables de entorno.

Después de revisar el cambio, subir `index.html` y este README a GitHub. Cloudflare Pages tiene que desplegar ese nuevo commit; reintentar el commit anterior no incorpora el archivo nuevo. La dirección principal del proyecto es `https://mica-energia-web.pages.dev/`.

