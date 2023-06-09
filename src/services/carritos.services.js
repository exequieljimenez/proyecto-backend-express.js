import {carritoDao, productsDao} from '../daos/factory.js'
import { ProductDTO } from '../daos/dtos/product.dto.js'

const getCarritos = async (email) => {
    return await carritoDao.getCart(email)
}

const addCarrito = async (email) => {
    await carritoDao.crearCarrito(email)
}

const deleteCarrito = async (email) => {
    await carritoDao.borrarCarrito(email)
}

const updateCarrito = async (email, productId) => {
    const carrito = await carritoDao.getCart(email)
    const producto = await productsDao.getById(productId)
    if (producto !== null) {
        carrito.productos.push(producto)
        await carritoDao.agregarProducto(email, carrito)
        return 'Producto agregado'
    } else {
        return 'El producto no existe'
    }
}

const deleteProductFromCart = async (email, productId) => {
    const carrito = await carritoDao.getCart(email)
    const findProduct = carrito.productos.find(producto => producto.id == productId)
    if(findProduct === undefined) {
        return 'el producto no existe en el carrito'
    } else {
        const minusOneCart = carrito.productos.filter(product => product.id != productId)
        await carritoDao.deleteProduct(email, minusOneCart)
        return 'el producto ha sido eliminado del carrito'
    }
    
}

const buyProductsInCart = async (email) => {
    const carrito = await carritoDao.getCart(email)
    const productos = carrito.productos
    const newProductsDTO = productos.map(product => new ProductDTO(product))
    return newProductsDTO
}

export {getCarritos, addCarrito, deleteCarrito, updateCarrito, deleteProductFromCart, buyProductsInCart}