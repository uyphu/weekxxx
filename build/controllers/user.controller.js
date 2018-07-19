"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const dynamodb_data_mapper_1 = require("@aws/dynamodb-data-mapper");
const dynamodb_query_iterator_1 = require("@aws/dynamodb-query-iterator");
//import {between} from '@aws/dynamodb-expressions';
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
            res.status(HttpStatus.OK).json(response);
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
            res.status(HttpStatus.OK).json(myItem);
        })
            .catch(err => {
            // the item was not found
            //console.log(err);            
            res.status(HttpStatus.NOT_FOUND).send({ error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
                message: err.message });
        });
    }
    async getUserByEmail(req, res) {
        var e_1, _a;
        console.log('TableController.getUserByEmail');
        let input = {
            TableName: 'wx_user',
            IndexName: 'email-index',
            KeyConditionExpression: 'email = :val',
            ExpressionAttributeValues: { ':val': { S: req.query.email } },
            ReturnConsumedCapacity: 'NONE'
        };
        let paginator = new dynamodb_query_iterator_1.QueryPaginator(client, input, 1);
        try {
            for (var paginator_1 = __asyncValues(paginator), paginator_1_1; paginator_1_1 = await paginator_1.next(), !paginator_1_1.done;) {
                const page = paginator_1_1.value;
                console.log(page);
                res.status(HttpStatus.OK).json(page);
                break;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (paginator_1_1 && !paginator_1_1.done && (_a = paginator_1.return)) await _a.call(paginator_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSx5Q0FBc0M7QUFDdEMsb0VBQXVEO0FBQ3ZELDBFQUE4RDtBQUM5RCxvREFBb0Q7QUFFcEQscURBQXNEO0FBQ3RELGdEQUErQztBQUUvQyxNQUFNLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBQyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sTUFBTSxHQUFHLElBQUksaUNBQVUsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7QUFFeEM7SUFFSTtJQUVBLENBQUM7SUFFTSxJQUFJLENBQUUsR0FBWSxFQUFFLEdBQWE7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25DLElBQUksT0FBTyxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDekIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpDLENBQUM7SUFFTSxVQUFVLENBQUUsR0FBWSxFQUFFLEdBQWE7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3pDLElBQUksT0FBTyxHQUFRLElBQUksV0FBSSxFQUFFLENBQUM7UUFDOUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyRCxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lB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