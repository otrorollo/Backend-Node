Explicación de las Modificaciones:
Scripts:
test: Este script es un placeholder que indica que no se han especificado pruebas aún. Se puede modificar más adelante para incluir pruebas automatizadas.
dev: Este script utiliza cross-env para establecer variables de entorno de manera compatible entre diferentes sistemas operativos (Windows, macOS, Linux). La variable DEBUG se usa para habilitar la depuración en la aplicación, permitiendo ver mensajes de depuración en la consola cuando se ejecuta node server.js.
Dependencies:
cross-env: Permite establecer variables de entorno de manera multiplataforma, asegurando que el código funcione sin problemas en diferentes sistemas operativos.
debug: Proporciona una forma sencilla de habilitar y gestionar mensajes de depuración en la aplicación, lo cual es útil para el desarrollo y la resolución de problemas.

## Explicación:
### req (request):
> Es un objeto que contiene información sobre la solicitud entrante.
Puedes acceder a propiedades como method (GET, POST, etc.) y url.
### res (response):
> También es un objeto, pero se usa para construir y enviar la respuesta al cliente.
Tiene métodos como send() para enviar datos y status() para establecer el código de estado HTTP.
### next:
> Es una función que se usa para pasar el control al siguiente middleware.