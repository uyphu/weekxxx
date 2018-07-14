import { Request, Response } from 'express';
import { User } from '../models/user';
import { DataMapper } from '@aws/dynamodb-data-mapper';
import DynamoDB = require('aws-sdk/clients/dynamodb');

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
        let newUser = new User();
        //newUser = newUser.copyInto(req.body);
        newUser.email = "uyphu3@yahoo.com";
        newUser.password = "uyphu3@yahoo.com";
    
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
        mapper.get(Object.assign(new User(), {id: req.params.userId}))
        .then(myItem => {
            console.log(myItem);
        })
        .catch(err => {
            // the item was not found
            console.log(err);
        })
    }

    public getUserById (req: Request, res: Response) {           
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
