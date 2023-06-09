La ruta /api/register registra a un usuario segun el modelo de usuarios configurado para mongo. El usuario registrado puede, a continuación, loguearse utilizando el email y el password a través de la ruta /api/login.

No se necesita estar logueado para ver la lista de productos o buscar por id usando las rutas api/productos y api/productos/:id respectivamente. Para lo que requiera escritura (modificar usando put o agregar un producto usando post) se necesita estar logueado.

La logica de carritos es distinta a la de productos. Todas las operaciones con carritos requieren que el usuario este logueado. Cada usuario puede tener únicamente un carrito, el mismo está ligado a su email. Puede borrarlo y crear uno nuevo si así lo quisiera. El endpoint api/carritos/compra informa al usuario acerca de los productos comprados y borra el carrito a continuación.
El usuario puede agregar o quitar productos del carrito usando el id del producto en cuestión con el método put utilizando los endpoints api/carritos/add-product y api/carritos/delete-product respectivamente.
