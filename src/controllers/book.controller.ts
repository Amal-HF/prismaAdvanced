import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response } from "express";
import {prisma} from '../config/db'
import { Book } from "@prisma/client";

export const getAllBooksHandler = async(req:Request, res:Response) =>{
    const books = await prisma.book.findMany();
    return res.status(200).json(books);
}

export const addBookHandler = async (req:Request, res:Response) =>{
    const newBook = req.body as Book;
    try {
        await prisma.book.create({
            data: newBook,
        });
        return res.status(201).json({
            message: 'New book added'
        });
    } catch(error){
        const prismaError = error as PrismaClientKnownRequestError;
        return res.status(400).json({
            message: prismaError,
        })
    }
}