# "SpotiApp"
Es una aplicación resultado de la práctica para aprender a usar Angular (En este caso Angular 7) y que usa las bondades de una Página WEB SPA y el API pública que entrega Spotify.

## Para ejecutar:
1. Para poder ejecutar el proyecto debe generar un token de autorización en Spotify siguiendo esta guía: [Guía de Spotify para su API](https://developer.spotify.com/documentation/general/guides/authorization-guide/)

2. El token debe ser reemplazado en el archivo `` src/app/services/spotify.service.ts `` justo donde dice: [[ AQUÍ SU TOKEN ]] (Línea 18).

3. Luego debe usted generar el servidor con `` ng serve -o ``(La bandera -o es para que abra el navegador una vez termine de compilar y levantar el servidor de desarrollo de Angular)