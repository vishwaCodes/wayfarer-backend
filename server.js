const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


const PORT = process.env.PORT || 4000;

const citiRoutes = require('./routes/cities');
const postRoutes = require('./routes/posts');
// const userRoutes = require('./routes/users');

// Middleware
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Test');
});

app.use('/api/cities', citiRoutes);
app.use('/api/posts', postRoutes);
// app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
