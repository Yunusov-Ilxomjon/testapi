import express from 'express';
import bodyParser from 'body-parser';
import ServerlessHttp from 'serverless-http';
const app = express();
const port = 5000;
const data = [
    { name: 'User1', surname: 'John' },
    { name: 'User2', surname: 'Alisa' }
]

app.use(bodyParser.json());
app.get('/getAllUsers', (req, res) => {
    res.json(data);
})

app.post('/addNewUser', (req, res) => {
    data.push(req.body);
    res.send('User added successfully');
});

export const handler = ServerlessHttp(app);
