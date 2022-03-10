const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/noSQL-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// log mongo queries
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));