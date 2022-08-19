const { Router } = require('express');

const DoacaoController = require('../controller/DoacaoController');

const doacaoRoutes = Router();

const doacaoController = new DoacaoController();

doacaoRoutes.get('/', doacaoController.getAlldoacao);

doacaoRoutes.post('/', doacaoController.createdoacao);

doacaoRoutes.put('/', doacaoController.updatedoacao);

doacaoRoutes.delete('/', doacaoController.deletedoacao);

module.exports = doacaoRoutes;
