import express from 'express';
const {Router} = express
import { isAuth } from '../middlewares/auth.js';
import { getProductosControllers, getByIdProductosControllers,getProductsFilterControllers, deleteProductByIdControllers, postProductosControllers, deleteAllProductsControllers, updateProductControllers } from '../controllers/products.controllers.js';

const productosRouter = new Router()

productosRouter.post('/', isAuth, postProductosControllers)
productosRouter.get('/', getProductosControllers)
productosRouter.get('/:id', getByIdProductosControllers)
productosRouter.get('/filter/:limit', getProductsFilterControllers)
productosRouter.delete('/:id', isAuth, deleteProductByIdControllers)
productosRouter.delete('/', isAuth, deleteAllProductsControllers)
productosRouter.put('/:id', isAuth, updateProductControllers)

export default productosRouter

