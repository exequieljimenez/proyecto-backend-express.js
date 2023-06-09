import express from 'express';
import productosRouter from './routes/routeProducts.js';
import carritosRouter from './routes/routeCarritos.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import { authRouter } from './routes/routeAuth.js';
import options from './config/options.js';

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
if(options.server.persistence === 'mongo') {
   app.use(session({
    store: MongoStore.create({
        mongoUrl:  options.mongo.url
    }),
    secret: options.session.secret,
    resave: false,
    saveUninitialized: false
})); 
} else if(options.server.persistence === 'memory') {
    app.use(session({
        secret: options.session.secret,
        resave: true,
        saveUninitialized: true
    }))
}

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)
app.use('/api/auth', authRouter);

export default app