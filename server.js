import envVariables from "./src/config/environment.config";
import expressConfig from './src/config/express.config';
import { openConnection } from './src/config/database.config';

openConnection();

expressConfig().listen(envVariables.variables.port, () => {
    console.log('environment:', envVariables.variables.env);
    console.log('The server is working on port:', envVariables.variables.port)
});
