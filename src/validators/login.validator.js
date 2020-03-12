import { checkSchema } from 'express-validator';

const loginValidationSchema = () => {
    return checkSchema({
       email: {
           exists: {
               errorMessage: 'the email is required',
           },
           isString: {
               errorMessage: 'the email should be a text',
           },
           isLength: {
               errorMessage: 'the email size must be in between 6 and 255 characters',
               options: { min: 6, max: 255 }
           },
           isEmail: {
               errorMessage: 'email format is invalid'
           }
       },
       password: {
           exists: {
               errorMessage: 'the password is required',
           },
           isString: {
               errorMessage: 'the password should be a text',
           },
           isLength: {
               errorMessage: 'the password size must be in between 6 and 1024 characters',
               options: { min: 6, max: 1024 }
           }
       }
    });
};

export default loginValidationSchema;