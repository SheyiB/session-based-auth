import { Request, Response } from 'express'
import prisma from '../services/database'

export const test = async (req: Request, res:Response): Promise<any> => {
    return res.status(200).json({message: "Test Auth API"})
}

export const login = async(req: Request, res: Response): Promise<any> => {
    const user = await prisma.user.create({
        data: {
            name: "John Smith",
            email: "XYZ@etest.com",
            age: 29,
            gender: 'MALE'
        }
    })

    return res.status(200).json({message: "User created successfully", user})
    // return res.status(200).json({message: "User logged in successfully"})
}
export const signup = async(req: Request, res: Response): Promise<any> => {
    return res.status(200).json({message: "User signed up successfully"})
}