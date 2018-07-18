"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const dynamodb_data_mapper_1 = require("@aws/dynamodb-data-mapper");
const DynamoDB = require("aws-sdk/clients/dynamodb");
const HttpStatus = require("http-status-codes");
const client = new DynamoDB({ region: 'eu-west-1' });
const mapper = new dynamodb_data_mapper_1.DataMapper({ client });
class UserController {
    constructor() {
    }
    test(req, res) {
        console.log('UserController.test');
        let newUser = new user_1.User();
        newUser = newUser.copyInto(req.body);
    }
    addNewUser(req, res) {
        console.log('UserController.addNewUser');
        let newUser = new user_1.User();
        newUser = newUser.copyInto(JSON.stringify(req.body));
        newUser.createdAt = new Date();
        mapper.put({ item: newUser }).then((response) => {
            // The post has been created!
            console.log(response);
            res.json(response);
        })
            .catch(err => {
            console.log(err);
            res.send(err);
        });
    }
    getUserById(req, res) {
        console.log('TableController.getUserById');
        //let obj = Object.assign(new User(), {id: req.params.userId}); 
        let newUser = new user_1.User();
        newUser.id = req.params.userId;
        mapper.get(Object.assign(new user_1.User, { id: req.params.userId }))
            //mapper.get(newUser)
            .then(myItem => {
            res.json(myItem);
        })
            .catch(err => {
            // the item was not found
            console.log(err);
            res.status(HttpStatus.NOT_FOUND).send({ error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
                message: err.message });
        });
    }
    updateUser(req, res) {
        console.log('TableController.updateUser');
        //mapper.update(Object.assign(new User(), {id: req.params.userId}));
        let newUser = new user_1.User();
        newUser = newUser.copyInto(JSON.stringify(req.body));
        mapper.update({ item: newUser }).then((response) => {
            // The post has been created!
            console.log(response);
            res.json(response);
        })
            .catch(err => {
            console.log(err);
            res.send(err);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUFzQztBQUN0QyxvRUFBdUQ7QUFFdkQscURBQXNEO0FBQ3RELGdEQUErQztBQUUvQyxNQUFNLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBQyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sTUFBTSxHQUFHLElBQUksaUNBQVUsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7QUFFeEM7SUFFSTtJQUVBLENBQUM7SUFFTSxJQUFJLENBQUUsR0FBWSxFQUFFLEdBQWE7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25DLElBQUksT0FBTyxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDekIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpDLENBQUM7SUFFTSxVQUFVLENBQUUsR0FBWSxFQUFFLEdBQWE7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3pDLElBQUksT0FBTyxHQUFRLElBQUksV0FBSSxFQUFFLENBQUM7UUFDOUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyRCxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzFDLDZCQUE2QjtZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLFdBQVcsQ0FBRSxHQUFZLEVBQUUsR0FBYTtRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDM0MsZ0VBQWdFO1FBQ2hFLElBQUksT0FBTyxHQUFRLElBQUksV0FBSSxFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMvQixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxXQUFJLEVBQUUsRUFBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1lBQzVELHFCQUFxQjthQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDWCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNULHlCQUF5QjtZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7Z0JBQzNGLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxVQUFVLENBQUUsR0FBWSxFQUFFLEdBQWE7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRTFDLG9FQUFvRTtRQUNwRSxJQUFJLE9BQU8sR0FBUSxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQzlCLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFckQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzdDLDZCQUE2QjtZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQztDQXNDSjtBQXhHRCx3Q0F3R0MifQ==