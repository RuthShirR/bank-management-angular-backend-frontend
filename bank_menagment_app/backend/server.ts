import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import ErrorHandler from './MiddleWare/route-not-found';
import { myBanner } from './Utils/banner';
import router from './Routes/OperationRoutes';
import connect from './Utils/dal_mongodb';
import config from './Utils/Config';


const server = express();

// Middleware setup
server.use(cors());
server.use(bodyParser.json());
server.use(fileUpload({ createParentPath: true }));
server.use(express.static('upload'));
server.use('/api/v1/bank', router);
server.use(ErrorHandler);

console.log(myBanner);

// Connecting to MongoDB and starting the server
connect()
  .then(() => {
   server.listen(config.webPort, () => {
     console.log(`Listening on http://localhost:${config.webPort}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

