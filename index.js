require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      ctrl = require('./product_controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      port = SERVER_PORT,
      app = express();

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db);
  console.log('db connected')
})
.catch(err => console.log(err))

app.get(`/api/product`, ctrl.getAll);
app.get(`/api/product`, ctrl.getOne);
app.put(`/api/product/:id`, ctrl.update);
app.post(`/api/products`, ctrl.create);
app.delete(`/api/products/:id`, ctrl.delete)

app.listen(port, () => console.log(`server is running on port ${port}`));