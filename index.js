const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

mongoose.connect('mongodb+srv://faiz:faiz@cluster0.enqka2g.mongodb.net/your-database-name')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const middlewareLogger = (req, res, next) => {
  console.log('Middleware console');
  next();
};

app.use(middlewareLogger);

// Routes
app.get('/', (req, res) => {
  res.send({
    status: '200',
    name: 'Faiz',
  });
});
const userRoute = require('./Routes/UserRoute');
app.use('/Atendence', userRoute);

const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});