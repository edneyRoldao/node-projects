import authRoute from '../routes/auth.route';
import shoppingListRoute from '../routes/shoppingList.route';
export default (app) => {

    // Routes Middleware
    app.use('/api/auth', authRoute);
    app.use('/api/shopping-list', shoppingListRoute);

}