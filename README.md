# mica-energia-web
Sitio web de servicios energéticos
# Estado del proyecto

Primera versión de presentación y catálogo de Mica · Energía. Hay una página provisional `index.html` para comprobar el despliegue. El catálogo y la web completa todavía no se implementaron.

- [Contexto y decisiones vigentes](Mica_Energia_Contexto_Proyecto.md).
- [Propuesta técnica, carpetas y ejecución local prevista](docs/Propuesta_Primera_Version.md).

El catálogo Markdown de 11 servicios está pendiente de recibir. La arquitectura propuesta es HTML/CSS/JavaScript estático, pendiente de aprobación de la desarrolladora. No hay dependencias que instalar ni comandos de ejecución disponibles todavía.

No se publicará ni se modificará la configuración remota sin autorización.

## Página provisional y Cloudflare Pages

`index.html` es una página estática independiente, sin dependencias, con aviso de próxima apertura y enlace al Instagram conocido. Usa fuentes del sistema provisionalmente; las tipografías definitivas se incorporarán con la web completa. Se puede abrir directamente en el navegador para revisarla.

Configuración para esta página: rama `main`, marco de trabajo Ninguno, comando `exit 0`, directorio de salida `/` y directorio raíz sin especificar. No requiere variables de entorno.

Después de revisar el cambio, subir `index.html` y este README a GitHub. Cloudflare Pages tiene que desplegar ese nuevo commit; reintentar el commit anterior no incorpora el archivo nuevo. La dirección principal del proyecto es `https://mica-energia-web.pages.dev/`.

