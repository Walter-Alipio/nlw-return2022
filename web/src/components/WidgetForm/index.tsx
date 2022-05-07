import { useState } from "react";
import { CloseButton } from "../CloseButton";

/*todos os conteúdos utilizados na página devem ser importados pelo js*/
import bugImageUrl from "../../assets/bug.svg"
import ideaImageUrl from "../../assets/idea.svg"
import thoughtImageUrl from "../../assets/thought.svg"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

/*para facilitar a manutenção criamos um array com os tipos de feedback*/
export const feedbackTypes = {
    BUG:{
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        }
    },
    IDEA:{
        title: 'Ideia',  
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada',
        }
    },
    OTHER:{
        title: 'Outro',  
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento',
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes;//tipagem do ts*

/* Object.entries(feedbackTypes)
    usando Object.entries teremos um array de arrays contendo chave e valor do objeto para cada posição
[
    ['BUG', {...}],
    ['IDEA', {...}],
    ['THOUGHT', {...}],
]

Object.entries(feedbackTypes)
.map(([key,value]) desestruturando para obter os 2 valores

key={...} atributo do React para identificar exatamente qual elemento está sendo renderizado em tela.

O atributo onClick="" espera uma função, como setFeedbackType() precisa ser executado para pegar a key, envolvemos ele em uma arrowFunction, assim, passamos para onClick uma função que quando cliclado o botão, dispara o setFeedBackType
    onClick={()=> setFeedbackType(key)}
*/


export function WidgetForm(){
    /*State*/
    const [feedbackType,setFeedbackType] = useState<FeedbackType | null>(null);
    /*especificado ao useState que deve aceitar os tipos de FeedbackType ou null*/

    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }
    /*Essa função sera passada como props para o FeedbackContentStep para permitir o função de voltar do botão seta para esquerda*/

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
       
            {feedbackSent?(
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ):(
                <>
                    {!feedbackType ? ( //verificação que testa se feedbackType já foi preenchido
                    /* Como a responsabilidade do type foi separada, precisamos passar o setFeedbackType como uma propriedade. O nome escolhido foi onFeedbackTypeChanged mas poderia ter qualquer outro nome*/ 
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                    ):(
                        <FeedbackContentStep 
                        feedbackType={feedbackType}
                        onFeedbackRestartRequested={handleRestartFeedback}
                        onFeedbackSent={()=> setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400 ">
                Feito com ♥ pela <a className="underline underline-offset-2 " href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}