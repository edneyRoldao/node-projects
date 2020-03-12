import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserSchema from '../models/user.model';
import { validationResult } from "express-validator";

export default class AuthController {

    constructor() {}

    async login(req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }

        const user = await UserSchema.findOne({email: req.body.email});

        if (!user) {
            const errors = [
                { msg: 'Email does not exists' }
            ];
            return res.status(400).json({errors});
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordValid) {
            const errors = [
                { msg: 'Invalid password' }
            ];
            return res.status(400).json({errors});
        }

        // create and assign a token
        const token = jwt.sign( { _id: user._id, name: 'edyPaul' }, process.env.TOKEN_SECRET);
        res.header('auth-token', token).json(token);

    }

    async createUser(req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }

        const emailExist = await UserSchema.findOne({email: req.body.email});

        if (emailExist) {
            const errors = [
                { msg: 'Email already exists' }
            ];
            return res.status(400).json({errors});
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const user = new UserSchema({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        });

        try {
            const userSaved = await user.save();
            res.status(201).json({message: 'user has been created!', userId: userSaved._id});

        } catch (err) {
            res.status(400).send(err);
        }
    }

}
