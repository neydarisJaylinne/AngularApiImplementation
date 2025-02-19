# Proyecto Angular

Este es un proyecto desarrollado en Angular que consume APIs en cada uno de sus componentes para gestionar la información.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

- **asociate-button/**: Componente para manejar la asociación de elementos.
- **card-list/**: Componente que muestra una lista de tarjetas con información obtenida de una API.
- **content/**: Módulo encargado de manejar el contenido dinámico.
- **explore/**: Componente que permite explorar información obtenida desde un servicio.
- **footer/**: Pie de página de la aplicación.
- **header/**: Encabezado de la aplicación.
- **side-bar/**: Barra lateral de navegación.
- **view-page/**: Página principal de visualización de datos.

### Archivos principales
- **app-routing.module.ts**: Configuración de rutas del proyecto.
- **app.component.ts**: Componente principal de la aplicación.
- **app.module.ts**: Módulo raíz del proyecto.

## Instalación y Configuración

Para ejecutar este proyecto en tu máquina local, sigue los siguientes pasos:

1. Clona el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Ingresa al directorio del proyecto:
   ```sh
   cd nombre-del-proyecto
   ```

3. Instala las dependencias:
   ```sh
   npm install
   ```

4. Ejecuta el servidor de desarrollo:
   ```sh
   ng serve
   ```

5. Abre el navegador y accede a `http://localhost:4200/`

## Consumo de APIs

Cada componente del proyecto realiza peticiones de manera independiente a APIs para obtener y mostrar datos. Se recomienda revisar los archivos .ts en cada módulo para entender cómo se realizan las solicitudes HTTP.


## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Crea un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature-nueva`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT.

