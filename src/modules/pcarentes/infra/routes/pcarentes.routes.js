const { Router } = require('express');

const PcarentesController = require('../controller/PcarentesController');

const pcarentesRoutes = Router();

const pcarentesController = new PcarentesController();

pcarentesRoutes.get('/', pcarentesController.getAllpcarentes);

pcarentesRoutes.post('/', pcarentesController.createpcarentes);

pcarentesRoutes.put('/', pcarentesController.updatepcarentes);

pcarentesRoutes.delete('/', pcarentesController.deletepcarentes);

module.exports = pcarentesRoutes;
