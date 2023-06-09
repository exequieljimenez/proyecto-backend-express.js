import {productsDao} from '../daos/factory.js';

const getProductos = async () => {
    const products = await productsDao.getAll();
    return products
}

const getProductById = async (id) => {
    const product = await productsDao.getById(id)
    return product
}

const getFilteredProducts = async (limit) => {
    const products = await productsDao.filtrarProductos(limit)
    return products
}

const deleteProductById = async (id) => {
    await productsDao.borrar(id)
}

const addProduct = async (product) => {
    await productsDao.guardar(product)
}

const deleteAllProducts = async () => {
    await productsDao.borrarAll()
}

const updateProduct = async (id, data) => {
    await productsDao.actualizar(id, data);
}

export {getProductos, getProductById, getFilteredProducts, deleteProductById, addProduct, deleteAllProducts, updateProduct}