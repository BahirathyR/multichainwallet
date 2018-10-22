const login = require('./routes/loginusers');
const manufacture = require('./routes/manufactures');
const models = require('./routes/vehiclemodels');
const previous_insurance_company = require('./routes/previous-insurance-company')
// const variants = require('./routes/vehiclevariants');
const royalsundaram = require('./routes/royalsundaram');
const bhartiaxia = require('./routes/bhartiaxia');
const digitgo = require('./routes/digitgo');
const reliance = require('./routes/reliance');
const occupation = require('./routes/occupation')
const master = require('./routes/master')
const manufacture_dropdown = require('./routes/manufacture-dropdown')
const mongomodel = require('./routes/master')
const mongovariant = require('./routes/master')
const mongomastervalues = require('./routes/master')
const insert = require('./routes/master')
const update = require('./routes/master')
const statecode = require('./routes/statecode')
const query = require('./routes/query');
const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.use(express.json());
app.use('/api/statecode',statecode)
app.use('/api/login', login);
app.use('/api/make',manufacture);
app.use('/api/makemodels',models);
app.use('/api/royalsundaram',royalsundaram);
app.use('/api/bhartiaxia',bhartiaxia);
app.use('/api/digitgo', digitgo);
app.use('/api/reliance',reliance);
app.use('/api/previous_insurance_company',previous_insurance_company)
app.use('/api/occupation',occupation);
app.use('/api/query',query)
app.use('/api/master',master);
app.use('/api/manufacture_dropdown',manufacture_dropdown)
app.use('/api/mongomodel',mongomodel)
app.use('/api/mongovariant',mongovariant)
app.use('/api/mongomastervalues',mongomastervalues)
app.use('/api/insert',insert)
app.use('/api/update',update)



//mongoose.connect('mongodb://localhost:27017/node-demo',{ useNewUrlParser: true })
mongoose.connect('mongodb://kavitharajasekaran:Pavankumar2007@ds125881.mlab.com:25881/readypolicy',{ useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));
mongoose.set('useCreateIndex', true);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));