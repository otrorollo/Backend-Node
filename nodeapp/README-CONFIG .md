# NodeApp
## Deploy
### Install dependencies

``` sh
--- Instalación de dependencias
# Asegúrate de estar en la carpeta nodeapp antes de instalar las dependencias y ejecutar la aplicación
npm install - en el caso de qno tuviera instalado, 

``` sh
--- Inicialización de la base de datos
 
On first deploy copy .env.example to .env and custimize environment variables
```sh
cp .env.example .env
```
You can run next command to empty the database and create initial data:
npm run initDB -- Leer ya que cuando hace la pregunta se responde con si , el propio archivo lo indica.
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