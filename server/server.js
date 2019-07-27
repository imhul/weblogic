const mongoose = require('mongoose');
const fastify = require('fastify')();
const routes = require('./routes');
const path = require('path')
const {parsed : {MONGO_ATLAS_PW}} = require('dotenv').config();
const {parsed : {MONGO_ATLAS_LG}} = require('dotenv').config();

const DistPath = path.join(__dirname, '..', 'dist')

fastify.register(require('fastify-static'), {
  root: DistPath,
})

mongoose.connect(
  `mongodb+srv://${MONGO_ATLAS_LG}:${MONGO_ATLAS_PW}@logic-ghe8g.mongodb.net/test?retryWrites=true&w=majority`, 
  { useFindAndModify: false, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(e => console.log('MongoDB could not be connected due to ', e));

fastify.get('/', async (request, reply) => {
  try {
    reply.sendFile('index.html')
  }
  catch (e) { console.log(e) }
});

routes.forEach(route => fastify.route(route))

fastify.listen(process.env.PORT || 3000, '0.0.0.0', (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server running at ${fastify.server.address().port}`)
})