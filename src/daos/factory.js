import options from "../config/options.js";
import connectDB from "../config/dbConnection.js";

let productsDao;
let carritoDao;
let usersDao;

switch(options.server.persistence) {
    case 'mongo':
        connectDB();
        const {ProductManagerMongo} = await import ('./manager/products/productsManagerMongo.js');
        const {ProductModel} = await import ('./dbModels/product.model.js');
        productsDao = new ProductManagerMongo(ProductModel);
        const {CarritosManagerMongo} = await import ('./manager/carritos/carritosManagerMongo.js');
        const {CarritoModel} = await import ('./dbModels/carrito.model.js');
        carritoDao = new CarritosManagerMongo(CarritoModel);
        const {UsersManagerMongo} = await import ('./manager/users/usersManagerMongo.js')
        const {UserModel} = await import ('./dbModels/user.model.js')
        usersDao = new UsersManagerMongo(UserModel);
        break;
    case "memory":
        const {UsersManagerMemory} = await import ('./manager/users/usersManagerMemory.js')
        usersDao = new UsersManagerMemory();
        const {ProductManagerMemory} = await import ('./manager/products/productsManagerMemory.js')
        productsDao = new ProductManagerMemory();
        const { CarritosManagerMemory } = await import ('./manager/carritos/carritosManagerMemory.js')
        carritoDao = new CarritosManagerMemory();
        break;
}

export {productsDao, carritoDao, usersDao}