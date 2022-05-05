import { PrismaClient } from "@prisma/client";
//a cada operação realizada pelo prisma será gerado um log
export const prisma = new PrismaClient({
    log: ['query']
})