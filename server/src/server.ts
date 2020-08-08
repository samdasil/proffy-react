// :: METODOS :: //
// GET
// POST 
// PUT 
// DELETE

// :: PARAMETROS :: //
// - CORPO -> Request Body
// - Route Params: identifica qual recurso será deletado ou atualizado
// - Query Params: parametros GET

import express from 'express';
import cors    from 'cors';
import routes  from './routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);