import { Request, Response } from 'express';
import { User } from '../models/user';
import { DataMapper } from '@aws/dynamodb-data-mapper';

import DynamoDB = require('aws-sdk/clients/dynamodb');
import * as HttpStatus from 'http-status-codes'

const client = new DynamoDB({region: 'eu-west-1'});
const mapper = new DataMapper({client});

export class UserController {

    constructor() {
        
    }

    public test (req: Request, res: Response) {   
        console.log('UserController.test');             
        let newUser = new User();
        newUser = newUser.copyInto(req.body);            
              
    }

    public addNewUser (req: Request, res: Response) {   
        console.log('UserController.addNewUser');             
        let newUser:User = new User();
        newUser = newUser.copyInto(JSON.stringify(req.body)); 
        newUser.createdAt = new Date();          
    
        mapper.put({item: newUser}).then((response) => {
            // The post has been created!
            console.log(response);
            res.status(HttpStatus.OK).json(response);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });        
    }

    public getUserById (req: Request, res: Response) {           
        console.log('TableController.getUserById');      
        //let obj = Object.assign(new User(), {id: req.params.userId}); 
        let newUser:User = new User();
        newUser.id = req.params.userId;
        mapper.get(Object.assign(new User, {id: req.params.userId}))
        //mapper.get(newUser)
        .then(myItem => {
            res.status(HttpStatus.OK).json(myItem);
        })
        .catch(err => {
            // the item was not found
            //console.log(err);            
            res.status(HttpStatus.NOT_FOUND).send({error:HttpStatus.getStatusText(HttpStatus.NOT_FOUND), 
            message: err.message});
        })
    }

    public updateUser (req: Request, res: Response) {     
        console.log('TableController.updateUser'); 

        //mapper.update(Object.assign(new User(), {id: req.params.userId}));
        let newUser:User = new User();
        newUser = newUser.copyInto(JSON.stringify(req.body));                    
    
        mapper.update({item: newUser}).then((response) => {
            // The post has been created!
            console.log(response);
            res.json(response);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });        

        
    }

    // public getContacts (req: Request, res: Response) {           
    //     Contact.find({}, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(contact);
    //     });
    // }

    // public getContactWithID (req: Request, res: Response) {           
    //     Contact.findById(req.params.contactId, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(contact);
    //     });
    // }

    // public updateContact (req: Request, res: Response) {           
    //     Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(contact);
    //     });
    // }

    // public deleteContact (req: Request, res: Response) {           
    //     Contact.remove({ _id: req.params.contactId }, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json({ message: 'Successfully deleted contact!'});
    //     });
    // }

}
