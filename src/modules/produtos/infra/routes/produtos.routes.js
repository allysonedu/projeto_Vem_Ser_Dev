const { Router } = require('express');

const ProdutosController = require('../controller/ProdutosController');

const produtosRoutes = Router();

const produtosController = new ProdutosController();

produtosRoutes.get('/', produtosController.getAllalimentos);

produtosRoutes.post('/', produtosController.createalimentos);

produtosRoutes.put('/', produtosController.updatealimentos);

produtosRoutes.delete('/', produtosController.deletealimentos);

module.exports = produtosRoutes;
