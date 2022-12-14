const { Router } = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yaml');
const path = require('path');
const fs = require('fs');

const swaggerDocument = YAML.parse(fs.readFileSync(path.resolve(__dirname, '..', 'swagger.yaml')).toString('utf8'));

const router = Router();

const swaggerUiRouter = () => {
  router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));
  return router;
};

module.exports = swaggerUiRouter;