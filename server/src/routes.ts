import express, { response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionController = new ConnectionController();

// :: listar total de conexões
routes.get('/connections', connectionController.index);

// :: nova conexão 
routes.post('/connections', connectionController.create);

// :: nova aula
routes.post('/classes', classesController.create);

// :: listar aulas
routes.get('/classes', classesController.index);

// :: filtrar aula por materia, dia da semana, hora

export default routes;