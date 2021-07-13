require('dotenv').config({ path: './.env' });
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/router.js');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DB_URL = `mongodb+srv://maks:1q2w3e4r@cluster0.kltx5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use(express.static('images'));
app.use(fileUpload({}));
app.use(cors());
app.use('/', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    app.listen(PORT, () => {
      console.log('Server has been started');
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
