const { Router } = require('express');

const produtosRoutes = require('../../../modules/produtos/infra/routes/produtos.routes');

const doacaoRoutes = require('../../../modules/doaçoes/infra/routes/doacao.routes');

const pcarentesRoutes = require('../../../modules/pcarentes/infra/routes/pcarentes.routes');

const transactionsRoutes = require('../../../modules/transactions/infra/routes/transactions.routes');

const routes = Router();

routes.use('/produtos', produtosRoutes);

routes.use('/doaçoes', doacaoRoutes);

routes.use('/pcarentes', pcarentesRoutes);

routes.use('/transactions', transactionsRoutes);

module.exports = routes;
