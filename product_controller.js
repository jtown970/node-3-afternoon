module.exports = {
  create: (req, res) => {
    // bring in whats needed for the function
    const {name, description, price, image_url} = req.body;

    // get the db
    const db = req.app.get('db');

    //run sql query
    db.create_product([name, description, price, image_url])
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
  },

  getOne: (req, res) => {
    const {id} = req.params;
    const db = req.app.get('db');

    db.create_product(id)
    .then( product => res.status(200).send(product))
    .create_product(err => res.status(500).send(err))
  },

  getAll: (req, res) => {
    const db = req.app.get('db');

    db.read_products()
    .then(products => res.status(200).send(products))
    .catch(err => res.status(500).send(err));
  },

  update: (req, res) => {
    const {params, query} = req;
    const db = req.app.get('db');

    db.update_product([params.id, query.desc])
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
  },

  delete: (req, res) => {
    const {id} = req.params;
    const db = req.app.get('db');

    db.delete_product(id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500),send(err))
  }
}