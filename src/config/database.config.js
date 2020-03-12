import mongoose from 'mongoose';
import envVariables from './environment.config';

if (envVariables.variables.env === 'dev') {
    mongoose.set('debug', true);
}

const openConnection = () => {
    mongoose.connect(envVariables.variables.databaseUrl, {useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
       console.log('mongoose is connected!');
    });

    mongoose.connection.on('disconnected', () => {
       console.log('mongoose has been disconnected!');
    });

    mongoose.connection.on('error', (err) => {
        console.log('There was an error while trying to connect on mongo database:', err);
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('mongoDB has been closed by application');
            process.exit(0) // process finished without errors
        });
    });

};

const closeConnection = () => {
    mongoose.connection.close(() => {
        console.log('mongoose was closed by application');
        process.exit(0); //there is no error
    });
};

export {
    openConnection,
    closeConnection
}
