BeautyChain — Gestión de Cosméticos en Solana

BeautyChain es un smart contract desarrollado en Rust utilizando el framework Anchor sobre la red blockchain de Solana. El proyecto tiene como finalidad crear un sistema descentralizado que permita a una tienda de belleza registrar y administrar su inventario de cosméticos directamente en la blockchain.

A diferencia de los sistemas tradicionales que almacenan información en servidores centralizados, este programa guarda los datos dentro de cuentas del programa en Solana, lo que garantiza mayor seguridad, transparencia y permanencia de la información.

Propósito del sistema

El proyecto busca demostrar cómo la tecnología blockchain puede utilizarse para administrar inventarios digitales. En este caso, el sistema está enfocado en el registro y control de productos cosméticos dentro de una tienda.

Entre las operaciones que permite realizar el programa se encuentran:

Crear el registro de una tienda de cosméticos vinculada a una wallet

Añadir nuevos productos al inventario

Consultar la lista de cosméticos almacenados

Cambiar la disponibilidad de un producto

Eliminar cosméticos del inventario

Cada una de estas acciones se ejecuta mediante instrucciones del contrato inteligente, las cuales generan transacciones dentro de la red de Solana.

Organización de los datos en la blockchain

Dentro del programa, la información se organiza de manera jerárquica. Cada tienda está asociada a una wallet, y dentro de ella se almacena el inventario de productos.

Ejemplo de la estructura lógica:

Wallet del propietario
│
└── Cuenta de Tienda de Cosméticos
     │
     ├── Producto cosmético A
     ├── Producto cosmético B
     └── Producto cosmético C

Esto permite que cada usuario mantenga su propio inventario independiente dentro de la red.

Modelos de datos utilizados

El sistema utiliza dos estructuras principales para almacenar la información.

TiendaCosmeticos

Representa la cuenta principal donde se almacena el inventario del negocio.

Atributo | Tipo | Descripción
owner | Pubkey | Dirección de la wallet propietaria
nombre | String | Nombre del negocio o tienda
cosmeticos | Vec | Lista de productos registrados

Cosmetico

Estructura que representa cada producto almacenado dentro del inventario.

Atributo | Tipo | Descripción
nombre | String | Nombre del cosmético
marca | String | Marca del producto
precio | u32 | Precio del artículo
disponible | bool | Indica si el producto está disponible

Instrucciones del contrato inteligente

El programa incluye diversas instrucciones que permiten interactuar con los datos almacenados en la blockchain.

crear_tienda(nombre)
Inicializa una nueva tienda de cosméticos asociada a la wallet del usuario.

agregar_cosmetico(nombre, marca, precio)
Permite registrar un nuevo producto dentro del inventario.

ver_cosmeticos()
Muestra la lista completa de cosméticos almacenados.

alternar_estado(nombre)
Modifica el estado de disponibilidad de un producto.

eliminar_cosmetico(nombre)
Elimina un cosmético específico del inventario.

Uso de Program Derived Addresses (PDA)

Para la creación de cuentas dentro del programa se utilizan Program Derived Addresses, las cuales permiten generar direcciones únicas sin necesidad de claves privadas.

En este caso, la cuenta de la tienda se genera usando las siguientes semillas:

["tienda_cosmeticos", owner_pubkey]

Esto permite que:

Cada wallet tenga su propia tienda registrada

Solo el propietario pueda modificar el inventario

Los datos estén protegidos contra accesos no autorizados

Ejecución del proyecto

El programa puede ejecutarse fácilmente utilizando Solana Playground, una herramienta en línea que permite compilar y desplegar programas en la red de Solana.

Pasos para probar el contrato:

Abrir Solana Playground

Copiar el código del programa en el archivo src/lib.rs

Conectar una wallet en la red Devnet

Compilar el programa con el botón Build

Desplegarlo con Deploy

Ejecutar las funciones disponibles desde la interfaz de pruebas

Ejemplo de flujo de uso

Un ejemplo de interacción con el sistema podría ser el siguiente:

crear_tienda("Beauty Store")

agregar_cosmetico("Labial Matte", "Maybelline", 250)

agregar_cosmetico("Base Liquida", "L'Oréal", 300)

alternar_estado("Labial Matte")

eliminar_cosmetico("Labial Matte")

Este flujo representa el registro de productos, modificación de disponibilidad y eliminación de un artículo dentro del inventario.

Tecnologías utilizadas

Tecnología | Función dentro del proyecto
Solana | Plataforma blockchain donde se ejecuta el contrato
Anchor | Framework para desarrollar programas en Solana
Rust | Lenguaje de programación utilizado

Autor
Proyecto desarrollado como parte de la certificación de Solana
