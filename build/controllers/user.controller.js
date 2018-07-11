"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const dynamodb_data_mapper_1 = require("@aws/dynamodb-data-mapper");
const DynamoDB = require("aws-sdk/clients/dynamodb");
const client = new DynamoDB();
const mapper = new dynamodb_data_mapper_1.DataMapper({ client });
class UserController {
    constructor() {
        //this.table = new TableService();
    }
    create() {
        console.log('TableController.createTables');
        //mapper.put()
    }
    addNewUser(req, res) {
        console.log('TableController.addNewUser');
        let newUser = new user_1.User();
        newUser.email = "uyphu@yahoo";
        newUser.password = "12345";
        mapper.put({ item: newUser }).then(() => {
            // The post has been created!
            console.log(newUser.id);
        });
    }
    getUsers(req, res) {
        console.log('TableController.getUsers');
    }
}
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUFzQztBQUN0QyxvRUFBdUQ7QUFDdkQscURBQXNEO0FBRXRELE1BQU0sTUFBTSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7QUFDOUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxpQ0FBVSxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztBQUV4QztJQUVJO1FBQ0ksa0NBQWtDO0lBQ3RDLENBQUM7SUFFTSxNQUFNO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQzVDLGNBQWM7SUFDbEIsQ0FBQztJQUVNLFVBQVUsQ0FBRSxHQUFZLEVBQUUsR0FBYTtRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDMUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztRQUM5QixPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUUzQixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNsQyw2QkFBNkI7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sUUFBUSxDQUFFLEdBQVksRUFBRSxHQUFhO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBRUo7QUEzQkQsd0NBMkJDIn0=