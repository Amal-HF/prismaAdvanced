import { Request, Response } from "express";
import {Loan, User} from '@prisma/client'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import {prisma} from '../config/db'
import { loanParamsSchemaType } from "../zod_schema/loan.schema";

export const getAllLoansHandler = async(req:Request, res:Response) =>{
    const loans = await prisma.loan.findMany();
    return res.status(200).json(loans);
}

export const addLoanHandler = async (req:Request, res:Response) =>{
    const newLoan = req.body as Loan;
    try {
        await prisma.loan.create({
            data: newLoan,
        });
        return res.status(201).json({
            message: 'New loan added'
        });
    } catch(error){
        const prismaError = error as PrismaClientKnownRequestError;
        return res.status(400).json({
            message: prismaError,
        })
    }
}

export const lendBookHandler = async(req:Request, res:Response) =>{
    const loanData = req.params as Loan;
    const isExist = prisma.user.findUnique({
        where: {id: loanData.id}
    });
    try{
       if (isExist != null){
            prisma.loan.create({
                data: loanData
            });
            res.status(200).json({message: 'Book lended to the user'})
       } else {
        return res.status(400).json({message: 'No user found with this id'})
       }
    }catch(error){
        console.log(error)
        return res.status(500).json({message: 'Server error'})
    }
}

// return the lended books for specific user
export const lendedBooksHandler = async(req:Request, res:Response) =>{
    const id = req.params as loanParamsSchemaType;
    try{
        const lendedBooks = prisma.user.findMany({
            where: {
                id: id
            } 
        })
        
    }catch(reeor){

    }
}
