"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
class Routes {
    constructor() {
        this.userController = new user_controller_1.UserController();
    }
    routes(app) {
        app.route('/').get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!',
            });
        });
        // Contact 
        app.route('/user')
            .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                res.status(401).send('You shall not pass!');
            }
            else {
                next();
            }
        }, this.userController.getUsers)
            // POST endpoint
            .post(this.userController.addNewUser);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXBwLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLG9FQUFnRTtBQUVoRTtJQUFBO1FBQ1MsbUJBQWMsR0FBbUIsSUFBSSxnQ0FBYyxFQUFFLENBQUM7SUE0Qi9ELENBQUM7SUF6QlEsTUFBTSxDQUFDLEdBQXdCO1FBQ3BDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO1lBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsOEJBQThCO2FBQ3hDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsV0FBVztRQUNYLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ2pCLEdBQUcsQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1lBQ3JELGFBQWE7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUMzQyxJQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLDBDQUEwQyxFQUFDO2dCQUM1RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQy9DO2lCQUFNO2dCQUNILElBQUksRUFBRSxDQUFDO2FBQ1Y7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7WUFFaEMsZ0JBQWdCO2FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFHeEMsQ0FBQztDQUNGO0FBN0JELHdCQTZCQyJ9