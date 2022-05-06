import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(cors());
/*exemplo da função cors()
    app.use(cors({
        origin: 'https://...' <- aqui o endereço do front que pode ter acesso ao backend (origem permitida)
    }))
*/
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333,()=>{
    console.log('HTTP server is runing')
})