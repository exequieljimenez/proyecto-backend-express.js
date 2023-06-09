import {getCarritos, addCarrito, deleteCarrito, updateCarrito, deleteProductFromCart, buyProductsInCart} from '../services/carritos.services.js';

const postCarritosControllers = async (req, res) => {
    const email = req.user.email
    const carrito = await getCarritos(email)
    if (carrito) {
        res.send('Usted ya dispone de un carrito')
    } else {
        await addCarrito(email)
        res.send(`Carrito creado`)
    }
}

const getCarritosControllers = async (req, res) => {
    const user = {
        nombre: req.user.nombre,
        telefono: req.user.celular,
        avatar: req.user.avatar
    }
    const email = req.user.email
    let carrito = await getCarritos(email);
    if (carrito) {
        res.send(`sus datos son ${JSON.stringify(user)}\n Este es su carrito: ${JSON.stringify(carrito)}`)
    } else {
        res.send(`sus datos son ${JSON.stringify(user)}\n Aun no dispone de un carrito`)
    }
}

const deleteCarritoControllers = async (req, res) => {
    const email = req.user.email;
    let carrito = await getCarritos(email);
    if (carrito) {
        await deleteCarrito(email)
        res.json({ message: 'carrito borrado' })
    } else {
        res.send('Usted no dispone de un carrito aun')
    }
}

const updateCarritoControllers = async (req, res) => {
    const email = req.user.email;
    let carrito = await getCarritos(email);
    if (carrito) {
        const productId = req.body.id;
        const message = await updateCarrito(email, productId)
        res.send({message})
    } else {
        res.send('Usted no dispone de un carrito aun')
    }
}

const deleteProductCarritoControllers = async (req, res) => {
    const email = req.user.email;
    let carrito = await getCarritos(email);
    if (carrito) {
        const productId = req.body.id;
        const message = await deleteProductFromCart(email, productId)
        res.send({message})
    } else {
        res.send('Usted no dispone de un carrito aun')
    }
}

const buyCartControllers = async (req, res) => {
    const email = req.user.email;
    let carrito = await getCarritos(email);
    if (carrito) {
        const productos = await buyProductsInCart(email)
        res.send(`Ha realizado la compra de ${JSON.stringify(productos)}`)
    } else {
        res.send('Usted no dispone de un carrito aun')
    }
}

export {getCarritosControllers, postCarritosControllers, deleteCarritoControllers, updateCarritoControllers, deleteProductCarritoControllers, buyCartControllers}