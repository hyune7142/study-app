const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');
const swaggerUiRouter = require('./routers/swagger');
const contactsRouter = require('./routers/contacts');

const PORT = Number(process.env.PORT) || 8080;

const app = express();
const server = http.createServer(app);
const router = express.Router();

app.disable('x-powered-by');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use('/api', router);

router.use('/docs', swaggerUiRouter());
router.use('/contacts', contactsRouter());

server.listen(PORT, '0.0.0.0');