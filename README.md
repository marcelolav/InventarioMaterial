# InventarioMaterial V.2.0

Este proyecto funciona en conjunto con APINEST por lo que es requerido, en este mismo github puede obtener una copia del mismo para desarrollar.

El proyecto consiste en un control de inventario con modulos de stock, productos, compras y ventas. En el caso de los productos también hay submodulos como el Rubro y varias consultas que se obtienen directamente del API/REST mencionado anteriormente, se recuerda que SE DEBE ejecutar el APINEST para que funcione esta aplicación.

## Despliegue para desarrollo

Ejecute `ng serve` para crear el servidor de desarrollo. Luego de iniciado navegue hacia `http://localhost:4200/`. La aplicación recarga de forma automática cada modificación que realice.

## Generación de código adicional

Ejecute: <br>
`ng generate component component-name` para generar un nuevo componente.
`ng generate directive|pipe|service|class|guard|interface|enum|module` para las demás opciones.
<br>
En caso de necesidad recurra a la ayuda de CLI de Angular `https://angular.io/cli`.

## Creación para despliegue en servidor

Ejecute `ng build` para traspilar el proyecto y obtener el código para desplegar en servidores que será almacenado en la carpeta `dist/`.

## Ejecución de Test unitarios y end to end

No se encuentran disponibles los testeos para este proyecto. Si lo desea consulte la documentación de Angular para construir las pruebas desde cero en la página: `https://angular.io/guide/testing`

## Contacto y ayuda sobre el proyecto

Para ayuda sobre Angular CLI utilice el comando `ng help` o verifique la documentación en [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

En caso de desar contactar con el desarrollador el mail es: [Marcelo Lavandeira](mailto:marcelo.lavandeira@gmail.com)
