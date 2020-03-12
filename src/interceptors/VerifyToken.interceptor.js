import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const token = req.header('auth-token');

    if (!token) {
        return res.status(401).send('access denied, token is not present');
    }

    try {
        req.user = jwt.verify(token, process.env.TOKEN_SECRET);
        next();

    } catch (err) {
        res.status(401).send('invalid token');
    }
};