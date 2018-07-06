"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    routes(app) {
        app.route('/').get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!',
            });
        });
        // Contact
        app
            .route('/contact')
            // GET endpoint
            .get((req, res) => {
            // Get all contacts
            res.status(200).send({
                message: '/contactGET request successfulll!!!!',
            });
        })
            // POST endpoint
            .post((req, res) => {
            // Create new contact
            res.status(200).send({
                message: 'POST request successfulll!!!!',
            });
        });
        // Contact detail
        app
            .route('/contact/:contactId')
            // get specific contact
            .get((req, res) => {
            // Get a single contact detail
            res.status(200).send({
                message: 'contact/:contactId GET request successfulll!!!!',
            });
        })
            .put((req, res) => {
            // Update a contact
            res.status(200).send({
                message: 'PUT request successfulll!!!!',
            });
        })
            .delete((req, res) => {
            // Delete a contact
            res.status(200).send({
                message: 'DELETE request successfulll!!!!',
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXBwLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBO0lBRVMsTUFBTSxDQUFDLEdBQXdCO1FBQ3BDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO1lBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsOEJBQThCO2FBQ3hDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVTtRQUNWLEdBQUc7YUFDQSxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ2xCLGVBQWU7YUFDZCxHQUFHLENBQUMsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7WUFDbkMsbUJBQW1CO1lBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsc0NBQXNDO2FBQ2hELENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztZQUVGLGdCQUFnQjthQUNmLElBQUksQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUNwQyxxQkFBcUI7WUFDckIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLE9BQU8sRUFBRSwrQkFBK0I7YUFDekMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxpQkFBaUI7UUFDakIsR0FBRzthQUNBLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztZQUM3Qix1QkFBdUI7YUFDdEIsR0FBRyxDQUFDLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO1lBQ25DLDhCQUE4QjtZQUM5QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbkIsT0FBTyxFQUFFLGlEQUFpRDthQUMzRCxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7WUFDbkMsbUJBQW1CO1lBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsOEJBQThCO2FBQ3hDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQzthQUNELE1BQU0sQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUN0QyxtQkFBbUI7WUFDbkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLE9BQU8sRUFBRSxpQ0FBaUM7YUFDM0MsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0Y7QUFqREQsd0JBaURDIn0=