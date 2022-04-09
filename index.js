import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/user.js';
import apiPdf from './api.js';
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send(apiPdf);
});

app.listen(PORT, () => console.log(`server i running on port ${PORT}`));
