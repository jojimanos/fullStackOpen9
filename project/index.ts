import express from 'express';
import webBmiRouter from './controllers/webBmi';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack Open');
});

app.use(webBmiRouter)

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});