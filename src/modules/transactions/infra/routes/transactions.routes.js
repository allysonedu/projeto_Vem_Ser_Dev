const { Router } = require('express');

const TransactionsController = require('../controller/TransactionsController');

const transactionsRoutes = Router();

const transactionsController = new TransactionsController();

transactionsRoutes.post('/', transactionsController.createtransactions);

transactionsRoutes.get('/', transactionsController.getAlltransactions);

transactionsRoutes.put('/', transactionsController.updatetransactions);

transactionsRoutes.delete('/', transactionsController.deletetransactions);

module.exports = transactionsRoutes;
