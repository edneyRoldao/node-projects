import environmentVariablesConfig from 'dotenv';
import dev from '../environments/environment.dev';
import prd from '../environments/environment.prd';

 const config = () => {
     const env = {};
     environmentVariablesConfig.config();

     if (process.env.ENV === 'dev') {
         env.variables = dev();
     }

     if (process.env.ENV === 'prd') {
         env.variables = prd();
     }

     return env;
 };

 export default config();