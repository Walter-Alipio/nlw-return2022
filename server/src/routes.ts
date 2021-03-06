import express from 'express'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();



routes.post('/feedbacks',async (req,res)=>{

    const { type, comment , screenshot } = req.body;//desestruturando para simplificar

    try{

        const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
        const nodemailerMailAdapter = new NodemailerMailAdapter();
    
    
        const submitFeedbackUseCase = new SubmitFeedbackUseCase(
            prismaFeedbacksRepository,
            nodemailerMailAdapter
            );
    
        await submitFeedbackUseCase.execute({
            type,
            comment,
            screenshot,
        })
    
        return res.status(201).send()//status de criação
    }catch(err){

        console.log(err);
        return res.status(500).send();
    }

});

//GET, POST, PUT, PATCH, DELETE

//GET - Buscar informação 
//POST - Cadastrar informação
//PUT - Atualizar informações de uma entidade
//PATCH - Atualizar uma informação única de uma entidade
//DELETE - Deletar uma informação