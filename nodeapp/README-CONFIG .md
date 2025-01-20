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