import * as Express from 'express';
import sampleController from './controllers/sampleController';

const app = Express();

app.get('/', sampleController);

app.listen(process.env.PORT || 3000, ()=>{
  console.log('express app is started.');
});
