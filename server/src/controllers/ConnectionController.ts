import { Request, Response, request, response } from 'express';
import db from '../database/connection';

export default class ConnectionController {

    async index(request:Request, response:Response) {

        const totalConnection = await db('connection').count('* as total');

        const { total } = totalConnection[0];
        
        return response.json(totalConnection);

    }

    async create(request: Request, response: Response) {

        const { user_id } = request.body;

        await db('connection').insert({
            user_id
        });

        return response.status(201).send();
    
    }

}