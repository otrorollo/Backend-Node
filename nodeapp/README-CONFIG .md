# NodeApp
## Deploy
### Install dependencies


--- Instalación de dependencias
# Asegúrate de estar en la carpeta nodeapp antes de instalar las dependencias y ejecutar la aplicación
``` sh
npm install - //en el caso de qno tuviera instalado, 
``` 
--- Inicialización de la base de datos
On first deploy copy .env.example to .env and custimize environment variables

```sh
cp .env.example .env
```
# info
Este comando es una instrucción importante para configurar correctamente las variables de entorno en un proyecto Node.js que utiliza dotenv para la gestión de configuraciones y secretos.
## 1-  Explicación detallada:
``` sh
cp .env.example .env: 
```
Este es un comando de shell Unix/Linux que copia el archivo .env.example y crea una nueva copia llamada .env en el mismo directorio.
## 2 - Propósito:
+ El archivo .env.example sirve como una plantilla que contiene nombres de variables de entorno necesarias para el proyecto, pero sin valores reales.
+ Al copiarlo a .env, se crea un archivo que el desarrollador puede personalizar con valores específicos para su entorno local.
## 3 - Importancia:
+ Seguridad: El archivo .env contiene información sensible y no se sube al control de versiones.
+ Flexibilidad: Permite a diferentes desarrolladores tener configuraciones distintas sin afectar al repositorio.
+ Guía: .env.example muestra qué variables son necesarias sin revelar valores reales.
## 4 - Proceso:
+ En el primer despliegue, el desarrollador copia .env.example a .env.
+ Luego, edita .env para agregar los valores reales de las variables de entorno.
+ La aplicación leerá estos valores del archivo .env durante la ejecución.
## 5 - Ventajas:
+ Facilita la configuración inicial del proyecto.
+ Reduce errores al asegurar que todas las variables necesarias estén presentes.
+ Mejora la colaboración al proporcionar una referencia clara de la configuración requerida.

Este paso es crucial para garantizar que la aplicación funcione correctamente con la configuración adecuada desde el inicio del desarrollo o despliegue.
You can run next command to empty the database and create initial data:
```sh
npm run initDB 
```
-- Leer ya que cuando hace la pregunta se responde con si , el propio archivo lo indica.
```

## Start Inicio de la aplicación
Modo producción
Para iniciar la aplicación en modo producción:
To start in production mode:
``` sh
npm start
```

To start in development mode:
Modo desarrollo
Para iniciar la aplicación en modo desarrollo con recarga automática:
```sh
npm run dev
```

## Configuración de depuración
Se ha añadido una carpeta .vscode con archivos de configuración para facilitar la depuración en Visual Studio Code.
launch.json
Este archivo contiene dos configuraciones de depuración:
"Launch program": Inicia el servidor directamente.
"Launch Npm": Inicia el servidor usando npm.
Ambas configuraciones incluyen:
Captura de salida estándar
Variables de entorno predefinidas
Puerto configurado a 3000

# INFO SOBRE TERMINAL - NO CONECTA BIEN AL PUERTO.
El error EADDRINUSE indica que el puerto 3000 ya está siendo utilizado por otra aplicación o proceso en tu sistema. Esto suele ocurrir si:

Tienes otra instancia de tu servidor Node.js corriendo en segundo plano.

Otra aplicación (como otro servidor, contenedor Docker, o programa) está usando el puerto 3000.
Solución Paso a Paso
1. Cerrar el proceso que usa el puerto 3000:
En Windows:

```sh

# Encuentra el PID (ID del proceso) que usa el puerto 3000:
netstat -ano | findstr :3000

# Mata el proceso (reemplaza [PID] con el número que aparezca):
taskkill /PID [PID] /F
```

## Alternativa: Cambiar el puerto del servidor
Si el error persiste, cambia el puerto en tu archivo server.js (o donde definas el puerto). Por ejemplo, usa el puerto 3001:

``` sh
Copy
// server.js
app.listen(3001, () => {
  console.log("Servidor escuchando en http://localhost:3001");
});

``` 
## Causa del Error
El servidor intenta iniciarse en el puerto 3000 (app.listen(3000)), pero ya hay otro proceso bloqueando ese puerto. Esto es común si:

Olvidaste detener una ejecución anterior del servidor (Ctrl+C en la terminal).
Tienes una instancia de Node.js en segundo plano por un cierre incorrecto.

## Prevención Futura
Siempre cierra correctamente el servidor con Ctrl+C en la terminal.
Si usas nodemon, asegúrate de que no hay procesos huérfanos:

``` SH
Copy
# En macOS/Linux:
pkill -f nodemon

# En Windows (PowerShell):
Get-Process | Where-Object { $_.Name -eq "node" } | Stop-Process
``` 