import express from 'express';
const {Router} = express
import { isAuth } from '../middlewares/auth.js';
import {getCarritosControllers, postCarritosControllers, deleteCarritoControllers, updateCarritoControllers, deleteProductCarritoControllers, buyCartControllers} from '../controllers/carritos.controllers.js'

const carritosRouter = new Router()

carritosRouter.get('/', isAuth, getCarritosControllers)
carritosRouter.post('/', isAuth, postCarritosControllers)
carritosRouter.delete('/', isAuth, deleteCarritoControllers)
carritosRouter.put('/add-product', isAuth, updateCarritoControllers)
carritosRouter.put('/delete-product', isAuth, deleteProductCarritoControllers)
carritosRouter.get('/comprar', isAuth, buyCartControllers)

export default carritosRouter
