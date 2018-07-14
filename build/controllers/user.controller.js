"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const dynamodb_data_mapper_1 = require("@aws/dynamodb-data-mapper");
const DynamoDB = require("aws-sdk/clients/dynamodb");
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
        //newUser = newUser.copyInto(req.body);
        newUser.email = "uyphu3@yahoo.com";
        newUser.password = "uyphu3@yahoo.com";
        mapper.put({ item: newUser }).then(() => {
            // The post has been created!
            console.log(newUser.id);
        })
            .catch(err => {
            console.log(err);
        });
    }
    getUsers(req, res) {
        console.log('TableController.getUsers');
        mapper.get(Object.assign(new user_1.User(), { id: req.params.userId }))
            .then(myItem => {
            console.log(myItem);
        })
            .catch(err => {
            // the item was not found
            console.log(err);
        });
    }
    getUserById(req, res) {
        console.log('TableController.getUser');
        mapper.get(Object.assign(new user_1.User(), { id: req.params.userId }))
            .then(myItem => {
            console.log(myItem);
        })
            .catch(err => {
            // the item was not found
            console.log(err);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUFzQztBQUN0QyxvRUFBdUQ7QUFDdkQscURBQXNEO0FBRXRELE1BQU0sTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7QUFDbkQsTUFBTSxNQUFNLEdBQUcsSUFBSSxpQ0FBVSxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztBQUV4QztJQUVJO0lBRUEsQ0FBQztJQUVNLElBQUksQ0FBRSxHQUFZLEVBQUUsR0FBYTtRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN6QixPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFekMsQ0FBQztJQUVNLFVBQVUsQ0FBRSxHQUFZLEVBQUUsR0FBYTtRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDekMsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN6Qix1Q0FBdUM7UUFDdkMsT0FBTyxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQztRQUNuQyxPQUFPLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBRXRDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2xDLDZCQUE2QjtZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLFFBQVEsQ0FBRSxHQUFZLEVBQUUsR0FBYTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksV0FBSSxFQUFFLEVBQUUsRUFBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO2FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1QseUJBQXlCO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sV0FBVyxDQUFFLEdBQVksRUFBRSxHQUFhO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxXQUFJLEVBQUUsRUFBRSxFQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7YUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVCx5QkFBeUI7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FzQ0o7QUF6RkQsd0NBeUZDIn0=