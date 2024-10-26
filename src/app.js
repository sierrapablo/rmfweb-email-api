const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const web_hostname = process.env.WEB_HOSTNAME;

app.use(cors({
    origin: web_hostname,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
