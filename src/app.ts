import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { eventContext } from 'aws-serverless-express/middleware';
import { Routes } from './routes/app.routes';

class App {
  public app: express.Application;
  public route: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.route.routes(this.app);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(eventContext());
  }
}

export default new App().app;
