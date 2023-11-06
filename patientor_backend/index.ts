import express from "express";

const app = express();

app.use(express.json());

const PORT = 3001;

app.get('/api/ping', async (req, res) => {
    console.log("this is a ping-pong testing")
    res.send('pong');
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});