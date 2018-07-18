import { Request, Response, NextFunction } from 'express';
import * as express from 'express';

import { UserController } from '../controllers/user.controller';

export class Routes {
  public userController: UserController = new UserController();

  public routes(app: express.Application): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successfulll!!!!',
      });
    });

    // Contact
    app
      .route('/user')
      .get((req: Request, res: Response, next: NextFunction) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
          res.status(401).send('You shall not pass!');
        } else {
          next();
        }
      }, this.userController.getUserById)

      // POST endpoint
      .post(this.userController.addNewUser)
      .put(this.userController.updateUser);

    app
      .route('/user/:userId')
      // get specific contact
      .get(this.userController.getUserById);

    app.route('/test').get(this.userController.test);
  }
}
