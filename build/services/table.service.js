"use strict";
//import * as AWS  from 'aws-sdk';
Object.defineProperty(exports, "__esModule", { value: true });
class TableService {
    //private dynamodb = new AWS.DynamoDB();
    constructor() { }
    initTables() {
        // let params = {
        //     TableName : "Movies",
        //     KeySchema: [
        //         { AttributeName: "year", KeyType: "HASH"},  //Partition key
        //         { AttributeName: "title", KeyType: "RANGE" }  //Sort key
        //     ],
        //     AttributeDefinitions: [
        //         { AttributeName: "year", AttributeType: "N" },
        //         { AttributeName: "title", AttributeType: "S" }
        //     ],
        //     ProvisionedThroughput: {
        //         ReadCapacityUnits: 10,
        //         WriteCapacityUnits: 10
        //     }
        // };
        debugger;
        console.log('initTables()');
        // this.dynamodb.createTable(params, function(err, data) {
        //     if (err) {
        //         console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
        //     } else {
        //         console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
        //     }
        // });
    }
}
exports.TableService = TableService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy90YWJsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxrQ0FBa0M7O0FBRWxDO0lBQ0Usd0NBQXdDO0lBRXhDLGdCQUFlLENBQUM7SUFFVCxVQUFVO1FBQ2YsaUJBQWlCO1FBQ2pCLDRCQUE0QjtRQUM1QixtQkFBbUI7UUFDbkIsc0VBQXNFO1FBQ3RFLG1FQUFtRTtRQUNuRSxTQUFTO1FBQ1QsOEJBQThCO1FBQzlCLHlEQUF5RDtRQUN6RCx5REFBeUQ7UUFDekQsU0FBUztRQUNULCtCQUErQjtRQUMvQixpQ0FBaUM7UUFDakMsaUNBQWlDO1FBQ2pDLFFBQVE7UUFDUixLQUFLO1FBQ0wsUUFBUSxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QiwwREFBMEQ7UUFDMUQsaUJBQWlCO1FBQ2pCLDhGQUE4RjtRQUM5RixlQUFlO1FBQ2YsZ0dBQWdHO1FBQ2hHLFFBQVE7UUFDUixNQUFNO0lBQ1IsQ0FBQztDQUNGO0FBL0JELG9DQStCQyJ9