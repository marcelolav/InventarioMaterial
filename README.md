# <center>Sistema de Inventario y Ventas</center>

## Basado en NodeJs y Angular con base de datos MySQL


### Configuración:

Para desarrollo se debe crear un archivo dentro de keys/keys.ts con el siguiente formato:

```
export default {

    database: {
        host: 'el host donde se aloja la base de datos',
        user: 'usuario de la base de datos',
        password: 'password del usuario de la base de datos',
        database: 'nombre de la base de datos'
    } 
}

```

En todos los casos se debe modificar con los datos personales de cada sistema en particular.


Luego para hacer uso del sistema se debe realizar la instalación de las dependencias del proyecto las cuales se realizan con los siguientes comandos:

```
cd apirest
npm install

cd ..
cd client 
npm install

```

Para ello se dispone de un script que tiene esta función especifica pero se debe ejecutar solo una vez.

Para correr el proyecto en modalidad desarrollo el comando a utilizar desde la linea de comandos es:

```
cd /inventarioMaterial
iniciar
```

NOTA:  Puede que en algunos sistemas operativos se deba ejecutar en una ventana de CMD en lugar de usar powerShell de windows.  Este es un problema a resolver en un futuro mientras tanto se recomienda ejecutar este comando desde una linea de comandos de CMD y de ser posible en modo administrador.

## <center>Para cualquier sugerencia utilizar el siguiente correo electrónico:</center>

## <center>marcelo.lavandeira@gmail.com</center>