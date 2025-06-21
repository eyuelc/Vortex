import express from 'express';
import cors from 'cors';
import notFound from './middleware/notFound.js';
import error from './middleware/error.js';
import logger from './middleware/logger.js';
import router from './router.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use(logger);

app.use('/api/', router);



app.use(notFound);
app.use(error);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});