import { Request, Response } from 'express';
import { User } from '../models/user';
import { DataMapper } from '@aws/dynamodb-data-mapper';
import DynamoDB = require('aws-sdk/clients/dynamodb');

const client = new DynamoDB({region: 'eu-west-1'});
const mapper = new DataMapper({client});

export class UserController {

    constructor() {
        //this.table = new TableService();
    }
    
    public create(): void {
        console.log('TableController.createTables');
        //mapper.put()
    }

    public addNewUser (req: Request, res: Response) {   
        console.log('TableController.addNewUser');             
        let newUser = new User();
        newUser.email = "uyphu@yahoo";
        newUser.password = "12345";
    
        mapper.put({item: newUser}).then(() => {
            // The post has been created!
            console.log(newUser.id);
        })
        .catch(err => {
            console.log(err);
        });        
    }

    public getUsers (req: Request, res: Response) {           
        console.log('TableController.getUsers'); 
    }

    public getUser (req: Request, res: Response) {           
        console.log('TableController.getUser');   
        mapper.get(Object.assign(new User(), {id: req.params.userId}))
        .then(myItem => {
            console.log(myItem);
        })
        .catch(err => {
            // the item was not found
            console.log(err);
        })
    }

}
