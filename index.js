const hospitaldata = require('./routes/hospital');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const query = require('./routes/query');
const userreport = require('./routes/userreport')
const userreports = require('./routes/userreport')




app.use(express.json());
app.use('/api/hospitaldata', hospitaldata);
app.use('/api/userreport',userreport)
app.use('/api/userreports',userreports)
//app.use('/api/query',query);






//mongoose.connect('mongodb://localhost:27017/node-demo',{ useNewUrlParser: true })
mongoose.connect('mongodb://kavitharajasekaran:Pavankumar2007@ds125881.mlab.com:25881/readypolicy',{ useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));
mongoose.set('useCreateIndex', true);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));