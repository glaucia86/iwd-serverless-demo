# Demo Platica: Obtenga más Productividad Creando Proyectos Sin Servidor con Visual Studio Code & Node.js - IWD Event by GDG Cancún

[![node.png](https://i.postimg.cc/K86N5ZC5/node.png)](https://postimg.cc/bZRkyjyG)

Repositorio responsable de demos relacionadas con el evento **[IWD 2020](https://www.womentechmakers.com/iwd20)** organizado por el **[GDG de Cancún](http://gdgcancun.com/#/home)**

## Recursos Utilizados 🚀

* **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=iwdevent-github-gllemos)**
* **[Node.js](https://nodejs.org/en/)**
* **[Postman](https://www.getpostman.com/)**
* **[Conta - Azure](https://azure.microsoft.com/es-es/?WT.mc_id=iwdevent-github-gllemos)**
* **[Mongodb Community Server](https://www.mongodb.com/download-center/community)**
* **[MongodB Compass GUI](https://www.mongodb.com/download-center/compass)**
* **[Extensión Visual Studio Code: Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=iwdevent-github-gllemos)**
* **[Azure Storage Account](https://azure.microsoft.com/pt-br/services/storage/?WT.mc_id=iwdevent-github-gllemos)**

## Azure for Students ⭐️

Si eres estudiante en cualquier universidad, se puede crear su cuenta de Azure for Students **[Azure for Students](https://azure.microsoft.com/es-es/free/students/?WT.mc_id=iwdevent-github-gllemos)**. Esta cuenta le dará el beneficio en tener un crédito de $ 100 para usar los servicios de forma gratuita, sin tener necesidade una tarjeta de crédito. Para activar esta cuenta, haga clic: **[AQUÍ](https://azure.microsoft.com/es-es/free/students/?WT.mc_id=iwdevent-github-gllemos)**

### Ejecutando la Aplicación Localmente

1) Para ejecutar la aplicación localmente, primero debe descargar el paquete npm de azure function tools globalmente en su máquina usando el comando:

```bash
> npm i -g azure-functions-core-tools --unsafe-perm true
```

2) Hecho esto, vaya a la carpeta: `demo-1` o `demo-2`

3) Ahora, abra el prompt y ejecute el comando:

```bash
> func host start
```

Abra el navegador en: `http://localhost:7071/api/students` y listo. ¡Ejecutará su primer disparador HTTP en el navegador! ❤️ ❤️
