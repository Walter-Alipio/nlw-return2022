import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
   async create({type, comment, screenshot }: FeedbackCreateData){
        await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        }
        //como chave e valor são iguais não a necessidade de colocar key:value.
    });
    }
}