import express from 'express';
import webBmiRouter from './controllers/webBmi';
import exerciseCalculatorRouter from './controllers/webExerciseCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack Open');
});

app.use(express.json()); // Add this line for JSON body parsing
app.use(webBmiRouter);
app.use(exerciseCalculatorRouter)


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});