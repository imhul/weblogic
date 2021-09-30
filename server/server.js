const mongoose = require('mongoose');
const fastify = require('fastify')();
const routes = require('./routes');
const path = require('path');
const util = require('util');
const {
  parsed: { MONGO_ATLAS_PW, MONGO_ATLAS_LG }
} = require('dotenv').config();

const DistPath = path.join(__dirname, '..', 'dist');

fastify.register(require('fastify-static'), {
  root: DistPath
});

const collect = mongoose
  .connect(
    `mongodb+srv://${MONGO_ATLAS_LG}:${MONGO_ATLAS_PW}@logic-ghe8g.mongodb.net/test?retryWrites=true&w=majority`,
    { useFindAndModify: false, useNewUrlParser: true }
  )
  .then(res => {
    console.log('MongoDB connected with res: ');
    return res;
  })
  .catch(error => console.log('MongoDB could not be connected due to ', error));

fastify.get('/', async (request, reply) => {
  try {
    // reply.sendFile('index.html')
    return util.inspect({
      message: collect
    });
  } catch (error) {
    console.log('fastify.get error', error);
  }
});

routes.forEach(route => fastify.route(route));

fastify.listen(process.env.PORT || 3000, '0.0.0.0', err => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`fastify server running at ${fastify.server.address().port}`);
});
