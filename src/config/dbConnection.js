import mongoose from 'mongoose';
mongoose.set('strictQuery', true)
import options from './options.js';
import {logger} from '../loggers/loggers.js';

const connectDB = async () => {
    try {
        await mongoose.connect(options.mongo.url)
        logger.info('Mongo Database Connected')
    } catch (error) {
        logger.error('There was an error with the database connection')
    }
}

export default connectDB