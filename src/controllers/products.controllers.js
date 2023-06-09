import { getProductos, getProductById, getFilteredProducts, deleteProductById, addProduct, deleteAllProducts, updateProduct } from "../services/products.services.js"

const getProductosControllers = async (req, res) => {
    let productos = await getProductos()
    res.json(productos)
}

const getByIdProductosControllers = async (req, res) => {
    let productId = req.params;
    const product = await getProductById(productId.id)
    res.json(product)
}

const getProductsFilterControllers = async (req, res) => {
    let limit = req.params.limit;
    const products = await getFilteredProducts(limit)
    res.send(`Productos ordenados alfabéticamente:\n${products}`)
}

const deleteProductByIdControllers = async (req, res) => {
    const id = req.params.id;
    await deleteProductById(id)
    res.json({message: 'producto borrado'})
}

const postProductosControllers = async (req, res) => {
    let newProduct = req.body;
    await addProduct(newProduct);
    res.send(`Producto agregado: ${JSON.stringify(newProduct)}`)
}

const deleteAllProductsControllers = async (req, res) => {
    await deleteAllProducts();
    res.json({message: 'todos los productos fueron borrados'})
}

const updateProductControllers = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await updateProduct(id, data)
    res.json({message: 'datos de producto enviados'})
}

export {getProductosControllers, getByIdProductosControllers, getProductsFilterControllers, deleteProductByIdControllers, postProductosControllers, deleteAllProductsControllers, updateProductControllers}