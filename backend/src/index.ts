import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import deezerRouter from './routes/deezer.routes';

const app = express();
const port = process.env.PORT || 1337;
app.use(cors());

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.json());

app.get('/health', (req, res) => {
    res.sendStatus(200);
});

app.use('/deezer',deezerRouter)

app.listen(port, () => {
    console.info(`Deezer Demo Service Started on ${port}`);
});
