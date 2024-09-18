# Carta Astral - Aplicación de Signos Astrológicos

## Descripción

La aplicación **Carta Astral** permite a los usuarios seleccionar y visualizar información sobre sus signos astrológicos: Ascendente, Solar y Lunar. La aplicación proporciona una interfaz interactiva donde los usuarios pueden elegir sus signos astrológicos y obtener una descripción detallada de cada uno.

## Características

- **Selección de Signos**: Los usuarios pueden seleccionar su signo Ascendente, Solar y Lunar desde menús desplegables.
- **Información Detallada**: Una vez seleccionado un signo, se muestra una descripción detallada del mismo.
- **Interfaz Intuitiva**: Diseñada para ser fácil de usar, con una interfaz limpia y elementos visuales que reflejan temas astrológicos.
- **Estilo Astrológico**: La aplicación utiliza una fuente decorativa y un fondo cósmico para crear una experiencia visualmente atractiva.

## Instalación

Para instalar y ejecutar la aplicación localmente, sigue estos pasos:

1. **Clonar el Repositorio**:
    ```bash
    git clone https://github.com/tu_usuario/carta-astral.git
    ```

2. **Navegar al Directorio del Proyecto**:
    ```bash
    cd carta-astral
    ```

3. **Instalar Dependencias**:
    Asegúrate de tener `Node.js` y `npm` instalados. Luego, instala las dependencias con:
    ```bash
    npm install
    ```

4. **Ejecutar la Aplicación**:
    ```bash
    npm start
    ```
    Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en `http://localhost:3000`.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir la interfaz de usuario.
- **React Bootstrap**: Framework para el diseño y los componentes de la interfaz.
- **CSS**: Para el estilo visual, incluyendo la fuente decorativa y el fondo astrológico.

## Estructura del Proyecto

- **`src/App.js`**: Componente principal de la aplicación que maneja el estado y la disposición de los componentes.
- **`src/components/Ascendente.js`**: Componente para seleccionar y mostrar información sobre el signo Ascendente.
- **`src/components/Solar.js`**: Componente para seleccionar y mostrar información sobre el signo Solar.
- **`src/components/Lunar.js`**: Componente para seleccionar y mostrar información sobre el signo Lunar.
- **`src/App.css`**: Archivo de estilos que define la apariencia de la aplicación.
- **`public/images/1.jpg`**: Imagen de fondo astrológica.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. **Hacer un Fork del Repositorio**
2. **Crear una Rama para tus Cambios**:
    ```bash
    git checkout -b nombre-de-tu-rama
    ```
3. **Realizar tus Cambios y Confirmar**:
    ```bash
    git add .
    git commit -m "Descripción de tus cambios"
    ```
4. **Subir tus Cambios y Crear un Pull Request**:
    ```bash
    git push origin nombre-de-tu-rama
    ```

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

## Contacto

Si tienes alguna pregunta o sugerencia, puedes contactar a [tu_nombre@tu_dominio.com](mailto:tu_nombre@tu_dominio.com).

---

¡Gracias por usar la aplicación Carta Astral!
