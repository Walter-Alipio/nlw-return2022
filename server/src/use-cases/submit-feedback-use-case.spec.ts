import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

//MOCS - passando dependencias mocadas(falsas) para testar apenas o submit
// const submitFeedback = new SubmitFeedbackUseCase(
//             {create: async ()=> {}},
//             {sendMail: async ()=> {}}
//         )

//Spies
const createFeedbackSpy = jest.fn();//função espiã
const sendMailSpy = jest.fn();   

const submitFeedback = new SubmitFeedbackUseCase(
            {create: createFeedbackSpy},
            {sendMail: sendMailSpy}
        )

describe('Submit feedback',()=>{
    it('should be able to submit a feedback', async ()=>{
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,test.jpg'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled(); //garante que a função foi chamada
        expect(sendMailSpy).toHaveBeenCalled(); //garante que a função foi chamada
    })

    it('should not be able to submit a feedback without type', async ()=>{
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,test.jpg'
        })).rejects.toThrow();
    })

    it('should not be able to submit a feedback without comment', async ()=>{
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,test.jpg'
        })).rejects.toThrow();
    })
    
    it('should not be able to submit a feedback without an invalid screenshot', async ()=>{
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Tudo bugado',
            screenshot: 'test.jpg'
        })).rejects.toThrow();
    })
})