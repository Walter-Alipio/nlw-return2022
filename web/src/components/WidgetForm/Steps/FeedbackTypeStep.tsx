import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}
/*Criamos a interface para props que cria uma função que se refere ao setState do elemento pai e informa qual o FeedbackType*/

export function FeedbackTypeStep({onFeedbackTypeChanged}: FeedbackTypeStepProps){
    return(
        //Fragment <></> 
/*O React não permite tags em paralelo sem que estejam envolvidas por uma outra tag. Para que o código não fique sujo com tags desnecessárias que quebrariam a estilização, o React traz o conceito de fragmentos que possui como sintaxe uma tag vazia <>. Esse fragmento não aparecerá no html final quando a página for renderizada. */
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu FeedBack</span>

                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full">
               { Object.entries(feedbackTypes).map(([key,value])=>{
                   return (
                       <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={()=> onFeedbackTypeChanged(key as FeedbackType)}
                            /*inferindo manualmente qual o tipo de key*/ 
                            type="button"
                       >

                           <img src={value.image.source} alt={value.image.alt}/>
                           <span>{value.title}</span>
                       </button>
                   );
               })}
            </div>
        </>
    );
}