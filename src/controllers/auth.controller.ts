import { Request, Response } from 'express';
import prisma from '../services/database';
import bcrypt from 'bcryptjs';

export const test = async (req: Request, res:Response): Promise<any> => {
    return res.status(200).json({message: "Test Auth API"})
}

export const login = async(req: Request, res: Response): Promise<any> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({message: "Please provide name and password"});
        }


        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(401).json({message: "Invalid credentials"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({message: "Invalid credentials"});
        }

        return res.status(200).json({message: "Login successful", data: user});
    } catch(error) {
        return res.status(500).json({message: "Internal server error"})
    }
    
}
export const signup = async(req: Request, res: Response): Promise<any> => {
    try {
        const { name, password , email } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });

        return res.status(201).json({message: "User created successfully", data: user});

    } catch (error) {
        return res.status(500).json({message: "Internal server error"})
    }
}